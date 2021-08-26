import React from 'react'
import { ArrowCircleLeftIcon, ArrowCircleRightIcon, PauseIcon, PlayIcon, VolumeUpIcon } from '@heroicons/react/solid'
// import { PlayIcon } from '@heroicons/react/solid'
export default function Player() {


    const media_play = (e) => (console.log(e.id))


    function media_next() {

    }
    function media_prev() {

    }
    function media_pause() {

    }
    function media_position() {

    }
    function media_autoplay() {

    }

    return (
        <>
            <div className="bg-white rounded-md shadow-md px-8 py-2 mr-2 
            backdrop-filter backdrop-blur-md opacity-80 w-full
            dark:bg-gray-800">
                <div className="flex justify-between items-center space-x-4">
                    <div className="flex justify-between items-center">
                        {/* PREV */}
                        <div className='cursor-pointer group'>
                            <ArrowCircleLeftIcon  className="h-5 w-5 text-gray-500 text-light dark:text-gray-200 group-hover:text-green-500 transition duration-300" />
                        </div>
                        {/* PAUSE */}
                        {/* <div className='cursor-pointer group'>
                            <PauseIcon className="h-8 w-8 text-gray-500 text-light dark:text-gray-200 group-hover:text-green-500 transition duration-300" />
                        </div> */}
                        {/* PLAY */}
                        <div className='cursor-pointer group'>
                            <PlayIcon onClick={() => media_play()} id='media' className="h-8 w-8 text-gray-500 text-light dark:text-gray-200 group-hover:text-green-500 transition duration-300" />
                        </div>
                        {/* NEXT */}
                        <div className='cursor-pointer group'>
                            <ArrowCircleRightIcon className="h-5 w-5 text-gray-500 text-light dark:text-gray-200 group-hover:text-green-500 transition duration-300" />
                        </div>
                    </div>
                    {/* VOLUME */}
                    <div className="flex justify-between items-center space-x-1">
                        <div><VolumeUpIcon className="h-5 w-5 text-gray-500 text-light dark:text-gray-200" /></div>
                        <input type="range" name="" step="5" id="" className="slider" />
                    </div>
                    <div className="flex justify-between items-center space-x-1 w-full">
                        <input type="range" name="" step="1" id="" className="slider" />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-500">2.03</span>
                    </div>
                </div>
            </div>
        </>
    )
}
