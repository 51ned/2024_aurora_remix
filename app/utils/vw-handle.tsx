/**
 * Component handles viewport width-dependent rendering logic.
 * It fetches `initWidth` from headers to ensure components know what to render server-side,
 * allowing for consistent rendering across server and client environments without relying on useEffect.
 */


import { useState } from 'react'
import { useLoaderData } from '@remix-run/react'


type LoaderData = {
  initWidth: string | null
}


export function vwHandle(bpWidth: number) {
  const { initWidth } = useLoaderData<LoaderData>()
  
  const [isTargetReached, setTargetReached] = useState<boolean | null>(null)
  const [count, setCount] = useState(0)
  
  let mql: MediaQueryList | null = null

  const updateTarget = (matches: boolean) => {
    setTargetReached(matches)
  }

  const listenChanges = () => {
    if (mql) {
      mql.addEventListener('change', e => updateTarget(e.matches))
    }
  }

  if (initWidth && count < 1) {
    setTargetReached(+initWidth >= bpWidth)
    setCount(1)
  }

  if (typeof window !== 'undefined' && !mql) {
    mql = window.matchMedia(`(min-width: ${bpWidth}px)`)

    if (count < 1) {
      updateTarget(mql.matches)
    }

    listenChanges()
  }

  return isTargetReached
}
