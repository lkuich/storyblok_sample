import path from 'path';

import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: './src/index.ts',
      exportName: 'api',
      tsCompiler: 'esbuild'
    })
  ],
  resolve: {
    alias: {
      utils: path.resolve(__dirname, './src/utils'),
      shared: path.resolve(__dirname, './src/shared'),
      knexfile: path.resolve(__dirname, './src/knexfile.ts')
    }
  },
  clearScreen: false,
  optimizeDeps: {
    exclude: [
      'pg-native',
      'snappy'
    ],
  },
});
