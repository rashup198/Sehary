import React from 'react'
import Navbar from '../components/Navbar';
import Parent from '../components/Parent';
import "../index.css"
import aboutImg from "../asset/aboutImg.jpg";


const About = () => {
  return (
    <div> 
      <Navbar />
      <Parent className="h-[70vh]"
      cName="hero-about"
      heroImg={aboutImg}
      heading="About Us" 
      btnClass="btn"
      >
      </Parent>

        About 
      
    </div>
  )
}

export default About
