

## Plan: Audio-Reactive Waveform with Hover-to-Controls on Slide 9

### What changes

Replace the current static play/pause/restart buttons on Slide 9 with an **audio-reactive waveform** that swaps to manual controls on hover.

### Behavior

- **Default state**: A small, elegant waveform (5-7 bars) appears in the top-right area, bars animate in response to actual audio frequency data via the Web Audio API `AnalyserNode`. When audio is paused, bars settle to a minimal idle state.
- **On hover**: The waveform crossfades into the existing play/pause and restart buttons.
- **On mouse leave**: Controls crossfade back to the waveform.
- **Auto-hide disabled for Slide 9**: The top bar stays visible (no fade-out on idle cursor) when on the conclusion slide, so the waveform is always present.

### Technical approach (all in `Presentation.tsx`)

1. **Web Audio API setup**: In the existing audio `useEffect`, create an `AudioContext` and `AnalyserNode`, connect the audio element via `createMediaElementSource`. Store analyser in a ref.

2. **Waveform component** (inline or small component): Uses `requestAnimationFrame` to read `getByteFrequencyData` from the analyser, renders 5-7 thin bars (`div` elements) whose `scaleY` is driven by frequency data. Bars use `bg-primary/60` with rounded ends — clean, minimal style matching the deck's aesthetic.

3. **Hover swap**: Wrap the waveform + controls area in a container with `onMouseEnter`/`onMouseLeave` toggling a `hovered` state. Use framer-motion `AnimatePresence` to crossfade between waveform and controls.

4. **Keep UI visible on Slide 9**: Modify the `showUI` auto-hide `useEffect` to skip the timeout when `current === 8`, ensuring the top bar (and waveform) stays visible.

### Style details

- Waveform bars: ~3px wide, 16-24px max height, 2px gap, rounded-full, primary color at 50-60% opacity
- Transition: 200ms crossfade between waveform ↔ controls
- Controls remain the same subtle Play/Pause + RotateCcw icons

