interface DemoProps {
  children: React.ReactNode;
  label?: string;
}

export default function Demo({ children, label = "Interactive demo" }: DemoProps) {
  return (
    <div style={{ margin: "2rem 0", borderRadius: "6px", border: "1px solid #E0DED8", overflow: "hidden", background: "#F7F6F1" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1rem", borderBottom: "1px solid #E0DED8", background: "#EEEDEA" }}>
        <div style={{ display: "flex", gap: "0.375rem" }}>
          {["#D4D2CC", "#D4D2CC", "#D4D2CC"].map((c, i) => (
            <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
          ))}
        </div>
        <span style={{ fontFamily: "ui-monospace, 'SF Mono', monospace", fontSize: "0.625rem", letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#999", marginLeft: "0.25rem" }}>
          {label}
        </span>
      </div>
      <div style={{ padding: "2rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "160px", background: "#FAFAF7" }}>
        {children}
      </div>
    </div>
  );
}
