# Surprise Operations

This repository contains a small Vite + React + TypeScript project showcasing a collection of some poems for my father's 46th birthday.

## How to run locally

Requirements: Node.js and npm.

1. Install dependencies:

```sh
npm install
```

2. Run the dev server:

```sh
npm run dev
```

## Technologies

- Vite
- TypeScript
- React
- Tailwind CSS

Feel free to edit files in the `src/` folder and open a browser at the address shown by the dev server.

## credits
- Credits to no one and my mom obviously who contributed to this project through a poem.

## Deploying to Netlify

This project is ready to be deployed on Netlify. Recommended settings:

- Build command: `npm run build`
- Publish directory: `dist`

Netlify will automatically pick up `netlify.toml` if present. For single-page-app routing ensure you have a redirect rule in `public/_redirects` (already added) so all requests will serve `index.html`.

Steps to deploy:

1. Push this repository to a Git provider (GitHub, GitLab or Bitbucket).
2. In Netlify, click "New site from Git" and connect your repo.
3. Use the build settings above (Netlify will use `netlify.toml` automatically).
4. Deploy and wait for the site to build. If you need a custom domain, add it in Netlify site settings.

If you'd like, I can run a local production build (`npm run build`) for a quick smoke check before you deploy.
