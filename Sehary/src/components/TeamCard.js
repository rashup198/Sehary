import React from 'react'
import { BsLinkedin } from "react-icons/bs";

const TeamCard = (props) => {
  return (
    <div>
      <div className='card  flex flex-col justify-center items-center rounded-2xl'>
            <img src={props.image} className='h-[35vh] object-cover w-[50%] rounded-full'></img>

            <div className='flex items-center gap-3 mt-[10px]'>
            <h1 className='text-bold text-2xl'>{props.name}</h1>
            <a href={props.url}target='blank'><BsLinkedin className='text-blue-600 text-xl cursor-pointer'></BsLinkedin></a>
            </div>
            <h1 className=' font-bold'>{props.designation}</h1>
            <p className='text-md font-light'>{props.exp}</p>
            
        </div>
    </div>
  )
}

export default TeamCard
