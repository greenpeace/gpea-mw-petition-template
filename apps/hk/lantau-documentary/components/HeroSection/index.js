import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { Box, Button } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import AvatarGroup from '../../components/Avatar';
import MobileHero from '../../images/mobile/hero.png';
import MobileHeroFront from '../../images/mobile/hero_front.png';
import DesktopHero from '../../images/hero.jpeg';

import subBanner from '../../images/sub_banner.jpeg';
import appLogo from '../../images/app_logo.png';

function HeroSection() {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const HeroBanner = isLargerThan768 ? DesktopHero : MobileHero;

  return (
    <Box
      backgroundImage={MobileHero}
      backgroundPosition={'top center'}
      backgroundRepeat="no-repeat"
      backgroundSize={'100%'}
      pb={{ md: '100px' }}
    >
      <div className="container mx-auto px-[30px] md:pt-[300px]">
        <div className="flex flex-col pt-[140px] pb-[50px]">
          <div className="text-center text-[#FFF]">
            <div className="pb-[28px]">
              <Image
                src={appLogo}
                m={'auto'}
                // maxW={{ base: '300px', lg: '980px' }}
                pb={{ base: '60px' }}
              />
              <h1
                className="text-[32px] font-[900] leading-[48px]"
                style={{ textShadow: '0 0 4px rgba(0,0,0,0.8)' }}
              >
                <span className="block md:inline-block">香港第一部</span>
                <span>大嶼山生態紀錄長片</span>
              </h1>
            </div>

            <div>
              <h2
                className="text-[20px] font-[500] leading-[30px]"
                style={{ textShadow: '0 0 4px rgba(0,0,0,0.8)' }}
              >
                <span className="md:block">單次捐款100元</span>{' '}
                <span>收看記錄片</span>
              </h2>
            </div>

            <div className="flex flex-row gap-4 pt-[28px] md:max-w-[270px] mx-auto">
              <div className="flex-1">
                <Button
                  fontWeight={500}
                  color="white"
                  w={'100%'}
                  bgColor={'orange.500'}
                  _hover={{ bg: 'orange.300' }}
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
                  _hover={{ bg: 'orange.300' }}
                >
                  紀錄片預告
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[30px] md:pt-[270px] md:max-w-[1180px]">
        <div className="flex flex-row space-between md:gap-[40px] xl:gap-[120px]">
          <div className="md:flex-1 flex flex-col gap-4">
            <h1 className="text-[24px] font-[700] leading-[36px]">
              大嶼山生態紀錄長片
            </h1>
            <p className="text-[16px] font-[500]">
              綠色和平與本地生態團隊耗時大半年製作
            </p>

            <div className="grid grid-cols-3">
              <div>片長:25分鐘</div>
              <div>編導：馮漢城</div>
              <div>配音：陳志雲</div>
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
            <Image src={subBanner} />
          </div>
        </div>
      </div>
    </Box>
  );
}

export default HeroSection;
