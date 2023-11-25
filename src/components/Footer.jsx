import React from 'react';

const Footer = () => {
  return (
    <div className='flex w-full justify-center lg:flex-row  flex-col items-center gap-4 lg:gap-20 mt-10  p-10 lg:px-40 mb-20 '>
      <div className=' w-full flex flex-wrap  justify-center   gap-5 lg:gap-20 '>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Sales and Refunds</p>
        <p>Legal</p>
      </div>
      <div className=' w-full flex flex-wrap  justify-center  gap-5  font-medium lg:gap-20  '>
        <p>About</p>
        <p>Schedules</p>
        <p>Pricings</p>
        <p>Membership</p>
        <p>Joins</p>
      </div>
    </div>
  );
};

export default Footer;
