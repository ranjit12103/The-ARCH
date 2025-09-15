import React, { useState } from 'react'
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assets/images/img3.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/image-5.png'
import img6 from '../assets/images/image-16.jpg'

import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

import 'swiper/css';

export default function SectionThree() {

  const [swiper, setSwiper]=useState()
  const [activeSlide, setActiveSlide]=useState(1)
    const imgs=[
        {id:1, img: img1},
        {id:2, img: img2},
        {id:3, img: img3},
        {id:4, img: img4},
        {id:5, img: img5},
        {id:6, img: img6},
    ];
    
    const CustomNextArrow=()=>(
      <button className='swiper-button-next'>
        <FaArrowRightLong/>
      </button>
    )

    const CustomPrevArrow=()=>(
      <button className='swiper-button-prev'>
        <FaArrowLeftLong />
      </button>
    )

    const handlePrev=()=>{
      swiper?.slidePrev()
    }

    const handleNext=()=>{
      swiper?.slideNext()
    }

    
    
  return (
    <section className='p-20'>
      <div className='flex items-center justify-around mb-10'>
        <h1 className='text-4xl font-bold'>The ARCH Gallery</h1>
        <div className='custom-navigation'>
          <div onClick={handlePrev}>
            <CustomPrevArrow/>
          </div>
          <span>{activeSlide} / {imgs.length}</span>
          <div onClick={handleNext}>
            <CustomNextArrow/>
          </div>
        </div>
      </div>
            <Swiper className='h-[500px] px-20 ml-40'
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation={{
        prevEl:"swiper-button-prev",
        nextEl:"swiper-button-next",
      }}
      onSwiper={setSwiper}
      onSlideChange={(swiper) => {
        setActiveSlide(swiper.activeIndex+1)
      }
    }
    >
        {imgs.map((slide)=>{
            return <div key={slide.id}>
                <SwiperSlide>
                    <img className='h-full object-cover w-[90%] rounded-xl' src={slide.img} alt="" />
                </SwiperSlide>
            </div>
        })}
    </Swiper>
    </section>
  )
}
