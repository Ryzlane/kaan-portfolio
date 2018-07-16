import React from 'react'
import PropTypes from 'prop-types'

import './Cursor.scss'

class Cursor extends React.Component {
  constructor(props) {
    super(props)

    this.cursorAround = React.createRef()
    this.cursor = React.createRef()

    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
  }

  handleMouseMove(e) {
    this.cursor.current.style.left = e.clientX + 'px'
    this.cursor.current.style.top = e.clientY + 'px'

    this.cursorAround.current.style.left = e.clientX + 'px'
    this.cursorAround.current.style.top = e.clientY + 'px'
  }
  
  handleMouseDown() {
    this.cursor.current.classList.add('is-hold')
    this.cursorAround.current.classList.add('is-hold')
  }

  handleMouseUp() {
    this.cursor.current.classList.remove('is-hold')
    this.cursorAround.current.classList.remove('is-hold')
  }

  render() {
    return (
      <div  ref={this.globalCursorContainer} 
            className='global-cursor-container'
            onMouseMove={this.handleMouseMove}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}>
        <div ref={this.cursorAround} className='cursor-around'></div>
        <div ref={this.cursor} className='cursor'></div>
      </div>
    )
  }
}

Cursor.propTypes = {
  CursorState: PropTypes.string
}

export default Cursor