export function setCookies(theme: string) {
  const expires = new Date()
  expires.setFullYear(expires.getFullYear() + 1)

  document.cookie = `expires=${expires.toUTCString()}; path=/; SameSite=Strict; Secure theme=${theme};`
}