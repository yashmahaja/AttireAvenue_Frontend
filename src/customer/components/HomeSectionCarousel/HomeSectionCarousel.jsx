import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@headlessui/react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const HomeSectionCarousel = ({data,sectionName}) => {

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const [activeIndex, setActiveIndex] = useState(0)
    // const items = [1, 1, 1, 1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,].map((items) => <HomeSectionCard />)
      const items = data.slice(0,10).map((item, index) => <HomeSectionCard data = {item} key={index} />);

    const slidePrev = () => setActiveIndex(activeIndex - 1)
    const slideNext = () => setActiveIndex(activeIndex + 1)

    const syncActiveIndex = ({item}) => setActiveIndex(item)


    return (
        <div className='px-4 lg:px-8 border'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                {/* Left Button */}
            {activeIndex !== 0 &&   <Button className="absolute top-1/3 transform -translate-y-30 -left-54 bg-white text-black p-3 z-50 shadow-md w-10 h-20 flex items-center justify-center"
               
                onClick={slidePrev}>
                    <KeyboardArrowLeftIcon className="text-black" />
                </Button>}

                {/* Right Button */}
           {  activeIndex !== items.length-5 &&    <Button className="absolute top-1/3 transform -translate-y-30 -right-54 bg-white text-black  p-3 z-50 shadow-md w-10 h-20 flex items-center justify-center"
                 onClick={slideNext}>
                    <KeyboardArrowRightIcon className="text-black" />
                </Button>
}

            </div>
        </div>
    )
}

export default HomeSectionCarousel
