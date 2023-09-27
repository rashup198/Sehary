import React from 'react';
import { AiFillHome, AiFillCar } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { RiContactsBookFill } from 'react-icons/ri';
import { useAuth0 } from '@auth0/auth0-react';
import { Divide, Divide as Hamburger } from 'hamburger-react';
import logo from "./logo.jpg"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./Navbar.css"

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  let Links = [
      {name: "Home", link: "/", logo:<AiFillHome></AiFillHome>},
      {name: "Travel", link: "/travel", logo:<AiFillCar></AiFillCar>},
      {name: "About us", link: "/about", logo: <BsFillInfoCircleFill></BsFillInfoCircleFill>},
      {name: "Contact", link: "/contact", logo: <RiContactsBookFill></RiContactsBookFill>},
  ];

  let [open,setOpen]=useState(false);
  return (
    <div>
        
    <div className=''>
        <div className='headed  w-[79%]  items-center m-5 pl-[7px] pr-6 shadow-2xl md:w-[95%] h-[80px] rounded-[13px] fixed top-5 left-5 z-[1000]  md:flex bg-[#ffffff] py-1 md:px-5 px-4 flex justify-between'>
            <div className='cursor-pointer flex items-center'>
                <img src={logo} className='h-[79px]'></img>
            </div>

            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <Divide name={open ? 'close':'menu'}></Divide>
            </div>

           

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#ffffff] gap-10 -mt-[15px] justify-center align-baseline md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in rounded-lg p-[10px] ${open ? 'top-20 ':'top-[-490px]'}`}>
            {
            Links.map((link)=>(
              <div className=' flex gap-[15px] value align-baseline items-center'>
                <span className='text-[20px]'>{link.logo}</span>
                <li key={link.name} className='a md:my-0 text-xl'> 
                <Link to={link.link} className= ' text-black duration-500 txt'>{link.name}</Link>           
                </li>   
                </div>  
            ))                
            }

             <li>
        <div className='flex align-baseline items-baseline gap-8'>
      {isAuthenticated && (
            <div className='user flex  gap-3'>
                
                    <img src={user.picture} className='h-[35px] rounded-[20%] mt-[7px]' alt={user.name} />
                    
                    <p className='user_detail text-[#fff131] text-2xl mt-[10px]'>{user.name}</p>  
            </div>
      )}

{isAuthenticated ? (
                <button
                className='class=" p-[5px] font-medium bg-blue-200 hover:bg-blue-100 hover:text-blue-600 text-blue-black rounded-lg text-md"'
                onClick={() =>
                    logout({ logoutParams: { returnTo: window.location.origin } })
                  }
                >
                  Log Out
                </button>
              ) : (
                <button
                  className='p-[5px] font-medium bg-blue-200 hover:bg-blue-100 hover:text-blue-600 text-blue-black rounded-lg text-md '
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              )}
          </div>
      
          </li>

        </ul>

        </div>
   
    </div>
  
</div>
  );
};

export default Navbar;


