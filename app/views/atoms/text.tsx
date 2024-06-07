import cn from 'classnames'

import s from './text.module.css'


interface TextProps {
  children: React.ReactNode,
  padded?: boolean,
  paragraph?: boolean,
  size?: 'smallest' | 'smaller' | 'regular' | 'bigger' | 'biggest',
  tag?: keyof JSX.IntrinsicElements,
}


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
