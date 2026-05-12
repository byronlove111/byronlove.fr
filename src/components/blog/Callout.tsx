interface CalloutProps {
  type?: "info" | "warning" | "tip" | "error";
  children: React.ReactNode;
}

const border = {
  info:    "#9ab8d8",
  warning: "#d4a96a",
  tip:     "#7dc4a0",
  error:   "#d48080",
};

export default function Callout({ type = "info", children }: CalloutProps) {
  return (
    <div style={{
      margin: "1.5rem 0",
      padding: "0.75rem 1rem",
      border: `1px solid ${border[type]}`,
      borderRadius: "6px",
      fontFamily: "'Lora', Georgia, serif",
      fontSize: "0.9375rem",
      lineHeight: "1.7",
      color: "#333",
    }}>
      {children}
    </div>
  );
}
