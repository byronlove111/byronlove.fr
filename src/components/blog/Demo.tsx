interface DemoProps {
  children: React.ReactNode;
}

const TrafficLights = () => (
  <div style={{ display: "flex", gap: "6px", alignItems: "center", flexShrink: 0 }}>
    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57", border: "1px solid rgba(0,0,0,0.12)" }} />
    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FFBD2E", border: "1px solid rgba(0,0,0,0.12)" }} />
    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28C840", border: "1px solid rgba(0,0,0,0.12)" }} />
  </div>
);

export default function Demo({ children }: DemoProps) {
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
        display: "flex",
        alignItems: "center",
        padding: "0 1rem",
        height: "42px",
        background: "#EEEDEA",
        borderBottom: "1px solid #E0DED8",
      }}>
        <TrafficLights />
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
