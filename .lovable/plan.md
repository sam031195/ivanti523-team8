

## Plan: Auto-playing Audio on Slide 9 with Subtle Controls

### What we'll do

1. **Copy the audio file** (`ml_conclusion.m4a`) into `public/audio/` so it can be referenced by URL.

2. **Add audio playback logic to `Presentation.tsx`**:
   - Create an `Audio` element ref that loads `/audio/ml_conclusion.m4a`
   - When `current === 8` (Slide 9, zero-indexed), auto-play the audio
   - When navigating away from Slide 9, pause and reset the audio

3. **Add subtle play/pause/restart controls** in the top-right corner:
   - Only visible on Slide 9
   - Uses small, low-opacity icons (Play, Pause, RotateCcw from lucide-react)
   - Fades with the existing `showUI` state so they auto-hide like other controls
   - Positioned in the existing top bar area, right-aligned

### Technical details

- **`Presentation.tsx`**: Add `useRef<HTMLAudioElement>`, `isPlaying` state. In a `useEffect` watching `current`, if slide is 8, call `audio.play()`, otherwise `audio.pause(); audio.currentTime = 0`. The three control buttons (play, pause, restart) toggle/reset accordingly.
- Controls: ~24px icons at `opacity-60 hover:opacity-100`, grouped in a small flex row in the top-right, rendered only when `current === 8`.

