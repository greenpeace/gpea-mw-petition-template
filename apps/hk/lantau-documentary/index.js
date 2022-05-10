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
import { motion } from 'framer-motion'

import DonationPage from './components/DonationPage';
import StreamingPage from './components/StreamingPage';

import subBanner from './images/sub_banner.jpeg';
import sectionBackground from './images/mobile/section_background.jpeg';
import desktopSectionBackground from './images/section_background.jpeg';

function Index() {
  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const heroSection = useRef(null);
  const visionSection = useRef(null);
  const swiperSection = useRef(null);
  const supportSection = useRef(null);
  const informationSection = useRef(null);

  const MENU = [
    { label: '紀錄片介紹', value: '', ref: heroSection },
    { label: '我們的理念', value: '', ref: visionSection },
    { label: '大嶼有我', value: '', ref: swiperSection },
    { label: '細看大嶼', value: '', ref: supportSection },
  ];

  const [showDonation, setShowDonation] = useState(false)

  const handleShowDonate = (bol) => {
    setShowDonation(bol)
  }

  useEffect(()=>{
    if(showDonation && window){
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  },[showDonation])

  return (
    <>
      <SEO />
      <Header handleMenuClick={scrollToRef} MENU={MENU} handleShowDonate={handleShowDonate} />
      {/* <StreamingPage/> */}
      {!showDonation && <Box>
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
      </Box>}

      {showDonation && <DonationPage />}

      <PetitionFooter />
    </>
  );
}

export default Index;
