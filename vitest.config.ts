import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikVite } from '@builder.io/qwik/optimizer';

export default defineConfig({
  plugins: [
    qwikCity(),
    qwikVite(),
    tsconfigPaths({ ignoreConfigErrors: true }),
  ],
  test: {
    include: [
      'src/**/*.spec.?(c|m)[jt]s?(x)',
    ],
    setupFiles: ['./vitest-setup.ts'],
    coverage: {
      all: true,
      provider: 'istanbul',
      reporter: ['text', 'html'],
      include: [
        'src/**'
      ],
      // have to exclude due to qwik-city-plan (or actually we can add as an external??? see adapter implementation)
      exclude: [
        'src/entry.**.tsx',
      ]
    }
  },
});
