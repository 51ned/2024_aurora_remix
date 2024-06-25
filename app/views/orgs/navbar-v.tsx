import { List, Logo } from 'views/atoms'

import { vwHandle } from 'utils/vw-handle'

import { BREAKPOINTS } from 'lib/breakpoints'
import { navData } from 'lib/data'

import s from './navbar.module.css'



export function Navbar() {
  const isDesktop = vwHandle(BREAKPOINTS.XXL)
  console.log(isDesktop)
  return (
    <nav>
      <div className={s.wrap}>
        {isDesktop && <p>Desktop now</p>}
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
