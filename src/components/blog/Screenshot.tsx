import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScreenshotProps {
  src: string;
  alt?: string;
  caption?: string;
  url?: string;
}

const TrafficLights = () => (
  <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57", border: "1px solid rgba(0,0,0,0.12)" }} />
    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FFBD2E", border: "1px solid rgba(0,0,0,0.12)" }} />
    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28C840", border: "1px solid rgba(0,0,0,0.12)" }} />
  </div>
);

export default function Screenshot({ src, alt = "", caption, url }: ScreenshotProps) {
  const [open, setOpen] = useState(false);

  const displayUrl = url ?? (caption ? caption : src.split("/").pop() ?? "screenshot");

  return (
    <>
      <figure style={{ margin: "2rem 0" }}>
        {/* Browser chrome */}
        <div style={{
          borderRadius: "10px",
          border: "1px solid #E0DED8",
          overflow: "hidden",
          boxShadow: "0 2px 6px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.07)",
          background: "#F5F4F0",
        }}>
          {/* Title bar */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "44px 1fr 44px",
            alignItems: "center",
            padding: "0 1rem",
            height: "40px",
            borderBottom: "1px solid #E0DED8",
          }}>
            <TrafficLights />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{
                padding: "0.2rem 1rem",
                background: "#fff",
                borderRadius: "4px",
                border: "1px solid #D8D6CF",
                width: "100%",
                maxWidth: "240px",
                textAlign: "center",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.04)",
              }}>
                <span style={{
                  fontFamily: "ui-monospace, 'SF Mono', monospace",
                  fontSize: "0.5625rem",
                  letterSpacing: "0.03em",
                  color: "#999",
                  userSelect: "none" as const,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  display: "block",
                }}>
                  {displayUrl}
                </span>
              </div>
            </div>
            <div />
          </div>

          {/* Image */}
          <button
            onClick={() => setOpen(true)}
            style={{
              display: "block",
              width: "100%",
              padding: 0,
              border: "none",
              background: "none",
              cursor: "zoom-in",
            }}
          >
            <img
              src={src}
              alt={alt || caption || ""}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.92")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            />
          </button>
        </div>

        {caption && (
          <figcaption style={{
            marginTop: "0.75rem",
            textAlign: "center",
            fontFamily: "ui-monospace, 'SF Mono', monospace",
            fontSize: "0.625rem",
            letterSpacing: "0.05em",
            color: "#aaa",
            textTransform: "uppercase" as const,
          }}>
            {caption}
          </figcaption>
        )}
      </figure>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.75)",
              cursor: "zoom-out",
              padding: "2rem",
              backdropFilter: "blur(4px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={e => e.stopPropagation()}
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                maxWidth: "90vw",
                maxHeight: "90vh",
                boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={src}
                alt={alt || caption || ""}
                style={{ display: "block", maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
