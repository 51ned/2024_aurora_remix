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
  
  let mql: MediaQueryList

  const listenChanges = () => {
    mql.addEventListener('change', e => setTargetReached(e.matches))
  }

  if (initWidth && count < 1) {
    setTargetReached(+initWidth >= bpWidth)
    setCount(1)
  }

  if (typeof window !== 'undefined') {
    mql = window.matchMedia(`(min-width: ${bpWidth}px)`)

    // bug here
    if (!initWidth && count < 1) {
      setTargetReached(mql.matches)
    }

    listenChanges()
  }

  return isTargetReached
}
