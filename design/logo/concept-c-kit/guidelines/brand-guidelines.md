# Raphael Dacara — Identity & Logo Guidelines

> Official Brand System & Logo Usage Guidelines for Raphael Dacara (Mobile & Flutter Developer).

---

## 1. The Brand Mark

### Concept C: The Device Loop
A continuous architectural monoline contour tracing a smartphone profile, the capital monogram **RD**, and a subtle camera focus node.

- **Primary Metaphors**:
  - **The Left Spine**: Clean vertical pillar forming the stem of **R** and the left edge of a mobile device.
  - **The R-Bowl**: Fluid upper quadrant with a mathematical 40-unit apex radius.
  - **The 45° Kinetic Leg**: Dynamic diagonal kick representing speed, code compilation, and forward momentum.
  - **The Expansive D Viewport**: Full-height phone arch cradling the internal architecture.
  - **The Camera Focus Node**: 12 px hardware node defining precision, device sensing, and optical balance.

---

## 2. File Organization (`concept-c-kit/`)

All brand assets are organized in one unified folder hierarchy:

```
design/logo/concept-c-kit/
├── svg/                      # Master vector source files
│   ├── symbol-dark.svg       # Primary dark slate mark (#0F172A)
│   ├── symbol-blue.svg       # Flutter brand blue mark (#2563EB)
│   ├── symbol-white.svg      # Reversed white mark (#FFFFFF)
│   ├── symbol-cyan.svg       # Accent cyan mark (#38BDF8)
│   ├── lockup-horizontal-*.svg # Master horizontal lockups
│   ├── lockup-stacked-*.svg    # Master stacked lockups
│   ├── app-icon-*.svg        # Squircle app launcher icons
│   └── favicon.svg           # High-visibility 32px tab icon
├── png/                      # High-resolution raster renders
│   ├── symbol-*-512.png / 1024.png / 2048.png
│   ├── lockup-horizontal-*-1200.png / 2400.png
│   ├── lockup-stacked-*-1024.png
│   └── app-icon-*-512.png / 1024.png
├── icons/                    # Production web & mobile icon set
│   ├── favicon.ico           # Multi-resolution (16/32/48)
│   ├── favicon-16.png / 32.png / 48.png
│   ├── apple-touch-icon.png  # iOS Home Screen (180x180)
│   ├── icon-192.png / 512.png# Android / PWA icons
│   ├── maskable-512.png      # Android Adaptive icon
│   ├── site.webmanifest      # PWA manifest
│   └── head-snippet.html     # HTML snippet for <head>
├── mockups/                  # In-use contextual mockups
│   ├── concept-c-identity-board.png
│   ├── concept-c-in-use-mockups.png
│   └── interactive-presentation.html
├── posters/                  # Full-resolution brand posters
│   ├── poster-01-brand-spec.svg & .png (1600x1200)
│   ├── poster-02-monochrome.svg & .png (1200x1600)
│   └── poster-03-cyber-gradient.svg & .png (1200x1600)
└── guidelines/               # This guideline document
    └── brand-guidelines.md
```

---

## 3. Clear Space & Minimum Sizing

### Clear Space
Maintain a clear margin around the symbol and lockups equal to **1 × `X`**, where `X` is the width of the central camera focus node (or 1/8th of the symbol height). No competing typography, graphic lines, or busy imagery may intrude into this zone.

### Minimum Sizes
| Format | Digital Minimum | Print Minimum |
|---|---|---|
| **Horizontal Lockup** | 120 px wide | 28 mm wide |
| **Stacked Lockup** | 80 px wide | 20 mm wide |
| **Symbol Mark** | 24 px wide | 6 mm wide |
| **Favicon** | 16 px wide (use `icons/favicon.ico`) | — |

---

## 4. Official Color Palette

| Swatch | Color Name | HEX | RGB | HSL | Role |
|---|---|---|---|---|---|
| <span style="color:#2563EB">■</span> | **Flutter / Brand Blue** | `#2563EB` | `37, 99, 235` | `221°, 83%, 53%` | Primary Brand Color |
| <span style="color:#0F172A">■</span> | **Deep Tech Slate** | `#0F172A` | `15, 23, 42` | `222°, 47%, 11%` | Dark Mode Text & Headers |
| <span style="color:#38BDF8">■</span> | **Sky / Cyber Cyan** | `#38BDF8` | `56, 189, 248` | `198°, 93%, 60%` | Secondary Accent & Glow |
| <span style="color:#F8FAFC">■</span> | **Canvas White** | `#F8FAFC` | `248, 250, 252` | `210°, 40%, 98%` | Light Mode Backgrounds |
| <span style="color:#050811">■</span> | **OLED Obsidian** | `#050811` | `5, 8, 17` | `225°, 55%, 4%` | Dark Mode Hero Background |

---

## 5. Typography

- **Brand Wordmark Display**: System Geometric Display / Plus Jakarta Sans / Inter (`font-weight: 800`, `letter-spacing: -0.02em`).
- **Tagline / Code Monospace**: JetBrains Mono / SF Mono / Fira Code (`font-weight: 600`, `letter-spacing: 0.25em`).

---

## 6. Approved Brand Usage Rules

### Do's:
1. Always use vector SVG files for web rendering and UI components.
2. For dark mode backgrounds (`#0B1120`, `#0F172A`), use `symbol-white.svg` or `symbol-cyan.svg`.
3. For light mode backgrounds (`#FFFFFF`, `#F8FAFC`), use `symbol-dark.svg` or `symbol-blue.svg`.
4. Use the app icon squircle container for social avatars (GitHub, LinkedIn, Twitter, Discord) to ensure perfect 1:1 circular cropping.

### Don'ts:
1. **Never** stretch, squash, or distort the mark's aspect ratio.
2. **Never** alter the stroke width or disconnect the camera focus node.
3. **Never** place the mark over noisy photographic backgrounds without a solid or frosted glass container.
4. **Never** recolor the mark in arbitrary unapproved colors.
