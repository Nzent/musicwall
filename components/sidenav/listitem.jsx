import React from 'react'
import { ClockIcon } from '@heroicons/react/outline'
export default function Listitem({icon,title}) {
    return (
        <li className='flex flex-row justify-center items-center space-x-2 cursor-pointer group 
        bg-gray-200 text-gray-800
        hover:bg-green-500 px-4 hover:shadow-md py-2 rounded-md transition duration-300 
        dark:bg-gray-800 dark:hover:bg-green-500'>
            <span>{icon}</span>
            <span className='text-gray-500 group-hover:text-white transition duration-300 dark:text-gray-200'>{title}</span>
        </li>
    )
}
