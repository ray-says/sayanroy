import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { faPython,
  faCss3,
  faNodeJs,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000);
    
      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timeoutId);
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          In the bustling tech landscape of Boulder, CO, I'm Sayan Roy, 
          a Master’s candidate in Computational Science at the University of Colorado, 
          where I blend theoretical knowledge with practical application, maintaining a flawless 4.0 GPA.  
           
          </p>
          <p align="LEFT">
          My expertise lies in Python, Java, C++, and a suite of web technologies, 
          fueled by a passion for crafting solutions that stand at the intersection of efficiency and innovation. 
          At Tata Consultancy Services, I left my mark by developing software that streamlined operations and secured 
          data across billions of transactions.
          </p>
          <p>
          My creative spirit led to the inception of RiteMatch, a platform that redefines job matching through advanced algorithms, 
          underscoring my ability to translate complex challenges into impactful solutions. As a software engineer, 
          I thrive on collaboration and continuous learning, always seeking to explore the latest technologies and methodologies. 
          
          </p>
          <a href="https://drive.google.com/file/d/1XRdrh896rWVFsBRkFdxPS7aCNAfx2ejt/view?usp=sharing" className="flat-button" target="_blank" rel="noopener noreferrer">
            MY RESUME
            </a>

        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About