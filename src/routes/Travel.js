import React from 'react'
import Navbar from '../components/Navbar'
import Parent from '../components/Parent';
import "../index.css"
import image from "../asset/image.jpg"
import Destinations from '../components/Destinations';
import Footer from '../components/Footer';
import MovingText from 'react-moving-text'


const Travel = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Parent 
      cName="travel"
      heroImg={image}
      heading={"Hot Locations"}
      Text={""}

    >
      </Parent>
      <div className='mt-[300px]'>
      <MovingText
            type="flipFromBottom"
            duration="1500ms"
            delay="4s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
           
           <Destinations></Destinations>        
          </MovingText>
      </div>

      <Footer></Footer>
      
    </div>
  )
}

export default Travel
