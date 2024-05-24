import { useEffect, useState } from 'react'

import { setCookies } from './set-cookies'

export function getFromWindow() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
      }
    }

    setCookies(theme)
  }, [])

  return theme
}