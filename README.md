# website

Source for [mihnk.org](https://mihnk.org).

A small static website built with [Astro](https://astro.build).

## development

Requires Node.js 22.

```sh
npm install
npm run dev
```

| Script                 | Description                   |
| ---------------------- | ----------------------------- |
| `npm run dev`          | Start the development server  |
| `npm run build`        | Build the site into `dist/`   |
| `npm run preview`      | Serve the built output        |
| `npm run typecheck`    | Typecheck with `astro check`  |
| `npm run format`       | Format with Prettier          |
| `npm run format:check` | Check formatting (used in CI) |

All user-facing copy lives in `src/i18n/ui.ts`. English is served at `/`,
other locales are prefixed (`/tr/`, `/sv/`).

## deployment

Cloudflare Pages builds and deploys from GitHub: pull requests get a preview,
`main` goes to production.

| Setting          | Value           |
| ---------------- | --------------- |
| Build command    | `npm run build` |
| Output directory | `dist`          |
| `NODE_VERSION`   | `22`            |

## license

[Apache-2.0](LICENSE). Bundled fonts and their licensing are listed in
[NOTICE](NOTICE).
