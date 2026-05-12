interface DemoProps {
  children: React.ReactNode;
  label?: string;
  url?: string;
}

const TrafficLights = () => (
  <div style={{ display: "flex", gap: "6px", alignItems: "center", flexShrink: 0 }}>
    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57", border: "1px solid rgba(0,0,0,0.12)" }} />
    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FFBD2E", border: "1px solid rgba(0,0,0,0.12)" }} />
    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28C840", border: "1px solid rgba(0,0,0,0.12)" }} />
  </div>
);

export default function Demo({ children, label = "Interactive demo", url }: DemoProps) {
  return (
    <div style={{
      margin: "2rem 0",
      borderRadius: "10px",
      border: "1px solid #E0DED8",
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 1px 2px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)",
    }}>
      {/* macOS window chrome */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "44px 1fr 44px",
        alignItems: "center",
        padding: "0 1rem",
        height: "42px",
        background: "#EEEDEA",
        borderBottom: "1px solid #E0DED8",
      }}>
        <TrafficLights />

        {/* Address bar — centered in its own column */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{
            padding: "0.25rem 1rem",
            background: "#fff",
            borderRadius: "5px",
            border: "1px solid #D8D6CF",
            width: "100%",
            maxWidth: "260px",
            textAlign: "center",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.04)",
          }}>
            <span style={{
              fontFamily: "ui-monospace, 'SF Mono', monospace",
              fontSize: "0.5875rem",
              letterSpacing: "0.03em",
              color: "#888",
              userSelect: "none" as const,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              display: "block",
            }}>
              {url ?? label}
            </span>
          </div>
        </div>

        <div />
      </div>

      {/* Content */}
      <div style={{
        padding: "2.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "180px",
        background: "#FAFAF7",
        backgroundImage: "radial-gradient(circle, #E0DED8 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}>
        {children}
      </div>
    </div>
  );
}
