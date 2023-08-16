import React, { Component } from 'react'
import { FaMapMarker } from "react-icons/fa";

function DestinationData(props){
  return (
    <div className='destiCard flex flex-col w-[32%] p-[5px] text-start shadow-2xl rounded-[7px] cursor-pointer '>
      <div className='destiImage h-[200px] overflow-hidden rounded-[7px] '>
        <img alt='card-image' src={props.destiImage} className='w-[100%] h-[100%] transition-all duration-150 ease-in-out rounded-[7px] hover:transform hover:scale-[1.2]'></img>
      </div>
      <h1 className='text-[25px] font-bold   p-[5px ]'>{props.heading}</h1>
      <h1 className='flex text-[12px] items-center gap-2'><FaMapMarker className=' text-blue-800'></FaMapMarker> {props.location}</h1>
      <p className='text-[15px] mt-[5px]'>{props.text}</p>
      <div className='flex justify-between align-baseline'>
        <h1 className='text-red-600 mt-[4px]'>₹  {props.price}</h1>
        <button className='mr-[5px] border bg-black text-white rounded-[5px] p-[5px]'>Details</button>
      </div>
    </div>
  )
}

export default DestinationData
