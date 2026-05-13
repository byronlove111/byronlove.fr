let _ctx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!_ctx || _ctx.state === "closed") {
    _ctx = new AudioContext();
  }
  return _ctx;
}

async function ready(): Promise<AudioContext> {
  const ctx = getCtx();
  if (ctx.state === "suspended") await ctx.resume();
  return ctx;
}

function sine(ctx: AudioContext, freq: number, gain: number, start: number, duration: number) {
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.connect(g);
  g.connect(ctx.destination);
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, start);
  g.gain.setValueAtTime(gain, start);
  g.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.start(start);
  osc.stop(start + duration + 0.002);
}

export async function playKeyPress() {
  const ctx = await ready();
  sine(ctx, 1100, 0.06, ctx.currentTime, 0.013);
}

export async function playToggleOn() {
  const ctx = await ready();
  sine(ctx, 880, 0.08, ctx.currentTime, 0.026);
  sine(ctx, 1320, 0.07, ctx.currentTime + 0.03, 0.026);
}

export async function playToggleOff() {
  const ctx = await ready();
  sine(ctx, 1320, 0.08, ctx.currentTime, 0.026);
  sine(ctx, 880, 0.07, ctx.currentTime + 0.03, 0.026);
}

export async function playCopy() {
  const ctx = await ready();
  sine(ctx, 1000, 0.08, ctx.currentTime, 0.012);
  sine(ctx, 1200, 0.07, ctx.currentTime + 0.035, 0.012);
}
