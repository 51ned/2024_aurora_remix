import { LoaderFunctionArgs, json } from '@remix-run/node'

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation
} from '@remix-run/react'

import { GTM } from 'views/atoms'
import { Aside, Footer, Nav } from 'views/orgs'

import {
  getFromCookies,
  getFromHeaders,
  getFromWindow
} from 'utils/theme-handles'

import styles from 'styles/index.css?url'


const links = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

const loader = async ({ request }: LoaderFunctionArgs) => {
  let res = getFromCookies(request)
  
  if (!res) {
    res = getFromHeaders(request)
  }

  return json({
    gtmId: process.env.GTM_ID,
    theme: res
  })
}


function Layout({ children }: { children: React.ReactNode }) {
  let theme = useLoaderData<typeof loader>().theme
  
  if (!theme) {
    theme = getFromWindow()
  }

  const gtmId = useLoaderData<typeof loader>().gtmId
  
  return (
    <html dir='ltr' lang='ru'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='color-scheme' content='light dark' />
        
        <Meta />
        <Links />
      </head>

      <body>
        { children }

        <Nav />
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
