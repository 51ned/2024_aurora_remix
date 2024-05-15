import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { installGlobals } from '@remix-run/node'
import { vitePlugin as remix } from '@remix-run/dev'

import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'


installGlobals()


export default defineConfig({
  build: {
    cssMinify: 'lightningcss'
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%'))
    }
  },
  plugins: [
    remix(),
    tsconfigPaths()
  ],
  server: {
    headers: {
      'accept-ch': 'sec-ch-prefers-color-scheme'
    }
  }
})
