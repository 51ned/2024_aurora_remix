import { List } from 'views/atoms'
import { navData } from 'lib/data'

import s from './aside.module.css'


export function Nav() {
  return (
    <nav>
      <div className={s.wrap}>
        <h1>Logo</h1>
        
        <List items={navData} type='unmarked' />
      </div>
    </nav>
  )
}