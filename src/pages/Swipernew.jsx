import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import box from '/tokenbox.png';
import leftBox from '/leftTokenbox.png';
import rightBox from '/rightTokenbox.png';

function Swipernew() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='text-white'>
        <img
          src={leftBox}
          alt='tokenbox'
          className='w-[387px] h-[418px] object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={box}
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
