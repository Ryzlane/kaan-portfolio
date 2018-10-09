import React from 'react'
import Vivus from 'vivus'

import LogoText from './LogoText'
import LogoFrame from 'assets/logo/logoframe.svg'
import LogoCrown from 'assets/logo/logocrown.svg'

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
    this.setState ({ vivus: new Vivus('logo__frame', {duration: 100, start: 'manual', file: LogoFrame}, null) })
  }

  handleMouseEnter() {
    this.state.vivus.play()

    this.props.handleHoverMenu()
  }

  handleMouseLeave() {
    this.state.vivus.reset()
    this.state.vivus.stop()

    this.props.handleLeaveMenu()
  }

  render() {
    return (
      <div className='logo' onMouseEnter={() => this.handleMouseEnter()} onMouseLeave={() => this.handleMouseLeave()}>
        <div className="logo__crown"><img src={LogoCrown} alt=""/></div>
        <div id="logo__frame"></div>
        <div className="logo__text">
          <LogoText />
        </div>
      </div>
    )
  }
}

export default Logo
