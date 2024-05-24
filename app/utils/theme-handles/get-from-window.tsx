export function getFromWindow() {
  let theme = 'light'

  if (typeof window !== 'undefined') {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark'
    }
  }

  return theme
}