import { useState } from "react";

interface CodeBlockProps {
  filename?: string;
  lang?: string;
  children: React.ReactNode;
}

const getTextContent = (node: React.ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getTextContent).join("");
  if (node && typeof node === "object" && "props" in (node as object))
    return getTextContent((node as { props: { children: React.ReactNode } }).props.children);
  return "";
};

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CopyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
    <path d="M8 4V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export default function CodeBlock({ filename, lang, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [hoverCopy, setHoverCopy] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getTextContent(children).trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayLabel = filename ?? lang;

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
        justifyContent: "space-between",
        padding: "0 1rem",
        height: "38px",
        background: "#EEEDEA",
        borderBottom: "1px solid #E0DED8",
      }}>
        <span style={{
          fontFamily: "ui-monospace, 'SF Mono', 'Cascadia Code', monospace",
          fontSize: "0.6875rem",
          color: displayLabel ? "#777" : "transparent",
          letterSpacing: "0.02em",
          userSelect: "none" as const,
        }}>
          {displayLabel ?? "_"}
        </span>

        <button
          onClick={handleCopy}
          onMouseEnter={() => setHoverCopy(true)}
          onMouseLeave={() => setHoverCopy(false)}
          title="Copy code"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            padding: "0.25rem 0.5rem",
            borderRadius: "4px",
            background: hoverCopy ? "#E0DED8" : "transparent",
            border: "1px solid",
            borderColor: hoverCopy ? "#D4D2CC" : "transparent",
            color: copied ? "#10b981" : "#999",
            cursor: "pointer",
            transition: "all 0.15s",
            fontFamily: "ui-monospace, 'SF Mono', monospace",
            fontSize: "0.625rem",
            letterSpacing: "0.06em",
          }}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          <span>{copied ? "copied" : "copy"}</span>
        </button>
      </div>

      <div style={{
        overflowX: "auto",
        padding: "1.125rem 1.25rem",
        fontSize: "0.8125rem",
        lineHeight: "1.7",
        fontFamily: "ui-monospace, 'SF Mono', 'Cascadia Code', monospace",
        background: "#F5F4F0",
      }}>
        {children}
      </div>
    </div>
  );
}
