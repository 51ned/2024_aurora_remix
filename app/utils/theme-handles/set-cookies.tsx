export function setCookies(theme: string) {
  const expires = new Date()
  expires.setFullYear(expires.getFullYear() + 1)

  document.cookie = `theme=${theme}; path=/; expires=${expires.toUTCString()}; SameSite=Strict; Secure`;
}