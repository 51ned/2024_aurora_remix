import { LoaderFunctionArgs, json } from '@remix-run/node'

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from '@remix-run/react'

import { Aside, Footer, Navbar } from 'views/orgs'

import {
  getFromHeaders,
  themeFromCookies
} from 'utils/headers-handles'

import { GTM, themeFromWindow, vwFromWindow } from 'utils/.'

import styles from 'styles/index.css?url'


const links = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

const loader = async ({ request }: LoaderFunctionArgs) => {
  let themeRes = themeFromCookies(request)

  const vwRes = getFromHeaders('sec-ch-viewport-width', request)
  let initVw = 0
  
  if (!themeRes) {
    themeRes = getFromHeaders('sec-ch-prefers-color-scheme', request)
  }

  if (typeof vwRes === 'string') {
    initVw = +vwRes
  }

  return json({
    gtmId: process.env.GTM_ID,
    initVw,
    themeRes
  })
}


function Layout({ children }: { children: React.ReactNode }) {
  const { gtmId, themeRes, initVw } = useLoaderData<typeof loader>()
  const theme = themeRes || themeFromWindow()
  const vw = initVw || vwFromWindow()

  return (
    <html dir='ltr' lang='ru'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='color-scheme' content='light dark' />

        <Meta />

        <link
          as='font'
          crossOrigin='anonymous'
          href='fonts/montserrat.woff2'
          rel='preload'
          type='font/woff2'
        />
        
        <Links />
      </head>

      <body>
        { children }

        <Navbar vw={vw} />
        <Footer />
        <Aside theme={theme} />
        
        <ScrollRestoration />
        <Scripts />
        
        <GTM gtmId={gtmId} />
      </body>
    </html>
  )
}


export default function App() {
  return <Outlet />
}

export { Layout, links, loader }
