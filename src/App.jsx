import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (key) => {
    sections[key]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white">
      <Navbar onNavigate={scrollToSection} />

      <div ref={sections.home}><Banner /></div>
      <div ref={sections.about}><AboutMe /></div>
      <div><Education /></div>
      <div><Skills /></div>
      <div ref={sections.services}><Services /></div>
      <div ref={sections.projects}><Projects /></div>
      <div ref={sections.contact}><ContactMe /></div>
    </div>
  );
}

export default App;
