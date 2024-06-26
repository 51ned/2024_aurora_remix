import { Button, List, Logo } from 'views/atoms'

import { vwHandle } from 'utils/vw-handle'

import { BREAKPOINTS } from 'lib/breakpoints'
import { navData } from 'lib/data'

import s from './navbar.module.css'



export function Navbar() {
  const isXl = vwHandle(BREAKPOINTS.XL)
  console.log(isXl)
  // const NavButton = () => {
  //   return (
  //     <Button handleClick={() => {}} title='test' type='link'>
  //       Nav
  //     </Button>
  //   )
  // }

  // const NavList = () => {
  //   return (
  //     <List
  //       customStyle={s.nav}
  //       items={navData}
  //       type='unmarked'
  //     />
  //   )
  // }

  // const Nav = () => (isXl ? <NavList /> : <NavButton />)
  
  return (
    <nav>
      <div className={s.wrap}>
        
        {/* <Nav /> */}

        <span className={s.temp}>Search form</span>
      </div>
    </nav>
  )
}
