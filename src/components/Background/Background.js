import React from 'react'
import PropTypes from 'prop-types'

import './Background.scss'

class Background extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      backgroundState: this.props.backgroundState
    }
  }
  render() {
    return (
      <div className='lines-container'>
        <div className='vertilines vertiline1'></div>
        <div className='vertilines vertiline2'></div>
        <div className='vertilines vertiline3'></div>
        <div className='horilines horiline1'></div>
        <div className='horilines horiline2'></div>
        <div className='horilines horiline3'></div>
      </div>
    )
  }
}

Background.propTypes = {
  backgroundState: PropTypes.string
}

export default Background