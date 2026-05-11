import { useState } from "react";

interface CodeBlockProps {
  filename?: string;
  lang?: string;
  children: React.ReactNode;
}

export default function CodeBlock({ filename, lang, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const getTextContent = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(getTextContent).join("");
    if (node && typeof node === "object" && "props" in (node as any))
      return getTextContent((node as any).props.children);
    return "";
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getTextContent(children).trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ margin: "1.5rem 0", borderRadius: "4px", border: "1px solid #E0DED8", overflow: "hidden" }}>
      {(filename || lang) && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.4rem 1rem", background: "#EEEDEA", borderBottom: "1px solid #E0DED8" }}>
          <span style={{ fontFamily: "ui-monospace, 'SF Mono', monospace", fontSize: "0.6875rem", color: "#888" }}>
            {filename ?? lang}
          </span>
          <button
            onClick={handleCopy}
            style={{ fontFamily: "ui-monospace, 'SF Mono', monospace", fontSize: "0.625rem", letterSpacing: "0.06em", textTransform: "uppercase" as const, color: copied ? "#3A8A50" : "#aaa", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color 0.15s" }}
          >
            {copied ? "copied" : "copy"}
          </button>
        </div>
      )}
      <div style={{ overflowX: "auto", background: "#EEEDEA", padding: "1rem", fontSize: "0.875rem", fontFamily: "ui-monospace, 'SF Mono', monospace", lineHeight: "1.65" }}>
        {children}
      </div>
    </div>
  );
}
