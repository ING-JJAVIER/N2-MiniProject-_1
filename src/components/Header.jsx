import React from 'react'

export default function Header({ modalOpen }) {
    return (
        <>
            <header className='flex flex-grow flex-wrap gap-y-2 justify-between'>
                <figure className='w-4/12'>
                    <img className='w-full' src="https://windbnb-page.netlify.app/static/media/logo.beef9462.svg" alt="" />
                </figure>

                <div className='border flex items-center w-7/12 rounded-lg shadow-md shadow-cyan-800 cursor-pointer' onClick={modalOpen}>

                    <span className='flex-grow border-r text-base p-2 text-gray-400'>Add city</span>

                    <span className='flex-grow text-base border-r p-2 text-gray-400'>Add guests</span>

                    <figure className='h-7 mx-7 flex justify-center items-center w-7'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[#ed6767]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </figure>
                </div>

            </header>
        </>
    )

}