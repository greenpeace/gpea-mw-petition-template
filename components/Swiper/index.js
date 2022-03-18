import React from 'react';
import { Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const SwiperCarousel = ({ images, swiperConfig }) => {
  const defaultConfig = {
    spaceBetween: 10,
    slidesPerView: 1,
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 3500,
    },
    pagination: {
      clickable: true,
    },
    effect: 'fade',
  };
  const config = swiperConfig
    ? { ...defaultConfig, ...swiperConfig }
    : defaultConfig;

  return (
    <Swiper modules={[Autoplay, EffectFade, Pagination]} {...config}>
      {(images || []).map((d, i) => (
        <SwiperSlide key={i}>
          <Image src={d} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
