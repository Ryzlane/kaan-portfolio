import React from 'react'
import { Route } from 'react-router-dom'

import Background from 'components/Background/Background'
import Cursor from 'components/Cursor/Cursor'
import Header from 'components/Header/Header'
import Home from './Home/Home'
import About from './About/About'

 class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHoverMenu: false,
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
    const isHoverMenuPosition = this.state.menuItem ? this.state.menuItem.current.getBoundingClientRect() : undefined
    return (
      <div className='global-container'>
        <Background backgroundState={this.props.location.pathname === '/' ? 'initial' : 'changed'}/>
        <Cursor 
          isHoverMenu={this.state.isHoverMenu} 
          isHoverMenuPosition={isHoverMenuPosition}
        >
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Cursor>
        <Header
          isLoaded={true}
          isHoverMenu={this.state.isHoverMenu}
          handleHoverMenu={this.handleHoverMenu}
          handleLeaveMenu={this.handleLeaveMenu}
        />
      </div>
    )
  }
 }

export default Container