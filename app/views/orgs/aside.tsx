import { useState } from 'react'

import { Toggle } from 'views/mols'
import { inputsData } from 'lib/components-data/theme-toggle'

import s from './aside.module.css'


export function Aside({ theme }: { theme: string | null }) {
  const [currTheme, setCurrTheme] = useState(theme)

  const onInputChange = (value: string) => {
    setCurrTheme(value)
  }

  return (
    <aside>
      <div className={s.wrap}>
        <Toggle
          customStyle={s.icon}
          dir='horisontal'
          inputsData={inputsData}
          legendText='Тема оформления'
          onInputChange={onInputChange}
          valueToCompare={currTheme}
        />
      </div>
    </aside>
  )
}
