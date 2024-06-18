import { LoaderFunctionArgs } from '@remix-run/node'


export function getFromHeaders (
  header: string,
  request: LoaderFunctionArgs['request']
  ) {
  return request.headers.get(header)
}