# Demo blocks (blog)

Interactive examples live in **`src/components/blog/demos/`** and are rendered in MDX via `<Demo>` (see `[...slug].astro` components map).

## Visual language (match CodeBlock / prose)

| Role | Value |
|------|--------|
| Border | `#E0DED8` |
| Demo surface | `#F5F5F5` |
| Inset panel (preview / paper) | `#fff` where needed |
| Primary text | `#1a1a1a` |
| Meta / labels | `#777`, monospace `ui-monospace, 'SF Mono', 'Cascadia Code', monospace`, `font-size: 0.6875rem`, `letter-spacing: 0.02em` |

## Layout

- **`<Demo>` shell:** `border-radius: 8px`, `border: 1px solid #E0DED8`, `margin: 1.75rem 0`, padded body (same rhythm as CodeBlock sans header bar).
- **`<Screenshot>` / `<Video>` thumb:** simple bordered `#fff` card, `radius: 8px`, no chrome row.

## Avoid

- Loud backgrounds (e.g. strong dot grids) unless the article *is* about grids.
- Controls that look like a different product (pure black selected pills, unrelated shadows). Prefer selected state: `#F5F5F5` + `#E0DED8` border, or a single calm accent.

## MDX pattern

```mdx
import MyWidget from "../../components/blog/demos/my-widget.tsx";

<Demo>
  <MyWidget client:load />
</Demo>
```

**Screenshots / vidéos :** le MDX utilise `<Screenshot>` ou `<Video>` sans import ; c’est `[...slug].astro` qui résout vers **`ScreenshotIsland.astro`** / **`VideoIsland.astro`**, wrappers avec **`client:load`** pour le lightbox.

Keep demo widgets focused on content; **`Demo.tsx`** owns only the bordered wrapper.
