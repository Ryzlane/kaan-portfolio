import React from 'react'
import PropTypes from 'prop-types'

class Background extends React.Component {
  static propTypes = {
    backgroundState: PropTypes.string
  }
  constructor(props) {
    super(props)

    this.state = {
      backgroundState: this.props.backgroundState
    }
  }
  render() {
    return (
      <div className='lines'>
        <div className='lines__vertical lines__vertical--1'></div>
        <div className='lines__vertical lines__vertical--2'></div>
        <div className='lines__vertical lines__vertical--3'></div>
        <div className='lines__horizontal lines__horizontal--1'></div>
        <div className='lines__horizontal lines__horizontal--2'></div>
        <div className='lines__horizontal lines__horizontal--3'></div>
      </div>
    )
  }
}

export default Background