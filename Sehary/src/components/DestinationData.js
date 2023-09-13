import React from 'react';
import { FaMapMarker } from 'react-icons/fa';

function DestinationData(props) {
  return (
    <>
      <div className='destiCard flex flex-col w-full lg:w-[32%] p-2 lg:p-5 text-start shadow-2xl rounded-[7px] cursor-pointer'>
        <div className='destiImage h-[200px] overflow-hidden rounded-[7px]'>
          <img
            alt='card-image'
            src={props.destiImage}
            className='w-full h-[100%] object-cover transition-all duration-150 ease-in-out rounded-[7px] hover:transform hover:scale-105'
          />
        </div>
        <h1 className='text-xl lg:text-2xl font-bold p-2'>{props.heading}</h1>
        <h1 className='flex text-sm lg:text-base items-center gap-2 p-2'>
          <FaMapMarker className='text-blue-800' /> {props.location}
        </h1>
        <p className='text-md lg:text-lg p-2'>{props.text}</p>
        <div className='flex justify-between items-baseline p-2'>
          <h1 className='text-red-600'>{`₹ ${props.price}`}</h1>
          <button className='mr-2 lg:mr-5 border bg-black text-white rounded-[5px] p-2 lg:p-5'>
            Details
          </button>
        </div>
      </div>
    </>
  );
}

export default DestinationData;
