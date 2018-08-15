import React from 'react'
import './Container.scss'

import Background from 'components/Background/Background'
import Cursor from 'components/Cursor/Cursor'
import Header from 'components/Header/Header'
import Loader from './Loader/Loader'
import MainTitle from './MainTitle/MainTitle'
import Home from './Home/Home'

 class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      isHoverMenu: false,
      menuItem: undefined // to retrieve the position of the element we are hover and send it to cursor
    }

    this.handleHoverMenu = this.handleHoverMenu.bind(this)
    this.handleLeaveMenu = this.handleLeaveMenu.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loaded: true}, () => console.log('loaded!'));
    }, 5000)
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
      <div className='background-container'>
        <Background backgroundState='initial'/>
        <Cursor 
            isHoverMenu={this.state.isHoverMenu} 
            isHoverMenuPosition={isHoverMenuPosition}
        >
        <Loader />
            {/* // <div className="global-container">
            //   <Home />
            // </div> */}
        <MainTitle />
        </Cursor>
        <Header
          isLoaded={this.state.loaded}
          isHoverMenu={this.state.isHoverMenu}
          handleHoverMenu={this.handleHoverMenu}
          handleLeaveMenu={this.handleLeaveMenu}
        />
      </div>
    )
  }
 }

export default Container