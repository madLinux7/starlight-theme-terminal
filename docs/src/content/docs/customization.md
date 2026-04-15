---
title: Customization
---

## Custom CSS

To customize the styles applied to your Starlight site when using `starlight-theme-terminal`, you can provide additional CSS files to modify or extend Starlight and `starlight-theme-terminal` default styles.

[Learn more about custom CSS in the Starlight documentation.](https://starlight.astro.build/guides/css-and-tailwind/#custom-css-styles)

## Cascade layers

Like Starlight, `starlight-theme-terminal` uses [cascade layers](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers) internally to manage the order of its styles.
This ensures a predictable CSS order and allows for simpler overrides.
Any custom unlayered CSS will override the default styles from Starlight and `starlight-theme-terminal`.

If you are using cascade layers, you can use [`@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) in your [custom CSS](https://starlight.astro.build/guides/css-and-tailwind/#custom-css-styles) to define the order of precedence for different layers relative to styles from the `starlight` and `terminal` layers:

```css "starlight" "terminal"
/* src/styles/custom.css */
@layer my-reset, starlight, terminal, my-overrides;
```

The example above defines a custom layer named `my-reset`, applied before all Starlight and `starlight-theme-terminal` layers, and another named `my-overrides`, applied after all Starlight and `starlight-theme-terminal` layers.
Any styles in the `my-overrides` layer would take precedence over Starlight and `starlight-theme-terminal` styles, but Starlight or `starlight-theme-terminal` could still change styles set in the `my-reset` layer.
