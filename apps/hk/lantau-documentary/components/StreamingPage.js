import React, { useState } from 'react';
import { Box, Image, Button, AspectRatio } from '@chakra-ui/react';
import { OrangeCTA } from '@common/styles/components/formStyle';
import Form from '../components/Form/StreamingForm';
import MobileHero from '../images/mobile/hero.png';
import DesktopHero from '../images/hero_v2.jpg';
import appLogo from '../images/app_logo.png';
import { connect } from 'react-redux';
// import ReactPlayer from 'react-player';
import * as formActions from 'store/actions/action-types/form-actions';
import ErrorIcon from '../images/error_icon.svg';

function Index() {
  const [showVideo, setShowVideo] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  return (
    <>
      <Box pos={'relative'}>
        {!showVideo && (
          <div className="relative pb-40 md:pb-60">
            <div
              className="container mx-auto px-[20px] relative"
              style={{ zIndex: 11 }}
            >
              <div>
                <Logo />
              </div>
              <div className="flex flex-col pb-[50px] md:py-0">
                <div className="text-center text-[#FFF]">
                  <div className="p-[20px]">
                    <p
                      className="text-[24px] md:text-[28px] font-bold"
                      // style={{ textShadow: '0 0 4px rgba(0,0,0,0.8)' }}
                    >
                      輸入收看密碼
                    </p>
                  </div>
                  <Form
                    setShowVideo={setShowVideo}
                    setShowErrorMessage={setShowErrorMessage}
                  >
                    {showErrorMessage && (
                      <div
                        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
                        role="alert"
                      >
                        <span class="block sm:inline">
                          密碼不正確！請重新輸入
                        </span>
                        <span class="absolute top-0 bottom-0 left-0 px-4 py-3">
                          <Image
                            src={ErrorIcon}
                            alt={'Error'}
                            width={6}
                            height={6}
                          />
                        </span>
                      </div>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
        {showVideo && (
          <div className="videoWrap relative z-10">
            <div className="player-wrapper">
              {/* Testing */}
              <iframe
                src="https://player.vimeo.com/video/698087346?h=3bf82bfde4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
              {/* Live */}
              <iframe
                src="https://player.vimeo.com/video/710817416?h=f44b421221"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </div>

            <Information />
          </div>
        )}

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
        <Box
          pos={'absolute'}
          top={0}
          right={0}
          left={0}
          bottom={0}
          zIndex={1}
          bgColor={'rgba(0, 0, 0, .65)'}
        />

        {/* <Box
          backgroundImage={{
            base: MobileHeroFront,
            lg: DesktopHeroFront,
          }}
          backgroundPosition={'top center'}
          backgroundRepeat="no-repeat"
          backgroundSize={'100%'}
          w={'100%'}
          position="absolute"
          top={0}
          bottom={0}
          zIndex={2}
          className="frontHero"
        /> */}
      </Box>
    </>
  );
}

const Logo = () => {
  return (
    <div
      className="mx-[10px] md:mx-0 pt-[60px] md:pt-[120px] relative"
      style={{ zIndex: 2 }}
    >
      <Box
        maxW={{
          base: '355px',
          sm: '480px',
          lg: '720px',
          xl: '1040px',
        }}
        h={{ base: '105px', sm: '145px', lg: '215px', xl: '310px' }}
        mx={'auto'}
      >
        <Image
          src={appLogo}
          m={'auto'}
          w="100%"
          maxW={{
            base: '355px',
            sm: '480px',
            lg: '720px',
            xl: '1040px',
          }}
        />
      </Box>
    </div>
  );
};

const Information = () => {
  return (
    <div className="w-full bg-black text-white py-[60px] px-[20px] md:px-0">
      <div className="md:max-w-[1345px] mx-auto">
        <div className="md:flex-1 flex flex-col gap-4">
          <h1 className="text-[28px] font-[700] leading-[36px]">
            大嶼山生態紀錄片
          </h1>

          <p className="text-[18px] font-[500]">
            綠色和平與本地生態團隊耗時大半年製作
          </p>

          <div className="grid grid-cols-3 md:max-w-[360px]">
            <span>片長:25分鐘</span>
            <span>編導:馮漢城</span>
            <span>配音:陳志雲</span>
          </div>

          <p className="text-[16px]">
            山海大嶼是由綠色和平歷時大半年製作，與本地得獎製作班底合作出品的大嶼山生態紀錄片。製作團隊曾多次上山下海、通宵逗留野外拍攝物種的珍貴時刻，多角度呈現大嶼生態面貌。
          </p>

          <Button {...OrangeCTA} mt="6" maxW={'220px'}>
            捐助支持 守護生態
          </Button>
        </div>
      </div>
    </div>
  );
};

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
