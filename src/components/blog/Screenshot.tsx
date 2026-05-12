import { useEffect, useId, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

interface ScreenshotProps {
  src: string;
  alt?: string;
  caption?: string;
}

const SERIF = "'Lora', Georgia, serif";

const TrafficLights = () => (
  <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57", border: "1px solid rgba(0,0,0,0.12)" }} />
    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FFBD2E", border: "1px solid rgba(0,0,0,0.12)" }} />
    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28C840", border: "1px solid rgba(0,0,0,0.12)" }} />
  </div>
);

const WindowChromeBar = () => (
  <div style={{
    display: "flex",
    alignItems: "center",
    padding: "0 1rem",
    height: "38px",
    borderBottom: "1px solid #E0DED8",
    background: "#EEEDEA",
  }}>
    <TrafficLights />
  </div>
);

const frameShellStyle: React.CSSProperties = {
  borderRadius: "8px",
  border: "1px solid #E0DED8",
  overflow: "hidden",
  background: "#F5F4F0",
};

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
      if (e.key === "Escape") setOpen(false);
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

  /** Lightbox content: fades in while scaling slightly up from viewport center */
  const lightboxReveal = reducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, scale: 0.91 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
      };
  const lightboxRevealTransit = reducedMotion
    ? { opacity: { duration: 0.18, ease: "easeOut" as const } }
    : {
        opacity: { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const },
        scale: { duration: 0.32, ease: [0.16, 1, 0.3, 1] as const },
      };

  /** Lightbox: allow a clearly larger preview than in-article thumbs */
  const lightboxImgMaxH = caption ? "min(74vh, 960px)" : "min(86vh, 1000px)";
  const lightboxImgMaxW = "min(96vw, 1440px)";

  return (
    <>
      <figure style={{ margin: "2rem 0" }}>
        <button
          ref={openerRef}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label={alt || caption || "Open enlarged screenshot"}
          onClick={() => setOpen(true)}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            padding: 0,
            margin: 0,
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <div style={{ width: "fit-content", maxWidth: "100%" }}>
            <div style={frameShellStyle}>
              <WindowChromeBar />
              <div style={{ background: "#fff", lineHeight: 0 }}>
                <img
                  src={src}
                  alt={alt || caption || "Screenshot"}
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    width: "auto",
                    height: "auto",
                    verticalAlign: "top",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </button>

        {caption && (
          <figcaption style={{
            marginTop: "0.75rem",
            textAlign: "center",
            fontFamily: SERIF,
            fontStyle: "italic" as const,
            fontSize: "0.875rem",
            color: "#666",
          }}>
            {caption}
          </figcaption>
        )}
      </figure>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={alt || caption || "Enlarged screenshot"}
            aria-describedby={caption ? `caption-${reactId}` : undefined}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0.12 : 0.22, ease: "easeOut" }}
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              justifyContent: "center",
              background: "rgba(252, 251, 247, 0.88)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              cursor: "default",
              paddingTop: "3.25rem",
              paddingBottom: "2rem",
              paddingLeft: "max(0.75rem, env(safe-area-inset-left))",
              paddingRight: "max(0.75rem, env(safe-area-inset-right))",
            }}
          >
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              aria-label="Close"
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                top: "max(0.85rem, env(safe-area-inset-top))",
                right: "max(1rem, env(safe-area-inset-right))",
                zIndex: 10002,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: SERIF,
                fontSize: "0.9375rem",
                fontStyle: "italic" as const,
                fontWeight: 400,
                letterSpacing: "0.01em",
                color: "#666",
                padding: "0.5rem 0.25rem",
              }}
            >
              Exit
            </motion.button>

            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 0,
                gap: caption ? "1.25rem" : 0,
                width: "100%",
                cursor: "default",
              }}
            >
              <motion.div
                initial={lightboxReveal.initial}
                animate={lightboxReveal.animate}
                exit={lightboxReveal.exit}
                transition={lightboxRevealTransit}
                style={{
                  ...frameShellStyle,
                  width: "fit-content",
                  maxWidth: lightboxImgMaxW,
                  boxShadow: "0 28px 80px rgba(0,0,0,0.1)",
                  cursor: "default",
                  transformOrigin: "center center",
                }}
              >
                <WindowChromeBar />
                <div style={{ background: "#fff", lineHeight: 0 }}>
                  <img
                    src={src}
                    alt=""
                    draggable={false}
                    style={{
                      display: "block",
                      maxWidth: lightboxImgMaxW,
                      maxHeight: lightboxImgMaxH,
                      width: "auto",
                      height: "auto",
                      verticalAlign: "top",
                    }}
                  />
                </div>
              </motion.div>
              {caption && (
                <p
                  id={`caption-${reactId}`}
                  style={{
                    margin: 0,
                    maxWidth: "min(42rem, 90vw)",
                    textAlign: "center",
                    fontFamily: SERIF,
                    fontStyle: "italic" as const,
                    fontSize: "0.9375rem",
                    lineHeight: 1.55,
                    color: "#444",
                  }}
                >
                  {caption}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
