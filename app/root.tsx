import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import { Button } from 'views/atoms'


export function Layout({ children }: { children: React.ReactNode }) {
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
        <Button />
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
