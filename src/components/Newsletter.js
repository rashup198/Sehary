import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex bg-[#4657f5] justify-between items-center pb-[20px] -mb-[50px] pt-[20px]'>
        <div className='ml-[100px] '>
            <h1 className='text-[40px] text-white '>Subscribe Newsletter</h1>
            <p className='text-[20px] text-white mt-[10px]'>Get e-mail updates about latest updates and special offers.</p>
        </div>
        <div className='mr-[100px]'>

            <form method="POST" action='https://getform.io/f/7b6b959e-32b6-4f96-a96b-f02e02c666ee'>
            <input type='email' name='newsLetter' placeholder="Enter your email address" className=' bg-white border p-2 w-[300px] rounded-l-md' ></input>
            
            <button className='p-2 border border-white text-white rounded-r-md'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter
