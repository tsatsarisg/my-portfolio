# George Tsatsaris — Portfolio

Personal portfolio site built with Next.js 16, deployed to GitHub Pages.

**Live site:** https://tsatsarisg.github.io/my-portfolio

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Package manager:** pnpm
- **Deployment:** GitHub Pages via GitHub Actions

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000/my-portfolio](http://localhost:3000/my-portfolio).

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Build static export to `./out` |
| `pnpm lint` | Run ESLint |
| `pnpm type-check` | Run TypeScript check |
| `pnpm predeploy` | Run lint + type-check + build locally |

## CI/CD

| Trigger | Workflow | What it does |
|---------|----------|--------------|
| Pull request → `main` | `ci.yml` | Lint, type-check, build |
| Push to `main` | `deploy.yml` | Lint, type-check, build, deploy to GitHub Pages |

See [PUBLISHING.md](./PUBLISHING.md) for the full publishing workflow.

## One-time GitHub setup

Before the deploy workflow works, set Pages source to GitHub Actions:

> Repository → Settings → Pages → Build and deployment → Source → **GitHub Actions**
