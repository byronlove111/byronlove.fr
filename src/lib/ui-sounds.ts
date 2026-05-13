import { definePatch, ensureReady } from "@web-kits/audio";

const patch = definePatch({
  name: "ui-sounds",
  sounds: {
    tap: {
      source: { type: "sine", frequency: 1200 },
      envelope: { attack: 0, decay: 0.012, sustain: 0, release: 0.004 },
      gain: 0.18,
    },
    "key-press": {
      source: { type: "sine", frequency: 1100 },
      envelope: { attack: 0, decay: 0.01, sustain: 0, release: 0.003 },
      gain: 0.18,
    },
    copy: {
      layers: [
        { source: { type: "sine", frequency: 1000 }, envelope: { attack: 0, decay: 0.012, sustain: 0, release: 0.004 }, gain: 0.08 },
        { source: { type: "sine", frequency: 1200 }, envelope: { attack: 0, decay: 0.012, sustain: 0, release: 0.004 }, delay: 0.035, gain: 0.07 },
      ],
    },
    "page-enter": {
      source: { type: "sine", frequency: { start: 700, end: 900 } },
      envelope: { attack: 0.003, decay: 0.04, sustain: 0, release: 0.015 },
      gain: 0.05,
    },
    "page-exit": {
      source: { type: "sine", frequency: { start: 900, end: 700 } },
      envelope: { attack: 0, decay: 0.04, sustain: 0, release: 0.015 },
      gain: 0.04,
    },
  },
});

export type UiSound = "tap" | "key-press" | "copy" | "page-enter" | "page-exit";

export function playSound(sound: UiSound): void {
  if (typeof window === "undefined") return;
  void ensureReady().then(() => patch.play(sound));
}
