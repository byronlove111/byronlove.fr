import { useState } from "react";

const steps = [
  { id: 1, actor: "You", action: "Build something for an hour", detail: "Code, ship, experiment. Don't think about the article yet." },
  { id: 2, actor: "Cursor", action: "Reads the conversation", detail: "The skill scans everything you built in the session — no git required." },
  { id: 3, actor: "You", action: "Answer 5 questions", detail: "What was hard? What did you learn? Any code or demo worth showing?" },
  { id: 4, actor: "Cursor", action: "Writes EN + FR", detail: "Two MDX files generated in your voice, with components injected where relevant." },
  { id: 5, actor: "GitHub", action: "Auto-deploy", detail: "One push. Article live on your domain in ~30 seconds." },
];

export default function WorkflowSteps() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <div style={{ width: "100%", fontFamily: "ui-monospace, 'SF Mono', monospace" }}>
      <div style={{ display: "flex", gap: "0.375rem", marginBottom: "1.5rem", flexWrap: "wrap" as const }}>
        {steps.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            style={{
              padding: "0.25rem 0.625rem",
              borderRadius: "3px",
              fontSize: "0.625rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              border: `1px solid ${i === active ? "#1a1a1a" : "#D0CEC8"}`,
              background: i === active ? "#1a1a1a" : "transparent",
              color: i === active ? "#F5F5F5" : "#999",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {s.id}. {s.actor}
          </button>
        ))}
      </div>
      <div style={{ padding: "1.25rem", background: "#F5F5F5", borderRadius: "4px", border: "1px solid #E0DED8" }}>
        <div style={{ fontSize: "0.6875rem", letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "#999", marginBottom: "0.5rem" }}>
          Step {step.id} — {step.actor}
        </div>
        <div style={{ fontSize: "0.9375rem", color: "#1a1a1a", marginBottom: "0.375rem", fontFamily: "'Lora', Georgia, serif", fontWeight: 500 }}>
          {step.action}
        </div>
        <div style={{ fontSize: "0.875rem", color: "#666", fontFamily: "'Lora', Georgia, serif", fontStyle: "italic" as const, lineHeight: 1.6 }}>
          {step.detail}
        </div>
      </div>
    </div>
  );
}
