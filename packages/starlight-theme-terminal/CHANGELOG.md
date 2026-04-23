# starlight-theme-terminal

## 1.2.0

### Minor Changes

- retheme tip/note badges and banner, polish blockquote
  - asides.css: switch .starlight-aside--tip accent from emerald green
    to cyan (#06b6d4) across light, dark, and high-contrast modes
  - badges.css: align badge colors with aside variants
    · .sl-badge.tip → cyan (#22d3ee / #0891b2)
    · .sl-badge.note → violet/purple (#a78bfa / #7c3aed)
    Updated base, light-theme, and high-contrast sections for both
  - terminal-main.css: redesign .sl-banner
    · Replace flat purple gradient fill with glassmorphism card
      (translucent bg, backdrop-blur, brand-primary border)
    · Fix link visibility: use --sl-color-accent-high with direct
      .sl-banner a selector (alongside :global) for reliable matching
    · Blockquote tweaks: quote icon uses brand-primary color,
      smaller font (1.75rem), higher opacity; left border 6px

## 1.1.2

### Patch Changes

- Lowered @astrojs/starlight to >=0.32.0 so the demo project accepts it

## 1.1.1

### Patch Changes

- Fixed npm docs png

## 1.1.0

### Minor Changes

- Added "Quick install", "What this theme offers", "FeatureGrid: 4 LinkCards, 4 columns" sections on hero and FeatureGrid examples in documentation

## 1.0.0

### Major Changes

- Initial release of `starlight-theme-terminal`, a terminal-inspired Starlight theme.

  ### Features
  - Monospace headings with the Geist typeface family
  - Custom `TerminalHeader` and `ThemeSelect` component overrides
  - Reworked styling for asides, badges, cards, hero, sidebar, tabs, table of contents, markdown lists, and Expressive Code
  - Additional components: `FeatureGrid`, `HeaderButton`, `ProgressScroll`
  - High-contrast dark and light Expressive Code themes tuned to match the theme palette

  ### Requirements
  - Node.js `>=22.12.0`
  - Astro `>=6.0`
  - Starlight `>=0.38.0`

## 1.0.0
