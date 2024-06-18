import { useEffect } from 'react'

import { themeToCookies } from 'utils/headers-handles'


export function themeFromWindow() {
  let theme = 'light'

  if (typeof window !== 'undefined') {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark'
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      themeToCookies(theme)
    }
  }, [])

  return theme
}
