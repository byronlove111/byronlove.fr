/**
 * Bordered wrapper for embedded interactive demos — same margins as CodeBlock (`DEMO_BLOCKS.md`).
 */
interface DemoProps {
  children: React.ReactNode;
}

export default function Demo({ children }: DemoProps) {
  return (
    <div
      style={{
        margin: "1.75rem 0",
        borderRadius: "8px",
        border: "1px solid #E0DED8",
        overflow: "hidden",
        background: "#ffffff",
        padding: "1.25rem 1.25rem 1.5rem",
        minHeight: "160px",
      }}
    >
      {children}
    </div>
  );
}
