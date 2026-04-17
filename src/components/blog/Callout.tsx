interface CalloutProps {
  type?: "info" | "warning" | "tip";
  children: React.ReactNode;
}

const styles = {
  info: {
    border: "border-blue-100",
    bg: "bg-blue-50",
    label: "info",
    labelColor: "text-blue-400",
  },
  warning: {
    border: "border-yellow-100",
    bg: "bg-yellow-50",
    label: "warning",
    labelColor: "text-yellow-500",
  },
  tip: {
    border: "border-green-100",
    bg: "bg-green-50",
    label: "tip",
    labelColor: "text-green-500",
  },
};

export default function Callout({ type = "info", children }: CalloutProps) {
  const s = styles[type];
  return (
    <div className={`my-6 rounded-lg border ${s.border} ${s.bg} px-4 py-3`}>
      <span className={`text-xs font-medium uppercase tracking-wider ${s.labelColor} block mb-1`}>
        {s.label}
      </span>
      <div className="text-sm text-black leading-relaxed">{children}</div>
    </div>
  );
}
