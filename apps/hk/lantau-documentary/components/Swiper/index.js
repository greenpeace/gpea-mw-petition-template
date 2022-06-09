import React from 'react';
import { Box } from '@chakra-ui/react';
import DesktopSwiper from './desktopSwiper';
import MobileSwiper from './mobileSwiper';

import steven from '../../images/swiper/ORG_DSC07952_75.jpg';
import image01 from '../../images/swiper/01.jpeg';
import imageDaphneWong from '../../images/swiper/DaphneWong.jpg';
import imageJamesKwok from '../../images/swiper/JamesKwok.jpg';
import image02 from '../../images/swiper/02.jpeg';
import image03 from '../../images/swiper/03.jpeg';
import image04 from '../../images/swiper/04.jpeg';
import image05 from '../../images/swiper/05.jpg';
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
  steven,
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
  imageDaphneWong,
  imageJamesKwok,
];

const VisionGroup = () => {
  return (
    <Box>
      <div className="container mx-auto md:max-w-[100%] md:px-[20px] pt-[36px] md:pt-[0px] lg:pb-[60px]">
        <div className="pb-[26px] md:pt-[80px] md:pb-[40px]">
          <h2 className="text-[24px] md:text-[28px] font-bold text-center mb-2">
            大嶼有我
          </h2>

          <p className="text-[16px] md-[18px] text-center">
            以行動守護大嶼的「保衛者們」介紹
          </p>
        </div>

        <div className="hidden md:block">
          <DesktopSwiper IMAGES={IMAGES} />
        </div>

        <div className="block md:hidden">
          <MobileSwiper IMAGES={IMAGES} />
        </div>
      </div>
    </Box>
  );
};

export default VisionGroup;
