# UX Experiments Sandbox

Speeltuin waar Claude Code UX-prototypes parkeert. Public repo, static HTML/CSS/JS, gepubliceerd via GitHub Pages.

**Live:** https://gitfassie.github.io/ux-experiments/

## Structuur

Elke use case krijgt zijn eigen subfolder. Iedere subfolder bevat een `index.html` en alles wat erbij hoort.

```
ux-experiments/
├── index.html              ← overzicht/landing van alle experimenten
├── vattenfall/             ← Vattenfall AI Inspiratiesessie (2026-05-19)
│   └── index.html
└── README.md
```

## Een nieuw experiment toevoegen

1. Maak een nieuwe subfolder met een korte, kleine-letters naam (bv. `mijn-demo/`).
2. Zet daar je `index.html` en eventuele assets.
3. Werk de landingspagina `/index.html` bij met een link naar het nieuwe experiment.
4. Commit + push naar `main`. GitHub Pages publiceert automatisch.

## Conventies

- Geen build step — pure HTML/CSS/JS. Houdt experimenten snel en deelbaar.
- Geen secrets in code — Gitleaks scant elke push.
- Een experiment hoort niet langer dan een sessie te leven. Daarna mag het blijven staan als referentie.

## Design system

Alle pagina's gebruiken het [Porsche Design System v4](https://designsystem.porsche.com/v4/). Tokens zijn als CSS-variabelen meegeleverd in elke `<style>`-block:

- Font: "Porsche Next" via `https://cdn.ui.porsche.com/porsche-design-system/fonts/porsche-next.css`
- Kleuren: `--p-color-canvas`, `--p-color-surface`, `--p-color-primary`, `--p-color-contrast-{low|medium|high}`
- Spacing: `--p-spacing-static-{sm|md|lg}`, `--p-spacing-fluid-{md|lg|xl|2xl}`
- Radius: `--p-radius-{sm|md|lg|xl|2xl}`

`color-scheme: light dark;` + `light-dark()` zorgt dat de pagina automatisch volgt met de OS-voorkeur.
