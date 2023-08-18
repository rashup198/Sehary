import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Error = () => {
  return (
    <div>
        <Navbar></Navbar>

        <h1 className='text-center text-[60px] font-extrabold mt-[200px] text-black'>404 Error</h1>
        <h1 className='text-center text-[40px] font-bold text-black mb-[200px]'>Page Not Found</h1>

      <Footer></Footer>
    </div>
  )
}

export default Error
