import { useState, useRef, useEffect } from "react";

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

const CopyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
    <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
    <path d="M8 4V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const shift = "0.28rem";

export default function CodeBlock({ filename, lang, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const resetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetRef.current) clearTimeout(resetRef.current);
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getTextContent(children).trim());
    setCopied(true);
    if (resetRef.current) clearTimeout(resetRef.current);
    resetRef.current = setTimeout(() => setCopied(false), 900);
  };

  const displayLabel = filename ?? lang;
  const transition = "opacity 0.2s ease-out, transform 0.2s ease-out";

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
          type="button"
          aria-live="polite"
          aria-label={copied ? "Copied" : "Copy code"}
          onClick={handleCopy}
          title={copied ? "Copied" : "Copy code"}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            padding: "0.3rem 0.35rem",
            borderRadius: "5px",
            background: "none",
            border: "none",
            color: "#999",
            cursor: "pointer",
            fontFamily: "ui-monospace, 'SF Mono', monospace",
            fontSize: "0.625rem",
            letterSpacing: "0.06em",
            transform: copied ? "translateX(-5px)" : "translateX(0)",
            transition: "transform 0.22s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <CopyIcon />
          <span
            style={{
              position: "relative",
              overflow: "hidden",
              display: "inline-block",
              minWidth: "3.25rem",
              lineHeight: 1.45,
              verticalAlign: "middle",
              marginLeft: "-0.3125rem",
            }}
          >
            <span
              aria-hidden
              style={{
                visibility: "hidden",
                display: "block",
                whiteSpace: "nowrap" as const,
                lineHeight: "inherit",
              }}
            >
              copied
            </span>
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                lineHeight: "inherit",
                whiteSpace: "nowrap" as const,
                transition,
                opacity: copied ? 0 : 1,
                transform: copied ? `translateY(-${shift})` : "translateY(0)",
              }}
            >
              copy
            </span>
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                lineHeight: "inherit",
                whiteSpace: "nowrap" as const,
                transition,
                opacity: copied ? 1 : 0,
                transform: copied ? "translateY(0)" : `translateY(${shift})`,
              }}
            >
              copied
            </span>
          </span>
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
