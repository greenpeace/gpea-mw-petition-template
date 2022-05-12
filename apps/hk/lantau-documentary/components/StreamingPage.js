import React, { useRef, useEffect, useState } from 'react';
import { Box, Image, Button, AspectRatio } from '@chakra-ui/react';
import { OrangeCTA } from '@common/styles/components/formStyle';
import Form from '../components/Form/StreamingForm';
import MobileHero from '../images/mobile/hero.png';
import MobileHeroFront from '../images/mobile/hero_front.png';
import DesktopHero from '../images/hero_v2.jpg';
import DesktopHeroFront from '../images/hero_front_v2.png';
import appLogo from '../images/app_logo.png';
import { connect } from 'react-redux';
import * as formActions from 'store/actions/action-types/form-actions';

import PASSCODE from '../passcode.json'

function Index() {
  const logoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  // const PASSCODE_LIST = PASSCODE.data

  // const handleCheckPasscode = (passcode) => {
  //   const getPasscode = PASSCODE_LIST.find(d=> d === passcode)
  //   if(getPasscode){
  //     console.log('hv ar')
  //   } else {
  //     console.log('wp')
  //   }
  // }

  return (
    <>
      <Box h={'100vh'} pos={'relative'}>
        <div className="relative h-[100%]">
          {!showVideo &&<div className="pageWrap">
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
              style={{ zIndex: 2 }}
            >
              <Box
                maxW={{ base: '355px', sm: '480px', lg: '720px', xl: '1040px' }}
                h={{ base: '105px', sm: '145px', lg: '215px', xl: '310px' }}
                mx={'auto'}
              >
                <Image
                  src={appLogo}
                  m={'auto'}
                  maxW={{
                    base: '355px',
                    sm: '480px',
                    lg: '720px',
                    xl: '1040px',
                  }}
                  ref={logoRef}
                />
              </Box>
            </div>
            <Box
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
            />
            <div
              className="container mx-auto px-[30px] relative"
              style={{ zIndex: 11 }}
            >
              <div className="flex flex-col pb-[50px] md:py-0">
                <div className="text-center text-[#FFF]">
                  <div>
                    <h1
                      className="text-[32px] md:text-[36px] font-[900] leading-[48px] md:leading-[54px]"
                      style={{ textShadow: '0 0 4px rgba(0,0,0,0.8)' }}
                    >
                      <span className="block">輸入收看密碼</span>
                    </h1>
                  </div>
                  <Form setShowVideo={setShowVideo}/>
                </div>
              </div>
            </div>
          </div>}

          {showVideo && <div className="videoWrap relative h-[100%] z-[10]">
          <AspectRatio w="100%" ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/LJeuw6MzuRQ"
              allowFullScreen
            />
          </AspectRatio>
            <div className="absolute bottom-0 w-full p-6 bg-[#000] text-[#FFF]">
              <div className="md:max-w-[1345px] mx-auto">
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
                  <Button {...OrangeCTA} maxW={'180px'}>
                    捐助支持 守護生態
                    </Button>
                </div>
              </div>
            </div>
          </div>}
        </div>
        <Box
          pos={'absolute'}
          top={0}
          right={0}
          left={0}
          bottom={0}
          bgColor={'rgba(0, 0, 0, .65)'}
          zIndex={1}
        />
      </Box>
    </>
  );
}

const mapStateToProps = ({ status, theme, form }) => {
  return { status, theme: theme.data, form };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
