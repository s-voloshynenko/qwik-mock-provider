import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import * as dotenv from 'dotenv';
import packageJson from './package.json';

// extends proces.env variables for vite config in development
dotenv.config({ path: './.env.local' });

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        // for sass global imports
        "@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@use "@/styles/_screens.scss" as *;`
        },
      },
    },
    define: {
      __APP_VERSION__: JSON.stringify(getAppVersion()),
    },
    server: {
      headers: {
        // Don't cache the server response in dev mode
        "Cache-Control": "public, max-age=0",
      },
    },
    // uncomment me if want to fix QWIK build
    // build: {
    //   rollupOptions: {
    //     external: [
    //       /\.spec.tsx/,
    //     ]
    //   }
    // },
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});

function bundle(bundleName: string, symbols: string[]) {
  return symbols.reduce((obj, key) => {
    // Sometimes symbols are prefixed with `s_`, remove it.
    obj[key.replace('s_', '')] = obj[key] = bundleName;
    return obj;
  }, {} as Record<string, string>);
}

function getAppVersion() {
  return packageJson.version;
}
