import { useState } from "react";

const SERIF = "'Lora', Georgia, serif";
const MONO = "ui-monospace, 'SF Mono', 'Cascadia Code', monospace";

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

const EDGE = "#E0DED8";
const META = "#777";
const LABEL = {
  fontFamily: MONO,
  fontSize: "0.6875rem",
  letterSpacing: "0.02em",
  color: META,
  userSelect: "none" as const,
  marginBottom: "0.5rem",
  display: "block" as const,
};

export default function TypographyExplorer() {
  const [font, setFont] = useState(0);
  const [size, setSize] = useState(2);

  const btnBase: React.CSSProperties = {
    padding: "0.35rem 0.65rem",
    borderRadius: "5px",
    border: `1px solid ${EDGE}`,
    cursor: "pointer",
    fontFamily: MONO,
    fontSize: "0.625rem",
    letterSpacing: "0.02em",
    transition: "background 0.12s ease, border-color 0.12s ease, color 0.12s ease",
  };

  const btnIdle: React.CSSProperties = {
    ...btnBase,
    background: "#fff",
    borderColor: EDGE,
    color: META,
  };

  const btnActive: React.CSSProperties = {
    ...btnBase,
    background: "#F5F5F5",
    borderColor: EDGE,
    color: "#444",
  };

  return (
    <div style={{ width: "100%", boxSizing: "border-box" as const }}>
      <div style={{ marginBottom: "1.125rem" }}>
        <span style={LABEL}>Font family</span>
        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" as const }}>
          {FONTS.map((f, i) => (
            <button
              key={f.label}
              type="button"
              onClick={() => setFont(i)}
              style={font === i ? btnActive : btnIdle}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "1.125rem" }}>
        <span style={LABEL}>Font size</span>
        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" as const }}>
          {SIZES.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setSize(i)}
              style={size === i ? btnActive : btnIdle}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          padding: "1.125rem 1.25rem",
          background: "#fff",
          border: `1px solid ${EDGE}`,
          borderRadius: "8px",
          minHeight: "5.25rem",
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box" as const,
        }}
      >
        <p
          style={{
            margin: 0,
            width: "100%",
            fontFamily: FONTS[font].value,
            fontSize: `${SIZES[size].px}px`,
            color: "#1a1a1a",
            lineHeight: 1.55,
            transition: "font-size 0.2s ease, font-family 0.2s ease",
            wordBreak: "break-word" as const,
          }}
        >
          {FONTS[font].specimen}
        </p>
      </div>

      <div
        style={{
          marginTop: "0.75rem",
          paddingTop: "0.75rem",
          borderTop: `1px solid ${EDGE}`,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <span style={{ fontFamily: MONO, fontSize: "0.6875rem", color: META, letterSpacing: "0.02em" }}>
          {FONTS[font].value.split(",")[0].replace(/'/g, "")} · {SIZES[size].px}px
        </span>
      </div>
    </div>
  );
}
