import React from 'react'

import Project from '../Project/Project.js'
import HomePaging from './HomePaging/HomePaging.js'
import _ from 'lodash'

import projects from './Home.util.js'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      position: 0
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.debounceFunc = _.debounce(this.handleScroll, 1000, { trailing: false, leading: true })
  }

  handleScroll = (event) => {
    event.preventDefault()
    if (event.nativeEvent.wheelDelta > 0) {
      console.log('scroll up')
    } else {
      console.log('scroll down')
    }
  }


  render() {
    const { position } = this.state

    return (
      <div
        className='home__container'
        onWheel={(e) => { e.preventDefault(); this.debounceFunc(e) }}
      >
        <Project project={projects[position]} />
        <HomePaging />
      </div>
    )
  }
}

export default Home