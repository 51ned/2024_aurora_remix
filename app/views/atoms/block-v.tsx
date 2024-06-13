import React from 'react'
import cn from 'classnames'

import s from './block.module.css'


interface BlockProps {
  children: React.ReactNode,
  container: 'article' | 'div' | 'section',
  wrap?: 'header' | 'div' | 'main',
  wrapCustomStyle?: string
}


export function Block({
  children,
  container: Container,
  wrap,
  wrapCustomStyle
}: BlockProps) {
  const Wrap = wrap ?? React.Fragment
  const dynamicClass: {[key: string]: string} = {}

  if (wrap) {
    dynamicClass['className'] = cn(s.wrap, wrapCustomStyle)
  }

  return (
    <Wrap {...dynamicClass}>
      <Container className={s.container}>
        { children }
      </Container>
    </Wrap>
  )
}
