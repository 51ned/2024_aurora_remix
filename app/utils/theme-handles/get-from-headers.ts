import { json, LoaderFunction } from '@remix-run/node'


export const getFromHeaders: LoaderFunction = async ({ request }) => {
  const headers = request.headers
  const theme = headers.get('sec-ch-prefers-color-scheme')

  return json({ theme })
}
