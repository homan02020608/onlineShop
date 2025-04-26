"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion"

const sliderImage = [
  "carouselImage01",
  "carouselImage02",
  "carouselImage03",
  "carouselImage04",
  "iphone16pro_black",
  "iphone16pro_white",

] 

const MultiCarousel = () => {
  //const [currIndex, setCurrIndex] = useState(0)

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
    <motion.div 
      className='bg-white/50 max-container -z-[100]'
      initial={{ opacity: 0 , x : -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ease:"easeInOut", duration: 0.8}}
    >
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
          <div key={`${item}`} className='p-2 mb-8 '>
            <Link href="/product/123">
              <Image src={`/${item}.jpeg`} alt='' width={500} height={500} />
            </Link>
          </div>
        ))}
      </Carousel>
    </motion.div>
  )
}

export default MultiCarousel