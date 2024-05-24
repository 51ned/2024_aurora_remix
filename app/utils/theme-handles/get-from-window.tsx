import { useEffect, useState } from 'react'

import { setCookies } from './set-cookies'


export function getFromWindow() {
  const [theme, setTheme] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCookies(theme)
    }
  }, [theme])

  return theme
}
