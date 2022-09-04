import React from 'react'
import About from '../About/About';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import SocialIcons from '../SocialIcons/SocialIcons';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import Certification from '../Certification/Certification';
import './Main.css'


function Main() {
    return (
        <>
            {/* <div className="pc-device">
                <SocialIcons />
            </div> */}
            <Header />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certification />
            <Contact />
        </>
    )
}
export default Main;