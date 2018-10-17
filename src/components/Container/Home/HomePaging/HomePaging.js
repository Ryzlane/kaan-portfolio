import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HomePaging extends Component {
  static propTypes = {

  }
  render() {
    return (
      <div className='home-paging'>
        <div className="home-paging__position"></div>
        <div className="home-paging__line"></div>
        <div className="home-paging__total"></div>
      </div>
    )
  }
}

export default HomePaging
