import { LoaderFunctionArgs } from '@remix-run/node'
import { parse } from 'cookie'


export function getFromCookies(request: LoaderFunctionArgs['request']) {
  const cookieHeader = request.headers.get('cookie')
  let theme = null

  if (cookieHeader) {
    const cookies = parse(cookieHeader)
    theme = cookies.theme
  }

  return theme
}
