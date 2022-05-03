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
import desktopSectionBackground from './images/section_background.jpeg';

function Index() {
  const scrollToRef = (ref) =>
    {
      console.log('scroll to', ref);
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  const heroSection = useRef(null);
  const visionSection = useRef(null);
  const swiperSection = useRef(null);
  const supportSection = useRef(null);
  const informationSection = useRef(null);

  const MENU = [
    { label: '紀錄片介紹', value: '', ref: heroSection },
    { label: '我們的理念', value: '', ref: visionSection },
    { label: '大嶼有我', value: '', ref: swiperSection },
    { label: '細看大嶼', value: '', ref: supportSection }
  ];

  return (
    <>
      <SEO />
      <Box>
        <Header handleMenuClick={scrollToRef} MENU={MENU}/>
        <div ref={heroSection}>
          <HeroSection/>
        </div>

        <div className="container mx-auto px-[30px] md:hidden">
          <div className="pt-[48px]">
            <Image src={subBanner} />
          </div>
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
          h={{ base: '200px', md: '415px' }}
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

        <PetitionFooter /> 
      </Box>
    </>
  );
}

export default Index;
