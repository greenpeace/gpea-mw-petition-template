import React, { useRef, useState } from 'react';
import { Box, Image, Center } from '@chakra-ui/react';
import Card from './Card';
import contentCard from '../../images/content_card.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, useSwiper } from 'swiper';
import CONTENT from './data';
import leftArrow from '../../images/left_icon.png';
import rightArrow from '../../images/right_icon.png';

import image01 from '../../images/swiper/01.jpeg';
import image02 from '../../images/swiper/02.jpeg';
import image03 from '../../images/swiper/03.jpeg';
import image04 from '../../images/swiper/04.jpeg';
import image05 from '../../images/swiper/05.jpeg';
import image06 from '../../images/swiper/06.jpeg';
import image07 from '../../images/swiper/07.jpeg';
import image08 from '../../images/swiper/08.jpeg';
import image09 from '../../images/swiper/09.jpeg';
import image10 from '../../images/swiper/10.jpeg';
import image11 from '../../images/swiper/11.jpeg';
import image12 from '../../images/swiper/12.jpeg';
import image13 from '../../images/swiper/13.jpeg';
import image14 from '../../images/swiper/14.jpeg';
import image15 from '../../images/swiper/15.jpeg';
import image16 from '../../images/swiper/16.jpeg';
import image17 from '../../images/swiper/17.jpeg';
import image18 from '../../images/swiper/18.jpeg';
import image19 from '../../images/swiper/19.jpeg';
import image20 from '../../images/swiper/20.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const IMAGES = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
];

const VisionGroup = () => {
  const swiperRef = useRef(null);
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <Box>
      <div className="container mx-auto pt-[36px] lg:pb-[60px]">
        <div className="pb-[26px] md:pt-[126px] md:pb-[60px]">
          <h1 className="text-[24px] font-[700] leading-[36px] text-center pb-[6px]">
            大嶼有我
          </h1>

          <p className="text-[16px] font-[500] text-center">
            以行動守護大嶼的「保衛者們」介紹
          </p>
        </div>

        <div className="mb-[25px]">
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={20}
            // modules={[Pagination]}
            className="mySwiper"
            ref={swiperRef}
            onSlideChange={(data) => setSwiperIndex(data.activeIndex)}
          >
            {(CONTENT.DATA || []).map((d, i) => (
              <SwiperSlide key={d.title} style={{ width: '285px' }}>
                {/* <Card
                    name={d.name}
                    role={d.role}
                    content={d.content}
                    image={d.image}
                  /> */}
                <div className="relative w-full h-[495px] max-w-xs overflow-hidden rounded-[20px] shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <Box
                    backgroundImage={IMAGES[i]}
                    backgroundRepeat="no-repeat"
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                    pos={'absolute'}
                    top={0}
                    bottom={0}
                    w={'full'}
                    bgColor={'#000'}
                  >
                    <div className="absolute left-4 top-4">
                      <h1 className="text-[18px] font-[500] text-[#FFF]">
                        {d.name}
                      </h1>
                      <p className="text-[#FFF]">{d.role}</p>
                    </div>

                    <div className="absolute left-6 right-6 bottom-6">
                      <p className="text-[#FFF]">{d.content}</p>
                    </div>

                    <Box
                      bgGradient="linear(to-b, transparent 0%, transparent 50%, black 100%)"
                      h={'full'}
                    />
                  </Box>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex flex-row items-center gap-4 mx-[10px] mt-[30px]">
            <div className="flex-1">
              <div
                className="flex flex-row items-center bg-white rounded-[25px] mx-[10px] px-2 py-1"
                style={{ boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.4)' }}
              >
                {(CONTENT.DATA || []).map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className={`flex-1 h-[10px] rounded-[20px] ${
                      swiperIndex === i ? 'bg-black' : 'bg-white'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-4">
                <div
                  id="previousButton"
                  onClick={() => swiperRef.current.swiper.slidePrev()}
                  className={'w-[40px] h-[40px] rounded-lg'}
                  style={{ boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.4)' }}
                >
                  <Center h={'100%'}>
                    <Image src={leftArrow} />
                  </Center>
                </div>
                <div
                  id="nextButton"
                  onClick={() => swiperRef.current.swiper.slideNext()}
                  className={'w-[40px] h-[40px] rounded-lg'}
                  style={{ boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.4)' }}
                >
                  <Center h={'100%'}>
                    <Image src={rightArrow} />
                  </Center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col m-auto p-auto">
              <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div className="flex flex-nowrap">
                  {CARDS.map((d) => (
                    <Card
                      key={d.name}
                      name={d.name}
                      role={d.role}
                      content={d.content}
                      image={d.image}
                    />
                  ))}
                </div>
              </div>
            </div> */}
    </Box>
  );
};

export default VisionGroup;
