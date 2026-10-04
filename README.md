# LightMind2026Brand
The website of LightMind Ltd. 

Live website: https://lightmind.art/

## LightMind Agent downloads

The header's **Get the app** button opens the download links in the hero section:

- [App Store — iPhone and iPad](https://apps.apple.com/us/app/lightmind-agent/id6794785684)
- [Google Play — Android](https://play.google.com/store/apps/details?id=art.lightmind.mobile)

The shared buttons are in `components/lightmind-app-links.tsx`. The bundled icon
in `public/images/lightmind-agent.jpg` is the app's published App Store artwork.

## Development

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm exec tsc --noEmit
pnpm build
```

Pushing to `main` deploys the static export to GitHub Pages at `lightmind.art`.
