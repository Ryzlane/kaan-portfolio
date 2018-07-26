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
      isHoverMenu: false
    }

    this.handleHoverMenu = this.handleHoverMenu.bind(this)
    this.handleLeaveMenu = this.handleLeaveMenu.bind(this)
  }

  handleHoverMenu() {
    this.setState({ isHoverMenu: true })
    console.log('hover')
    console.log(this.state.isHoverMenu)
  }

  handleLeaveMenu() {
    this.setState({ isHoverMenu: false })
    console.log('not hover')
    console.log(this.state.isHoverMenu)
  }

  render() {
    return (
      <div className='background-container'>
        <Background backgroundState='initial'/>
        <div className="global-container">
          <Cursor isHoverMenu={this.state.isHoverMenu} />
          <Menu>
            <div className='menu__menu-container'>
              <MenuItem menuType='work' handleHoverMenu={this.handleHoverMenu} handleLeaveMenu={this.handleLeaveMenu} />
              <MenuItem menuType='about' handleHoverMenu={this.handleHoverMenu} handleLeaveMenu={this.handleLeaveMenu} />
            </div>
          </Menu>
        </div>
      </div>
    )
  }
 }

export default Home