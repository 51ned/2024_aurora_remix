import React, { useId } from 'react'

import s from './button.module.css'


interface ButtonProps {
  children?: React.ReactNode,
  controlledID?: string,
  handleClick: () => void,
  isActive?: boolean,
  isExpandable?: boolean,
  title: string
  type: 'accordion' | 'link' | 'primary' | 'regular' | 'stripped' | 'tab'
  wrap?: keyof JSX.IntrinsicElements,
}


export function Button({
  children,
  controlledID,
  handleClick,
  isActive,
  isExpandable,
  title,
  type,
  wrap}: ButtonProps) {
  const ButtonWrapTag = wrap ?? React.Fragment
  const buttonId = useId()

  let buttonWrapOpts: {[key: string]: string} = {}
  let buttonOpts: {[key: string]: boolean | number | string | undefined} = {}
  let buttonIcon: React.ReactNode

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
        className={s[type]}
        id={buttonId}
        onClick={handleClick}
        title={title}
        {...buttonOpts}
      >
        { children }
        { buttonIcon }
      </button>
    </ButtonWrapTag>
  )
}
