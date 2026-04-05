# Publishing Guide

How to develop, ship changes, and deploy this portfolio to GitHub Pages.

---

## One-time setup (do this once per machine)

```bash
git clone https://github.com/tsatsarisg/my-portfolio.git
cd my-portfolio
pnpm install
```

**GitHub Pages source** — set this once in the repo settings or the deploy workflow will 403:

> GitHub → Repository → Settings → Pages → Build and deployment → Source → **GitHub Actions**

---

## Day-to-day workflow

### 1. Make your changes locally

```bash
pnpm dev
# edit files, preview at http://localhost:3000/my-portfolio
```

### 2. Run pre-checks before pushing

```bash
pnpm predeploy
# runs: lint → type-check → build
# if anything fails, fix it before continuing
```

### 3. Commit and push to a branch

```bash
git checkout -b your-feature-branch
git add .
git commit -m "feat: describe your change"
git push origin your-feature-branch
```

### 4. Open a pull request → main

- GitHub Actions runs `ci.yml` automatically (lint + type-check + build)
- PR is safe to merge only after the CI check goes green

### 5. Merge the PR

- Merging to `main` triggers `deploy.yml` automatically
- GitHub Actions builds the static export and publishes it to GitHub Pages
- Live URL updates in ~1–2 minutes: https://tsatsarisg.github.io/my-portfolio

---

## Checking deployment status

- **GitHub Actions tab** → "Deploy to GitHub Pages" workflow → see live logs
- **Repository → Deployments** (right sidebar) → shows latest deployment URL and history

---

## Updating content

| What to update | Where |
|----------------|-------|
| Skills, experience, projects | `src/sections/` |
| Books / courses data | `src/data/data.ts` |
| SEO metadata | `src/app/layout.tsx` |
| Structured data (JSON-LD) | `src/app/page.tsx` |
| Sitemap | `public/sitemap.xml` — update `<lastmod>` dates |
| Favicon | `public/favicon.svg` |
| OG social image | `public/og-image.png` (1200×630 px) |

---

## Troubleshooting

**Deploy workflow fails with 403**
→ Go to Settings → Pages → Source → set to **GitHub Actions** (not a branch)

**Build fails locally but not in the last deploy**
→ Run `pnpm install --frozen-lockfile` to ensure lockfile is in sync

**Changes merged but site not updated**
→ Check the Actions tab for a failed run; re-run it manually if needed

**`pnpm predeploy` fails on type-check**
→ Run `pnpm type-check` to see the full error output, fix TypeScript errors
