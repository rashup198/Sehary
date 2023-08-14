import React from 'react'
import './Navbar.css';
import { AiFillHome,AiFillCar } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiContactsBookFill } from "react-icons/ri";
import "../index.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react';


const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const {user,isAuthenticated} = useAuth0();
  const [isOpen, setOpen] = useState(false)
  

 
  return (
    <div>
      <nav classname="nav-item">

        <div className=' flex justify-between items-center m-5 pl-[30px] pr-[30px] shadow-2xl w-[95%] h-[80px] rounded-[13px]'>
        <a href='/'><img src="../logo.jpg" className="h-[79px] " alt="logo" /></a>

        <div className='menu-icons hidden' >
        <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <ul className="nav-menu flex gap-9">
            
            <li className=''>
               <a href='/' className='value flex items-center gap-2'><AiFillHome/>Home</a> 
            </li>
            <li className=''>
               <a href='/' className='value flex items-center gap-2'><AiFillCar/>Travel</a> 
            </li>
            <li className=''>
               <a href='/' className='value flex items-center gap-2'><BsFillInfoCircleFill/>About Us</a> 
            </li>
            <li className=''>
               <a href='/' className='value flex items-center gap-2'><RiContactsBookFill/>Contact Us</a> 
            </li>
            { isAuthenticated && <div className='user'>
          <p className='user_detail'>{user.name}</p>
        </div>
       }
       
       
       <div>
        {
          
          isAuthenticated ?<button className='btnLogin border-2 border-black p-[2px] pl-[4px] pr-[4px] rounded-[5px] hover:bg-black hover:text-white transition-all duration-200  ' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button> :
          <button className='btnLogin' onClick={() => loginWithRedirect()}>Log In</button>
          }
          </div>
          
        </ul>
        </div>

      </nav>
    </div>
  )
}
export default Navbar
