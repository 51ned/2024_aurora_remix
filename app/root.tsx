import { useEffect } from 'react'
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

import { Aside, Footer, Nav } from 'views/orgs'

import * as gtag from 'utils/gtm-handle'

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
  const location = useLocation()

  useEffect(() => {
    if (gtmId?.length) {
      gtag.pageview(location.pathname, gtmId);
    }
  }, [location, gtmId])

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
        {process.env.NODE_ENV === 'development' || !gtmId ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gtmId}', {
                  page_path: window.location.pathname,
                });
              `
              }}
            />
          </>
        )}

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
