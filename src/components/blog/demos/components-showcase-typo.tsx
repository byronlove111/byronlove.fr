import { useState } from "react";

const SERIF = "'Lora', Georgia, serif";
const MONO = "ui-monospace, 'SF Mono', monospace";

const FONTS = [
  { label: "Lora (serif)", value: SERIF, specimen: "The quick brown fox" },
  { label: "SF Mono", value: MONO, specimen: "const x = 42;" },
  { label: "Georgia", value: "Georgia, serif", specimen: "The quick brown fox" },
  { label: "System UI", value: "system-ui, sans-serif", specimen: "The quick brown fox" },
];

const SIZES = [
  { label: "xs", px: 12 },
  { label: "sm", px: 14 },
  { label: "base", px: 16 },
  { label: "lg", px: 20 },
  { label: "xl", px: 24 },
  { label: "2xl", px: 30 },
];

export default function TypographyExplorer() {
  const [font, setFont] = useState(0);
  const [size, setSize] = useState(2);

  const btnBase: React.CSSProperties = {
    padding: "0.25rem 0.6rem",
    borderRadius: "4px",
    border: "1px solid #E0DED8",
    background: "none",
    cursor: "pointer",
    fontFamily: MONO,
    fontSize: "0.625rem",
    letterSpacing: "0.04em",
    transition: "all 0.12s",
  };

  return (
    <div style={{ width: "100%", fontFamily: MONO }}>
      {/* Font selector */}
      <div style={{ marginBottom: "1rem" }}>
        <div style={{ fontSize: "0.5625rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#aaa", marginBottom: "0.5rem" }}>
          Font family
        </div>
        <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" as const }}>
          {FONTS.map((f, i) => (
            <button
              key={f.label}
              onClick={() => setFont(i)}
              style={{
                ...btnBase,
                background: font === i ? "#1a1a1a" : "none",
                color: font === i ? "#fff" : "#666",
                borderColor: font === i ? "#1a1a1a" : "#E0DED8",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Size selector */}
      <div style={{ marginBottom: "1.25rem" }}>
        <div style={{ fontSize: "0.5625rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#aaa", marginBottom: "0.5rem" }}>
          Font size
        </div>
        <div style={{ display: "flex", gap: "0.375rem" }}>
          {SIZES.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setSize(i)}
              style={{
                ...btnBase,
                background: size === i ? "#1a1a1a" : "none",
                color: size === i ? "#fff" : "#666",
                borderColor: size === i ? "#1a1a1a" : "#E0DED8",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div style={{
        padding: "1.5rem",
        background: "#fff",
        border: "1px solid #E0DED8",
        borderRadius: "6px",
        minHeight: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.15s",
      }}>
        <span style={{
          fontFamily: FONTS[font].value,
          fontSize: `${SIZES[size].px}px`,
          color: "#1a1a1a",
          lineHeight: 1.4,
          transition: "all 0.2s",
          textAlign: "center",
        }}>
          {FONTS[font].specimen}
        </span>
      </div>

      <div style={{ marginTop: "0.5rem", display: "flex", justifyContent: "flex-end" }}>
        <span style={{ fontSize: "0.5625rem", color: "#bbb", letterSpacing: "0.04em" }}>
          {FONTS[font].value.split(",")[0].replace(/'/g, "")} · {SIZES[size].px}px
        </span>
      </div>
    </div>
  );
}
