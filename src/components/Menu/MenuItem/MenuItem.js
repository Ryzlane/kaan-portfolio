import React from 'react'
import PropTypes from 'prop-types';

import './MenuItem.scss'

class MenuItem extends React.Component {
  render() {
    const { menuType, handleHoverMenu, handleLeaveMenu } = this.props
    return (
      <div className='menu__menu-item' onMouseEnter={() => { handleHoverMenu() }} onMouseLeave={() => { handleLeaveMenu() }}>
        <div className={`menu-item__${menuType}`}>
        {
          menuType === 'work' ?
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32">
              <polygon fill="none" stroke="#323232" stroke-linejoin="round" points="693.5 0 709 31 678 31" transform="translate(-677)"/>
            </svg>
          :
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
              <rect width="30" height="30" x="786.5" y=".5" fill="none" stroke="#323232" rx="1" transform="translate(-786)"/>
            </svg>
        }
        </div>
      </div>
    )
  }
}

MenuItem.propTypes = {
  menuType: PropTypes.string.isRequired,
  handleHoverMenu: PropTypes.func.isRequired,
  handleLeaveMenu: PropTypes.func.isRequired
}

export default MenuItem
