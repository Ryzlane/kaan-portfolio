import React from 'react'
import PropTypes from 'prop-types'

class Menu extends React.Component {
  render() {
    return (
      <div className='menu'>
        {this.props.children}
      </div>
    )
  }
}

Menu.propTypes = {
  children: PropTypes.children
}

export default Menu
