import { useEffect, useState } from 'react'


export function vwFromWindow() {
  const [vw, setVw] = useState<number | undefined>(undefined)
  console.log('i am here, bitches')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setVw(window.innerWidth)
      }
    
      window.addEventListener('resize', handleResize)
      handleResize()
    
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return vw
}