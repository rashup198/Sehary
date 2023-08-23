import React from 'react';
import { AiFillHome, AiFillCar } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { RiContactsBookFill } from 'react-icons/ri';
import { useAuth0 } from '@auth0/auth0-react';
import { Divide as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <nav className='nav-item'>
        <div className='headed flex w-[82%] justify-between items-center m-5 pl-[7px] pr-6 shadow-2xl md:w-[95%] h-[80px] rounded-[13px] fixed top-5 left-5 z-[1000] bg-white'>
          <Link to='/'>
            <img src='../logo.jpg' className='h-[79px] ' alt='logo' />
          </Link>

          <div className='menu-icons md:hidden'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        

        <ul
          className={`nav-menu ${
            isOpen ? 'flex-col gap-2 mt-20 pl-6 pr-6' : 'hidden md:flex md:gap-7 justify-center items-center '
          }`}
        >
          <li className=''>
            <Link
              to='/'
              className='value flex items-center gap-2 '
              onClick={() => setOpen(true)}
            >
              <AiFillHome />
              Home
            </Link>
          </li>
          <li className=''>
            <Link
              to='/travel'
              className='value flex items-center gap-2'
              onClick={() => setOpen(true)}
            >
              <AiFillCar />
              Travel
            </Link>
          </li>
          <li className=''>
            <Link
              to='/about'
              className='value flex items-center gap-2'
              onClick={() => setOpen(true)}
            >
              <BsFillInfoCircleFill />
              About Us
            </Link>
          </li>
          <li className=''>
            <Link
              to='/contact'
              className='value flex items-center gap-2'
              onClick={() => setOpen(true)}
            >
              <RiContactsBookFill />
              Contact Us
            </Link>
          </li>
          <li>
          {isAuthenticated && (
            <div className='user'>
              <p className='user_detail'>{user.name}</p>
            </div>
          )}

          <div>
            {isAuthenticated ? (
              <button
                className='btnLogin border-2 border-black p-1 pl-2 pr-2 rounded-md hover:bg-black hover:text-white transition-all duration-200'
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button
                className='btnLogin p-1 pl-2 pr-2 rounded-md '
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
          </div>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
