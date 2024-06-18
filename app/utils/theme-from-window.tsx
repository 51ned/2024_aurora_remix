import { themeToCookies } from 'utils/headers-handles'


export function themeFromWindow() {
  let theme = 'light'

  if (typeof window !== 'undefined') {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark'
    }

    themeToCookies(theme)
  }

  return theme
}
