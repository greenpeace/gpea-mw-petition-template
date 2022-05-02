import React, { useEffect, useState, useRef } from 'react';
import PetitionFooter from '@containers/petitionFooter';
import { Box, Image } from '@chakra-ui/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AvatarGroup from './components/Avatar';
import VisionGroup from './components/Vision';
import SwiperGroup from './components/Swiper';
import Information from './components/Information';
import Support from './components/Support';
import SEO from './SEO';
import subBanner from './images/sub_banner.jpeg';
import sectionBackground from './images/mobile/section_background.jpeg';

function Index() {
  return (
    <>
      <SEO />
      <Box>
        <Header />
        <HeroSection />

        <div className="container mx-auto px-[30px] md:hidden">
          <div className="pt-[48px]">
            <Image src={subBanner} />
          </div>
        </div>

        <div className="md:hidden">
          <AvatarGroup />
        </div>

        <div>
          <Image src={sectionBackground} w={'full'} />
        </div>

        <VisionGroup />

        <SwiperGroup />

        <Support/>

        <Information />

        <PetitionFooter />
      </Box>
    </>
  );
}

export default Index;
