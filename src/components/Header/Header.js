import React from 'react'
import PropTypes from 'prop-types'

import Menu from './Menu/Menu'
import MenuItem from './Menu/MenuItem/MenuItem'
import Logo from './Logo/Logo'


class Header extends React.Component {
  static propTypes = {
    isLoaded: PropTypes.bool.isRequired,
    isHoverMenu: PropTypes.bool.isRequired,
    handleHoverMenu: PropTypes.func.isRequired,
    handleLeaveMenu: PropTypes.func.isRequired
  }
  render() {
   const { isHoverMenu, handleHoverMenu, handleLeaveMenu, isLoaded } = this.props
   return (
     <header className='header'>
      <div className='logo'>
        <Logo
          isHoverMenu={isHoverMenu}
          handleHoverMenu={handleHoverMenu}
          handleLeaveMenu={handleLeaveMenu}
        />
      </div>
      {
        isLoaded &&
        <Menu>
          <div className='menu__container'>
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
      }
     </header>
   )
  }
}

export default Header