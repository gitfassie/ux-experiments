# Styling Decisions — UX Experiments

Last updated: 2026-05-18

---

## Figma Design System
- Loaded: yes
- Figma link: https://www.figma.com/design/Ef2BySmHcm4jn7Zx0sHANl/Deck-AI-inspiratie-sessie?node-id=7-30
- Tokens file: `docs/ui-design/design-system.json`
- Last synced: 2026-05-18
- Notes: De Figma is een 1920×1080 deck-slide template ("Deck AI inspiratie sessie"). De UI agent gebruikt deze als basis-canvas. De variable `White` in de Figma file is misnamed — de waarde is `#000000` (zwart) en wordt gebruikt als achtergrond.

## UI Component Library
- Library: DaisyUI
- Versie: laatste stabiele (via Tailwind CDN, geen build step)
- Docs: https://daisyui.com
- Notes: Wordt ingezet binnen het zwarte canvas. Tailwind via CDN, dus geen `tailwind.config.js`. Customisatie van DaisyUI-tokens gebeurt inline via CSS variabelen die naar `design-system.json` mappen.

## Mode
- [ ] Light only
- [x] Dark only
- [ ] Both (user toggle)

## Animation
- Library: None (geen Framer Motion want geen React)
- Style: Rich — CSS-based
- Reduced motion: gerespecteerd via `@media (prefers-reduced-motion: reduce)`

## Colours
| Role | Dark mode |
|------|-----------|
| Background | `#000000` (Figma) |
| Surface | `#29293d` (Figma `Accent 1`) |
| Text | `#f8f8ff` (Figma `Color 6`) |
| Text muted | `rgba(248, 248, 255, 0.55)` (derived) |
| Text dim | `rgba(248, 248, 255, 0.30)` (derived) |
| Border | `rgba(248, 248, 255, 0.10)` (derived) |
| Accent | `#29293d` (Figma `Accent 1`) |
| Success | `#5be37c` ⚠️ off-system |
| Warning | `#f5c043` ⚠️ off-system |
| Error | `#ff5a5a` ⚠️ off-system |

## Typography
- Body font: **Inter** — Google Fonts (https://fonts.google.com/specimen/Inter)
- Display font: **lores-9-wide** weight 400 — Adobe Fonts kit `qal5tnq` (https://use.typekit.net/qal5tnq.css)
- Display font usage: alleen captions, eyebrows, en topbar labels — niet voor body of headlines langer dan ~6 woorden
- Type scale: zie `docs/ui-design/design-system.json` `atoms.typography.scale`

⚠️ Adobe Fonts kit `qal5tnq` is **domain-restricted**. Voor publish moeten `gitfassie.github.io` en eventuele Vercel preview-URLs worden toegevoegd in het Adobe Fonts dashboard onder de kit. Anders laadt het font niet en valt het terug op `monospace, sans-serif`.

## Spacing
- Base unit: 4px
- Max content width: n.v.t. — één fullscreen viewport
- Section vertical spacing: gebruikt `clamp()` voor fluid spacing binnen viewport

## Layout
- Type: één fullscreen viewport (`100svh`), geen scroll
- Topbar: vast bovenaan, `EdBloom` logo links + `UX BOXRING` rechts in display font
- Center container: groot rounded rectangle met hairline border — dit is waar de UI agent zijn componenten plaatst

## Component Decisions
- Buttons: DaisyUI `btn btn-ghost` / `btn btn-outline` op donkere bg
- Cards: DaisyUI `card` met `bg-transparent` + custom hairline border
- Navigation: minimaal — alleen topbar
- Forms: n.v.t. op landingspagina
- Icons: nog te bepalen (default: Lucide via CDN als nodig)
- Border radius: `xl` (24px) voor hoofdcontainers, `md` (8px) voor cards

## Open Decisions
- Icon library — pas relevant bij Fase 3 als er meerdere experiment-cards bijkomen
- Lucide vs Heroicons — voorstel UI agent bij eerste icoon-behoefte
- Hover/state animatieduur per component — wordt geformaliseerd in Fase 2
