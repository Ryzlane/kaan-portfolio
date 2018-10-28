import React from 'react'
import PropTypes from 'prop-types'

class Project extends React.Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }
  render() {
    const { project } = this.props
    return (
      <div className='project__container'>
        <div className="project__container__visuals">
          <div className='project__container__visuals__background'>
            <img src={project.backgroundImage} style={{ width: window.innerWidth }} alt='background' />
            <div className="project__container__visuals__background__filter"></div>
          </div>
          <div className='project__container__visuals__front'>
            <img src={project.frontImage} className={project.className} alt='illustration' />
          </div>
        </div>
      </div>
    )
  }
}

export default Project