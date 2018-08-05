import React from 'react'

import { LogoText } from './LogoElements'

import './Logo.scss'

class Logo extends React.Component {
  render() {
    return (
      <div className='logo'>
        <LogoText />
      </div>
    )
  }
}

export default Logo
