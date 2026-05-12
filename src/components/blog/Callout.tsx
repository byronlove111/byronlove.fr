interface CalloutProps {
  type?: "info" | "warning" | "tip" | "error";
  title?: string;
  children: React.ReactNode;
}

const configs = {
  info: {
    accent: "#3b82f6",
    bg: "rgba(59,130,246,0.05)",
    label: "Note",
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <circle cx="7.5" cy="7.5" r="6.5" stroke="#3b82f6" strokeWidth="1.2" />
        <path d="M7.5 5v.5M7.5 7v3.5" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  warning: {
    accent: "#f59e0b",
    bg: "rgba(245,158,11,0.05)",
    label: "Warning",
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M7.5 2L13.5 12.5H1.5L7.5 2Z" stroke="#f59e0b" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M7.5 6v3M7.5 10.5v.5" stroke="#f59e0b" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  tip: {
    accent: "#10b981",
    bg: "rgba(16,185,129,0.05)",
    label: "Tip",
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <circle cx="7.5" cy="7.5" r="6.5" stroke="#10b981" strokeWidth="1.2" />
        <path d="M5 7.5l2 2 3-3" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  error: {
    accent: "#ef4444",
    bg: "rgba(239,68,68,0.05)",
    label: "Error",
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <circle cx="7.5" cy="7.5" r="6.5" stroke="#ef4444" strokeWidth="1.2" />
        <path d="M5 5l5 5M10 5l-5 5" stroke="#ef4444" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
};

export default function Callout({ type = "info", title, children }: CalloutProps) {
  const c = configs[type];

  return (
    <div style={{
      margin: "1.75rem 0",
      padding: "1rem 1.25rem",
      borderLeft: `3px solid ${c.accent}`,
      background: c.bg,
      borderRadius: "0 6px 6px 0",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        marginBottom: children ? "0.5rem" : 0,
      }}>
        <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          {c.icon}
        </span>
        <span style={{
          fontFamily: "ui-monospace, 'SF Mono', monospace",
          fontSize: "0.6875rem",
          letterSpacing: "0.07em",
          textTransform: "uppercase" as const,
          color: c.accent,
          fontWeight: 500,
        }}>
          {title ?? c.label}
        </span>
      </div>
      <div style={{
        fontFamily: "'Lora', Georgia, serif",
        fontSize: "0.9375rem",
        lineHeight: "1.7",
        color: "#333",
        paddingLeft: "1.5rem",
      }}>
        {children}
      </div>
    </div>
  );
}
