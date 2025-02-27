import { useState, useEffect } from 'react'
import { ReactLenis } from 'lenis/react';
import './App.css'
import Home from './home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from './Work';
import ContactUs from './contactme';
import STAG from './works/stag';
import Muse from './works/muse';
import Super from './works/Super';
import PRIME from './works/Prime';
import DBMS_APP from './works/DBMS_APP';
import ZING from './works/ZING';
import MOUNTAIN from './works/Mountain';
import DBMSS from './works/DBMS';




function App() {
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => {
      clearTimeout(timer);
      
    };
  }, [loading]);

  return (
    <ReactLenis root>
    <>
     {loading ? (
        <div className="loading">
          <video
            className="video"
            autoPlay
            muted
            onEnded={() => setLoading(false)}
          >
            <source src="/assets/intro.mp4" type="video/mp4" />
          </video>
        </div>
      ) : (
        <Router>
        <Routes>
            <Route path='/Mountain' element={<MOUNTAIN/>} />
            <Route path='/Zing' element={<ZING/>} />
            <Route path='/DBMS_app' element={<DBMS_APP/>} />
            <Route path='/PRIME' element={<PRIME/>} />
            <Route path='/Super' element={<Super/>} />
            <Route path='/DBMSS' element ={<DBMSS/>} />
            <Route path='/Muse' element ={<Muse/>} />
            <Route path='/Stag' element={<STAG/>} />
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path='/contact' element={<ContactUs/>} />
        </Routes>
    </Router>
        
      //  <Home/>
     
        
      )}
      
        
      
    </>
    </ReactLenis>
  )
}

export default App
