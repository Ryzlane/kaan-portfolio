import React from 'react'
import './Header.scss'

import Menu from './Menu/Menu'
import MenuItem from './Menu/MenuItem/MenuItem'
import Logo from './Logo/Logo'


 class Header extends React.Component {
  render() {
    const { isHoverMenu, handleHoverMenu, handleLeaveMenu } = this.props
    return (
      <header className='header-container'>
        <Logo
          isHoverMenu={isHoverMenu}
          handleHoverMenu={handleHoverMenu}
          handleLeaveMenu={handleLeaveMenu}
        />
        <Menu>
          <div className='menu__menu-container'>
            <MenuItem 
              menuType='work'
              isHoverMenu={isHoverMenu}
              handleHoverMenu={handleHoverMenu}
              handleLeaveMenu={handleLeaveMenu}
            />
            <MenuItem 
              menuType='about'
              isHoverMenu={isHoverMenu}
              handleHoverMenu={handleHoverMenu}
              handleLeaveMenu={handleLeaveMenu}
            />
          </div>
        </Menu>
      </header>
    )
  }
 }

export default Header