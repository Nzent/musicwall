import Image from 'next/image';
import React from 'react'

export default function CarouselItem({ src, name, artist }) {
    const handleDragStart = (e) => e.preventDefault();
    return (
        <>
            <div className='group p-2 '>
                <div className='relative'>
                    <div>
                        <div className='absolute flex flex-col justify-center items-center h-auto bottom-1 w-full
                            z-10 py-2
                            backdrop-filter blur-md
                            transition duration-300
                            group-hover:opacity-100
                            group-hover:bg-green-500
                            opacity-0
                            rounded-b-md
                            cursor-pointer'>
                            <h1 className='text-2xl text-white italic'>{name}</h1>
                            <h1 className='text-2xl text-white'>{artist}</h1>
                        </div>
                        <Image width={600} height={600} src={src} onDragStart={handleDragStart} role="presentation" className='rounded-md shadow-md absolute cursor-pointer' alt='album art'/>
                    </div>
                </div>
            </div>
        </>
    )
}
