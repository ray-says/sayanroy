import './App.scss';
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'
import AnimatedCursor from "react-animated-cursor"
import { isMobile } from 'react-device-detect'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Skills from './components/Skills';
import Journey from './components/Journey';


function App() {
  const isMobileDevice = isMobile;
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    scrollToTop();
  }, [location]);
  

  return (
    <>
    {!isMobileDevice && (
      <AnimatedCursor
        color='0, 161, 155'
        innerSize={5}
        outerSize={25}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
        backgroundColor: '#00a19b'
        }}
        outerStyle={{
          border: '1px solid #00a19b',
        }}
        clickables={[
          'a', 
          'input[type="text"]', 
          'input[type="email"]', 
          'input[type="number"]', 
          'input[type="submit"]', 
          'input[type="image"]', 
          'label[for]', 
          'select', 
          'textarea', 
          'button', 
          '.link',
          '.skills-card'
        ]}
      />
    )}
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element ={<Home />} />
        <Route path='about' element ={<About />} />
        <Route path='contact' element ={<Contact />} />
        <Route path='project' element={<Project />} />
        <Route path='skills' element={<Skills />} />
        <Route path='journey' element={<Journey />} />
      </Route>

    </Routes>
    </>
  )
}

export default App;
