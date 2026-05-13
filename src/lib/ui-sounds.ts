import { definePatch, ensureReady } from "@web-kits/audio";

const patch = definePatch({
  name: "ui-sounds",
  sounds: {
    tap: {
      source: { type: "sine", frequency: 1100 },
      envelope: { attack: 0, decay: 0.01, sustain: 0, release: 0.003 },
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
      layers: [
        { source: { type: "sine", frequency: 880  }, envelope: { attack: 0, decay: 0.02, sustain: 0, release: 0.006 }, gain: 0.08 },
        { source: { type: "sine", frequency: 1320 }, envelope: { attack: 0, decay: 0.02, sustain: 0, release: 0.006 }, delay: 0.03, gain: 0.07 },
      ],
    },
    "page-exit": {
      layers: [
        { source: { type: "sine", frequency: 1320 }, envelope: { attack: 0, decay: 0.02, sustain: 0, release: 0.006 }, gain: 0.08 },
        { source: { type: "sine", frequency: 880  }, envelope: { attack: 0, decay: 0.02, sustain: 0, release: 0.006 }, delay: 0.03, gain: 0.07 },
      ],
    },
  },
});

export type UiSound = "tap" | "key-press" | "copy" | "page-enter" | "page-exit";

export function playSound(sound: UiSound): void {
  if (typeof window === "undefined") return;
  void ensureReady().then(() => patch.play(sound));
}
