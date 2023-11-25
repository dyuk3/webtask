import React from 'react';
import harvardPhoto from '../assets/card-image.png';
import oxfordPhoto from '../assets/card-image-1.png';
import stanfordPhoto from '../assets/card-image-2.png';
import nanyangPhoto from '../assets/card-image-3.png';
import { BsThreeDots } from 'react-icons/bs';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const destinations = [
  {
    img: harvardPhoto,
    name: 'Harvard University',
    location: 'Cambridge, Massachusetts, UK',
  },
  {
    img: oxfordPhoto,
    name: 'Oxford University',
    location: 'Oxford, England',
  },
  {
    img: stanfordPhoto,
    name: 'Standford University',
    location: 'Stanford, California',
  },
  {
    img: nanyangPhoto,
    name: 'Nanyang University',
    location: 'Nanyang Ave, Singapura',
  },
];

const Destinations = () => {
  return (
    <div className='lg:m-4 py-20 lg:mx-32'>
      <h1 className='font-semibold mx-10 text-3xl'>Our Destinations</h1>
      <div className='flex overflow-x-scroll lg:overflow-x-auto no-scrollbar px-10 pb-12 gap-10 my-12 '>
        {destinations.map((destination, index) => (
          <div key={index} className='lg:w-1/4 min-w-[220px] shadow-2xl rounded-2xl'>
            <img src={destination.img} className='xl:h-80 h-40 w-full ' alt='' />
            <div className='flex flex-col gap-10 p-6'>
              <h1 className='font-semibold text-xl'>{destination.name}</h1>
              <div className='flex items-center justify-between'>
                <p className='text-sm overflow-ellipsis line-clamp-2'>{destination.location}</p>
                <span className='w-10 p-2 font-semibold text-xl h-10 cursor-pointer rounded-full flex justify-center items-center bg-gray-300'>
                  <BsThreeDots />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center'>
        <BsArrowLeft size={40} className='cursor-pointer' />
        <p className='mx-2'>
          <span className='text-3xl font-semibold'>2 </span>
          <span className='text-gray-400'>/ 140</span>
        </p>
        <BsArrowRight size={40} color='orange' className='cursor-pointer' />
      </div>
    </div>
  );
};

export default Destinations;
