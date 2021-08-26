import React from 'react'

export default function carouselitem({ src, name, artist }) {
    const handleDragStart = (e) => e.preventDefault();
    return (
        <>
            <div className='group p-2 '>
                <div className='relative'>
                    <div className='absolute flex flex-col justify-center items-center h-full w-full
                    backdrop-filter blur-md
                    transition duration-300
                    group-hover:opacity-100
                    group-hover:bg-green-500
                    opacity-0
                    rounded-md
                    cursor-pointer'>
                        <h1 className='text-2xl text-white italic'>{name}</h1>
                        <h1 className='text-2xl text-white'>{artist}</h1>
                    </div>
                    <img src={src} onDragStart={handleDragStart} role="presentation" className='rounded-md shadow-md' />
                </div>
            </div>
        </>
    )
}
