import React from 'react'
const NewsLetter = () => {
  return (
    <div className='-mb-[50px]'>
         <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      
      <form method="POST" action='https://getform.io/f/7b6b959e-32b6-4f96-a96b-f02e02c666ee' className='max-w-[700px] flex flex-col w-full h-full'>
  
          <div className='max-w-[1000px] p-4 flex flex-col justify-center w-full h-full'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 pb-[5px]'>Get in Touch</p>
              <p className='text-gray-300 py-4 text-center'>
                  Submit the form below or send us an mail - founder.sehary@gmail.com

              </p>
          </div>
  
          <input className='bg-[#ccd6f6] p-2 my-2  placeholder:text-black' type='text' placeholder='Name' name='name' >
          </input>
          <input type='email' placeholder='Email' name='email'className=' my-2 p-2 bg-[#ccd6f6] placeholder:text-black' >
          </input>
          <input type='text' placeholder='Subject' name='subject'className='my-2 p-2 bg-[#ccd6f6] placeholder:text-black' >
          </input>
          <textarea className='placeholder:text-black bg-[#ccd6f6] p-2 my-1' name='message' cols='30' rows="10" placeholder='Message'>
          </textarea>
  
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-2 my-8 mx-auto flex items-center rounded-md'>Send Message</button>
          
      </form>
      </div>
      
    </div>
  )
}

export default NewsLetter
