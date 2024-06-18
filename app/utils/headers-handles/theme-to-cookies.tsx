export function themeToCookies(theme: string) {
  const expires = new Date()
  expires.setFullYear(expires.getFullYear() + 1)

  document.cookie = `theme=${theme}; expires=${expires.toUTCString()}; path=/; SameSite=Strict; Secure`
}