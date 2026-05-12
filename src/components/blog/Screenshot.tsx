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

const MONO = "ui-monospace, 'SF Mono', 'Cascadia Code', monospace";
const SERIF = "'Lora', Georgia, serif";

const TrafficLights = () => (
  <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57", border: "1px solid rgba(0,0,0,0.12)" }} />
    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FFBD2E", border: "1px solid rgba(0,0,0,0.12)" }} />
    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28C840", border: "1px solid rgba(0,0,0,0.12)" }} />
  </div>
);

const layoutSpring = { type: "spring" as const, stiffness: 360, damping: 34 };

export default function Screenshot({ src, alt = "", caption }: ScreenshotProps) {
  const [open, setOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement>(null);
  const reactId = useId().replace(/:/g, "");
  const reducedMotion = useReducedMotion();
  const layoutSyncId = reducedMotion ? undefined : `screenshot-${reactId}`;
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

  const thumbTransitions = reducedMotion
    ? { opacity: { duration: 0.01 }, layout: { duration: 0.2 } as const }
    : {
        opacity: { duration: 0.16, ease: "easeOut" as const },
        layout: layoutSpring,
      };

  return (
    <>
      <figure style={{ margin: "2rem 0" }}>
        <div style={{
          borderRadius: "8px",
          border: "1px solid #E0DED8",
          overflow: "hidden",
          background: "#F5F4F0",
        }}>
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

          <button
            ref={openerRef}
            type="button"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            style={{
              display: "block",
              width: "100%",
              padding: 0,
              margin: 0,
              border: "none",
              background: "#fff",
              cursor: "zoom-in",
              lineHeight: 0,
            }}
          >
            <motion.img
              layoutId={layoutSyncId}
              src={src}
              alt={alt || caption || "Screenshot"}
              animate={{ opacity: open ? 0 : 1 }}
              transition={thumbTransitions}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                verticalAlign: "top",
              }}
            />
          </button>
        </div>

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
            aria-label={alt || caption || "Enlarged image"}
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
              cursor: "zoom-out",
              paddingTop: "3.25rem",
              paddingBottom: "2rem",
              paddingLeft: "max(1.25rem, env(safe-area-inset-left))",
              paddingRight: "max(1.25rem, env(safe-area-inset-right))",
            }}
          >
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              style={{
                position: "fixed",
                top: "max(0.85rem, env(safe-area-inset-top))",
                right: "max(1rem, env(safe-area-inset-right))",
                zIndex: 10002,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: MONO,
                fontSize: "0.6875rem",
                letterSpacing: "0.14em",
                color: "#1a1a1a",
                padding: "0.5rem 0.25rem",
              }}
            >
              EXIT
            </motion.button>

            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 0,
                gap: caption ? "1.25rem" : 0,
                width: "100%",
              }}
            >
              <motion.img
                layoutId={layoutSyncId}
                src={src}
                alt=""
                draggable={false}
                transition={{
                  layout: reducedMotion ? { duration: 0.2 } : layoutSpring,
                }}
                style={{
                  display: "block",
                  maxWidth: "min(92vw, 1040px)",
                  maxHeight: caption ? "min(68vh, 880px)" : "min(78vh, 900px)",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "6px",
                  boxShadow: "0 28px 80px rgba(0,0,0,0.1)",
                  background: "#fff",
                }}
              />
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
