import React from 'react'
import './Home.scss'

import Background from 'components/Background/Background'
import Cursor from 'components/Cursor/Cursor'
import Menu from 'components/Menu/Menu'
import MenuItem from 'components/Menu/MenuItem/MenuItem'

 class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHoverMenu: false,
      isHoverMenuType: '',
      menuItem: undefined // to retrieve the position of the element we are hover and send it to cursor
    }

    this.handleHoverMenu = this.handleHoverMenu.bind(this)
    this.handleLeaveMenu = this.handleLeaveMenu.bind(this)
  }

  handleHoverMenu(menuItem) {
    this.setState({
      isHoverMenu: true,
      menuItem: menuItem
    })
  }

  handleLeaveMenu() {
    this.setState({
      isHoverMenu: false,
      menuItem: undefined
    })
  }

  render() {
    const isHoverMenuPosition = this.state.menuItem ? this.state.menuItem.current.getBoundingClientRect() : ''
    return (
      <div className='background-container'>
        <Background backgroundState='initial'/>
        <div className="global-container">
          <Cursor 
            isHoverMenu={this.state.isHoverMenu} 
            isHoverMenuPosition={isHoverMenuPosition}
          />
          <Menu>
            <div className='menu__menu-container'>
              <MenuItem 
                menuType='work'
                isHoverMenu={this.state.isHoverMenu}
                handleHoverMenu={this.handleHoverMenu}
                handleLeaveMenu={this.handleLeaveMenu}
              />
              <MenuItem 
                menuType='about'
                isHoverMenu={this.state.isHoverMenu}
                handleHoverMenu={this.handleHoverMenu}
                handleLeaveMenu={this.handleLeaveMenu}
              />
            </div>
          </Menu>
        </div>
      </div>
    )
  }
 }

export default Home