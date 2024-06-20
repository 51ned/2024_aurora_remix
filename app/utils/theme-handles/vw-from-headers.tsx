import { LoaderFunctionArgs } from '@remix-run/node'


export function vwFromHeaders (request: LoaderFunctionArgs['request']) {
  return request.headers.get('sec-ch-viewport-width')
}