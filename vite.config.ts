import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { installGlobals } from '@remix-run/node'
import { vitePlugin as remix } from '@remix-run/dev'

import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'

// import postcssModules from 'postcss-modules'


installGlobals()


export default defineConfig({
  build: {
    cssMinify: 'lightningcss'
  },

  css: {
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%'))
    },
    // postcss: {
    //   plugins: [
    //     postcssModules({
    //       generateScopedName: '[hash:base64:8]'
    //     })
    //   ]
    // },
    transformer: 'lightningcss'
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
