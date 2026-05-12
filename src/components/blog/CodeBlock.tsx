import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
    <motion.path
      d="M2 6l3 3 5-5"
      stroke="#059669"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ pathLength: { duration: 0.28, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.12 } }}
    />
  </svg>
);

const CopyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
    <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
    <path d="M8 4V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export default function CodeBlock({ filename, lang, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [hoverCopy, setHoverCopy] = useState(false);
  const resetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetRef.current) clearTimeout(resetRef.current);
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getTextContent(children).trim());
    setCopied(true);
    if (resetRef.current) clearTimeout(resetRef.current);
    resetRef.current = setTimeout(() => setCopied(false), 2000);
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

        <motion.button
          type="button"
          aria-live="polite"
          aria-label={copied ? "Copied" : "Copy code"}
          onClick={handleCopy}
          onMouseEnter={() => setHoverCopy(true)}
          onMouseLeave={() => setHoverCopy(false)}
          title={copied ? "Copied" : "Copy code"}
          initial={false}
          animate={{
            scale: copied ? [1, 1.035, 1] : 1,
            boxShadow: copied
              ? "0 0 0 1px rgba(5,150,105,0.25), 0 0 0 6px rgba(5,150,105,0.06)"
              : hoverCopy && !copied
                ? "0 1px 2px rgba(0,0,0,0.04)"
                : "0 0 0 0px rgba(0,0,0,0)",
          }}
          transition={{
            scale: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
            boxShadow: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "28px",
            padding: "0.25rem 0.55rem",
            borderRadius: "5px",
            background: hoverCopy && !copied ? "#E0DED8" : copied ? "rgba(5,150,105,0.06)" : "transparent",
            border: "1px solid",
            borderColor: hoverCopy && !copied ? "#D4D2CC" : copied ? "rgba(5,150,105,0.2)" : "transparent",
            color: copied ? "#059669" : "#999",
            cursor: "pointer",
            fontFamily: "ui-monospace, 'SF Mono', monospace",
            fontSize: "0.625rem",
            letterSpacing: "0.06em",
            overflow: "hidden",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="copied"
                initial={{ opacity: 0, filter: "blur(6px)", y: 3 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(2px)", y: -1 }}
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "flex", alignItems: "center", gap: "0.35rem", whiteSpace: "nowrap" as const }}
              >
                <CheckIcon />
                copied
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0, filter: "blur(4px)", y: 2 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(2px)", y: -1 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "flex", alignItems: "center", gap: "0.35rem", whiteSpace: "nowrap" as const }}
              >
                <CopyIcon />
                copy
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
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
