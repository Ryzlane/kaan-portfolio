import React, { Component } from 'react'

import Dribbble from 'assets/social-icons/dribbble.svg'
import Behance from 'assets/social-icons/behance.svg'
import Twitter from 'assets/social-icons/twitter.svg'
import Linkedin from 'assets/social-icons/linkedin.svg'


class About extends Component {
  render() {
    return (
      <div className='about'>

        {/* LEFT SIDE */}
        <div className='about__left-side'>
          <div className='about__left-side__img'>
            <img src='' alt=''/>
          </div>
          <p className='about__left-side__credit'></p>
        </div>

        {/* RIGHT SIDE */}
        <div className='about__right-side about-text'>
          <div className='about__right-side__text-container'>
            <div className='about__right-side__text-container__paragraph'>
              <h1 className='about-text-title'>Bunch of things about me</h1>
              <p>
                Hi ! I’m <span className='about-text--modified'>Kaan Roussel</span>, nice to meet you. I’m a UX/UI Designer based in Paris.
                Everyday I learn, read and practice to create clean interfaces as possible.
                It’s beautiful to have a passion and a work at the same time, don’t you think ?
              </p>
            </div>
            <div className='about__right-side__text-container__paragraph'>
              <h1 className='about-text-title'>I can be a lot of things, including</h1>
              <p>
                UX Designer<br />
                UI Designer<br />
                Art Director<br />
                Interactive designer<br />
                Creative director
              </p>
            </div>
            <div className='about__right-side__text-container__paragraph'>
              <h1 className='about-text-title'>I am looking for an internship</h1>
              <p>
                Oh ? Maybe you search a people like me for create beautiful design with you ?
                I’m glad to hear that, I'm open for six months between <span className='about-text--modified'>July 2</span> and <span className='about-text--modified'>October 26, 2019</span>.  
              </p>
            </div>
            <div className='about__right-side__text-container__paragraph'>
              <h1 className='about-text-title'>You can contact me</h1>
              <p>
                You can live me a message about everything at my email <span className='about-text--modified'>hello@kaanroussel.com</span>  
              </p>
            </div>
            <div className='about__right-side__text-container__paragraph'>
              <h1 className='about-text-title'>... And follow me</h1>
              <div className='social-icons'>
                <img src={Dribbble} alt='dribbble'/>
                <img src={Behance} alt='behance'/>
                <img src={Twitter} alt='twitter'/>
                <img src={Linkedin} alt='linkedin'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About