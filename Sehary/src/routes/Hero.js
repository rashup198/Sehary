import React, { useEffect, useState } from 'react';
import './Hero.css';
import '../index.css';
import image1 from './1.jpg';
import image2 from './2.jpg';
import MovingText from 'react-moving-text';
import RecentTrip from '../components/RecentTrip';
import Destinations from '../components/Destinations';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState([image1, image2]);
  const [id, setId] = useState(null);

  useEffect(() => {
    start();
  }, []);

  const start = () => {
    const _start = setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage < 1 ? selectedImage + 1 : 0
      );
    },10000);
    setId(_start);
  };

  const stop = () => {
    console.log('stop');
    clearInterval(id);
  };

  return (
    <div className='relative'>
      <img
        src={allImages[selectedImage]}
        className='h-[50vh] md:h-[97vh] w-full object-cover'
      />
      <div className='absolute flex top-[10%] left-[13%]'>
        <div className='text-center text-white flex flex-col gap-3 textbox'>
          <MovingText
            type='fadeInFromLeft'
            duration='2000ms'
            delay='1s'
            direction='normal'
            timing='ease'
            iteration='1'
            fillMode='none'
            className=' textHero text-6xl font-extrabold'
          >
            Every Journey is Special
          </MovingText>

          <MovingText
            type='fadeInFromLeft'
            duration='2000ms'
            delay='1s'
            direction='normal'
            timing='ease'
            iteration='1'
            fillMode='none'
            className=' textSub text-6xl font-extrabold '
          >
            Travel Like Never Before With Sehary
            
          </MovingText>

          <MovingText
           type='fadeInFromLeft'
           duration='2000ms'
           delay='1s'
           direction='normal'
           timing='ease'
           iteration='1'
           fillMode='none'>
          <div className='buttonHero md:mt-[70px] '>
              
              <a href='https://wa.me/+918889947761' target='blank' class="relative inline-block text-lg group">
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span class="relative">Contact</span>
              </span>
              <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
              </a>
          </div>
          </MovingText>

          
        </div>
      </div>


      <MovingText
        type='flipFromBottom'
        duration='1500ms'
        delay='4s'
        direction='normal'
        timing='ease'
        iteration='1'
        fillMode='none'
      >
        
      </MovingText>
      <div className='mt-[350px]'>
      <Destinations></Destinations>
      </div>
      <RecentTrip></RecentTrip>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Hero;
