import React, { useEffect, useState, useRef, useContext } from 'react';
import { Box, Image, Button, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AppContext } from '../context/appContext';
import HeroSection from './HeroSection';
import AvatarGroup from './Avatar';
import VisionGroup from './Vision';
import SwiperGroup from './Swiper';
import Information from './Information';
import Support from './Support';

import subBanner from '../images/cc5e7113d87915b78c9b2ca.jpg';
import sectionBackground from '../images/mobile/section_background.jpeg';
import desktopSectionBackground from '../images/section_background.jpeg';
import dolphinBackgroound from '../images/docu_dolphin.jpg';

import joinBackground from '../images/mobile/join_background.jpeg';
import joinBackgroundDesktop from '../images/join_background.jpg';

function MainPage() {
  const data = useContext(AppContext);
  const router = useRouter();
  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const {
    heroSection,
    visionSection,
    swiperSection,
    supportSection,
    signupSection,
  } = data;

  const SECTIONS = [
    { refName: 'heroSection', ref: heroSection },
    { refName: 'visionSection', ref: visionSection },
    { refName: 'swiperSection', ref: swiperSection },
    { refName: 'supportSection', ref: supportSection },
    { refName: 'signupSection', ref: signupSection },
  ];

  useEffect(() => {
    const { s, p } = router.query;
    const mapSection = SECTIONS.find((d) => d.refName === s);
    if (mapSection) {
      scrollToRef(mapSection.ref);
    }
  }, [router]);

  return (
    <>
      <Box>
        <div>
          <HeroSection refProp={heroSection} />
        </div>

        <div className="container mx-auto p-[30px] md:hidden">
          <Image src={subBanner} w={'100%'} />
        </div>

        <div className="md:hidden">
          <AvatarGroup />
        </div>

        <Box
          backgroundImage={{
            base: dolphinBackgroound,
            md: dolphinBackgroound,
          }}
          backgroundPosition={'center center'}
          backgroundRepeat="no-repeat"
          backgroundSize={'cover'}
          h={{ base: '360px', lg: '520px' }}
        />

        <div ref={visionSection}>
          <VisionGroup />
        </div>

        <div ref={swiperSection}>
          <SwiperGroup />
        </div>

        <div>
          <Support />
        </div>

        <Box
          backgroundImage={{ base: joinBackground, md: joinBackgroundDesktop }}
          backgroundPosition={'bottom center'}
          backgroundSize={{ base: '100%' }}
          backgroundRepeat={'no-repeat'}
          w={'full'}
        >
          <div ref={supportSection}>
            <Information />
          </div>

          <div ref={signupSection}>
            <div className="container max-w-[1180px] mx-auto px-[20px] py-[36px] min-h-[480px] lg:min-h-[600px]">
              <div className="md:ml-[60%]">
                <h2 className="text-[24px] md:text-[28px] font-[700] pb-[20px]">
                  參與聯署
                </h2>
                <p className="text-[16px] font-[500] leading-[24px] pb-[30px]">
                  你的聯署將有助推動政府撤回「明日大嶼」填海計劃，守護本地珍貴海洋生態，善用現存土地資源。
                </p>
                <Link
                  isExternal
                  href="https://cloud.greenhk.greenpeace.org/petition-general-elm-mw"
                >
                  <Button
                    size="md"
                    color="white"
                    bgColor={'orange.500'}
                    _hover={{ bg: 'orange.300' }}
                  >
                    立即聯署
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default MainPage;
