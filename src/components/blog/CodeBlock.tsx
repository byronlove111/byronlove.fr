"use client";
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
    if (node && typeof node === "object" && "props" in (node as any)) {
      return getTextContent((node as any).props.children);
    }
    return "";
  };

  const handleCopy = async () => {
    const text = getTextContent(children);
    await navigator.clipboard.writeText(text.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-lg border border-gray-100 overflow-hidden">
      {(filename || lang) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 bg-gray-50">
          <span className="text-xs text-gray-400 font-mono">
            {filename ?? lang}
          </span>
          <button
            onClick={handleCopy}
            className="text-xs text-gray-400 hover:text-black transition-colors"
          >
            {copied ? "copied" : "copy"}
          </button>
        </div>
      )}
      <div className="overflow-x-auto bg-gray-50 p-4 text-sm font-mono leading-relaxed">
        {children}
      </div>
    </div>
  );
}
