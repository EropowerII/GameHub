# Educational Mini-Game Hub

A first version of a clean, responsive hub for published educational mini-games.

## Games

The hub is data-driven. Edit `src/games.ts` to add games or change published URLs.

Current entries:

- MagoPalabra
- Matheosaurus

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production files are generated in `dist`.

## GitHub Pages

This repo includes `.github/workflows/deploy.yml`.

To publish:

1. Push the repository to GitHub.
2. In GitHub, open `Settings > Pages`.
3. Set `Build and deployment > Source` to `GitHub Actions`.
4. Push to `main`.

The Vite `base` path is derived from `GITHUB_REPOSITORY`, so project pages such as `https://username.github.io/repo-name/` work without hardcoding the repo name.
