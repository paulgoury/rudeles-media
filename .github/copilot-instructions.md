# rudeles-media

TypeScript media asset package for the Rudeles wine website. Consumed by the `rudeles` app via Vite module resolution.

## Purpose

This repo is the single source of truth for all image assets. It exports an `Images` object used throughout the main app.

## Structure

```
assets/images/
  index.ts          — exports Images object
  backgrounds/      — background images (.jpg)
  bottles/          — wine bottle PNGs (camelCase filenames)
  others/           — logos, story, and philosophy imagery
```

## Key Exports

- `Images` — the runtime object (`Images.logo`, `Images.backgrounds.home`, `Images.subSectionWines.cepasJovenes`, etc.)

## Adding Images

See `.github/instructions/media-assets.instructions.md` for file naming conventions, the full `FirestoreWineResourceId` → filename mapping table, and the exact `index.ts` update pattern.
