import React from 'react'
import Navbar from '../components/Navbar';
import Parent from '../components/Parent';
import "../index.css"
import contact from "../asset/sergei-a--heLWtuAN3c-unsplash.jpg"
import Footer from '../components/Footer';


const Contact = () => {
  return (
    <div>
       <Navbar />
      <Parent 
      cName="travel"
      heroImg={contact}
      heading="Contact Us" 
      btnClass="btn"
      >
      </Parent>
      
      <Footer></Footer>
    </div>
  )
}

export default Contact
