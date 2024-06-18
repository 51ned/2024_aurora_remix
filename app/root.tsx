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

import { GTM, themeFromWindow } from 'utils/.'

import styles from 'styles/index.css?url'


const links = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

const loader = async ({ request }: LoaderFunctionArgs) => {
  const vwRes = getFromHeaders('sec-ch-viewport-width', request)
  let themeRes = themeFromCookies(request)
  
  if (!themeRes) {
    themeRes = getFromHeaders('sec-ch-prefers-color-scheme', request)
  }

  return json({
    gtmId: process.env.GTM_ID,
    theme: themeRes,
    vw: vwRes
  })
}


function Layout({ children }: { children: React.ReactNode }) {
  let theme = useLoaderData<typeof loader>().theme
  
  if (!theme) {
    theme = themeFromWindow()
  }
  // и хук с медиа-запросом тоже сюда в ифчик
  const gtmId = useLoaderData<typeof loader>().gtmId
  const vw = useLoaderData<typeof loader>().vw
  console.log(vw)
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

        <Navbar />
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
