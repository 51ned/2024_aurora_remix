/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */


import cn from 'classnames'

import { useCallback } from 'react'

import { modalStore } from 'stores/modal-s'
import { Button, Heading as H } from 'views/atoms'

import style from './modal.module.css'


interface ModalProps {
  children: React.ReactNode,
  controllingID: string,
  dialogID: string
  refName: string,
  withStyle: 'modal' | 'offcanvas',
  withTitle: string
}


export function Modal({
  children,
  controllingID,
  dialogID,
  refName,
  withStyle,
  withTitle
}: ModalProps) {
  const { closeModal, refObj } = modalStore

  const dialogRef = useCallback((node: HTMLDialogElement) => {
    refObj[refName] = node
  }, [refName, refObj])

  const dialogClasses = cn(style.wrap, style[withStyle], {})  

  const backdropClick = useCallback((currentTarget: { target: object }) => {
    currentTarget.target === refObj[refName] && closeModal(refObj[refName])
  }, [closeModal, refName, refObj])
  
  return (
    <dialog
      aria-labelledby={controllingID}
      className={dialogClasses}
      id={dialogID}
      onCancel={() => closeModal(refObj[refName])}
      onClick={backdropClick}
      ref={dialogRef}
    >
      <section className={style.container}>
        <div className={style.header}>
          <H level='3'>{ withTitle }</H>
          
          <Button 
            handleClick={() => closeModal(refObj[refName])}
            title='Закрыть главное меню'
            type='stripped'
          />
        </div>
        
        { children }
      </section>
    </dialog>
  )
}
