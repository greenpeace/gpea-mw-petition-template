import React, { useRef, useState } from 'react';
import { Box, Image, Center } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CONTENT from './data';
import leftArrow from '../../images/left_icon.png';
import rightArrow from '../../images/right_icon.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const MobileSwiper = ({ IMAGES }) => {
  const swiperRef = useRef(null);
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <div className="mb-[25px]">
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={20}
        className="mySwiper"
        ref={swiperRef}
        onSlideChange={(data) => setSwiperIndex(data.activeIndex)}
      >
        {(CONTENT.DATA || []).map((d, i) => {
          if (d.type === 'group') {
            return d.items.map((item, i) => (
              <SwiperSlide key={`${d.title}-${i}`} style={{ width: '90%' }}>
                <div
                  className={`relative w-full h-[530px] max-w-xs overflow-hidden rounded-[20px] shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out`}
                  key={`${item}-${i}`}
                >
                  <Box
                    backgroundImage={IMAGES[item.image]}
                    backgroundRepeat="no-repeat"
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                    pos={'absolute'}
                    top={0}
                    bottom={0}
                    w={'full'}
                  >
                    <div className="absolute left-4 top-4 z-10">
                      <p className="text-[18px] font-[500] text-[#FFF]">
                        {item.name}
                      </p>
                      <p className="text-[16px] text-[#FFF]">{item.role}</p>
                    </div>

                    <div className="absolute left-6 right-6 bottom-6 z-10">
                      <p className="text-[#FFF]">{item.content}</p>
                    </div>
                    <Box
                      bgGradient="linear(to-b, black 0%, transparent 50%, black 100%)"
                      opacity={0.6}
                      h={'full'}
                      zIndex={2}
                    />
                  </Box>
                </div>
              </SwiperSlide>
            ));
          }

          return (
            <SwiperSlide key={`${d.title}-${i}`} style={{ width: '90%' }}>
              <div
                className={`relative w-full h-[530px] max-w-[100%] overflow-hidden rounded-[20px] shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out`}
              >
                <Box
                  backgroundImage={IMAGES[d.image]}
                  backgroundRepeat="no-repeat"
                  backgroundSize={'cover'}
                  backgroundPosition={'center center'}
                  pos={'absolute'}
                  top={0}
                  bottom={0}
                  w={'full'}
                >
                  <div className="absolute left-4 top-4 z-10">
                    <p className="text-[20px] font-[500] text-[#FFF]">
                      {d.name}
                    </p>
                    <p className="text-[16px] text-[#FFF]">{d.role}</p>
                  </div>

                  <div className="absolute left-6 right-6 bottom-6 z-10">
                    <p className="text-[#FFF]">{d.content}</p>
                  </div>
                  <Box
                    bgGradient="linear(to-b, black 0%, transparent 50%, black 100%)"
                    opacity={0.6}
                    h={'full'}
                    zIndex={2}
                  />
                </Box>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex flex-row items-center gap-4 mx-[10px] mt-[30px] max-w-[830px] md:mx-auto">
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
              className={'w-[40px] h-[40px] rounded-lg cursor-pointer'}
              style={{ boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.4)' }}
            >
              <Center h={'100%'}>
                <Image src={leftArrow} />
              </Center>
            </div>
            <div
              id="nextButton"
              onClick={() => swiperRef.current.swiper.slideNext()}
              className={'w-[40px] h-[40px] rounded-lg cursor-pointer'}
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
  );
};

export default MobileSwiper;
