import { LoaderFunctionArgs, json } from '@remix-run/node'

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from '@remix-run/react'

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
  let response = getFromCookies(request)
  console.log(`res from cookies: ${response}`)
  if (!response) {
    response = getFromHeaders(request)
  }

  return json({ theme: response })
}


function Layout({ children }: { children: React.ReactNode }) {
  let theme = useLoaderData<typeof loader>().theme
  console.log(`theme from headers: ${theme}`)
  if (!theme) {
    theme = getFromWindow()
  }

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
        <Aside theme={theme} />
        <Footer />
        
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}


export default function App() {
  return <Outlet />
}

export { Layout, links, loader }