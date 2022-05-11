import React, { useEffect, useState, useRef } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import HeroSection from './HeroSection';
import AvatarGroup from './Avatar';
import VisionGroup from './Vision';
import SwiperGroup from './Swiper';
import Information from './Information';
import Support from './Support';

import subBanner from '../images/sub_banner.jpeg';
import sectionBackground from '../images/mobile/section_background.jpeg';
import desktopSectionBackground from '../images/section_background.jpeg';

function MainPage({
  heroSection,
  visionSection,
  swiperSection,
  supportSection,
  informationSection,
}) {
  const router = useRouter();
  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const SECTIONS = [
    { refName: 'heroSection', ref: heroSection },
    { refName: 'visionSection', ref: visionSection },
    { refName: 'swiperSection', ref: swiperSection },
    { refName: 'supportSection', ref: supportSection },
    { refName: 'informationSection', ref: informationSection}
  ];

  useEffect(() => {
    const {s} = router.query
    const mapSection = SECTIONS.find(d => d.refName === s)
    if(mapSection){
        scrollToRef(mapSection.ref);
    }
  }, [router]);

  return (
    <>
      <Box>
        <div ref={heroSection}>
          <HeroSection />
        </div>

        <div className="container mx-auto px-[30px] pt-[48px] md:hidden">
          <Image src={subBanner} />
        </div>

        <div className="md:hidden">
          <AvatarGroup />
        </div>

        <Box
          backgroundImage={{
            base: sectionBackground,
            md: desktopSectionBackground,
          }}
          backgroundPosition={'center center'}
          backgroundRepeat="no-repeat"
          backgroundSize={'100%'}
          h={{ base: '200px', lg: '280px', xl: '415px' }}
        />

        <div ref={visionSection}>
          <VisionGroup />
        </div>

        <div ref={swiperSection}>
          <SwiperGroup />
        </div>

        <div ref={supportSection}>
          <Support />
        </div>

        <div ref={informationSection}>
          <Information />
        </div>
      </Box>
    </>
  );
}

export default MainPage;
