import React, { useState} from 'react';

export default function SearchModal({ modalClose, dataCards, setFilData }) {
  const [city, setCity] = useState('');
  const [guests, setGuests] = useState(0);

  const inputCity = (e) => {
    setCity(e.target.value);
  };

  const plusGuests = () => {
    setGuests(prevGuests => prevGuests + 1);
  };

  const lessGuests = () => {
    setGuests(prevGuests => Math.max(0, prevGuests - 1));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filData = dataCards.filter(item =>
      item.city.toLowerCase().includes(city.toLowerCase()) &&
      item.maxGuests >= guests
    );
    setFilData(filData);
    setCity('');  
    setGuests(0); 
    modalClose(); 
  };

  return (
    <main className='w-11/12 mb-96'>
      <header>
        <div className='flex items-center justify-between h-10 bg-white'>
          <h2 className='text-black text-[.8rem] font-bold'>Edit your search</h2>
          <button className='text-[2rem] mb- hover:text-red-500' onClick={modalClose}>&times;</button>
        </div>
      </header>

      <section className='border rounded-lg shadow-md shadow-gray-500 flex items-center overflow-hidden w-full'>
        <form onSubmit={handleSearch} className='w-full'>
          <label htmlFor="city" className='h-full flex items-center '>
            <div className='flex flex-col p-1 w-full border-r flex-grow'>
              <span className='text-[.6rem] font-extrabold px-2'>Location</span>
              <input
                type="text"
                id="city"
                className='flex-grow outline-none px-2 w-full text-[1rem]'
                placeholder='Add city'
                value={city}
                onChange={inputCity}
              />
            </div>
            <div className='flex flex-col p-1 w-full border-r flex-grow'>
              <span className='text-[.6rem] font-extrabold px-2'>Guests</span>
              <div className='flex items-center'>
                <button type='button' onClick={lessGuests}>-</button>
                <input
                  type="text"
                  id="guests"
                  className='outline-none text-gray-400 w-16 px-2 h-full text-[1rem]'
                  value={guests}
                  readOnly
                />
                <button type='button' onClick={plusGuests}>+</button>
              </div>
            </div>
            <button type='submit' className='cursor-pointer flex items-center justify-center px-4 bg-[#ec6667] text-white h-[2.9rem] text-[1rem] font-extrabold active:text-[1.2rem]'>
              <figure className='mr-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 stroke-[4]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </figure>
              Search
            </button>
          </label>
        </form>
      </section>
      <div>
        {city && (
          <ul className='dropdown mt-2 '>
            {dataCards.filter(item => item.city.toLowerCase().includes(city.toLowerCase())).map((item, index) => (
              <button key={index} className=' flex items-center border border-transparent hover:border-b-cyan-600 active:bg-slate-500 px-2 rounded-md mb-2'onClick={() => setCity(item.city)}>
                <img className='h-4 mr-2' src="/pin.svg" alt="pinmap icon" />
                <li> {item.city} </li>
              </button>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
