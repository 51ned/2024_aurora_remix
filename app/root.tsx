import { LoaderFunctionArgs, json } from '@remix-run/node'

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from '@remix-run/react'

import { parse } from 'cookie'

import { Aside, Footer, Nav } from 'views/orgs'

import { getThemeFromWindow } from 'utils/.'

import styles from 'styles/index.css?url'


const links = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

const loader = async ({ request }: LoaderFunctionArgs) => {
  let fromHeaders = null

  const cookieHeader = request.headers.get('Cookie')

  if (cookieHeader) {
    const cookies = parse(cookieHeader)

    if (cookies.theme) {
      fromHeaders = cookies.theme
    } else {
      fromHeaders = request.headers.get('sec-ch-prefers-color-scheme')
    }
  } 

  return json({ theme: fromHeaders })
}


function Layout({ children }: { children: React.ReactNode }) {
  let theme = useLoaderData<typeof loader>().theme
  
  if (!theme) {
    theme = getThemeFromWindow()
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