import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery, AspectRatio } from '@chakra-ui/react';
import { Box, Button } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import AvatarGroup from '../../components/Avatar';
import MobileHero from '../../images/mobile/hero.png';
import MobileHeroFront from '../../images/mobile/hero_front.png';
import DesktopHero from '../../images/hero.jpeg';
import DesktopHeroFront from '../../images/hero_front.png';
import useScrollPosition from '../../components/Header/useScrollPosition';

import subBanner from '../../images/sub_banner.jpeg';
import appLogo from '../../images/app_logo.png';

function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const scrollPosition = useScrollPosition();
  const logoRef = useRef(null)

  return (
    <div className="relative">
      <Box
        backgroundImage={{ base: MobileHero, lg: DesktopHero }}
        backgroundPosition={'top center'}
        backgroundRepeat="no-repeat"
        backgroundSize={'100%'}
        w={'100%'}
        position="absolute"
        top={0}
        bottom={0}
        backgroundAttachment={'fixed'}
      />
      <div
        className="mx-[10px] md:mx-0 pt-[125px] md:pt-[160px] lg:pt-[130px] xl:pt-[195px] min-h-[105px] relative"
        style={{ zIndex: 1 }}
      >
        <Box maxW={{ base: '355px', sm: '480px', lg: '720px', xl: '1040px' }} h={{base: '105px', sm: '145px', lg: '215px', xl: '310px'}}  mx={'auto'}>
          <Image
            src={appLogo}
            m={'auto'}
            w={{ base: `${355-scrollPosition}px`, sm: `${480-scrollPosition}px`, lg: `${720-scrollPosition}px`, xl: `${1040-scrollPosition}px` }}
            maxW={{ base: '355px', sm: '480px', lg: '720px', xl: '1040px' }}
            ref={logoRef}
          />
        </Box>
      </div>
      {!showVideo && <Box
        backgroundImage={{ base: MobileHeroFront, lg: DesktopHeroFront }}
        backgroundPosition={'top center'}
        backgroundRepeat="no-repeat"
        backgroundSize={'100%'}
        w={'100%'}
        position="absolute"
        top={0}
        bottom={0}
        zIndex={2}
        className="frontHero"
      />}
      <div
        className="container mx-auto px-[30px] relative"
        style={{ zIndex: 11 }}
      >
        <div className="flex flex-col pt-[65px] md:pt-[100px] lg:pt-[140px] pb-[50px] md:py-0">
          {showVideo ? (
            <div>
              <div className="text-[#FFF] text-[24px] text-right pb-4">
                <CloseIcon
                  cursor={'pointer'}
                  onClick={() => setShowVideo(false)}
                />
              </div>
              <AspectRatio maxW="100%" ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/LJeuw6MzuRQ"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
          ) : (
            <div className="text-center text-[#FFF]">
              <div>
                <div>
                  <h1
                    className="text-[32px] md:text-[36px] font-[900] leading-[48px] md:leading-[54px]"
                    style={{ textShadow: '0 0 4px rgba(0,0,0,0.8)' }}
                  >
                    <span className="block md:inline-block">香港第一部</span>
                    <span>大嶼山生態紀錄長片</span>
                  </h1>
                </div>
                <div>
                  <h2
                    className="text-[20px] md:text-[24px] font-[500] leading-[30px] md:leading-[36px]"
                    style={{ textShadow: '0 0 4px rgba(0,0,0,0.8)' }}
                  >
                    <span className="md:block">單次捐款100元</span>{' '}
                    <span className="md:inline-block">收看記錄片</span>
                    <span className="block md:inline-block md:pl-2">
                      支持守護大嶼工作
                    </span>
                  </h2>
                </div>

                <div className="flex flex-row gap-4 pt-[28px] md:max-w-[270px] mx-auto">
                  <div className="flex-1">
                    <Button
                      fontWeight={500}
                      color="white"
                      w={'100%'}
                      bgColor={'orange.500'}
                      _hover={{ bg: 'orange.300', color: '#FFF' }}
                    >
                      捐款收看
                    </Button>
                  </div>
                  <div className="flex-1">
                    <Button
                      color="orange.500"
                      fontWeight={500}
                      w={'100%'}
                      bgColor={'transparent'}
                      border={'2px solid'}
                      borderColor={'orange.500'}
                      _hover={{ bg: 'orange.300', color: '#FFF' }}
                      onClick={() => setShowVideo(!showVideo)}
                    >
                      紀錄片預告
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="container mx-auto px-[30px] md:pt-[150px] lg:pt-[270px] md:max-w-[1180px] relative pb-[40px] md:pb-[105px] xl:pb-[60px]"
        style={{ zIndex: 10 }}
      >
        <Box
          bgGradient={{
            base: 'linear(to-b, transparent 0%, white 50%, white 100%)',
            md: 'linear(to-b, transparent 0%, white 30%, white 100%)',
            xl: 'linear(to-b, transparent 0%, white 50%, white 100%)',
          }}
          className="mask"
          position="absolute"
          left={0}
          right={0}
          top={0}
          bottom={0}
          zIndex={3}
          w={'full'}
          d={{ xl: 'none' }}
        />
        <div
          className="flex flex-col lg:flex-row space-between md:gap-[40px] xl:gap-[120px] relative"
          style={{ zIndex: 6 }}
        >
          <div className="md:flex-1 flex flex-col gap-4">
            <h1 className="text-[24px] font-[700] leading-[36px]">
              大嶼山生態紀錄長片
            </h1>
            <p className="text-[16px] font-[500]">
              綠色和平與本地生態團隊耗時大半年製作
            </p>

            <div className="grid grid-cols-3 md:max-w-[360px]">
              <div>片長:25分鐘</div>
              <div>編導:馮漢城</div>
              <div>配音:陳志雲</div>
            </div>

            <p className="text-[16px] font-[500]">
              山海大嶼是由綠色和平歷時大半年製作，與本地得獎製作班底合作出品的香港第一部大嶼山生態紀錄長片。製作團隊曾多次上山下海、通宵逗留野外拍攝物種的珍貴時刻，多角度呈現大嶼生態面貌。
            </p>

            <p className="text-[16px] font-[500]">
              全片不但以4K超高清拍攝，更包含航拍、水底拍攝、夜視拍攝等，務求將大嶼山生態最真實一面搬到螢幕上。我們亦邀請到本地資深傳媒人陳志雲先生為本片配音，全方位帶領大眾了解大嶼山富生物多樣性、值得香港人驕傲的一面。
            </p>
            <div className="hidden md:block">
              <AvatarGroup />
            </div>
          </div>
          <div className="hidden md:block">
            <Image src={subBanner} w={'100%'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
