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
      <div className='text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>Our Leadership</h1>
      </div>
      <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 mt-4 sm:mt-8 md:mt-16 lg:mt-24 mb-8 sm:mb-16 md:mb-32 lg:mb-64'>
        <p className='text-center text-base sm:text-lg md:text-xl lg:text-2xl'>
          Join us to redefine Indian travel. Experience transformative offbeat journeys that fuse adventure and culture. Uncover hidden treasures on the road less taken. Your incredible journey begins here.
        </p>
      </div>
      <Team></Team>
      <Footer></Footer>    
    </div>
  )
}

export default About
