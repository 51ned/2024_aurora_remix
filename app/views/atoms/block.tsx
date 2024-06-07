import React from 'react'
import cn from 'classnames'

import s from './block.module.css'


interface BoxProps {
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
}: BoxProps) {
  
  const Wrap = wrap ?? React.Fragment
  const wrapDynamicClass: {[key: string]: string} = {}

  if (wrap) {
    wrapDynamicClass['className'] = cn(s.wrap, wrapCustomStyle)
  }

  return (
    <Wrap {...wrapDynamicClass}>
      <Container className={s.container}>
        { children }
      </Container>
    </Wrap>
  )
}
