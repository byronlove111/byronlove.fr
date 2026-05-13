import { defineSound, ensureReady } from "@web-kits/audio";
import { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const toggleOn = defineSound({ layers: [
  { source: { type: "sine" as const, frequency: 880 }, envelope: { attack: 0, decay: 0.02, sustain: 0, release: 0.006 }, gain: 0.08 },
  { source: { type: "sine" as const, frequency: 1320 }, envelope: { attack: 0, decay: 0.02, sustain: 0, release: 0.006 }, delay: 0.03, gain: 0.07 },
]});
const toggleOff = defineSound({ layers: [
  { source: { type: "sine" as const, frequency: 1320 }, envelope: { attack: 0, decay: 0.02, sustain: 0, release: 0.006 }, gain: 0.08 },
  { source: { type: "sine" as const, frequency: 880 }, envelope: { attack: 0, decay: 0.02, sustain: 0, release: 0.006 }, delay: 0.03, gain: 0.07 },
]});

interface ScreenshotProps {
  src: string;
  alt?: string;
  caption?: string;
}

const SERIF = "'Lora', Georgia, serif";

const thumbShellStyle: React.CSSProperties = {
  borderRadius: "8px",
  border: "1px solid #E0DED8",
  overflow: "hidden",
  background: "#fff",
  lineHeight: 0,
};

const captionParagraphStyle: React.CSSProperties = {
  margin: 0,
  maxWidth: "min(42rem, 90vw)",
  textAlign: "center",
  fontFamily: SERIF,
  fontSize: "0.9375rem",
  lineHeight: 1.55,
  color: "#444",
  paddingInline: "0.5rem",
};

const CAPTION_STAGGER_SEC = 0.014;
const CAPTION_LETTER_DURATION_SEC = 0.16;
const captionLetterEase = [0.22, 1, 0.36, 1] as const;

export default function Screenshot({ src, alt = "", caption }: ScreenshotProps) {
  const [open, setOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement>(null);
  const reactId = useId().replace(/:/g, "");
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { ensureReady().then(() => toggleOff()); setOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open && wasOpenRef.current) {
      requestAnimationFrame(() => openerRef.current?.focus({ preventScroll: true }));
    }
    wasOpenRef.current = open;
  }, [open]);

  const reducedMotion = useReducedMotion();

  const lightboxReveal = reducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : { initial: { opacity: 0, scale: 0.91 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.95 } };
  const lightboxRevealTransit = reducedMotion
    ? { opacity: { duration: 0.18, ease: "easeOut" as const } }
    : { opacity: { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const }, scale: { duration: 0.32, ease: [0.16, 1, 0.3, 1] as const } };

  const lightboxImgMaxH = caption ? "min(74vh, 960px)" : "min(86vh, 1000px)";
  const lightboxImgMaxW = "min(96vw, 1440px)";
  const thumbLabel = [alt, caption].filter(Boolean).join(" — ") || "Open enlarged screenshot";

  return (
    <>
      <figure style={{ margin: "2rem 0" }}>
        <button
          ref={openerRef}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label={thumbLabel}
          onClick={async () => { await ensureReady(); toggleOn(); setOpen(true); }}
          style={{ display: "flex", justifyContent: "center", width: "100%", padding: 0, margin: 0, border: "none", background: "transparent", cursor: "pointer" }}
        >
          <div style={{ width: "fit-content", maxWidth: "100%" }}>
            <div style={thumbShellStyle}>
              <img src={src} alt={alt || caption || "Screenshot"} style={{ display: "block", maxWidth: "100%", width: "auto", height: "auto", verticalAlign: "top", pointerEvents: "none" }} />
            </div>
          </div>
        </button>
      </figure>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog" aria-modal="true"
            aria-label={alt || caption || "Enlarged screenshot"}
            aria-describedby={caption ? `caption-${reactId}` : undefined}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0.12 : 0.22, ease: "easeOut" }}
            onClick={async () => { await ensureReady(); toggleOff(); setOpen(false); }}
            style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "center", background: "rgba(245, 245, 245, 0.68)", backdropFilter: "blur(78px) saturate(1.04)", WebkitBackdropFilter: "blur(78px) saturate(1.04)", cursor: "default", paddingTop: "3.25rem", paddingBottom: "2rem", paddingLeft: "max(0.75rem, env(safe-area-inset-left))", paddingRight: "max(0.75rem, env(safe-area-inset-right))" }}
          >
            <motion.button
              type="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }} aria-label="Close"
              onClick={async (e) => { e.stopPropagation(); await ensureReady(); toggleOff(); setOpen(false); }}
              style={{ position: "fixed", top: "max(0.85rem, env(safe-area-inset-top))", right: "max(1rem, env(safe-area-inset-right))", zIndex: 10002, background: "transparent", border: "none", cursor: "pointer", fontFamily: SERIF, fontSize: "0.9375rem", fontStyle: "italic" as const, fontWeight: 400, letterSpacing: "0.01em", color: "#666", padding: "0.5rem 0.25rem" }}
            >
              Exit
            </motion.button>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 0, gap: caption ? "1.25rem" : 0, width: "100%", cursor: "default" }}>
              <motion.div
                initial={lightboxReveal.initial} animate={lightboxReveal.animate} exit={lightboxReveal.exit}
                transition={lightboxRevealTransit}
                style={{ width: "fit-content", maxWidth: lightboxImgMaxW, borderRadius: "6px", overflow: "hidden", boxShadow: "0 28px 80px rgba(0,0,0,0.1)", cursor: "default", transformOrigin: "center center", lineHeight: 0, background: "#fff" }}
              >
                <img src={src} alt="" draggable={false} style={{ display: "block", maxWidth: lightboxImgMaxW, maxHeight: lightboxImgMaxH, width: "auto", height: "auto", verticalAlign: "top" }} />
              </motion.div>
              {caption && (reducedMotion ? (
                <p id={`caption-${reactId}`} style={captionParagraphStyle}>{caption}</p>
              ) : (
                <motion.p id={`caption-${reactId}`} aria-label={caption} initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.12 }} style={captionParagraphStyle}>
                  {Array.from(caption).map((ch, i) => {
                    const glyph = ch === " " ? "\u00A0" : ch;
                    return (
                      <motion.span key={`${reactId}-${i}-${glyph}`} style={{ display: "inline-block" }}
                        initial={{ opacity: 1, x: "-0.05em", filter: "blur(14px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ delay: i * CAPTION_STAGGER_SEC, duration: CAPTION_LETTER_DURATION_SEC, ease: captionLetterEase }}
                      >{glyph}</motion.span>
                    );
                  })}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
