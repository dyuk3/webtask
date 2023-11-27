import React from 'react';
import photo1 from '../assets/pic-1.png';
import photo2 from '../assets/pic-2.png';
import photo3 from '../assets/pic-3.png';

const testimonials = [
  {
    name: 'Corey Korsgaard',
    img: photo1,
  },
  {
    name: 'Jakob Aminoff',
    img: photo2,
  },
  {
    name: 'Carla Press',
    img: photo3,
  },
];

const Testimonials = () => {
  return (
    <div className='m-10'>
      <h1 className='text-center font-medium text-4xl'>Testimonials</h1>
      <div className='flex overflow-x-scroll lg:overflow-auto no-scrollbar justify-between p-8 gap-32 mt-16'>
        {testimonials.map((item, index) => (
          <div key={index} className='flex flex-col min-w-full lg:min-w-min  gap-4 items-center'>
            <img src={item.img} alt='' />
            <h1 className='border-b-green-300 border-b-2 pb-4'>{item.name}</h1>
            <p className='text-center'>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
