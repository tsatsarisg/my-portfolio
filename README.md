# my-portfolio

This repository is a personal portfolio website built with Vite, React, and TypeScript. It showcases projects, recommended books, courses, and other sections implemented with Tailwind CSS and Radix UI components.

Key points

- Purpose: serve as a developer portfolio and showcase selected work and resources.
- Theme: the site is dark-first. The light/white theme has been removed — the UI and documentation reflect a dark-only experience.
- Routing: client-side routing with a ScrollToTop component that scrolls to the top on navigation.

Tech stack

- Vite
- React (TypeScript)
- Tailwind CSS
- @radix-ui/themes
- lucide-react (icons)

Local development

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build locally

```bash
npm run preview
```

Notes for maintainers

- The project intentionally uses a dark-only theme. If you want to reintroduce a light theme, search for theme-related classes and the theme toggle component (e.g. `toggleTheme` in `App.tsx`) and re-add styles and state that control the light variant.
- Navigation includes a small `ScrollToTop` helper (see `src/ScrollToTop.tsx`) — it ensures pages start at the top when users navigate.

License

This repository is provided as-is. Add a license file if you want to publish it under a specific license.
