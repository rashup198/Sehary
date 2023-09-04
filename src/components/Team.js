import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TeamCard from './TeamCard';

const Team = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const dataTeam = [
    {
      id: 1,
      image: 'https://i.ibb.co/0jZzQYH/IMG-20210102-123456.jpg',
      name: 'Naveen Anand',
      url: 'https://www.linkedin.com/in/rahul-vihari-9b0b0a1b4/',
      designation: 'Co-Founder',
      exp: 'Serial Entrepreneur | Trader',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/0jZzQYH/IMG-20210102-123456.jpg',
      name: 'Vihari',
      url: 'https://www.linkedin.com/in/rahul-vihari-9b0b0a1b4/',
      designation: 'Co-Founder',
      exp: 'Serial Entrepreneur | Trader',
    },
    {
      id: 3,
      image: 'https://i.ibb.co/0jZzQYH/IMG-20210102-123456.jpg',
      name: 'Chandra Sekhar',
      url: 'https://www.linkedin.com/in/rahul-vihari-9b0b0a1b4/',
      designation: 'CTO',
      exp: 'Serial Entrepreneur | Trader',
    },
    {
      id: 4,
      image: 'https://i.ibb.co/0jZzQYH/IMG-20210102-123456.jpg',
      name: 'Rohit Tota',
      url: 'https://www.linkedin.com/in/rahul-vihari-9b0b0a1b4/',
      designation: 'CEO',
      exp: 'Serial Entrepreneur | Trader',
    },
    {
      id: 5,
      image: 'https://i.ibb.co/0jZzQYH/IMG-20210102-123456.jpg',
      name: 'Rahul',
      url: 'https://www.linkedin.com/in/rahul-vihari-9b0b0a1b4/',
      designation: 'CEO',
      exp: 'Serial Entrepreneur | Trader',
    },
  ];

  const data = dataTeam.map((item) => (
    <TeamCard
      key={item.id}
      image={item.image}
      name={item.name}
      url={item.url}
      designation={item.designation}
      exp={item.exp}
    />
  ));

  return (
    <div>
      <Carousel responsive={responsive}>{data}</Carousel>
    </div>
  );
};

export default Team;