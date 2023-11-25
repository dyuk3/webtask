import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const [navOpen, setnavOpen] = useState(false);

  return (
    <div className='lg:px-20 lg:p-6 lg:flex lg:justify-between lg:items-center w-full '>
      <div
        className={`z-20 fixed flex flex-col items-center p-20 gap-20  bg-gray-400 text-xl h-screen w-screen font-medium top-0 ${
          navOpen ? 'left-0' : '-left-[120%]'
        }`}
      >
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Schedules</a>
        <a href='#'>Membership</a>
        <a href='#'>Pricing</a>
        <IoClose
          size={30}
          className='absolute top-5 right-5'
          onClick={() => setnavOpen(!navOpen)}
        />
      </div>
      <div></div>
      <div className='hidden lg:flex lg:gap-12 lg:font-medium'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Schedules</a>
        <a href='#'>Membership</a>
        <a href='#'>Pricing</a>
      </div>

      <div className=' flex items-center justify-between p-2 gap-4 px-4  '>
        <div className='md:hidden '>
          <IoMenu size={40} onClick={() => setnavOpen(!navOpen)} />
        </div>
        <button className='text-[#7D7D7D]'>Offers</button>
        <button className='p-2 px-4 rounded-full text-white bg-[#F27A44]'>Courses</button>
      </div>
    </div>
  );
};

export default Header;
