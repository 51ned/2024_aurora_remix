import { withCustomStyle } from 'hoc/.'

import s from './fieldset.module.css'


interface FieldsetProps {
  children: React.ReactNode,
  className?: string,
  customStyle?: string
}


function NudeFieldset({
  children,
  className
}: FieldsetProps) {
  return (
    <fieldset className={className}>
      {children}
    </fieldset>
  )
}


export const Fieldset = withCustomStyle(NudeFieldset, s.fieldset)