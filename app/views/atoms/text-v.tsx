import cn from 'classnames'

import { TextProps } from 'lib/types'

import s from './text.module.css'


export function Text({
  children,
  padded,
  paragraph,
  size = 'regular',
  tag: Tag = 'p'
}: TextProps) {
  const className = cn(s.base, {
    [s.smallest]: size === 'smallest',
    [s.smaller]: size === 'smaller',
    [s.regular]: size === 'regular',
    [s.bigger]: size === 'bigger',
    [s.biggest]: size === 'biggest',
    [s.padded]: padded,
    [s.paragraph]: paragraph
  })

  return (
    <Tag className={className}>
      { children }
    </Tag>
  )  
}
