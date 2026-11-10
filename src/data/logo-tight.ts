// Header/footer wordmark with a tighter gap between "COPPER" and "DESIGN".
// In the full lockup the gap leaves room for the monogram's lightning stroke; side by side
// with the small monogram it reads as too wide, so the DESIGN letters are shifted left.
// The traced path uses only absolute M/L/C/Z commands, so every x coordinate can be shifted directly.
import { wordmark } from './logo';

const GAP_REDUCTION = 60; // in logo units (the original gap is ~148; letters are ~15–20 apart)
const DESIGN_STARTS_AFTER_X = 1000; // COPPER ends at ~928, DESIGN begins at ~1076

const shiftX = (sub: string, dx: number) => {
  let i = 0;
  return sub.replace(/-?\d+(?:\.\d+)?/g, (n) => (i++ % 2 === 0 ? (parseFloat(n) + dx).toFixed(1) : n));
};

const subpaths = wordmark.d.match(/M[^M]*/g) ?? [];
const d = subpaths
  .map((sp) => {
    const firstX = parseFloat(sp.slice(1));
    return firstX > DESIGN_STARTS_AFTER_X ? shiftX(sp, -GAP_REDUCTION) : sp;
  })
  .join('');

const [x, y, w, h] = wordmark.viewBox.split(/\s+/).map(Number);

export const wordmarkTight = { viewBox: `${x} ${y} ${w - GAP_REDUCTION} ${h}`, d };
