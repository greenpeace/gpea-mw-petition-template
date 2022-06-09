import React, { useState, useEffect } from 'react';
import { Box, Image, Button, AspectRatio, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { OrangeCTA } from '@common/styles/components/formStyle';
import Form from '../components/Form/StreamingForm';

import { connect } from 'react-redux';
import * as formActions from 'store/actions/action-types/form-actions';

import MobileHero from '../images/mobile/hero.png';
import DesktopHero from '../images/hero_v2.jpg';
import appLogo from '../images/app_logo.png';
import ErrorIcon from '../images/error_icon.svg';

import Head from 'next/head';
import Script from 'next/script';

import Translation from '../translation.json';

function Index() {
  const router = useRouter();
  const [showVideo, setShowVideo] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [language, setLanguage] = useState('zh_HK');

  useEffect(() => {
    const { language } = router.query;
    if (language == 'zh_HK' || language == 'en_HK') {
      setLanguage(language);
    }
  }, [router.isReady]);

  return (
    <>
      <Head>
        <Script
          type="text/javascript"
          defer="defer"
          src="https://extend.vimeocdn.com/ga/175230241.js"
        ></Script>
      </Head>
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
                    <p className="text-[24px] md:text-[28px] font-bold">
                      {Translation[language]['description']}
                    </p>
                  </div>
                  <Form
                    placeholderContent={
                      Translation[language]['input_placeholder']
                    }
                    buttonContent={Translation[language]['button_content']}
                    setShowVideo={setShowVideo}
                    setShowErrorMessage={setShowErrorMessage}
                  >
                    {showErrorMessage && (
                      <div
                        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
                        role="alert"
                      >
                        <span className="block sm:inline">
                          {Translation[language]['input_error']}
                        </span>
                        <span className="absolute top-0 bottom-0 left-0 px-4 py-3">
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
            <AspectRatio ratio={16 / 9}>
              {/* Testing */}
              {/* <iframe
                src="https://player.vimeo.com/video/698087346?h=3bf82bfde4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe> */}
              {/* Live */}
              <iframe
                src="https://player.vimeo.com/video/710817416?h=f44b421221"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </AspectRatio>
            <Information language={language} />
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
          bgColor={'rgba(0, 0, 0, .5)'}
        />
      </Box>
    </>
  );
}

const Logo = () => {
  return (
    <div className="pt-[60px] md:pt-[120px] relative" style={{ zIndex: 2 }}>
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

const Information = ({ language }) => {
  return (
    <div className="relative w-full bg-black ">
      <Box pos={'relative'} zIndex="2">
        <div className="text-[rgba(255,255,255,0.85)] md:max-w-[1200px] mx-auto py-[60px] px-[20px]">
          <div className="max-w-[800px] md:flex-1 flex flex-col gap-4">
            <h1 className="whitespace-pre-wrap text-white text-[24px] md:text-[28px] font-bold leading-loose">
              {Translation[language]['title']}
            </h1>

            <div className="grid gap-2 leading-relaxed font-bold py-4">
              <span
                dangerouslySetInnerHTML={{
                  __html: Translation[language]['info'],
                }}
              />
              <span
                dangerouslySetInnerHTML={{
                  __html: Translation[language]['info02'],
                }}
              />
              <span
                dangerouslySetInnerHTML={{
                  __html: Translation[language]['info03'],
                }}
              />
            </div>

            {/* <div className="flex flex-wrap gap-4 leading-loose font-bold py-4">
              <span
                className="grow shrink basis-[300px]"
                dangerouslySetInnerHTML={{
                  __html: Translation[language]['info'],
                }}
              />
              <span
                className="grow shrink basis-[300px]"
                dangerouslySetInnerHTML={{
                  __html: Translation[language]['info02'],
                }}
              />
              <span
                className="grow shrink basis-[300px]"
                dangerouslySetInnerHTML={{
                  __html: Translation[language]['info03'],
                }}
              />
            </div> */}

            <p
              className="whitespace-pre-wrap text-[16px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: Translation[language]['p'] }}
            />

            <p
              className="whitespace-pre-wrap text-[16px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: Translation[language]['p2'] }}
            />

            <h2
              className="my-[20px] text-[24px] font-bold"
              dangerouslySetInnerHTML={{
                __html: Translation[language]['subTitle'],
              }}
            />

            <p
              className="whitespace-pre-wrap text-[16px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: Translation[language]['p3'] }}
            />

            <p
              className="whitespace-pre-wrap text-[16px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: Translation[language]['p4'] }}
            />
            {language === 'zh_HK' ? (
              <Link
                href="https://supporter.ea.greenpeace.org/hk/s/donate/alt-layout-new?language=zh_HK&campaign=elm_mw&ref=documentary_streaming_page_info"
                isExternal
              >
                <Button
                  {...OrangeCTA}
                  mt="6"
                  maxW="240px"
                  __hover={{ underline: 'none' }}
                >
                  {Translation[language]['donate']}
                </Button>
              </Link>
            ) : (
              <Link
                href="https://supporter.ea.greenpeace.org/hk/s/donate?language=en_HK&ref=documentary_streaming_page_info"
                isExternal
              >
                <Button
                  {...OrangeCTA}
                  mt="6"
                  maxW="240px"
                  __hover={{ underline: 'none' }}
                >
                  {Translation[language]['donate']}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Box>
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
        bgColor={'rgba(0, 0, 0, .85)'}
      />
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
