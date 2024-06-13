import { useState } from 'react'

import { Button } from 'views/atoms'
import { Toggle } from 'views/mols'
import { inputsData } from 'lib/data'

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
          customStyle={s.toggle_icon}
          dir='horisontal'
          inputsData={inputsData}
          legendText='Тема оформления'
          onInputChange={onInputChange}
          valueToCompare={currTheme}
        />

        <Button
          customStyle={s.button}
          handleClick={() => {}}
          title='Форма обратной связи'
          type='regular'
        />

        <Button
          customStyle={s.button}
          handleClick={() => {}}
          title='Чат с экспертом'
          type='regular'
        />
      </div>
    </aside>
  )
}
