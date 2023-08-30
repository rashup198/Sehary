import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TeamCard from './TeamCard';
import { dataTeam, responsive } from './Teamdata';

const Team = () => {
  
      const data = dataTeam.map((item) => { 
        <TeamCard key={item.id} image={item.image} name={item.name} url={item.url} designation={item.designation} exp={item.exp} ></TeamCard>
      })

  return (
    <div>
      <Carousel responsive={responsive}>
        {data}
    </Carousel>
    </div>
  )
}

export default Team
