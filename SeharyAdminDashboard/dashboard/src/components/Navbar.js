import React from 'react';
import { SidebarData } from './Data';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <aside className=' '>
      <nav className='h-full flex flex-col absolute bg-white border-r shadow-md w-[13%]'>
        <div className='p-4 pb-2 flex items-center justify-between h-16 border-b'>
          <img src='../logo.jpg' alt='Logo' className='h-[100px] mt-5' />
        </div>
        <ul className='mt-[50px]'>
          {SidebarData.map((item, index) => (
            <li key={index} className="value text-center mt-[20px] ml-[20px]">
              <Link to={item.path}>
                <div className='flex gap-[10px] items-baseline '>
                  <span className='text-[20px] hover:text-red-500'>{item.icon}</span>
                <span className='value text-[20px] font-semibold'>{item.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
    </aside>
  );
};

export default Navbar;
