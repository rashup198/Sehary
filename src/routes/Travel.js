import React from 'react'
import Navbar from '../components/Navbar'
import Parent from '../components/Parent';
import "../index.css"
import image from "../asset/image.jpg"

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
      Travel
    </div>
  )
}

export default Travel
