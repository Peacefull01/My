import { useState, useEffect, useRef } from 'react'
import './App.css'
 import Header from './Component/Header.jsx'
import Main from './Component/Main.jsx'
import About from './Component/About.jsx'
import Skills from './Component/Skills.jsx'
import Resume from './Component/Resume.jsx'
import Projects from './Component/Projects.jsx'
import Experience from './Component/Experience.jsx'
import Contact from './Component/Contact.jsx'
import Footer from './Component/Footer.jsx'
import NotFound from './Component/NotFound.jsx'
import { Router,Routes,Route } from 'react-router-dom'
function App() {

  const preloaderRef = useRef(null);
  const [value,setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setValue((value) => value + 1);
  }, 100);
 

    const handleLoad = () => {
      if (preloaderRef.current) {
        preloaderRef.current.remove();
      }
    };
    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad);
    
  }, []);

  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills value={value}/>} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
    </>
  )
}

export default App
