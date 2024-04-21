import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState, useEffect } from 'react'
import './index.scss'
import Logo from './Logo'
import Typewriter from 'typewriter-effect';
import ProfilePic from '../../assets/images/profile_pic.png'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'y', 'a', 'n']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        // Store the timeout ID
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);


  return (
      <>

      <div className="container home-page">
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="Developer"/>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
          </h1>
          <h2>
          <Typewriter
            options={{
                strings: ['Back End Developer', 'Machine Learning Engineer', 'Data Engineer', 'AI Enthusiast'],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 25,
                pauseFor: 1500,
                cursorClassName: 'typewriter-cursor',
                startDelay: 10000,
            }}
          />
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div class="profile-container">
          <img src={ProfilePic} alt="Sayan" class="img-fluid my-3 profile-pic" />
        </div>

        <Logo />
      </div>
      <Loader type="pacman" />
      </>
  )
}

export default Home

