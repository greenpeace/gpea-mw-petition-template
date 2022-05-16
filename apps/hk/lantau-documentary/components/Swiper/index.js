import React from 'react';
import { Box } from '@chakra-ui/react';
import DesktopSwiper from './desktopSwiper';
import MobileSwiper from './mobileSwiper';

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
  return (
    <Box>
      <div className="container mx-auto md:max-w-[100%] md:px-[20px] pt-[36px] md:pt-[0px] lg:pb-[60px]">
        <div className="pb-[26px] md:pt-[126px] md:pb-[60px]">
          <h2 className="text-[24px] md:text-[28px] font-[700] text-center pb-[8px]">
            大嶼有我
          </h2>

          <p className="text-[16px] font-[500] text-center">
            以行動守護大嶼的「保衛者們」介紹
          </p>
        </div>

        <div className="mb-[25px] hidden md:block">
          <DesktopSwiper IMAGES={IMAGES} />
        </div>

        <div className="mb-[25px] block md:hidden">
          <MobileSwiper IMAGES={IMAGES} />
        </div>
      </div>
    </Box>
  );
};

export default VisionGroup;
