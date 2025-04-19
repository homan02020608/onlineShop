"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

const sliderImage = [
  "carouselImage01",
  "carouselImage02",
  "carouselImage03",
  "carouselImage04",
  "iphone16pro_black",
  "iphone16pro_white",

] 

const MultiCarousel = () => {
  const [currIndex, setCurrIndex] = useState(0)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <div className='bg-white/50 max-container -z-[100]'>
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={300}
        renderDotsOutside={false}
        dotListClass='mt-10'
      //ssr={true} // means to render carousel on server-side.

      >
        {sliderImage.map((item, i) => (
          <div key={`${item}-${i}`} className='p-2 mb-8 '>
            <Link href="/product/123">
              <Image src={`/${item}.jpeg`} alt='' width={500} height={500} />
            </Link>
          </div>
        ))}
      </Carousel>
      {/*       <div className='flexCenter'>
        <div className=' p-2'>
          {sliderImage.map((item, i) => (
            <button key={`set-${item}-${i}`} className={`p-2 m-2 w-8 border-b-4 border-slate-200 duration-300  ${i === currIndex && "border-red-300"}`} onClick={() => setCurrIndex(i)}></button>
          ))}
          <p className='mt-4'>{(currIndex)}</p>
        </div>
      </div> */}
    </div>
  )
}

export default MultiCarousel