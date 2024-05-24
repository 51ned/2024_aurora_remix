import { LoaderFunctionArgs } from '@remix-run/node'


export function getFromHeaders (request: LoaderFunctionArgs['request']) {
  return request.headers.get('sec-ch-prefers-color-scheme')
}