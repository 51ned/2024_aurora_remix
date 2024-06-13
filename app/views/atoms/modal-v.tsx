import cn from 'classnames'

import { useCallback, useContext } from 'react'

import { ModalContext } from 'stores/.'
import { Button } from '.'

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
  const { closeModal, refsObj } = useContext(ModalContext)

  const dialogRef = useCallback((node: HTMLDialogElement) => {
    refsObj[refName] = node
  }, [refName, refsObj])

  const dialogClasses = cn(style.wrap, style[withStyle], {})  

  const backdropClick = useCallback((currentTarget: { target: object }) => {
    currentTarget.target === refsObj[refName] && closeModal(refsObj[refName])
  }, [closeModal, refName, refsObj])
  
  return (
    <dialog
      aria-labelledby={controllingID}
      className={dialogClasses}
      id={dialogID}
      onCancel={() => closeModal(refsObj[refName])}
      onClick={backdropClick}
      ref={dialogRef}
    >
      <section className={style.container}>
        <div className={style.header}>
          <h3>{ withTitle }</h3>
          
          <Button 
            handleClick={() => closeModal(refsObj[refName])}
            withStyle='stripped'
            withTitle='Закрыть главное меню'
          />
        </div>
        
        { children }
      </section>
    </dialog>
  )
}
