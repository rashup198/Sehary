import React from 'react'
import "../index.css"
import { useEffect, useState } from "react";
import image1 from "./1.jpg"
import image2 from "./2.jpg"
import image3 from "./3.jpg"
import image4 from "./4.jpg"
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
import MovingText from 'react-moving-text'



const Hero = () => {
    const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([image1, image2, image3, image4])
  const [id, setId] = useState(null)

useEffect(() => {
    start()
  }, [])  

  const start = () => {
    console.log('start')
    const _start = setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 3 ? selectedImage + 1 : 0)
    }, 5000)
    setId(_start)
  }

  const stop = () => {
    console.log('stop')
    clearInterval(id)
  }

 return (   
    <div className='hero lg:mt-[0px]  sm:mt-[100px]'>
    <img
    src={allImages[selectedImage]} className='lg:h-[100vh] w-[100vw] transition-all duration-200 '/> <br />
    <button className='relative bottom-[350px] left-[10px] z-0'
        onClick={() => {
          if (selectedImage > 0)
            setSelectedImage(selectedImage - 1)
        }}
      ><AiOutlineLeft  className='text-[50px] text-gray-700' ></AiOutlineLeft></button>

      <button className='relative bottom-[350px] left-[93%]'
        onClick={() => {
          if (selectedImage < allImages.length - 1)
            setSelectedImage(selectedImage + 1)
        }}
      ><AiOutlineRight className='text-[50px] text-gray-700'></AiOutlineRight></button>

      
        
        <MovingText
        type="fadeInFromLeft"
        duration="2000ms"
        delay="1s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
        className="text-center lg:text-[50px] relative lg:-top-[530px] text-gray-700 sm:text-center sm:text-sm ">
        Travel Like Never Before With Sehary
        </MovingText>
        <MovingText
        type="fadeInFromLeft"
        duration="2000ms"
        delay="1s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
        className="text-center lg:text-[50px] relative lg:-top-[490px] text-gray-700 sm:text-center ">
                    <a href='https://wa.me/+918889947761' target='blank' class="relative inline-block text-lg group">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span class="relative">Contact Us</span>
            </span>
            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>
        </MovingText>
  </div>
 )
}
 

export default Hero
