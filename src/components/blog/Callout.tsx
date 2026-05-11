interface CalloutProps {
  type?: "info" | "warning" | "tip";
  children: React.ReactNode;
}

const styles = {
  info:    { border: "#C8D8E8", bg: "#EEF4F9", label: "note",    labelColor: "#5B8DB8" },
  warning: { border: "#E8D4A0", bg: "#FBF5E4", label: "warning", labelColor: "#A0832A" },
  tip:     { border: "#B8D8C0", bg: "#EEF7F0", label: "tip",     labelColor: "#3A8A50" },
};

export default function Callout({ type = "info", children }: CalloutProps) {
  const s = styles[type];
  return (
    <div style={{ border: `1px solid ${s.border}`, background: s.bg, borderRadius: "4px", padding: "1rem 1.25rem", margin: "1.5rem 0" }}>
      <span style={{ fontFamily: "ui-monospace, 'SF Mono', monospace", fontSize: "0.625rem", letterSpacing: "0.08em", textTransform: "uppercase" as const, color: s.labelColor, display: "block", marginBottom: "0.375rem" }}>
        {s.label}
      </span>
      <div style={{ fontSize: "0.9375rem", lineHeight: "1.7", color: "#1a1a1a" }}>{children}</div>
    </div>
  );
}
