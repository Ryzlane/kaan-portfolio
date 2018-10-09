import React from 'react'
import PropTypes from 'prop-types'

class Loader extends React.Component {
  constructor(props) {
    super(props)

    this.loaderContainerRef = React.createRef()
  }

  render() {
    const { loading, loaded } = this.props
    return (
      <div className='loader'>
        {
          !loaded ?
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