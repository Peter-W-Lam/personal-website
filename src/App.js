import React, {useState} from 'react';
import Menu from './components/Menu'

import './App.css';
import TopSocials from './components/TopSocials';
import TopSection from './sections/TopSection';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import TempAboutMe from './sections/TempAboutMe';
import Contact from './sections/Contact';
import BottomMenu from './components/BottomMenu';

function App() {
  
  const [open, setOpen] = useState(false)

  return (
    <div className={open ? 'App open' : 'App'}>
      <div className={open ? 'overlay open' : 'overlay'}></div>
      <Menu open={open} setOpen={setOpen} />
      <TopSocials />
      <div className="main">
        <TopSection />
        {/* <AboutMe /> */}
        <TempAboutMe />
        <Projects />
        <Contact />
      </div>

      <BottomMenu />
      
    </div>
  );
}

export default App;
