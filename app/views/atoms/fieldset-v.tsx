import cn from 'classnames'

import s from './fieldset.module.css'


interface FieldsetProps {
  children: React.ReactNode,
  customStyle?: string
}


export function Fieldset({
  children,
  customStyle
}: FieldsetProps) {
  const combinedStyle = cn(s.fieldset, customStyle)

  return (
    <fieldset className={combinedStyle}>
      { children }
    </fieldset>
  )
}
