import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import WorkCircle from 'assets/menu/work-hover.png'
import AboutCircle from 'assets/menu/about-hover.png'

class MenuItem extends React.Component {
  constructor(props) {
    super(props)

    this.menuItem = React.createRef()
  }
  render() {
    const { menuType, handleHoverMenu, handleLeaveMenu } = this.props
    return (
      <div
        ref={this.menuItem} className='menu__container__item' onMouseEnter={() => { handleHoverMenu(this.menuItem) }} onMouseLeave={() => { handleLeaveMenu() }}>
        <div>
        {
          menuType === 'work' ?
          <Link to='/work'>
            <div>
              <img src={WorkCircle} alt="work circle"/>
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32">
                <polygon fill="none" stroke="#323232" strokeLinejoin="round" points="693.5 0 709 31 678 31" transform="translate(-677)"/>
              </svg>
            </div>
          </Link>
          :
          <Link to='about'>
            <div>
              <img src={AboutCircle} alt="about circle"/>
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
                <rect width="30" height="30" x="786.5" y=".5" fill="none" stroke="#323232" rx="1" transform="translate(-786)"/>
              </svg>
            </div>
          </Link>
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
