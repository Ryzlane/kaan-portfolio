import React from 'react'
import BackgroundGreen from 'assets/visuals/green-back.jpg'
import FrontGreen from 'assets/visuals/green-front.png'
// import BackgroundTesla from 'assets/visuals/TESLA-back.png'
// import FrontTesla from 'assets/visuals/TESLA-front.png'
// import BackgroundVoltaire from 'assets/visuals/VOLTAIRE-back.png'
// import FrontVoltaire from 'assets/visuals/VOLTAIRE-front.png'

import './Home.scss'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className="home__visuals">
          <div className='visuals__background'>
            <img src={BackgroundGreen} alt='background' />
            <div className="visuals__background__filter"></div>
          </div>
          <div className='visuals__front'>
            <img src={FrontGreen} alt='illustration' />
          </div>
          {/* <div className='home__title-container'>
            <h1 className='home__title-container__title'>beoplay</h1>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Home