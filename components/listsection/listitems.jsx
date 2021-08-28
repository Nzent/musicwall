import React from 'react'
import Image from "next/image";
import { BookmarkIcon } from '@heroicons/react/outline';
export default function Listitems() {
    return (
        <>
            <div className='
            px-2 py-1 
            
            dark:bg-gray-800 dark:bg-opacity-50'>
                <div className='group'>
                    <div className='flex flex-row justify-between items-center 
                    backdrop-filter backdrop-blur-md bg-opacity-80
                        bg-white rounded-md p-2 cursor-pointer transition duration-300 group-hover:bg-green-500
                        hover:shadow-md
                        dark:bg-gray-800
                        
                        dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-80'>
                        <div className='flex items-center space-x-2'>
                            <Image src='/imgs/ab1.jpg' width={40} height={40} className='rounded-md drop-shadow-xl' alt="album art thumbnail"/>
                            {/* Name */}
                            <div>
                                <h1 className='text-gray-500 font-bold group-hover:text-white transition duration-300 dark:text-gray-200' >So It Goes</h1>
                            </div>
                        </div>
                        {/* Artist */}
                        <div>
                            <h1 className='text-gray-500 group-hover:text-white transition duration-300  dark:text-gray-200'>Ben Kessler</h1>
                        </div>
                        {/* Duration */}
                        <div className='text-gray-500 group-hover:text-white font-bold transition duration-300  dark:text-gray-200'>
                            2:38
                        </div>
                        {/* Bookmark */}
                        <div className='text-gray-500 group-hover:text-white font-bold transition duration-300   dark:text-gray-200'>
                            <BookmarkIcon className='h-5 w-5' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
