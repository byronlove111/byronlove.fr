/**
 * Blog “device” frame for interactive demos. Tokens and usage: see DEMO_BLOCKS.md alongside this file.
 */
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
      margin: "1.75rem 0",
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
        background: "#EEEDEA",
        borderBottom: "1px solid #E0DED8",
      }}>
        <TrafficLights />
      </div>

      <div style={{
        padding: "1.25rem 1.25rem 1.5rem",
        minHeight: "160px",
        background: "#F5F4F0",
      }}>
        {children}
      </div>
    </div>
  );
}
