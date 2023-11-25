import React from 'react';
import photo from '../assets/Group 167.png';

const BookNow = () => {
  return (
    <div className='lg:mx-20 lg:p-20 py-40'>
      <div className='flex lg:items-center lg:justify-between items-center justify-center'>
        <div className='lg:flex-1 hidden lg:block'>
          <img src={photo} className='w-3/4' alt='' />
        </div>
        <div className='lg:flex-1 '>
          <form
            onSubmit={(e) => e.preventDefault()}
            className=' shadow-2xl rounded-2xl p-6 lg:w-1/2 flex flex-col mx-auto gap-2 items-start'
          >
            <h1 className='font-bold text-3xl'>Book now</h1>
            <p className='mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <label className='font-semibold text-sm' htmlFor=''>
              CITY
            </label>
            <input
              className='bg-gray-200 p-2 w-full rounded-lg text-sm'
              type='text'
              placeholder='Enter city name'
            />
            <div className='flex gap-2'>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold text-sm' htmlFor=''>
                  ARRIVAL
                </label>
                <input
                  className='bg-gray-200 text-sm w-full p-2 rounded-lg'
                  type='text'
                  placeholder='10 October'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold text-sm' htmlFor=''>
                  DEPARTURE
                </label>
                <input
                  className='bg-gray-200 w-full p-2 text-sm rounded-lg'
                  type='text'
                  placeholder='11 October'
                />
              </div>
            </div>
            <div className='flex gap-2'>
              <div className=' flex flex-col  gap-2'>
                <label className='font-semibold text-sm' htmlFor=''>
                  STAR
                </label>
                <div className=' flex justify-start'>
                  <span className='rounded-bl-lg rounded-tl-lg bg-gray-300 p-2 '>-</span>
                  <input
                    className='bg-gray-200 text-sm p-2 w-1/2  text-center '
                    type='text'
                    placeholder='4'
                  />
                  <span className='rounded-br-lg rounded-tr-lg bg-gray-300 p-2'>+</span>
                </div>
              </div>
              <div className=' flex flex-col gap-2'>
                <label className='font-semibold text-sm' htmlFor=''>
                  ROOM
                </label>
                <div className='w-full flex justify-start '>
                  <span className='rounded-bl-lg rounded-tl-lg bg-gray-300 p-2'>-</span>
                  <input
                    className='bg-gray-200 text-sm p-2 w-1/2  text-center '
                    type='text'
                    placeholder='1'
                  />
                  <span className='rounded-br-lg rounded-tr-lg bg-gray-300 p-2'>+</span>
                </div>
              </div>
            </div>
            <button className='text-white font-medium bg-black rounded text-sm mt-8 p-2 px-4'>
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
