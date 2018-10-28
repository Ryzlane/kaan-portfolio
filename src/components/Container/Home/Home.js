import React from 'react'
import _ from 'lodash'
import ImagePreloader from 'image-preloader'

import Project from '../Project/Project'
import HomePaging from './HomePaging/HomePaging'
import Loader from '../Loader/Loader'
import MainTitle from '../MainTitle/MainTitle'

import projects from './Home.util.js'

const preloader = new ImagePreloader()
const imagesBack = projects.map((project) => project.backgroundImage)
const imagesFront = projects.map((project) => project.frontImage)
const images = imagesBack.concat(imagesFront)
const total = images.length
let loaded = 0
let loading = 0

preloader.onProgress = function() {
  loading = 100 / total * ++loaded

  console.log('loading: ', Math.round(loading))

  return loading
}


class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      preload: false,
      loaded: false,
      stateLoading: 0,
      position: 0
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.debounceFunc = _.debounce(this.handleScroll, 1000, { trailing: false, leading: true })
  }

  componentDidMount() {
    preloader.preload(images)
    .then(() => {
      this.setState({ preload: true });
    })
  }

  componentDidUpdate() {
    const oldState = {...this.state}
    if (oldState.stateLoading !== loading) {
      console.log('loading changed!')
      this.setState({ stateLoading: loading })
    }

    if (loading === 100) {
      setTimeout(
        function() {
            this.setState({loaded: true});
        }
        .bind(this),
        3000
      )
    }
  }


  handleScroll = (event) => {
    const { position } = this.state
    const projectsLength = projects.length

    event.preventDefault()
    if (event.nativeEvent.wheelDelta > 0) {
      console.log('scroll up')
      if (position !== 0) {
        this.setState({ position: position - 1 })
      }
    } else {
      console.log('scroll down')
      if (position !== projectsLength - 1) {
        this.setState({ position: position + 1 })
      }
    }
  }


  render() {
    const { position } = this.state
    console.log(images)
    return (
      <div
        className='home'
        onWheel={(e) => { e.preventDefault(); this.debounceFunc(e) }}
      >
        <Loader loading={loading} loaded={this.state.loaded}>
          <div className="home__container">
            <Project project={projects[position]} />
            <HomePaging actualPage={position + 1} pagesLength={projects.length} />
          </div>
        </Loader>
        <MainTitle percentLoading={loading} />
      </div>
    )
  }
}

export default Home