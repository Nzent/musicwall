import { motion } from "framer-motion";
import Image from "next/image";
import Home from './sections/home'
export default function Index() {

  const style = 'font-weight: lighter; font-size: 30px;color: #10b981; text-shadow: 3px 3px 0 rgba(16, 185, 129,0.2)';
  console.log('dev by' + '%c nirvanzentinal', style)
  return (
    <>
      <section className='overflow-hidden'>
        <div className='h-screen w-full bg-bgimg absolute'></div>
        {/* <div className='absolute flex h-full w-full justify-end items-center overflow-hidden'>
          <div className='p-2 bg-white opacity-50  transform rotate-45'>
            <Image src='/imgs/album-art.jpg' width={600} height={600} />
          </div>
        </div> */}

        <div className='h-screen w-full backdrop-filter backdrop-blur-lg dark:bg-black bg-white dark:bg-opacity-50 bg-opacity-20 absolute'></div>

        {/* sections */}
          <Home />
      </section>
    </>
  )
}