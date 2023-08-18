import React from 'react'
import DestinationData from './DestinationData'
import image1 from "../asset/image1.jpg"
import image2 from "../asset/jeffrey-workman-YvkH8R1zoQM-unsplash.jpg"
import image3 from "../asset/image.jpg"
  


const Destinations = () => {
  return (
    <div className='trip -mt-[300px] mb-[30px] ml-[20px] mr-[20px]'>
      <h1 className='text-[50px] text-center font-bold'>Trending Destinations</h1>
      <p className='text-[25px] text-center text-gray-500'>Explore our best location with Sehary</p>

      <div className='cards mt-[20px] flex justify-between'>
        
      
            
            <DestinationData
               destiImage={image1}
               heading="Homestay Palampur"
               location="Palampur, Himachal Pradesh"
               text="This Location consists of extremely focused on connection with nature Best place to spend your vaction"
               price="13000/Night"
            />

        
         <DestinationData
        destiImage={image2}
        heading="Cottage Sakleshpur"
        location="Sakleshpur, Karnataka"
        text="This Location consists of extremely focused on connection with nature Best place to spend your vaction"
        price="15000/Night"
        />
         <DestinationData
        destiImage={image3}
        heading="Homestay Ajmer"
        location="Ajmer, Rajasthan"
        text="This Location consists of extremely focused on connection with nature Best place to spend your vaction"
        price="18000/Night"
        />
      </div>

    </div>
  )
}

export default Destinations
