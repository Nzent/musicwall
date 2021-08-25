import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ArrowCircleRightIcon, ArrowCircleLeftIcon } from '@heroicons/react/outline';
import Carouselitem from '../../../components/carouselitem/carouselitem';
export default function Index() {


    return (
        <>
            <section className='absolute p-0 md:pl-48'>
                {/* CAROUSEL */}
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
                            <Slide><Carouselitem /></Slide>
                            <Slide><Carouselitem /></Slide>
                            <Slide><Carouselitem /></Slide>
                            <Slide><Carouselitem /></Slide>
                            <Slide><Carouselitem /></Slide>
                            <Slide><Carouselitem /></Slide>
                            <Slide><Carouselitem /></Slide>
                            <Slide><Carouselitem /></Slide>
                        </Slider>
                        <div className='flex flex-row justify-center items-center'>
                            <ButtonBack><ArrowCircleLeftIcon className='h-5 w-5 text-green-500' /></ButtonBack>
                            <ButtonNext><ArrowCircleRightIcon className='h-5 w-5 text-green-500' /></ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>

                <div>
                    songs list
                </div>

            </section>
        </>
    )
}
