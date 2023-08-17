import React from 'react'
// import logo from "../asset/Icon 2.png"
import { BsTwitter,BsLinkedin,BsInstagram,BsFacebook,BsYoutube } from "react-icons/bs";
import "../index.css"
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className='bg-black -mb-[100px]'>

        <div className='upper flex justify-between ml-[100px] mr-[100px] mt-[50px] mb-[50px] items-center '>
        <div className='flex flex-col '>
            <h1 className='txt text-[70px] font-extrabold text-white'>Sehary</h1>
            <p className='text-[20px] text-white font-light'>Sehary provides you with the best travel experience.</p>
        </div>
        <div className='flex gap-[20px]'>
            <a href='/' target='blank'><BsTwitter className="bg-white text-3xl rounded-[4px] pl-[2px] pr-[2px] hover:transform hover:scale-110 transition-all duration-150"></BsTwitter></a>
            <a href='https://www.linkedin.com/company/sehary/' target='blank'><BsLinkedin className="bg-black  pl-[2px] pr-[2px] text-3xl text-white rounded-[4px]  hover:transform hover:scale-110 transition-all duration-150"></BsLinkedin></a>
            <a href='/'><BsInstagram className="bg-white text-3xl pl-[2px] pr-[2px] rounded-[4px]  hover:transform hover:scale-110 transition-all duration-150"></BsInstagram></a> 
            <a href='/'><BsFacebook className="bg-white text-3xl pl-[2px] pr-[2px] rounded-[4px]  hover:transform hover:scale-110 transition-all duration-150"></BsFacebook></a>
            <a href='/'><BsYoutube className="bg-white text-3xl pl-[2px] pr-[2px] rounded-[4px]  hover:transform hover:scale-110 transition-all duration-150"></BsYoutube></a>
             
        </div>
        </div>
        

        <div className='lower ml-[100px] mr-[100px] mb-[50px]'>
            <div>
            <h1 className='text-white text-[30px] font-extrabold'>Navigation</h1>

            <ul className=' pb-[50px] '>
            <li className='mt-[8px]'>
               <Link to="/home" className=' hover:underline underline-offset-2 text-center text-white'>Home</Link> 
            </li>
            <li className='mt-[8px]'>
               <Link to="/travel" className=' hover:underline underline-offset-2 text-white '>Travel</Link> 
            </li>
            <li className='mt-[8px]'>
               <Link to='/about' className=' hover:underline underline-offset-2 text-white'>About Us</Link> 
            </li>
            <li className='mt-[8px]'>
               <Link to='/contact' className='hover:underline underline-offset-2 text-white'>Contact Us</Link> 
            </li>
            </ul>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
