import { ClockIcon, CollectionIcon, HomeIcon, InformationCircleIcon, LockOpenIcon, MoonIcon, MusicNoteIcon, SunIcon, TrendingUpIcon, UserAddIcon, UserIcon } from '@heroicons/react/outline'
import { MusicNoteIcon as Logo } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import Listitem from './listitem'
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';
import useDarkMode from '../utils/useDarkMode';

export default function Sidenav() {



    // Declaration
    const [enabled, setEnabled] = useState(false)

    const [colorTheme, setTheme] = useDarkMode()
    //     const { theme, setTheme } = useTheme()
    // localStorage

    //     useEffect(()=>{
    //         enabled ? setTheme('dark') : setTheme('light') 
    //     })


    return (
        <>
            <div className='p-4 h-full auto fixed z-10 
            backdrop-filter backdrop-blur-xl 
            bg-white bg-opacity-90 shadow-lg
            dark:bg-gray-800 dark:bg-opacity-50 dark:shadow-lg
            '
            
            >
                <div className='flex flex-col'>

                    <div className='flex flex-col justify-center items-center my-4'>
                        <div><Logo className="h-10 w-10 text-green-500 group-hover:text-white transition duration-300" /></div>
                        <h1 className='text-2xl text-green-500 font-light'>MUZIC WALL</h1>
                    </div>

                    <ul className={`text-gray-500 space-y-2 `}>

                        {/* Home */}
                        <Listitem icon={<HomeIcon className="h-5 w-5 text-gray-500 group-hover:text-white transition duration-300" />}
                            title='Home' />

                        {/* Artists */}
                        <Listitem icon={<UserIcon className="h-5 w-5 text-gray-500 group-hover:text-white transition duration-300" />}
                            title='Artists' />

                        {/* Genres */}
                        <Listitem icon={<MusicNoteIcon className="h-5 w-5 text-gray-500 group-hover:text-white transition duration-300" />}
                            title='Genres' />

                        {/* Trendings */}
                        <Listitem icon={<TrendingUpIcon className="h-5 w-5 text-gray-500 group-hover:text-white transition duration-300" />}
                            title='Trending' />

                        {/* About */}
                        <Listitem icon={<InformationCircleIcon className="h-5 w-5 text-gray-500 group-hover:text-white transition duration-300" />}
                            title='About' />

                        {/* My musics */}
                        <li className={`my-4 justify-center text-lg flex items-center space-x-2`}>
                            <span className='text-green-500'>My muzic</span></li>

                        {/* My playlist */}
                        <Listitem icon={<CollectionIcon className="h-5 w-5 text-gray-500 group-hover:text-white transition duration-300" />}
                            title='My Playlists' />

                        {/* Recent played */}
                        <Listitem icon={<ClockIcon className="h-5 w-5 text-gray-500 group-hover:text-white transition duration-300" />}
                            title='Recent played' />
                        {/* Auth */}
                        <Listitem icon={<LockOpenIcon className="h-5 w-5 text-gray-500 group-hover:text-white transition duration-300" />}
                            title='Login' />
                        <Listitem icon={<UserAddIcon className="h-5 w-5 text-gray-500 group-hover:text-white transition duration-300" />}
                            title='Register' />

                        {/* Theme */}
                        <li className={`my-4 justify-center text-lg flex items-center space-x-2`}>
                            <span className='text-green-500'>Dark mode</span>
                        </li>
                        {colorTheme === 'light' ?
                            <button onClick={() => setTheme('light')} className='w-full'>
                                <Listitem onClick={() => setTheme('light')} icon={<SunIcon className="h-5 w-5 text-gray-500 group-hover:text-white transition duration-300" />}
                                    title='Light' />
                            </button>
                            :
                            <button onClick={() => setTheme('dark')} className='w-full'>
                                <Listitem icon={<MoonIcon className="h-5 w-5 text-gray-500 group-hover:text-white transition duration-300" />}
                                    title='Dark' />
                            </button>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}



