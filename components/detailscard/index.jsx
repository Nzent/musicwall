import React from 'react'
import Image from 'next/image'
export default function Index() {
    return (
        <>
            <div className='bg-white shadow-md p-2 rounded-md flex space-x-2
            dark:bg-gray-800 backdrop-filter backdrop-blur-md bg-opacity-80'>
                <div>
                    <Image src='/imgs/ab1.jpg' width={200} height={200} className='rounded-md shadow-md' />
                </div>
                <div>
                    <div><span className='text-gray-500 font-bold dark:text-white'>Song</span> : <span className='text-gray-500 dark:text-gray-200'> So It Goes</span></div>
                    <div><span className='text-gray-500 font-bold dark:text-white'>Artist</span> : <span className='text-gray-500 dark:text-gray-200'> Ben Kessler</span></div>
                    <div><span className='text-gray-500 font-bold dark:text-white'>Year</span> : <span className='text-gray-500 dark:text-gray-200'> 2020</span></div>
                    <div><span className='text-gray-500 font-bold dark:text-white'>Album</span> : <span className='text-gray-500 dark:text-gray-200'> So It Goes</span></div>
                </div>
            </div>
        </>
    )
}
