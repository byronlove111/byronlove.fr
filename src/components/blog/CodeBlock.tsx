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

/** Readable source from the rendered pane (fixes Astro client:slot / await-children where React children are empty client-side). */
function readFromCodePanel(panel: HTMLElement | null): string {
  if (!panel) return "";
  const root = panel.querySelector("pre.astro-code") ?? panel.querySelector("pre") ?? panel;
  return root.innerText.replace(/\u00a0/g, " ").trim();
}

async function writeClipboard(text: string): Promise<boolean> {
  if (!text) return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-10000px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

export default function CodeBlock({ filename, lang, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const resetRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => () => {
    if (resetRef.current) clearTimeout(resetRef.current);
  }, []);

  const handleCopy = async () => {
    const raw = readFromCodePanel(panelRef.current) || getTextContent(children).trim();
    const ok = await writeClipboard(raw);
    if (!ok) return;

    setCopied(true);
    if (resetRef.current) clearTimeout(resetRef.current);
    resetRef.current = setTimeout(() => setCopied(false), 900);
  };

  const displayLabel = filename ?? lang;
  const shift = "0.28rem";
  const labelMotion = "opacity 0.2s ease-out, transform 0.2s ease-out";

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
            flexShrink: 0,
            margin: 0,
            padding: 0,
            borderRadius: "5px",
            background: "none",
            border: "none",
            color: "#777",
            cursor: "pointer",
            fontFamily: "ui-monospace, 'SF Mono', 'Cascadia Code', monospace",
            fontSize: "0.6875rem",
            letterSpacing: "0.02em",
            lineHeight: 1.45,
            userSelect: "none" as const,
          }}
        >
          <span
            aria-hidden
            style={{
              display: "inline-grid",
              justifyItems: "end",
              whiteSpace: "nowrap" as const,
            }}
          >
            <span
              style={{
                gridRow: 1,
                gridColumn: 1,
                justifySelf: "end",
                transformOrigin: "100% 50%",
                transition: labelMotion,
                opacity: copied ? 0 : 1,
                transform: copied ? `translateY(-${shift})` : "translateY(0)",
              }}
            >
              copy
            </span>
            <span
              style={{
                gridRow: 1,
                gridColumn: 1,
                justifySelf: "end",
                transformOrigin: "100% 50%",
                transition: labelMotion,
                opacity: copied ? 1 : 0,
                transform: copied ? "translateY(0)" : `translateY(${shift})`,
              }}
            >
              copied
            </span>
          </span>
        </button>
      </div>

      <div
        ref={panelRef}
        style={{
          overflowX: "auto",
          padding: "1.125rem 1.25rem",
          fontSize: "0.8125rem",
          lineHeight: "1.7",
          fontFamily: "ui-monospace, 'SF Mono', 'Cascadia Code', monospace",
          background: "#F5F4F0",
        }}
      >
        {children}
      </div>
    </div>
  );
}
