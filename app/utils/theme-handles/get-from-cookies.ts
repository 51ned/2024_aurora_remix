import { json, LoaderFunction } from '@remix-run/node'
import { parse } from 'cookie'


export const getFromCookies: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get('Cookie')
  let cookieTheme = null

  if (cookieHeader) {
    const cookies = parse(cookieHeader)
    
    if (cookies.theme) {
      cookieTheme = cookies.theme
    }
  }

  return json({ theme: cookieTheme })
}
