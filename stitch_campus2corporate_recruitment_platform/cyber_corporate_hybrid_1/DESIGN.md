---
name: Cyber-Corporate Hybrid
colors:
  surface: '#0e1416'
  surface-dim: '#0e1416'
  surface-bright: '#343a3c'
  surface-container-lowest: '#090f11'
  surface-container-low: '#161d1e'
  surface-container: '#1a2122'
  surface-container-high: '#242b2d'
  surface-container-highest: '#2f3638'
  on-surface: '#dde4e5'
  on-surface-variant: '#bbc9cd'
  inverse-surface: '#dde4e5'
  inverse-on-surface: '#2b3233'
  outline: '#859397'
  outline-variant: '#3c494c'
  surface-tint: '#2fd9f4'
  primary: '#8aebff'
  on-primary: '#00363e'
  primary-container: '#22d3ee'
  on-primary-container: '#005763'
  inverse-primary: '#006877'
  secondary: '#c3c0ff'
  on-secondary: '#1d00a5'
  secondary-container: '#3626ce'
  on-secondary-container: '#b3b1ff'
  tertiary: '#ffd6a3'
  on-tertiary: '#462b00'
  tertiary-container: '#ffb13b'
  on-tertiary-container: '#6e4600'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a2eeff'
  primary-fixed-dim: '#2fd9f4'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#0f0069'
  on-secondary-fixed-variant: '#3323cc'
  tertiary-fixed: '#ffddb5'
  tertiary-fixed-dim: '#ffb957'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#643f00'
  background: '#0e1416'
  on-background: '#dde4e5'
  surface-variant: '#2f3638'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-max: 1280px
  gutter: 20px
---

## Brand & Style
The design system fuses high-end enterprise reliability with "hacker" aesthetic precision. It targets a demographic of ambitious graduates and tech-forward recruiters who value AI-driven efficiency. 

The visual style is **Glassmorphic-Industrial**: a mix of deep Slate surfaces, translucent layers, and high-precision glowing accents. It leverages high-contrast typography and subtle motion to evoke a sense of a "command center" for career growth. Every element should feel engineered rather than merely decorated, utilizing sharp lines, data-dense layouts, and atmospheric depth.

## Colors
This design system utilizes a "Deep Space" palette. The foundation is **Slate 950** for backgrounds to maximize the luminance of the accent colors. 

- **Primary (Cyan 400):** Used for data visualization, highlights, and "active" states to signal AI-driven insights.
- **Secondary (Indigo 600):** Reserved for primary calls to action, providing a stable, professional anchor to the high-energy Cyan.
- **Surface:** Surfaces are constructed from **Slate 900** with varying levels of transparency (60% to 90%) to allow backdrop-blur effects to pull colors from the background.
- **Borders:** All component borders use a 10% opacity white or 20% opacity primary color to create a "glass edge" effect.

## Typography
The system employs a dual-font strategy. **Hanken Grotesk** provides a clean, modern, and highly legible sans-serif experience for core content. **JetBrains Mono** is utilized for technical metadata, labels, and AI-generated scores to reinforce the "hacker" precision.

- Use **display-lg** for hero sections and major stats.
- Use **label-caps** for section headers and small navigational cues.
- **Body-md** should be the default for all long-form descriptions and candidate bios.
- All numerical data should default to **JetBrains Mono** to ensure tabular alignment and a technical feel.

## Layout & Spacing
The layout follows a strict **4px baseline grid**. Components should prioritize density to mimic a technical dashboard while maintaining clarity through generous whitespace between major sections.

- **Grid:** 12-column fluid grid for desktop with 20px gutters. 4-column grid for mobile.
- **Margins:** 24px side margins for mobile; 48px to 64px for desktop.
- **Philosophy:** Use "padding-heavy" containers to allow the glassmorphic background blurs to feel airy and premium. Align technical labels to the top-left of containers to emphasize a structured, "terminal" logic.

## Elevation & Depth
Depth is created through **Glassmorphism** and **Luminescence** rather than traditional shadows.

1.  **Level 0 (Floor):** Slate 950.
2.  **Level 1 (Cards/Panels):** Slate 900 at 80% opacity, Backdrop Blur (20px), 1px border at 10% white opacity.
3.  **Level 2 (Modals/Popovers):** Slate 900 at 95% opacity, Backdrop Blur (40px), 1px border at 20% white opacity.
4.  **Glowing Accents:** Interactive elements use an "Outer Glow." Instead of a black shadow, use a diffuse shadow of the Primary color (Cyan 400) with a 15px-25px blur at 30% opacity to simulate light emission.

## Shapes
The shape language is "Soft-Technical." Sharp 90-degree corners are avoided to maintain the premium enterprise feel, but high-radius circles are also limited to maintain the "hacker" edge.

- **Standard Elements:** 4px (0.25rem) radius.
- **Large Cards:** 8px (0.5rem) radius.
- **Special Elements:** Tags and Status Badges use a 2px radius for a "microchip" aesthetic.
- **Interactive States:** Use 1px internal strokes to highlight shape boundaries during hover.

## Components

### Glass Cards
Containers with `backdrop-filter: blur(12px)`, background `rgba(15, 23, 42, 0.8)`, and a subtle top-to-bottom gradient border. For "featured" candidate cards, add a 1px Cyan-400 glow on hover.

### Glowing Buttons
- **Primary:** Background Indigo-600. On hover, apply a `box-shadow` of Cyan-400 (0px 0px 15px).
- **Ghost/Outline:** 1px border of Slate-700. On hover, border turns Cyan-400 with matching text color.
- **Text:** Always Sans-serif (Hanken Grotesk), Semi-Bold.

### Recruitment UI Patterns
- **AI Match Score:** Circular gauge using Cyan-400 for the fill. The score itself is rendered in JetBrains Mono.
- **Status Chips:** Small, 2px rounded boxes with low-opacity backgrounds (e.g., Emerald-500 at 10% opacity) and solid text.
- **Input Fields:** Slate-950 background with a 1px Slate-800 border. When focused, the border glows Cyan-400.
- **Timeline/Process:** Use thin 1px vertical lines in Slate-800 with "Nodes" that glow Cyan when an interview stage is active.