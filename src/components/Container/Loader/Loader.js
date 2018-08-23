import React from 'react'
import PropTypes from 'prop-types'
import ImagePreloader from 'image-preloader'

import BackgroundGreen from 'assets/visuals/green-back.jpg'
import FrontGreen from 'assets/visuals/green-front.png'
import './Loader.scss'

var preloader = new ImagePreloader()

// preloader.onProgress = function(info) {
//   text  = progress.style.width = parseInt(100 / total * ++loaded) + '%';
// }

 class Loader extends React.Component {
   constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
   }

   componentDidMount() {
    preloader.preload(BackgroundGreen, FrontGreen)
    .then(() => {
        this.setState({ loaded: true})
    })
   }
  render() {
    return (
      <div className='loader-container'>
        { 
          !this.state.loaded ?
            <div>coucou</div>
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