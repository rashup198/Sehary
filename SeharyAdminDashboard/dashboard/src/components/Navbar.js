import React from 'react'

const Navbar = () => {
  return (
    <div>
        
      <aside className='h-screen w-[23%]'>
      
        <nav className='h-full flex flex-col bg-white border-r shadow-md' >
        <div className='p-4 pb-2 flex items-center justify-between h-16 border-b'>
                <img src='../logo.jpg' className='h-[100px]'></img>
            </div>
            <ul>
                <li>Location</li>
                <li>Employees</li>
                <li>Statistics</li>
            </ul>

        </nav>
      </aside>
    </div>
  )
}

export default Navbar
