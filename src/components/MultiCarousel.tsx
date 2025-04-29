"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const sliderImage = [
  { path: "13inch iPad Pro (M4) シルバー", productId: "1" },
  { path: "MacBook Air 13インチ M4 16GB シルバー", productId: "7" },
  { path: "13inch iPad Pro (M4) スペースブラック", productId: "2" },
  { path: "Surface Pro(第11世代) サファイア", productId: "13" },
  { path: "iphone16pro_black", productId: "3" },
  { path: "iphone16pro_white", productId: "6" },

  ,

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

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group bg-red-100">
          <ArrowBackIosNewIcon className={`absolute top-[40%] left-4 text-4xl hover:cursor-pointer transition-all duration-300 bg-black/10 hover:bg-black/30 rounded-full p-2 ${currentSlide === 0 ? 'disable' : ''}`} onClick={() => previous()} />
          <ArrowForwardIosIcon className='absolute top-[40%] right-4 text-4xl hover:cursor-pointer transition-all duration-300 bg-black/10 hover:bg-black/30 rounded-full p-2 ' onClick={() => next()} />
        </div>
    );
  };

  return (
    <motion.div
      className='max-container z-[80] p-6 '
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}

    >
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        transitionDuration={300}
        renderDotsOutside={false}
        dotListClass='mt-10'
        arrows={false}
        customButtonGroup={<ButtonGroup />}
      //ssr={true} // means to render carousel on server-side.

      >
        {sliderImage.map((item) => (
          <div key={`${item?.productId}`} className='p-2 mb-8 '>
            <Link href={`/product/${item?.productId}`}>
              <Image src={`/${item?.path}.jpeg`} alt='' width={500} height={500} />
            </Link>
          </div>
        ))}
      </Carousel>
    </motion.div>
  )
}

export default MultiCarousel