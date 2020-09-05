import React, {useState} from 'react';
import Menu from './components/Menu'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import TopSocials from './components/TopSocials';
import TopSection from './sections/TopSection';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import TempAboutMe from './sections/TempAboutMe';
import Contact from './sections/Contact';
import BottomMenu from './components/BottomMenu';
import Hanako from './sections/Hanako'

function App() {
  
  const [open, setOpen] = useState(false)

  return (
    <Router>
    <div className={open ? 'App open' : 'App'}>
      <div className={open ? 'overlay open' : 'overlay'}></div>
      <Menu open={open} setOpen={setOpen} />
      <TopSocials />
      <Switch>
        <Route path="/" exact>
          <div className="main">
            <TopSection />
            <TempAboutMe />
            <Projects />
            <Contact />
          </div>
        </Route>
        <Route path="/hanako">
          <Hanako />
        </Route>
      </Switch>
      
      <BottomMenu />
    </div>
    </Router>
  );
}

export default App;
