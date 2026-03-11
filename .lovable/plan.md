

## Plan: Waveform Audio Indicator + Fit All Slides in 100vh

### Part 1: Animated Waveform with Hover-to-Controls

**What**: Replace the always-visible play/pause/restart buttons on Slide 9 with an animated waveform (5 thin bars oscillating at different speeds, matching the presentation's purple/gradient style). On hover, the waveform fades out and the play/pause + restart controls fade in.

**Changes in `Presentation.tsx`**:
- Add a `hovering` state for the audio controls container
- Default state: render 5 animated bars (CSS keyframe with staggered `animation-delay`) — bars only animate when `isPlaying` is true, otherwise static/flat
- `onMouseEnter`/`onMouseLeave` toggles between waveform view and controls view
- Add `@keyframes waveform` in a `<style>` tag or inline styles for the bar bounce animation
- Bars: ~2px wide, 8-16px tall range, `bg-foreground/40`, spaced 2px apart, with sinusoidal animation

### Part 2: Fit All Slides Within 100vh (No Content Changes)

**Strategy**: Reduce vertical padding, title sizes, and inter-element spacing globally. The content text stays identical.

**Changes in `index.css`**:
- `.slide-section`: change `min-h-screen` → `h-screen` + `overflow-hidden`
- `.slide-container`: reduce `py-24` → `py-14`
- `.slide-wide`: reduce `py-24` → `py-14`
- `.accent-line` / `.accent-line-danger` / `.accent-line-success`: reduce `mb-5` → `mb-3`

**Per-slide spacing/size reductions** (content unchanged, only margins, gaps, font sizes):

| Slide | Key Reductions |
|-------|---------------|
| Slide1 | Title `text-[7rem]` → `text-[5.5rem]`, `mb-12` → `mb-8`, `mb-20` → `mb-10`, `mb-8` → `mb-5` |
| Slide2 | `mb-14` → `mb-8`, `mb-8` → `mb-5`, timeline `space-y-6` → `space-y-4` |
| Slide3 | `mb-12` → `mb-6`, `mb-8` → `mb-4`, stats `py-5` → `py-3`, timeline `space-y-5` → `space-y-3` |
| Slide4 | `mb-14` → `mb-6`, `mb-16` → `mb-8`, `mb-8` → `mb-5` |
| Slide5 | `mb-14` → `mb-8`, `mb-10` → `mb-6`, `mb-10` → `mb-6`, bottom NIST section `mt-6` → `mt-3` |
| Slide6 | `mb-8` → `mb-5` (multiple), stats `py-4` → `py-2` |
| **Slide7** | Most aggressive: `mb-10` → `mb-4`, initiative `space-y-14` → `space-y-6`, within each initiative: `mb-8` → `mb-3`, `mb-6` → `mb-3`, `mb-3` → `mb-1`, `mb-5` → `mb-2`, timeline card `py-3` → `py-2`, title `text-[4.5rem]` → `text-[3.5rem]`, `gap-8` → `gap-4`, initiative number `text-4xl` → `text-2xl` |
| Slide8 | Node `gap-6` → `gap-4`, `py-8` → `py-4`, `mb-6` → `mb-3`, `p-6` → `p-4` |
| Slide9 | `mb-8` → `mb-5`, `mb-14` → `mb-8`, title `text-[5rem]` → `text-[4rem]`, `mb-8` → `mb-4` |

**Title sizes across all slides**: reduce `md:text-[4.5rem]` → `md:text-[3.5rem]` where used (Slides 2-7), keeping proportional hierarchy.

### Technical Details

- All changes are CSS/className only — zero content text modifications
- The waveform uses 5 `<div>` bars with a CSS `@keyframes` bounce animation, each bar offset by ~0.15s delay
- The hover container uses `onMouseEnter`/`onMouseLeave` with a boolean state to swap between waveform and controls
- `h-screen overflow-hidden` on `.slide-section` enforces the viewport constraint

