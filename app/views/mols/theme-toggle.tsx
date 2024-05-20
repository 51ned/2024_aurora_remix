import { useState } from 'react'

import { Toggle } from 'views/atoms'
import { inputsData } from 'lib/components-data/theme-toggle'

import s from './theme-toggle.module.css'


export function ThemeToggle({ theme }: { theme: string | null }) {
  const [currTheme, setCurrTheme] = useState(theme)

  const onInputChange = (value: string) => {
    setCurrTheme(value)
  }
  
  return (
    <Toggle
      customStyles={s.icon}
      dir='horisontal'
      inputsData={inputsData}
      legendText='Тема оформления'
      onInputChange={onInputChange}
      valueToCompare={currTheme}
    />
  )
}
