import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HomePaging extends Component {
  static propTypes = {
    actualPage: PropTypes.number.isRequired,
    pagesLength: PropTypes.number.isRequired
  }
  render() {
    const { actualPage, pagesLength } = this.props
    return (
      <div className='home-paging'>
        <div className="home-paging__position home-paging__text">0{actualPage}</div>
        <div className="home-paging__line"></div>
        <div className="home-paging__total home-paging__text">0{pagesLength}</div>
      </div>
    )
  }
}

export default HomePaging
