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

import styles from 'styles/index.css?url'


const links = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

async function loader({ request }: LoaderFunctionArgs) {
  let themeFromHeaders = null

  const cookieHeader = request.headers.get('Cookie')

  if (cookieHeader) {
    const cookies = parse(cookieHeader)

    if (cookies.theme) {
      themeFromHeaders = cookies.theme
    } else {
      themeFromHeaders = request.headers.get('sec-ch-prefers-color-scheme')
    }
  } 

  return json({fromHeaders: themeFromHeaders})
}


function Layout({ children }: { children: React.ReactNode }) {
  const theme = useLoaderData<typeof loader>()
  console.log(theme.fromHeaders)

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