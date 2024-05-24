import { useEffect, useState } from 'react'

import { setCookies } from './set-cookies'


export function getFromWindow(): string {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const windowTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

      setTheme(windowTheme)
      setCookies(windowTheme)
    }
  }, [])

  return theme
}

