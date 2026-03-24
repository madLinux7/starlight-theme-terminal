---
"starlight-theme-galaxy": minor
---

Udpate to Astro 6 and fix tab styling, mobile theme toggle, and broken accent colors

### Bug Fixes

- Fix tabs stretching to fill full width (#17)
- Fix tab active indicator to use a rounded pill style centered on separator line
- Remove per-tab gray underline from Starlight's default box-shadow
- Fix theme toggle moon icon not rendering correctly due to SVG mask bug (#18)
- Show theme toggle in mobile header instead of burying it in the menu (#18)
- Fix 45 broken `rgba(var(--sl-color-accent), ...)` calls that silently produced no color: all accent shadows, glows, and borders now render correctly
- Fix `hsla(var(--sl-color-bg), ...)` producing invalid CSS on hero page
- Fix double `##` typo in light mode sidebar background color

### Breaking Changes

- Minimum Node.js version is now 22.12.0
- Minimum Starlight version is now 0.38.0
- Minimum Astro version is now 6.0