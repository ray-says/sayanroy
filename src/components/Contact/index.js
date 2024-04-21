import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
          }, 3000);
        
          // Cleanup function to clear the timeout if the component unmounts
          return () => clearTimeout(timeoutId);
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_x465oh8', 'template_tahwu4q', form.current, 'G4misMWzEx4Z92GJH')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    


    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15}/>

                </h1>
                <p>
                Embarking on a journey to find the perfect Summer 2024 Internship! 
                If you have a lead on an opportunity, questions about my journey, or 
                just want to share a hello, my inbox is always open for your emails. 
                Your guidance, opportunities, and conversations are not just welcomed, 
                they're eagerly anticipated!
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                            <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li className="half">
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                            />
                            </li>
                            <li>
                            <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                            />
                            </li>
                            <li>
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                            </li>
                            <li>
                            <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Sayan Roy,
                <br />
                2757 Glenwood Ct <br />
                Boulder, CO 80304 <br />
                USA,
                <br />
                <br />
                <span>sr.roysayan@gmail.com</span>
            </div>
        <div className="map-wrap">
          <MapContainer center={[40.03391543467388, -105.26066361745922]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[40.03391543467388, -105.26066361745922]}>
              <Popup>Sayan lives here, Let's catch up :)</Popup>
            </Marker>
          </MapContainer>
        </div>
        </div>
        <Loader type='pacman' />
        
        </>
    )
}

export default Contact