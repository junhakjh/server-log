import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/server/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    outDir: 'dist/server',
    clean: true,
    external: ['react', 'react-dom'],
  },
  {
    entry: ['src/client/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    outDir: 'dist/client',
    clean: true,
    external: ['react', 'react-dom'],
    esbuildOptions: (options) => {
      options.banner = {
        js: '"use client"',
      };
    },
  },
]);
