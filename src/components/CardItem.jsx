import React from 'react';

export default function CardItem({ dataCard }) {
  
  if (!dataCard) {
    return null;
  }

  const { superHost, photo, type, beds, rating, title } = dataCard;

  return (
    <div className='mb-9'>
      <figure className='overflow-hidden shadow-lg shadow-cyan-800 rounded-2xl'>
        <img
          className='object-cover h-[240px] w-full rounded-2xl'
          src={photo}
          alt=""
        />
      </figure>

      <div className='mt-3'>
        <ul className='flex-col list-none'>
          {superHost && (
            <div className='inline-block'>
              <li className='border border-black font-bold rounded-lg px-2 p-1 text-[.85rem] flex items-center mt-2'>
                SUPER HOST
              </li>
            </div>
          )}

          <div className='flex items-center justify-between w-full'>
            <li className='text-[.9rem] text-slate-500 font-semibold '>
              {type}
            </li>

            {beds !== null && (
              <li className='text-[.9rem] text-slate-500 font-semibold'>
                {beds} beds
              </li>
            )}

            <div className='flex items-center h-4'>
              <li>
                <figure>
                  <img className='w-8' src="/star.svg" alt="star icon" />
                </figure>
              </li>
              <li className='flex items-center h-4 text-[.9rem] font-bold ml-1'>
                {rating}
              </li>
            </div>
          </div>

          <li className='text-[1rem] font-semibold'>{title}</li>
        </ul>
      </div>
    </div>
  );
}
