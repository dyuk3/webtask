import React from 'react';
import photo from '../assets/Mask group.png';

const Explore2 = () => {
  return (
    <div className='p-10 pt-0 lg:mx-20'>
      <div className='flex items-center '>
        <div className='flex-1 flex flex-col items-start gap-5'>
          <p className='font-semibold'>Get 20% off for student</p>
          <div>
            <h1 className='font-bold text-4xl'>Student discounts available.</h1>
            <h2 className='font-medium text-2xl'>Get ready for some fun in the sun!</h2>
          </div>

          <ul className='list-inside list-disc'>
            <li>Lorem, ipsum dolor sit amet consectetur </li>
            <li>s laudantium, inventore dolorem, quo </li>
            <li>it. Commodi, numquam laborum omnis </li>
            <li>incidunt dolores earum, laboriosam at?</li>
          </ul>

          <button className='font-light text-white p-2 px-6 mt-6 bg-btn-color rounded-full'>
            Explore more
          </button>
        </div>
        <div className='flex-1 w-full flex justify-center'>
          <img className='w-1/2 h-1/2' src={photo} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Explore2;
