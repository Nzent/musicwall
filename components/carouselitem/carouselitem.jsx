import React from 'react'

export default function carouselitem() {
    const handleDragStart = (e) => e.preventDefault();
    return (
        <>
            <div className='group p-2 '>
                <div className='relative'>
                    <div className='absolute flex flex-col justify-center items-center h-full w-full
                    backdrop-filter transition duration-300
                    group-hover:opacity-90
                    group-hover:bg-green-500
                    opacity-0
                    rounded-md
                    cursor-pointer'>
                        <h1 className='text-2xl text-white italic'>So It Goes</h1>
                        <h1 className='text-2xl text-white'>Ben Kessler</h1>
                    </div>
                    <img src="/imgs/ab1.jpg" onDragStart={handleDragStart} role="presentation" className='rounded-md shadow-md' />
                </div>
            </div>
        </>
    )
}
