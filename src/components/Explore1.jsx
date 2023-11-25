import React from 'react';
import photo1 from '../assets/avatar.png';
import photo2 from '../assets/avatar-1.png';
import photo3 from '../assets/avatar-2.png';

const data = [
  {
    userImg: photo1,
    userName: 'Jenny Wilson',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, commodi ut cumque quisquam pariatur consequatur sed velit doloremque minus non ipsam repellendus reiciendis nulla neque adipisci? Eaque officiis quas reiciendis?',
  },
  {
    userImg: photo2,
    userName: 'Jenny Wilson',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, commodi ut cumque quisquam pariatur consequatur sed velit doloremque minus non ipsam repellendus reiciendis nulla neque adipisci? Eaque officiis quas reiciendis?',
  },
  {
    userImg: photo3,
    userName: 'Jenny Wilson',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, commodi ut cumque quisquam pariatur consequatur sed velit doloremque minus non ipsam repellendus reiciendis nulla neque adipisci? Eaque officiis quas reiciendis?',
  },
];

const Explore1 = () => {
  return (
    <div className='p-10 py-40 '>
      <div className='flex lg:flex-row flex-col-reverse gap-20 '>
        <div className='lg:flex-1 flex   lg:justify-center'>
          <div className='flex lg:w-1/2 flex-col gap-8 '>
            {data.map((data, index) => (
              <div key={index} className=' flex items-center gap-2 shadow-xl rounded-2xl p-4'>
                <img className='h-[80px] w-[80px]' src={data.userImg} alt='' />
                <div>
                  <h1 className='font-bold'>{data.userName}</h1>
                  <p className='overflow-ellipsis line-clamp-2'>{data.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='lg:flex-1 flex flex-col gap-8 items-start justify-center'>
          <div>
            <h1 className='font-semibold text-3xl mb-2 '>
              Tropical Adventure <p className='font-normal text-2xl '>for Students.</p>
            </h1>
            <p className='font-semibold'>Student Tropical Vacation: Relax and Recharge</p>
          </div>
          <ul className='list-disc list-inside ml-2 mb-4'>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </li>
            <li> tempore quo? Non ipsa rem inventore. Voluptatem </li>
            <li>excepturi cum praesentium ea nesciunt blanditiis delectus</li>
            <li>Iste harum cumque voluptatem, deserunt itaque culpa quia?</li>
          </ul>

          <button className='bg-btn-color p-2 px-6 font-light rounded-full text-white'>
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore1;
