import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { vitePlugin as remix } from '@remix-run/dev'

import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'


type ViteConfigInput = {
  command: string,
  mode: string
}


export default (args: ViteConfigInput) => {
  const generateScopedName = args.mode === 'development'
    ? '[local]_[hash:base64:3]'
    : '[hash:base64:3]'

  return defineConfig({
    build: {
      cssMinify: 'lightningcss'
    },
  
    css: {
      lightningcss: {
        targets: browserslistToTargets(browserslist('>= 0.25%'))
      },
      modules: {
        generateScopedName
      },
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
}
