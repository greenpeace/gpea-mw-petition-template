import React from 'react';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Content = styled.div``;

const SwiperCarousel = ({ images, swiperConfig }) => {
  const defaultConfig = {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: 'fade',
  };
  const config = swiperConfig
    ? { ...defaultConfig, ...swiperConfig }
    : defaultConfig;

  return (
    <Content>
      <Swiper
        className="slider"
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        {...config}
      >
        {(images || []).map((d, i, alt) => (
          <SwiperSlide key={i}>
            <Image src={d} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Content>
  );
};

export default SwiperCarousel;
