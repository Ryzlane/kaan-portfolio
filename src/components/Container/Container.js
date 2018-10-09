import React from 'react'
import ImagePreloader from 'image-preloader'

import Background from 'components/Background/Background'
import Cursor from 'components/Cursor/Cursor'
import Header from 'components/Header/Header'
import Loader from './Loader/Loader'
import MainTitle from './MainTitle/MainTitle'
import Home from './Home/Home'

import BackgroundGreen from 'assets/visuals/green-back.jpg'
import FrontGreen from 'assets/visuals/green-front.png'
import BackgroundTesla from 'assets/visuals/tesla-back.jpg'
import FrontTesla from 'assets/visuals/tesla-front.png'
import BackgroundVoltaire from 'assets/visuals/voltaire-back.jpg'
import FrontVoltaire from 'assets/visuals/voltaire-front.png'

const preloader = new ImagePreloader()
const images = [BackgroundGreen, FrontGreen, BackgroundTesla, FrontTesla, BackgroundVoltaire, FrontVoltaire]
const total = images.length
let loaded = 0
let loading = 0

preloader.onProgress = function() {
  loading = 100 / total * ++loaded

  console.log('loading: ', Math.round(loading))

  return loading
}

 class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      preload: false,
      loaded: false,
      loading,
      isHoverMenu: false,
      menuItem: undefined // to retrieve the position of the element we are hover and send it to cursor
    }

    this.handleHoverMenu = this.handleHoverMenu.bind(this)
    this.handleLeaveMenu = this.handleLeaveMenu.bind(this)
  }

  componentDidMount() {
    preloader.preload(images)
    .then(() => {
      this.setState({ preload: true });
    })
  }

  componentDidUpdate() {
    if (loading === 100) {
      setTimeout(
        function() {
            this.setState({loaded: true});
        }
        .bind(this),
        3000
      )
    }
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
        <Background backgroundState='initial'/>
        <Cursor 
            isHoverMenu={this.state.isHoverMenu} 
            isHoverMenuPosition={isHoverMenuPosition}
        >
          <Loader loading={loading} loaded={this.state.loaded}>
            <div className="home">
              <Home />
            </div>
          </Loader>
          <MainTitle percentLoading={loading} />
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