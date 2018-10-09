import React from 'react'
import BackgroundGreen from 'assets/visuals/green-back.jpg'
import FrontGreen from 'assets/visuals/green-front.png'
// import BackgroundTesla from 'assets/visuals/tesla-back.jpg'
// import FrontTesla from 'assets/visuals/tesla-front.png'
// import BackgroundVoltaire from 'assets/visuals/voltaire-back.jpg'
// import FrontVoltaire from 'assets/visuals/voltaire-front.png'

class Home extends React.Component {
  render() {
    return (
      <div className='home__container'>
        <div className="home__container__visuals">
          <div className='home__container__visuals__background'>
            <img src={BackgroundGreen} alt='background' />
            <div className="home__container__visuals__background__filter"></div>
          </div>
          <div className='home__container__visuals__front'>
            <img src={FrontGreen} alt='illustration' />
          </div>
        </div>
      </div>
    )
  }
}

export default Home