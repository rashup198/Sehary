import React from 'react';
import "./Newsletter.css"

const Newsletter = () => {
  function handlebtn() {
    // Your button click logic here
  }

  return (
    <div className='container flex bg-[#4657f5] justify-between items-center pb-[20px] -mb-[50px] pt-[20px]'>
      <div className='textConatiner ml-[100px]'>
        <h1 className='Title text-[40px] text-white'>
          Subscribe Newsletter
        </h1>
        <p className='description text-[20px] text-white mt-[10px]'>
          Get e-mail updates about latest updates and special offers.
        </p>
      </div>

      <div className='mr-[100px]'>
      <form
        method='POST'
        action='https://getform.io/f/01bb9c33-6bd0-4585-be4d-efc169d667be'
        className='from'
      >
        <input
          type='email'
          name='newsLetter'
          placeholder='Enter your email address'
          className='inputbox  bg-white border p-2 w-[300px] rounded-l-md'
        />
        <button
          className='btn p-2 border border-white text-white rounded-r-md'
          onClick={handlebtn}
        >
          Subscribe
        </button>
      </form>
      </div>
    </div>
  );
};

export default Newsletter;
