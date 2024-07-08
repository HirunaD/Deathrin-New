import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import box from '/tokenbox.png';
import leftBox from '/leftTokenbox.png';
import rightBox from '/rightTokenbox.png';

function Swipernew() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}

      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='text-white'>
        <img
          src={leftBox}
          alt='tokenbox'
          className='w-[190px] h-[205px] md:w-[387px] md:h-[418px] object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={box}
          alt='tokenbox'
          className='w-[190px] h-[205px] md:w-[387px] md:h-[418px] object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
      <img
          src={rightBox}
          alt='tokenbox'
          className='w-[190px] h-[205px] md:w-[387px] md:h-[418px] object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
      <img
          src={rightBox}
          alt='tokenbox'
          className='w-[387px] h-[418px] object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
      <img
          src={rightBox}
          alt='tokenbox'
          className='w-[387px] h-[418px] object-cover'
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default Swipernew
