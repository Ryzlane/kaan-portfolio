import React from 'react'
import Vivus from 'vivus'

import LogoText from 'assets/logo/logotext.svg'
import LogoFrame from 'assets/logo/logoframe.svg'
import './Logo.scss'

class Logo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      vivus: undefined
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  componentDidMount() {
    this.setState ({ vivus: new Vivus('logo__frame', {duration: 200, start: 'manual', file: LogoFrame}, null) })
  }

  handleMouseEnter() {
    this.state.vivus.play()
  }

  handleMouseLeave() {
    this.state.vivus.reset()
    this.state.vivus.stop()
  }
  
  render() {
    return (
      <div className='logo' onMouseEnter={() => this.handleMouseEnter()} onMouseLeave={() => this.handleMouseLeave()}>
        <div id="logo__frame"></div>
        <div className="logo__text">
          <img src={LogoText} alt='logo' />
        </div>
      </div>
    )
  }
}

export default Logo
