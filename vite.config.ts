import path from 'path'

import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { installGlobals } from '@remix-run/node'
import { vitePlugin as remix } from '@remix-run/dev'

// import browserslist from 'browserslist'
// import { browserslistToTargets } from 'lightningcss'


installGlobals()


export default () => {
  return defineConfig({
    build: {
      cssMinify: 'lightningcss'
    },

    css: {
      // lightningcss: {
      //   drafts: {
      //     customMedia: true
      //   },
      //   targets: browserslistToTargets(browserslist('>= 0.25%'))
      // },
      modules: {
        generateScopedName: '[hash:base64:2]'
      }
    },

    plugins: [
      remix(),
      tsconfigPaths()
    ],

    resolve: {
      alias: {
        'hoc': path.resolve(__dirname, 'app/hoc'),
        'hooks': path.resolve(__dirname, 'app/hooks'),
        'lib': path.resolve(__dirname, 'app/lib'),
        'public': path.resolve(__dirname, 'public'),
        'stores': path.resolve(__dirname, 'app/stores'),
        'styles': path.resolve(__dirname, 'app/styles'),
        'views': path.resolve(__dirname, 'app/views'),
        'utils': path.resolve(__dirname, 'app/utils')
      }
    },

    server: {
      headers: {
        'accept-ch': 'sec-ch-prefers-color-scheme'
      },
      port: 3000
    }
  })
}
