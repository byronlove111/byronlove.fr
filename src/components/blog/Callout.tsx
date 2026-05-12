interface CalloutProps {
  type?: "info" | "warning" | "tip" | "error";
  children: React.ReactNode;
}

const configs = {
  info:    { bg: "rgba(59,130,246,0.07)",  border: "rgba(59,130,246,0.15)"  },
  warning: { bg: "rgba(245,158,11,0.07)",  border: "rgba(245,158,11,0.18)"  },
  tip:     { bg: "rgba(16,185,129,0.07)",  border: "rgba(16,185,129,0.15)"  },
  error:   { bg: "rgba(239,68,68,0.07)",   border: "rgba(239,68,68,0.15)"   },
};

export default function Callout({ type = "info", children }: CalloutProps) {
  const c = configs[type];
  return (
    <div style={{
      margin: "1.5rem 0",
      padding: "0.875rem 1.125rem",
      background: c.bg,
      border: `1px solid ${c.border}`,
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
