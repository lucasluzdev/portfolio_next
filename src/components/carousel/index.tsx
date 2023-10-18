"use client"
import { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


interface CarouselProps {
    images: Array<{ id: number; image: string; title: string; content: string, website: string, github: any }>;
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(handleNextSlide, 8000);

        return () => {
            clearInterval(interval);
        };
    }, [currentSlide]);
    const handleNextSlide = () => {
        let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    const handlePrevSlide = () => {
        let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    return (
        <div className="relative">
            <AiOutlineLeft
                onClick={handlePrevSlide}
                className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />
            <div className="w-full h-[55vh] flex overflow-hidden relative m-auto animate-fadeIn">
                <Swipe
                    onSwipeLeft={handleNextSlide}
                    onSwipeRight={handlePrevSlide}
                    className="relative z-10 w-full h-full mx-auto"
                >
                    {images.map(({ id, image: img, title, content, website, github }, index) => {
                        if (index === currentSlide) {
                            return (
                                <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-5 transition-transform transform' key={id}>
                                    <figure className="lg:col-span-8 w-full h-full">
                                        <img
                                            src={img}
                                            className="animate-fadeIn w-full h-full"
                                        />
                                    </figure>
                                    <div className="lg:col-span-4 h-[55vh] flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xl lg:text-2xl text-center mb-2">{title}</h3>
                                            <p className="lg:text-xl text-sm font-medium">{content}</p>
                                        </div>
                                        <div>
                                            {website.length ? (<a href={website} target="_blank"><button className="bg-green-600 hover:bg-[#ceab5d] text-white font-bold py-2 px-4 rounded">Visit website</button></a>) : ''}
                                            {Object.keys(github).map(key => github[key].length ? (<a key={key} href={github[key]} target="_blank"><button className="bg-gray-600 hover:bg-[#ceab5d] text-white font-bold py-2 px-4 rounded">{key} repo</button></a>) : '')}
                                        </div>
                                    </div>

                                </div>
                            );
                        }
                    })}
                </Swipe>
            </div>
            <AiOutlineRight
                onClick={handleNextSlide}
                className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
            />

            <div className="relative flex justify-center p-2 mt-5">
                {images.map((_, index) => {
                    return (
                        <div
                            className={
                                index === currentSlide
                                    ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                                    : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                            }
                            key={index}
                            onClick={() => {
                                setCurrentSlide(index);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Carousel;