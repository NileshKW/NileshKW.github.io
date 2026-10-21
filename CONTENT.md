# Editing site content

Each navigation tab is backed by one file in `content/`:

- `content/me.md`
- `content/thoughts.md`
- `content/blog.md`

Edit the appropriate file and refresh the site. The site renders GitHub-flavoured Markdown, including headings, lists, tables, task lists, links, blockquotes, fenced code blocks, and images.

Put image files in `assets/` and reference them from a Markdown file with a relative path, for example:

```md
![A short description](assets/images/photo.jpg)
```

For accessibility, always give images useful alternative text. Raw HTML is supported when it is safe; scripts and unsafe attributes are removed before display.
