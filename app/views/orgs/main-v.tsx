export function Main({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      Main
      { children }
    </main>
  )
}