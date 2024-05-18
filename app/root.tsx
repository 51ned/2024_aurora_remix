import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import styles from 'styles/index.css?url'


const links = () => {
  return [{ rel: 'stylesheet', href: styles }]
}


function Layout({ children }: { children: React.ReactNode }) {
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

export { Layout, links }