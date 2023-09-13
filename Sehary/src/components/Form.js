import React from 'react'
const NewsLetter = () => {
  return (
    <div className='-mb-[50px]'>
         <div name='contact' className='w-full h-screen bg-[#ffffff] flex justify-center items-center p-4'>
      
      <form method="POST" action='https://getform.io/f/01bb9c33-6bd0-4585-be4d-efc169d667be' className='max-w-[700px] flex flex-col w-full h-full'>
  
          <div className='max-w-[1000px] p-4 flex flex-col justify-center w-full h-full'>
              <p className='text-[45px] font-bold inline border-b-4 border-[#000000] text-black pb-[1px]'>Get in Touch</p>
              <p className='text-black py-2 text-start text-[17px]'>
                  Submit the form below or send us an mail - founder.sehary@gmail.com

              </p>
          </div>
  
          <input className='bg-[#d3d3d3] p-2 my-2 rounded-lg' type='text' placeholder='Name' name='name' >
          </input>
          <input type='email' placeholder='Email' name='email'className=' my-2 p-2 bg-[#d3d3d3]  rounded-lg' >
          </input>
          <input type='text' placeholder='Subject' name='subject'className='my-2 p-2 rounded-lg bg-[#d3d3d3] ' >
          </input>
          <textarea className=' bg-[#d3d3d3]  rounded-lg p-2 my-1' name='message' cols='30' rows="10" placeholder='Message'>
          </textarea>
  
          <button className='text-black border-2 hover:bg-[#d3d3d3] hover:border-black px-4 py-2 my-8 mx-auto flex items-center rounded-md'>Send Message</button>
          
      </form>
      </div>
      
    </div>
  )
}

export default NewsLetter
