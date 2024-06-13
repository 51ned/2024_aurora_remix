import cn from 'classnames'

import type { HeadingProps } from 'lib/types'


export function Heading({
  children,
  level,
  padded,
  size}: HeadingProps) {
  const Tag: keyof JSX.IntrinsicElements = `h${level}`

  const className = cn(size ? `${size}-font-style` : `h${level}-font-style`, {
    ['padded']: padded
  })

  return (
    <Tag className={className}>
      { children }
    </Tag>
  )
}
