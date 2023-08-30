import React from 'react'
import Navbar from '../components/Navbar';
import Parent from '../components/Parent';
import "../index.css"
import aboutImg from "../asset/aboutImg.jpg";
import Footer from '../components/Footer';
import Team from '../components/Team';


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

      <h1 className='text-[65px] font-bold text-center'>Our Leadership</h1>
      <p className=' text-center text-xl'>We are a group of passionate individuals working towards changing travelling in India.</p>
      <Team></Team>


      <Footer></Footer>
      
    </div>
  )
}

export default About
