import React from 'react'
import cn from 'classnames'

import s from './block.module.css'


interface BlockProps {
  children: React.ReactNode,
  container: 'article' | 'div' | 'section',
  wrap?: 'header' | 'div' | 'main',
  customStyle?: string
}


export function Block({
  children,
  customStyle,
  container: Container,
  wrap
}: BlockProps) {
  const Wrap = wrap ?? React.Fragment
  const wrapStyles: {[key: string]: string} = {}

  if (wrap) {
    wrapStyles['className'] = cn(s.wrap, customStyle)
  }

  return (
    <Wrap {...wrapStyles}>
      <Container className={s.container}>
        { children }
      </Container>
    </Wrap>
  )
}
