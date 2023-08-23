import React from 'react';
import { BsTwitter, BsLinkedin, BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className='bg-black -mb-100'>
      <div className='upper flex flex-col md:flex-row  justify-between ml-4 md:ml-100 mr-4 md:mr-100 mt-4 md:mt-[50px] md:mb-[50px] md:p-[50px] mb-4 md:mb-50 items-center'>

      <div>

      <h1 className='txt text-[70px] font-extrabold text-white'>Sehary</h1>
      <p className='text-[20px] text-white font-light'>Sehary provides you with the best travel experience.</p> 

      </div>

      <div className='flex gap-[20px] mt-[20px] mb-[20px]'>
            <a href='/' target='blank'><BsTwitter className="bg-white text-3xl rounded-[4px] pl-[2px] pr-[2px] hover:transform hover:scale-110 transition-all duration-150"></BsTwitter></a>
            <a href='https://www.linkedin.com/company/sehary/' target='blank'><BsLinkedin className="bg-black  pl-[2px] pr-[2px] text-3xl text-white rounded-[4px]  hover:transform hover:scale-110 transition-all duration-150"></BsLinkedin></a>
            <a href='/'><BsInstagram className="bg-white text-3xl pl-[2px] pr-[2px] rounded-[4px]  hover:transform hover:scale-110 transition-all duration-150"></BsInstagram></a> 
            <a href='/'><BsFacebook className="bg-white text-3xl pl-[2px] pr-[2px] rounded-[4px]  hover:transform hover:scale-110 transition-all duration-150"></BsFacebook></a>
            <a href='/'><BsYoutube className="bg-white text-3xl pl-[2px] pr-[2px] rounded-[4px]  hover:transform hover:scale-110 transition-all duration-150"></BsYoutube></a>
             
        </div>

      </div>



      <div className='lower ml-4 md:ml-100 mr-4 md:mr-100 mb-4'>
        <div className='flex gap-6 ml-[20px] flex-col md:flex-row md:space-x-6 lg:space-x-12'>
          <div className='md:w-1/4'>
            <h1 className='text-white text-[30px] md:text-2xl font-extrabold mb-3'>
              Navigation
            </h1>
            <ul>
              <li className='mt-2'>
                <Link to='/' className='text-white hover:underline md:hover:underline underline-offset-2'>
                  Home
                </Link>
              </li>
              <li className='mt-2'>
                <Link to='/travel' className='text-white hover:underline'>
                  Travel
                </Link>
              </li>
              <li className='mt-2'>
                <Link to='/about' className='text-white hover:underline'>
                  About Us
                </Link>
              </li>
              <li className='mt-2'>
                <Link to='/contact' className='text-white hover:underline'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className='md:w-1/4'>
          <h1 className='text-white text-[30px] font-extrabold'>Services</h1>

            <ul className=''>
            <li className='mt-[8px]'>
               <Link to="/" className=' hover:underline underline-offset-2 text-center text-white'>Weekend Gateway</Link> 
            </li>
            <li className='mt-[8px]'>
               <Link to="/" className=' hover:underline underline-offset-2 text-white '>Backpacking Trips</Link> 
            </li>
            <li className='mt-[8px]'>
               <Link to='/' className=' hover:underline underline-offset-2 text-white'>Offbeat Stays</Link> 
            </li>
            <li className='mt-[8px]'>
               <Link to='/' className='hover:underline underline-offset-2 text-white'>Sehary Finance</Link> 
            </li>
            </ul>  
          </div>

          <div className='md:w-1/4'>
          <h1 className='text-white text-[30px] font-extrabold'>Product</h1>

            <ul className=' '>
            <li className='mt-[8px]'>
               <Link to="/" className=' hover:underline underline-offset-2 text-center text-white'>Testimonials</Link> 
            </li>
            <li className='mt-[8px]'>
               <Link to="/" className=' hover:underline underline-offset-2 text-white '>Member Discount</Link> 
            </li>
            <li className='mt-[8px]'>
               <Link to='/' className=' hover:underline underline-offset-2 text-white'>Partnership</Link> 
            </li>
            <li className='mt-[8px]'>
               <Link to='/' className='hover:underline underline-offset-2 text-white'>Why Sehary?</Link> 
            </li>
            </ul>        
          </div>

          <div className='md:w-1/4'>
          <h1 className='text-white text-[30px] font-extrabold'>Other</h1>

            <ul className=''>
            <li className='mt-[8px]'>
               <a href='https://wa.me/+918889947761' target='blank' class="hover:underline underline-offset-2 text-white ">Contact us</a>
            </li>
            <li className='mt-[8px]'>
               <Link to="/" className=' hover:underline underline-offset-2 text-white '>Career</Link> 
            </li>
            <li className='mt-[8px]'>
               <Link to='/' className=' hover:underline underline-offset-2 text-white'>Blogs</Link> 
            </li>
            <li className='mt-[8px]'>
               <Link to='/' className='hover:underline underline-offset-2 text-white'>Privacy Policy</Link> 
            </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className='text-center text-white mt-10 pb-[5px] -mb-[17px] md:-mb-[8px] md:mt-10 md:pb-[5px]'>
            Copyright © 2023 Sehary, All rights reserved
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
