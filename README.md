# Portfolio

A modern, animated portfolio for **S.M. Moshiuzzaman Shatil**, showcasing experience across AI, backend engineering, and MLOps. The site is built with Vite, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Immersive home page that highlights experience, skills, projects, articles, and media at a glance
- Dedicated pages for experience, skills, projects, articles, media gallery, resume, and contact
- Dark/light theme support with persistent selection
- Smooth animations powered by Framer Motion
- Responsive design optimised for desktop and mobile screens

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **18.x** or newer
- [pnpm](https://pnpm.io/), [npm](https://www.npmjs.com/), or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

### Development Server

Run the Vite dev server with hot module replacement:

```bash
npm run dev
```

The app will start on [http://localhost:5173](http://localhost:5173) by default.

### Linting & Type Checking

```bash
npm run lint
```

### Production Build

```bash
npm run build
```

The optimised assets are emitted to the `dist` directory. You can preview the production build locally using:

```bash
npm run preview
```

## Deployment

### GitHub Pages (free)

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the site and publishes it to GitHub Pages whenever you push to the `main` branch. To enable it:

1. Navigate to your repository settings on GitHub and enable **Pages** with the "GitHub Actions" deployment source.
2. Ensure the default branch is called `main` (update the workflow trigger if you use a different branch name).
3. Commit and push the project to GitHub—each push to `main` will rebuild and deploy automatically.

The workflow sets the `BASE_PATH` environment variable to `/<repository-name>/` so that Vite produces correct asset paths for project pages (e.g. `username.github.io/portfolio`). If you host the site at the root of a user/organisation page (`username.github.io`), update the `BASE_PATH` value in the workflow to `/`.

To run a GitHub Pages production build locally you can mimic the workflow with:

```bash
BASE_PATH=/$(basename $(git rev-parse --show-toplevel))/ npm run build
```

### Other free hosting options

- **Netlify** – Connect the repository, set the build command to `npm run build`, and publish the `dist` folder. If your site will be served from a sub-path, define `BASE_PATH` in the Netlify build environment.
- **Vercel** – Import the GitHub repository and use the default Vite preset (build command `npm run build`, output `dist`).

Both services include generous free tiers and handle previews for pull requests automatically.

## Project Structure

```
src/
├── components/        # Layout components (header, footer, etc.)
├── contexts/          # Theme context
├── data/              # Shared data for experiences, skills, projects, media, and articles
├── pages/             # Route-based pages
├── main.tsx           # Application bootstrap
└── index.css          # Global styles
```

## Customisation

- Update details in `src/data/` to change experience, skills, projects, and media content.
- Adjust styling via Tailwind utility classes or extend the design system in `tailwind.config.js`.
- Animations are handled through Framer Motion; tweak the transitions directly within the page components.

## License

This project is provided without a specific open-source license. Please contact S.M. Moshiuzzaman Shatil for usage permissions.
