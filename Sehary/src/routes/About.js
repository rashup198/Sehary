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
      <div className='ml-[200px] mr-[200px] mb-[100px]'>
      <p className='text-center text-md'>Join us to redefine Indian travel. Experience transformative offbeat journeys that fuse adventure and culture. Uncover hidden treasures on the road less taken. Your incredible journey begins here.</p>
      </div>
      <Team></Team>


      <Footer></Footer>
      
    </div>
  )
}

export default About
