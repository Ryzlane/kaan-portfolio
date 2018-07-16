import React from 'react'
import 'styles/style.scss'
import './Home.scss'

import Background from 'components/Background'
import Cursor from 'components/Cursor'

 const Home = ()=>
  <div className='global-container'>
    <Background backgroundState='initial'/>
    <Cursor />
  </div>

export default Home