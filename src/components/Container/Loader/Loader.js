import React from 'react'
import PropTypes from 'prop-types'
import ImagePreloader from 'image-preloader'

import BackgroundGreen from 'assets/visuals/green-back.jpg'
import FrontGreen from 'assets/visuals/green-front.png'
import BackgroundTesla from 'assets/visuals/tesla-back.jpg'
import FrontTesla from 'assets/visuals/tesla-front.png'
import BackgroundVoltaire from 'assets/visuals/voltaire-back.jpg'
import FrontVoltaire from 'assets/visuals/voltaire-front.png'
import './Loader.scss'

const preloader = new ImagePreloader()
const images = [BackgroundGreen, FrontGreen, BackgroundTesla, FrontTesla, BackgroundVoltaire, FrontVoltaire]
const total = images.length
let loaded = 0
let loading = 0


preloader.onProgress = function() {
  loading = (100 / total * ++loaded)
  console.log('loading: ', Math.round(loading))

  return loading
}

class Loader extends React.Component {
  constructor(props) {
    super(props)

    this.loaderContainerRef = React.createRef()
  }

  componentDidMount() {
    preloader.preload(images)
    .then(() => {
      this.setState({preload: true});
    })
  }

  componentDidUpdate() {
    if (this.loaderContainerRef.current.style.height === '100%') {
      console.log('loader ended!')
    }
  }

  render() {
    return (
      <div className='loader-container'>
            <div className='loader-container__background'>
              <div ref={this.loaderContainerRef} className='loader-container__background__left' style={{ height: `${loading}%` }}></div>
              <div className='loader-container__background__right' style={{ height: `${loading}%` }}></div>
            </div>
      </div>
    )
  }
 }

Loader.propTypes = {
  children: PropTypes.element.isRequired
}

export default Loader