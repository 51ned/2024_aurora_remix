import { List, Logo } from 'views/atoms'

import { useMediaQuery } from 'hooks/.'

import { BREAKPOINTS } from 'lib/breakpoints'
import { navData } from 'lib/data'

import s from './navbar.module.css'


export function Navbar() {
  const isTablet = useMediaQuery(BREAKPOINTS.XL)

  return (
    <nav>
      <div className={s.wrap}>
        { isTablet && <Logo /> }
        
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