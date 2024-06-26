/**
  This function handles viewport width-dependent rendering logic.
  It fetches `initVw` from http-headers (look at app/root.tsx) to ensure components know what to render server-side,
  allowing for consistent rendering across server and client environments without relying on 'useEffect'.
  'useRef' needed to ensure, that event listener will be added only once.
 */


import { useRef, useState } from 'react'
import { useLoaderData } from '@remix-run/react'


type LoaderData = {
  initVw: string | null
}


export function vwHandle(bpWidth: number) {
  const { initVw } = useLoaderData<LoaderData>()
  const [isTargetReached, setTargetReached] = useState<boolean | null>(null)
  const hasListener = useRef(false)

  let mql: MediaQueryList

  const targetsHandle = () => {
    if (typeof window !== 'undefined') {
      mql = window.matchMedia(`(min-width: ${bpWidth}px)`)

      if (isTargetReached === null) {
        setTargetReached(mql.matches)
      }

      if (hasListener.current === false) {
        mql.addEventListener('change', (e) => setTargetReached(e.matches))
        hasListener.current = true
      }
    }
  }

  if (initVw) {
    if (isTargetReached === null) {
      setTargetReached(+initVw >= bpWidth)
    }
  } 
  
  targetsHandle()
  
  return isTargetReached
}
