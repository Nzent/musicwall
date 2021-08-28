import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ArrowCircleRightIcon, ArrowCircleLeftIcon } from '@heroicons/react/outline';
import Carouselitem from '../../../components/carouselitem/carouselitem';
import Listitems from '../../../components/listsection/listitems';
import DetailsCard from '../../../components/detailscard';
import axios from 'axios';



export default function Index() {

    return (
        <>
            <section className='absolute p-0 md:pl-48 overflow-hidden'>
                {/* CAROUSEL */}
                <div><h1 className='text-gray-800 m-2 text-2xl dark:text-white drop-shadow-md'>Top albums</h1></div>
                <div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={100}
                        dragEnabled
                        isPlaying
                        infinite
                        interval={5000}
                        totalSlides={8}
                        visibleSlides={4}
                    >
                        <Slider>
                            <Slide><Carouselitem src='/imgs/ab1.jpg' name='So Be Goes' artist='Ben Kessler' /></Slide>
                            <Slide><Carouselitem src='/imgs/ab2.jpg' name='Pain' artist='Ryan jones' /></Slide>
                            <Slide><Carouselitem src='/imgs/ab3.jpg' name='Kael' artist='Da Dain' /></Slide>
                            <Slide><Carouselitem src='/imgs/ab4.jpg' name='Pride' artist='Artist' /></Slide>
                            <Slide><Carouselitem src='/imgs/ab1.jpg' name='So Be Goes' artist='Ben Kessler' /></Slide>
                            <Slide><Carouselitem src='/imgs/ab2.jpg' name='Pain' artist='Ryan jones' /></Slide>
                            <Slide><Carouselitem src='/imgs/ab3.jpg' name='Kael' artist='Da Dain' /></Slide>
                            <Slide><Carouselitem src='/imgs/ab4.jpg' name='Pride' artist='Artist' /></Slide>

                        </Slider>
                        <div className='flex flex-row justify-between items-center px-2'>
                            <ButtonBack><ArrowCircleLeftIcon className='h-5 w-5 hover:text-gray-500 text-white transition duration-300 drop-shadow-md' /></ButtonBack>
                            <ButtonNext><ArrowCircleRightIcon className='h-5 w-5 hover:text-gray-500 text-white transition duration-300 drop-shadow-md' /></ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>

                {/* LIST SECTION */}
                <div className='p-2  mt-2'>
                    <div className='grid grid-cols-3'>
                        {/* List */}
                        {/* Left */}
                        <div className='col-span-2'>
                            <ul className='overflow-scroll h-96 overflow-x-hidden mr-2'>
                                <li><Listitems /></li>
                                <li><Listitems /></li>
                                <li><Listitems /></li>
                                <li><Listitems /></li>
                                <li><Listitems /></li>
                                <li><Listitems /></li>
                                <li><Listitems /></li>
                                <li><Listitems /></li>
                                <li><Listitems /></li>
                                <li><Listitems /></li>
                                <li><Listitems /></li>
                            </ul>
                        </div>
                        {/* Right */}
                        <div className='sticky top-0'>
                            <DetailsCard />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
