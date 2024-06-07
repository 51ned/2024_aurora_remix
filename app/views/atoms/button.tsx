import React, { useId } from 'react'
import cn from 'classnames'

import s from './button.module.css'


interface ButtonProps {
  children?: React.ReactNode,
  controlledID?: string,
  customStyle?: string
  handleClick: () => void,
  isActive?: boolean,
  isExpandable?: boolean,
  title: string
  type: 'accordion' | 'link' | 'regular' | 'stripped' | 'tab',
  wrap?: keyof JSX.IntrinsicElements
}


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
        className={cn(s[type], customStyle)}
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
