import React from 'react';
import image from '../assets/Group 171.png';

const PrimarySection = () => {
  return (
    <div className='lg:px-16 py-16 px-4  bg-[#F8F1D340] '>
      <div className='flex content-between  items-end lg:w-4/5 lg:mx-auto'>
        <div className='flex-1 flex flex-col gap-16 items-start'>
          <h4 className='font-semibold text-[20px] -mb-10'>Discover the beauty of the tropics</h4>
          <h1 className='font-bold lg:text-7xl text-3xl lg:leading-[80px]'>
            Tropical Destinations <p className='font-semibold'>For Student</p>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis cumque
            repudiandae! Nihil nam voluptates error modi dolor veniam{' '}
          </p>
          <button className='p-2 px-8 rounded-full text-white  bg-btn-color font-light'>
            SIGN UP
          </button>
        </div>
        <div className='flex-1'>
          <img className='w-full aspect-auto' src={image} alt='' />
        </div>
      </div>
    </div>
  );
};

export default PrimarySection;
