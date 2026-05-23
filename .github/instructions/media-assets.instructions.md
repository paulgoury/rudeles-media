---
description: "Use when adding, renaming, or editing media assets. Covers file naming conventions, the index.ts interface pattern, and coordination with the rudeles app."
applyTo: "assets/**"
---

## File Naming

All bottle image files must use **camelCase** matching the wine key in the `rudeles` app:

| `FirestoreWineResourceId` | filename |
|---|---|
| `CEPAS_JOVENES` | `cepasJovenes.png` |
| `CERRO_EL_CUBERILLO` | `cerroElCuberillo.png` |
| `FINCA_LA_NACION` | `fincaLaNacion.png` |
| `RUDELES_23` | `rudeles23.png` |
| `RUDELES_23_ALBILLO` | `rudeles23Albillo.png` |
| `AIRE` | `aire.png` |
| `RUDELES_23_ROSE` | `rudeles23Rosado.png` |
| `ARENALES` | `losArenales.png` |

## index.ts Pattern

Every new image requires **two** updates in `assets/images/index.ts`:

### 1. Update the interface

```typescript
interface ImagesBottles {
  cepasJovenes: string;
  // ... existing entries ...
  newWineKey: string;  // add here
}
```

### 2. Update the Images export

```typescript
export const Images: Types = {
  subSectionWines: {
    cepasJovenes: new URL('./bottles/cepasJovenes.png', import.meta.url).href,
    // ... existing entries ...
    newWineKey: new URL('./bottles/newWineKey.png', import.meta.url).href,  // add here
  },
  // ...
};
```

## Other Image Groups

The `others/` and `backgrounds/` directories follow the same camelCase filename convention. Their entries are typed by `ImagesSubSectionStory`, `ImagesSubSectionPhilosophy`, and `ImagesBackgrounds` interfaces respectively. When adding images to these groups, update the matching interface and add the URL entry in the same way as for bottles.

## Never

- Do not rename existing files (breaks URLs already in use)
- Do not use kebab-case, snake_case, or spaces in filenames
- Do not add images without updating `index.ts` — the TypeScript interface ensures compile-time safety
