import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import AboutMe from '../components/AboutMe'
import Services from '../components/Services'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Education from '../components/Education'
import Skills from '../components/Skills'

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <AboutMe/>
        <Education/>
        <Skills/>
        <Services/>
        <Projects/>
        <ContactMe/>
    </div>
  )
}

export default Home