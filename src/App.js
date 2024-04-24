import './App.scss';
import { Route, Routes } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor"
import { isMobile } from 'react-device-detect'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';


function App() {
  const isMobileDevice = isMobile;
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
      />
    )}
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element ={<Home />} />
        <Route path='about' element ={<About />} />
        <Route path='contact' element ={<Contact />} />
        <Route path='project' element={<Project />} />
      </Route>

    </Routes>
    </>
  )
}

export default App;
