import { useState } from "react";

const before = [
  { role: "Alexis (GTM)", action: "Message Discord vague", friction: true },
  { role: "Byron", action: "Lit, interprète, évalue", friction: true },
  { role: "Byron", action: "Lance Cursor, développe", friction: true },
  { role: "Byron", action: "Push GitHub, deploy Railway", friction: true },
  { role: "Alexis", action: "Attend... demande si c'est live", friction: true },
];

const after = [
  { role: "Alexis (GTM)", action: "Décrit l'idée à Claude Code", friction: false },
  { role: "Claude Code", action: "Génère le brief + crée Linear ticket", friction: false },
  { role: "Byron", action: "Review ticket (5 min), approve", friction: false },
  { role: "Cursor Agent", action: "Implémente, ouvre PR", friction: false },
  { role: "Railway", action: "Auto-deploy sur merge", friction: false },
  { role: "Alexis", action: "Notification Discord — c'est live", friction: false },
];

export default function WorkflowDemo() {
  const [view, setView] = useState<"before" | "after">("before");
  const steps = view === "before" ? before : after;

  return (
    <div className="w-full space-y-4 font-mono text-sm">
      <div className="flex gap-2">
        <button
          onClick={() => setView("before")}
          className={`px-3 py-1 rounded text-xs border transition-colors ${
            view === "before"
              ? "bg-black text-white border-black"
              : "bg-transparent text-gray-400 border-gray-200 hover:border-gray-400"
          }`}
        >
          Avant
        </button>
        <button
          onClick={() => setView("after")}
          className={`px-3 py-1 rounded text-xs border transition-colors ${
            view === "after"
              ? "bg-black text-white border-black"
              : "bg-transparent text-gray-400 border-gray-200 hover:border-gray-400"
          }`}
        >
          Après
        </button>
      </div>

      <div className="space-y-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-gray-300 w-4 shrink-0">{i + 1}.</span>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-gray-400">{step.role}</span>
              <span
                className={
                  step.friction ? "text-red-500 line-through opacity-60" : "text-black"
                }
              >
                {step.action}
              </span>
            </div>
          </div>
        ))}
      </div>

      {view === "before" && (
        <p className="text-xs text-gray-400 pt-2">
          Délai moyen : plusieurs jours. Byron = goulot d'étranglement.
        </p>
      )}
      {view === "after" && (
        <p className="text-xs text-gray-400 pt-2">
          Byron n'intervient qu'une fois, 5 min. Tout le reste est automatisé.
        </p>
      )}
    </div>
  );
}
