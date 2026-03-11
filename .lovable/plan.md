

## Plan: Reduce Card Body Text to 0.75rem Across All Slides

### What changes

Reduce the font size of body text, descriptions, and bullet points inside cards (CIS control cards, impact cards, initiative cards, content cards, timeline cards) to `text-xs` (0.75rem) across all slides. Card headings, CIS numbers, and control names stay unchanged.

### Targeted edits

**Global CSS (`src/index.css`)**
- Line 194-196: Change `.s1-feature-item p` from `text-sm` to `text-xs` — this covers most card body text across Slide1, Slide4, Slide5, Slide6, Slide7, Slide9.

**Slide2.tsx** (timeline body)
- Line 100: Change `text-sm` to `text-xs` on timeline event body text.

**Slide3.tsx** (timeline body)
- Line 111: Change `text-sm` to `text-xs` on timeline event body text.

**Slide4.tsx** (bullet lists + consequence)
- Line 92: Change `text-sm` to `text-xs` on the `<ul>` for CIS card bullets.

**Slide5.tsx** (CIS card body + impact text)
- Line 117: Change `text-sm` to `text-xs` on CIS card body paragraph.

**Slide6.tsx** (impact card bullets)
- Line 100: Change `text-sm` to `text-xs` on impact card bullet `<ul>`.

**Slide7.tsx** (initiative body + timeline task text)
- Line 92: Change `text-sm` to `text-xs` on initiative body paragraph.
- Line 121: Timeline task text is already `text-xs` — no change needed.

**Slide8.tsx** (ZTNA descriptive text under nodes)
- Already `text-[10px]` — no change needed.

**Slide9.tsx** (takeaway card body + board decision text)
- Handled by the global `.s1-feature-item p` change.
- Line 108: Board decision text `text-[13px]` → change to `text-xs`.

**TimelineSlide.tsx** (timeline card body)
- Line 56: Change `text-sm` to `text-xs`.

### What stays the same
- All `h1`, `h3` headings
- CIS control labels (`text-xs font-bold text-destructive/70`)
- Card title text (`text-lg font-bold`)
- Stat numbers, meta labels, tags

