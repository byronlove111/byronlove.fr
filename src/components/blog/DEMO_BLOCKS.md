# Demo blocks (blog)

Interactive examples live in **`src/components/blog/demos/`** and are rendered in MDX via `<Demo>` (see `[...slug].astro` components map).

## Visual language (match CodeBlock / prose)

| Role | Value |
|------|--------|
| Border | `#E0DED8` |
| Chrome bar (title area) | `#EEEDEA` |
| Main surface (canvas behind controls) | `#F5F4F0` |
| Inset panel (preview / “paper”) | `#fff` or same cream as needed |
| Primary text | `#1a1a1a` |
| Meta / labels | `#777`, monospace `ui-monospace, 'SF Mono', 'Cascadia Code', monospace`, `font-size: 0.6875rem`, `letter-spacing: 0.02em` |

## Layout

- **Outer shell:** `border-radius: 8px`, `border: 1px solid #E0DED8`, `overflow: hidden`, `margin: 1.75rem 0` (consistent with `CodeBlock`).
- **Chrome row:** `height: 38px`, `padding: 0 1rem`, bottom border `#E0DED8`.
- **Content padding:** similar to the code body — about `1.125rem 1.25rem` to `1.5rem` horizontal.

## Avoid

- Loud backgrounds (e.g. strong dot grids) unless the article *is* about grids.
- Controls that look like a different product (pure black selected pills, unrelated shadows). Prefer selected state: `#EEEDEA` + `#E0DED8` border, or a single calm accent.

## MDX pattern

```mdx
import MyWidget from "../../components/blog/demos/my-widget.tsx";

<Demo>
  <MyWidget client:load />
</Demo>
```

Keep demo components focused; shared chrome lives in **`Demo.tsx`**, not in every widget.
