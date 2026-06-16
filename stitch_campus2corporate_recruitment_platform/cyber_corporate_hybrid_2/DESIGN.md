---
name: Cyber-Corporate Hybrid
colors:
  surface: '#fdf7ff'
  surface-dim: '#ded8e0'
  surface-bright: '#fdf7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f2fa'
  surface-container: '#f2ecf4'
  surface-container-high: '#ece6ee'
  surface-container-highest: '#e6e0e9'
  on-surface: '#1d1b20'
  on-surface-variant: '#494551'
  inverse-surface: '#322f35'
  inverse-on-surface: '#f5eff7'
  outline: '#7a7582'
  outline-variant: '#cbc4d2'
  surface-tint: '#6750a4'
  primary: '#4f378a'
  on-primary: '#ffffff'
  primary-container: '#6750a4'
  on-primary-container: '#e0d2ff'
  inverse-primary: '#cfbcff'
  secondary: '#63597c'
  on-secondary: '#ffffff'
  secondary-container: '#e1d4fd'
  on-secondary-container: '#645a7d'
  tertiary: '#765b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c9a74d'
  on-tertiary-container: '#503d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbcff'
  on-primary-fixed: '#22005d'
  on-primary-fixed-variant: '#4f378a'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#cdc0e9'
  on-secondary-fixed: '#1f1635'
  on-secondary-fixed-variant: '#4b4263'
  tertiary-fixed: '#ffdf93'
  tertiary-fixed-dim: '#e7c365'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#fdf7ff'
  on-background: '#1d1b20'
  surface-variant: '#e6e0e9'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 24px
  margin: 32px
---

## Brand & Style
The brand personality bridges the gap between high-stakes technical precision and premium enterprise reliability. It is designed for sophisticated users who value both developer-centric efficiency and executive-level polish. 

The design style is **Modern Corporate with Cyber-Technical Accents**. It utilizes a hybrid approach:
- **Corporate Foundation:** A clean, structured grid with ample whitespace and disciplined typography.
- **Cyber Accents:** High-chroma cyan highlights, monospaced data points, and subtle scanline-inspired borders to evoke a "command center" aesthetic.
- **Glassmorphism:** Lightly applied to overlays and modals to maintain depth without sacrificing clarity.
- **Tactile Precision:** Buttons and inputs feature crisp, high-contrast states to provide immediate feedback, reminiscent of high-end hardware interfaces.

## Colors
The palette is built on a high-contrast foundation to ensure legibility across environments. 

**Light Mode** utilizes a "Pristine Lab" aesthetic. Surfaces are stark and clean, using Indigo for primary actions to maintain professional gravity, while Cyan acts as a surgical highlight for active states and data visualization.

**Dark Mode** shifts to a "Deep Space Terminal" aesthetic. It emphasizes depth through tiered midnight blues. Neon Cyan becomes the primary focal point for technical elements, creating a luminous contrast against the dark background.

**Functional Application:**
- Use `primary` for main CTAs and branding.
- Use `secondary` for status indicators, technical readouts, and secondary actions.
- `surface_container` should be used for cards and elevated panels to separate them from the base layout.

## Typography
The system uses **Hanken Grotesk** as the primary typeface to deliver a sharp, contemporary, and highly legible experience. Its geometric construction reinforces the "Corporate" side of the brand.

To inject the "Cyber" influence, **JetBrains Mono** is utilized for all label-tier typography, technical metadata, and numerical data. This creates a clear visual distinction between editorial/UI content and system-generated data.

**Key Rules:**
- Headlines should always use tight letter-spacing to feel impactful.
- Labels must always be uppercase when using the monospaced font to mimic terminal outputs.
- Paragraph text should maintain a generous line-height (1.5x) to ensure readability in data-heavy environments.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid Grid**. Content is housed within a 12-column grid on desktop (max-width 1440px) with 24px gutters.

- **Desktop:** 12 columns, 32px side margins.
- **Tablet:** 8 columns, 24px side margins.
- **Mobile:** 4 columns, 16px side margins.

Spacing follows a strict 4px base unit. Vertical rhythm is maintained by using `md` (16px) for internal component padding and `xl` (40px) for section headers. This design system prioritizes a "dense but breathable" feel, allowing for high information density without visual clutter.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Structural Outlines** rather than heavy shadows.

- **Level 0 (Base):** Uses the `surface` color.
- **Level 1 (Cards/Panels):** Uses `surface_container`. In Light Mode, it features a subtle `outline` (1px). In Dark Mode, it uses a 1px border with a very slight gradient to simulate a beveled edge.
- **Modals & Overlays:** Utilize a backdrop blur (12px) with a semi-transparent `surface` fill.
- **Interactive States:** Instead of raising an element on the Z-axis, use a 2px "Outer Glow" utilizing the `accent_glow` token to indicate focus or activity. This maintains the "flat-tech" aesthetic.

## Shapes
The shape language is defined by **Round Four** (Rounded), providing a 0.5rem (8px) base radius. This softens the technical "edge" of the design, making it feel more like a modern premium product and less like a legacy terminal.

- **Small Components (Checkboxes, Tags):** 4px (rounded-sm).
- **Standard Components (Buttons, Inputs, Cards):** 8px (default).
- **Large Components (Modals, Feature Banners):** 16px (rounded-lg).
- **Pill Elements (Status Badges):** 9999px for a full-round profile.

## Components
Consistent application of the "Cyber-Corporate" aesthetic across components:

- **Buttons:** Primary buttons use a solid `primary` fill with white text. Secondary buttons use a transparent background with a 1px `primary` outline. All buttons feature a 200ms transition on hover with a subtle increase in `accent_glow`.
- **Inputs:** Use `surface_container` with a bottom-only 2px border in the `outline` color. On focus, the border transitions to `secondary` (Cyan) and gains a subtle glow.
- **Chips/Badges:** Use the monospaced `label-sm` font. Use `secondary_container` backgrounds with `secondary` text for a "high-tech" metadata look.
- **Cards:** No shadows. Use a 1px `outline` border. On hover, the border color shifts to `primary` to indicate interactivity.
- **Data Tables:** Use zebra-striping with a very faint `on_surface` (5% opacity) on alternate rows. Headers should be uppercase `label-sm` with a solid `outline` divider below.
- **Progress Bars:** Use a "segmented" appearance—thin vertical lines every 10% to mimic technical loading sequences.