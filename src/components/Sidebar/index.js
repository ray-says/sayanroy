import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser, faGear, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    
    const [showNav, setShowNav] = useState(false)
    
    return (
        <div className='nav-bar'>
            <Link className='logo' to ='/'>
            <img src={LogoS} alt='logo'></img>
            <img className='sub-logo' src={LogoSubtitle} alt='Sayan'></img>
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink 
                    onClick={() => setShowNav(false)} 
                    exact='true' 
                    activeclassname='active' 
                    to='/'
                >
                    <FontAwesomeIcon icon={faHome} color='#C8CCCE' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active' 
                    className='about-link' 
                    to='/about'
                >
                    <FontAwesomeIcon icon={faUser} color='#C8CCCE' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active' 
                    className='journey-link' 
                    to='/journey'
                >
                    <FontAwesomeIcon icon={faSuitcase} color='#C8CCCE' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active' 
                    className='skills-link' 
                    to='/skills'
                >
                    <FontAwesomeIcon icon={faGear} color='#C8CCCE' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active' 
                    className='project-link' 
                    to='/project'
                >
                    <FontAwesomeIcon icon={faLightbulb} color='#C8CCCE' />
                </NavLink>
                
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active' 
                    className='contact-link' 
                    to='/contact'
                >
                    <FontAwesomeIcon icon={faEnvelope} color='#C8CCCE' />
                </NavLink>
                {/* Highlighted: Close button rendering conditionally */}
                {showNav && (
                    <FontAwesomeIcon 
                        onClick={() => setShowNav(false)}
                        icon={faClose}
                        color='#153B44'
                        size='3x'
                        className='close-icon'
                    />
                )}
            </nav>
            <ul>
                <li>
                    <a 
                        target='_blank' 
                        rel='noreferrer' 
                        href='https://www.linkedin.com/in/roy-sayan/'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color='#C8CCCE' />
                    </a>
                </li>
                <li>
                    <a 
                        target='_blank' 
                        rel='noreferrer' 
                        href='https://github.com/ray-says'
                    >
                        <FontAwesomeIcon icon={faGithub} color='#C8CCCE' />
                    </a>
                </li>
                <li>
                    <a 
                        target='_blank' 
                        rel='noreferrer' 
                        href='https://www.instagram.com/sayan__ray/'
                    >
                        <FontAwesomeIcon icon={faInstagram} color='#C8CCCE' />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color='153B44'
                size='3x'
                className='hamburger-icon'
            />
        </div>
    )
}

export default Sidebar