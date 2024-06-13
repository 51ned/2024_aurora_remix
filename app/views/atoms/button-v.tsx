import React, { useId } from 'react'
import cn from 'classnames'

import type { ButtonProps } from 'lib/types'

import s from './button.module.css'


export function Button({
  children,
  controlledID,
  customStyle,
  handleClick,
  isActive,
  isExpandable,
  title,
  type,
  wrap}: ButtonProps) {
  const ButtonWrapTag = wrap ?? React.Fragment

  const buttonId = useId()
  const buttonWrapOpts: {[key: string]: string} = {}
  const buttonOpts: {[key: string]: boolean | number | string | undefined} = {}

  if (wrap) {
    buttonWrapOpts['className'] = `${s.container}`
  }

  if (type === 'tab') {
    buttonOpts['aria-selected'] = isActive
    buttonOpts['role'] = 'tab'
  }
  
  if (isExpandable) {
    buttonOpts['aria-expanded'] = isActive
  }
  
  return (
    <ButtonWrapTag {...buttonWrapOpts}>
      <button
        aria-controls={controlledID}
        className={cn(s.base, s[type], customStyle)}
        id={buttonId}
        onClick={handleClick}
        title={title}
        {...buttonOpts}
      >
        { children }
      </button>
    </ButtonWrapTag>
  )
}
