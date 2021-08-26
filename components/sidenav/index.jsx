import { ClockIcon, CollectionIcon, HomeIcon, InformationCircleIcon, LockOpenIcon, LogoutIcon, MoonIcon, MusicNoteIcon, SunIcon, TrendingUpIcon, UserAddIcon, UserIcon, GlobeIcon, MusicNoteIcon as Logo } from '@heroicons/react/solid'
import React, { useState } from 'react'
import Listitem from './listitem'
import AudioPlayer from '../audioplayer/player'
import Image from 'next/image'
import useDarkMode from '../utils/useDarkMode';
import { signIn, signOut, useSession } from 'next-auth/client'
export default function Sidenav() {



    const [session, loading] = useSession()
    const [colorTheme, setTheme] = useDarkMode()


    return (
        <>
            {/* Left navbar */}
            <div className='p-4 h-full fixed z-10 
            backdrop-filter backdrop-blur-xl 
            bg-white bg-opacity-90 shadow-md
            dark:bg-gray-800 dark:bg-opacity-50 dark:shadow-md'
            >
                <div className='flex flex-col'>

                    <div className='flex flex-col justify-center items-center my-4'>
                        <div><Logo className="h-10 w-10 text-green-500 group-hover:text-white transition duration-300" /></div>
                        <h1 className='text-2xl text-green-500 font-light'>MUZIC WALL</h1>
                    </div>

                    {/* PROFILE */}
                    {session &&
                        <div className='flex flex-col justify-center items-center mb-2'>
                            <Image src={session.user.image} width={50} height={50} className='rounded-full' />
                            <div className='text-gray-800 font-bold dark:text-green-500'>{session.user.name}</div>
                            <div>{session.accessToken}</div>
                        </div>
                    }
                    <ul className={`text-gray-500 space-y-2 `}>

                        {/* Home */}
                        <Listitem icon={<HomeIcon className="h-5 w-5 text-gray-500 dark:text-gray-200 group-hover:text-white transition duration-300" />}
                            title='Home' />

                        {/* Artists */}
                        <Listitem icon={<UserIcon className="h-5 w-5 text-gray-500 dark:text-gray-200 group-hover:text-white transition duration-300" />}
                            title='Artists' />

                        {/* Genres */}
                        <Listitem icon={<MusicNoteIcon className="h-5 w-5 text-gray-500 dark:text-gray-200 group-hover:text-white transition duration-300" />}
                            title='Genres' />

                        {/* Trendings */}
                        <Listitem icon={<TrendingUpIcon className="h-5 w-5 text-gray-500 dark:text-gray-200 group-hover:text-white transition duration-300" />}
                            title='Trending' />

                        {/* About */}
                        <Listitem icon={<InformationCircleIcon className="h-5 w-5 text-gray-500 dark:text-gray-200 group-hover:text-white transition duration-300" />}
                            title='About' />

                        {/* My musics */}
                        <li className={`my-4 justify-center text-lg flex items-center space-x-2`}>
                            <span className='text-green-500'>My muzic</span></li>

                        {/* AUTH */}
                        {!session ?
                            <>
                                <div onClick={() => signIn('google')}>
                                    <Listitem icon={<GlobeIcon className="h-5 w-5 text-gray-500 dark:text-gray-200 group-hover:text-white transition duration-300" />}
                                        title='Google' />
                                </div>
                                <div onClick={() => signIn('')}>
                                    <Listitem icon={<LockOpenIcon className="h-5 w-5 text-gray-500 dark:text-gray-200 group-hover:text-white transition duration-300" />}
                                        title='Login' />
                                </div>
                                <div onClick={() => signIn('')}>
                                    <Listitem icon={<UserAddIcon className="h-5 w-5 text-gray-500 dark:text-gray-200 group-hover:text-white transition duration-300" />}
                                        title='Register' />
                                </div>
                            </>
                            :
                            <>

                                {/* My playlist */}
                                < Listitem icon={<CollectionIcon className="h-5 w-5 text-gray-500 dark:text-gray-200 group-hover:text-white transition duration-300" />}
                                    title='My Playlists' />

                                {/* Recent played */}
                                <Listitem icon={<ClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-200 group-hover:text-white transition duration-300" />}
                                    title='Recent played' />
                                {/* Auth */}
                                <div onClick={() => signOut()}>
                                    <Listitem icon={<LogoutIcon className="h-5 w-5 text-gray-500 dark:text-gray-200 group-hover:text-white transition duration-300" />}
                                        title='Log out' />
                                </div>
                            </>

                        }
                        {/* Theme */}
                        <li className={`my-4 justify-center text-lg flex items-center space-x-2`}>
                            <span className='text-green-500'>Dark mode</span>
                        </li>
                        {colorTheme === 'light' ?
                            <button onClick={() => setTheme('light')} className='w-full'>
                                <Listitem onClick={() => setTheme('light')} icon={<SunIcon className="h-5 w-5 text-gray-500 dark:text-gray-200 group-hover:text-white transition duration-300" />}
                                    title='Light' />
                            </button>
                            :
                            <button onClick={() => setTheme('dark')} className='w-full'>
                                <Listitem icon={<MoonIcon className="h-5 w-5 text-gray-500 dark:text-gray-200 group-hover:text-white transition duration-300" />}
                                    title='Dark' />
                            </button>
                        }
                    </ul>
                </div>
            </div>

            {/* Bottom player section */}
            <div className='fixed z-10 bottom-2 ml-2 pr-2 pl-48 flex justify-center items-center w-full'>
                <AudioPlayer />
            </div>
        </>
    )
}



