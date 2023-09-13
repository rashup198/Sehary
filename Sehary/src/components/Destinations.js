import React from 'react'
import DestinationData from './DestinationData'
import image1 from "../asset/image1.jpg"
import image2 from "../asset/jeffrey-workman-YvkH8R1zoQM-unsplash.jpg"
import image3 from "../asset/image.jpg"

const Destinations = () => {
  return (
    <div className='trip -mt-[300px] mb-[30px] ml-[20px] mr-[20px]'>
      <h1 className='text-4xl lg:text-5xl text-center font-bold'>Trending Destinations</h1>
      <p className='text-lg lg:text-xl text-center text-gray-500'>Explore our best locations with Sehary</p>

      <div className='cards mt-5 lg:mt-10 w-[100%] flex flex-col lg:flex-row justify-between'>

        <DestinationData
          destiImage={image1}
          heading="Homestay Palampur"
          location="Palampur, Himachal Pradesh"
          text="This location is extremely focused on connection with nature. Best place to spend your vacation."
          price="13000/Night"
        />

        <DestinationData
          destiImage={image2}
          heading="Cottage Sakleshpur"
          location="Sakleshpur, Karnataka"
          text="This location is extremely focused on connection with nature. Best place to spend your vacation."
          price="15000/Night"
        />
        <DestinationData
          destiImage={image3}
          heading="Homestay Ajmer"
          location="Ajmer, Rajasthan"
          text="This location is extremely focused on connection with nature. Best place to spend your vacation."
          price="18000/Night"
        />
      </div>
    </div>
  )
}

export default Destinations
