import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss'

import Menu from './Menu/Menu'
import MenuItem from './Menu/MenuItem/MenuItem'
import Logo from './Logo/Logo'


class Header extends React.Component {
 render() {
   const { isHoverMenu, handleHoverMenu, handleLeaveMenu, isLoaded } = this.props
   return (
     <header className='header-container'>
       <Logo
         isHoverMenu={isHoverMenu}
         handleHoverMenu={handleHoverMenu}
         handleLeaveMenu={handleLeaveMenu}
       />
       {
         isLoaded &&
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
       }
     </header>
   )
 }
}

Header.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  isHoverMenu: PropTypes.bool.isRequired,
  handleHoverMenu: PropTypes.func.isRequired,
  handleLeaveMenu: PropTypes.func.isRequired
}


export default Header