import { useEffect } from 'react'

import { setCookies } from './set-cookies'


export function getFromWindow() {
  let theme = 'light'

  if (typeof window !== 'undefined') {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark'
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCookies(theme)
    }
  }, [])

  return theme
}
