import { List, Logo } from 'views/atoms'
import { navData } from 'lib/data'

import s from './navbar.module.css'


export function Navbar() {
  return (
    <nav>
      <div className={s.wrap}>
        <Logo />
        
        <List
          customStyle={s.nav}
          items={navData}
          type='unmarked'
        />

        <span className={s.temp}>Search form</span>
      </div>
    </nav>
  )
}