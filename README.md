# Hub de Minijuegos Educativos

Primera version de un hub limpio y responsive para minijuegos educativos publicados.

## Juegos

El hub esta basado en datos. Edita `src/games.ts` para agregar juegos o cambiar URLs publicadas.

Entradas actuales:

- MagoPalabra
- Matheosaurus

## Desarrollo

```bash
npm install
npm run dev
```

## Compilacion

```bash
npm run build
```

Los archivos de produccion se generan en `dist`.

## GitHub Pages

Este repo incluye `.github/workflows/deploy.yml`.

Para publicar:

1. Sube los cambios a GitHub.
2. En GitHub, abre `Settings > Pages`.
3. Configura `Build and deployment > Source` como `GitHub Actions`.
4. Sube cambios a `main`.

La ruta `base` de Vite se deriva de `GITHUB_REPOSITORY`, asi que paginas de proyecto como `https://username.github.io/repo-name/` funcionan sin fijar el nombre del repo en el codigo.
