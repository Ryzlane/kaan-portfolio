import React from 'react'
import PropTypes from 'prop-types'
import ImagePreloader from 'image-preloader'

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
  loading = (100 / total * ++loaded)
  console.log('loading: ', Math.round(loading))

  return loading
}

class Loader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      preload: false,
      loaded: false
    }
    this.loaderContainerRef = React.createRef()
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

  render() {
    return (
      <div className='loader'>
        {
          !this.state.loaded ?
            <div className='loader__background'>
              <div ref={this.loaderContainerRef} className='loader__background__left' style={{ height: `${loading}%` }}></div>
              <div className='loader__background__right' style={{ height: `${loading}%` }}></div>
            </div>
          :
          this.props.children
        }
      </div>
    )
  }
 }

Loader.propTypes = {
  children: PropTypes.element.isRequired
}

export default Loader