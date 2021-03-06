import React, { useEffect } from 'react';
import {
  AspectRatio,
  Box,
  Button,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';
import { useViewportScroll, motion, useTransform } from 'framer-motion';
import { useRouter } from 'next/router';
import { CloseIcon } from '@chakra-ui/icons';
import AvatarGroup from '../../components/Avatar';
import MobileHero from '../../images/mobile/hero.png';
import MobileHeroFront from '../../images/mobile/hero_front.png';
import DesktopHero from '../../images/hero_v2.jpg';
import DesktopHeroFront from '../../images/hero_front_v2.png';

import subBanner from '../../images/2022_lantau_docu_poster_b.jpg';
import moviePoster from '../../images/GP_lantau_poster4.jpg';
import appLogo from '../../images/app_logo.png';

import Logo from './logo';

function HeroSection({
  refProp,
  videoRefProp,
  setVideoSectionMocked,
  heroSectionInView,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { scrollY, scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, (value) => 1 + value * 1.25);
  const scale2 = useTransform(scrollYProgress, (value) => 1 + value * 1.15);
  const y = useTransform(scrollY, [0, 100], [0, -50]);
  const y2 = useTransform(scrollY, [0, 100], [0, 130]);
  const router = useRouter();

  useEffect(() => {
    if (videoRefProp !== null) {
      setVideoSectionMocked(true);
    }
  }, [videoRefProp]);

  return (
    <div className="relative">
      <Box d={{ base: 'block', md: 'none' }}>
        {!heroSectionInView && (
          <motion.div
            className="box"
            style={{
              y: y2,
              scale: scale2,
              position: 'absolute',
              bottom: 0,
              top: 0,
              width: '100%',
              zIndex: 0,
            }}
          >
            <Image src={MobileHero} width={'100%'} />
          </motion.div>
        )}
      </Box>

      <Box d={{ base: 'none', md: 'block' }}>
        {!heroSectionInView && (
          <motion.div
            className="box"
            style={{
              y: y2,
              scale: scale2,
              position: 'absolute',
              bottom: 0,
              top: 0,
              width: '100%',
              zIndex: 0,
            }}
          >
            <Image src={DesktopHero} width={'100%'} />
          </motion.div>
        )}
      </Box>
      {/* <Box
        backgroundImage={{ base: MobileHero, lg: DesktopHero }}
        backgroundPosition={'top center'}
        backgroundRepeat="no-repeat"
        backgroundSize={'100%'}
        w={'100%'}
        position="absolute"
        top={0}
        bottom={0}
        backgroundAttachment={'fixed'}
      /> */}
      <div
        className="mx-[10px] md:mx-0 pt-[125px] md:pt-[160px] lg:pt-[130px] xl:pt-[195px] min-h-[105px] relative"
        style={{ zIndex: 1 }}
      >
        <Box
          maxW={{ base: '355px', sm: '480px', lg: '720px', xl: '1040px' }}
          h={{ base: '105px', sm: '145px', lg: '215px', xl: '310px' }}
          mx={'auto'}
        >
          <Logo refInView={heroSectionInView}>
            <Image
              src={appLogo}
              m={'auto'}
              maxW={{ base: '355px', sm: '480px', lg: '720px', xl: '1040px' }}
            />
          </Logo>
        </Box>
      </div>
      <Box d={{ base: 'block', md: 'none' }}>
        {!heroSectionInView && (
          <motion.div
            className="box"
            style={{
              y: y,
              scale: scale,
              position: 'absolute',
              bottom: 0,
              top: 0,
              width: '100%',
              zIndex: 2,
            }}
          >
            <Image src={MobileHeroFront} width={'100%'} />
          </motion.div>
        )}
      </Box>

      <Box d={{ base: 'none', md: 'block' }}>
        {!heroSectionInView && (
          <motion.div
            className="box"
            style={{
              y: y,
              scale: scale,
              position: 'absolute',
              bottom: 0,
              top: 0,
              width: '100%',
              zIndex: 2,
            }}
          >
            <Image src={DesktopHeroFront} width={'100%'} />
          </motion.div>
        )}
      </Box>
      <div
        className="container mx-auto px-[20px] relative"
        style={{ zIndex: 11 }}
      >
        <div
          className="flex flex-col pt-[65px] md:pt-[100px] lg:pt-[140px] pb-[50px] md:py-0"
          ref={videoRefProp}
        >
          <div className="text-center text-[#FFF]">
            <div>
              <h1
                className="mb-4 md:mb-8 text-3xl md:text-5xl font-bold leading-relaxed"
                style={{ textShadow: '0 0 4px rgba(0,0,0,0.45)' }}
              >
                ??????????????????????????????
              </h1>
              <h2
                className="mb-6 md:mb-10 text-xl md:text-2xl  leading-relaxed"
                style={{ textShadow: '0 0 4px rgba(0,0,0,0.45)' }}
              >
                <span className="md:block mb-2">??????????????????100???</span>
                <span className="md:inline-block">???????????????</span>
                <span className="block md:inline-block md:pl-2">
                  ????????????????????????
                </span>
              </h2>
            </div>
            <div className="flex flex-row gap-4 md:max-w-[380px] mx-auto">
              <div className="flex-1">
                <Button
                  size="lg"
                  w="100%"
                  color="white"
                  bgColor={'orange.500'}
                  _hover={{ bg: 'orange.300', color: '#FFF' }}
                  onClick={() =>
                    router.push(
                      `/?p=donation`,
                      `${window.location.href.split('?')[0]}/?p=donation`,
                      { shallow: true },
                    )
                  }
                >
                  ????????????
                </Button>
              </div>
              <div className="flex-1">
                <Button
                  size="lg"
                  w="100%"
                  color="orange.500"
                  bgColor={'rgba(255,255,255,0.95)'}
                  borderColor={'orange.500'}
                  _hover={{ color: 'orange.300' }}
                  onClick={onOpen}
                >
                  ???????????????
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container mx-auto px-[20px] md:pt-[150px] lg:pt-[270px] md:max-w-[1180px] relative pb-[40px] md:pb-[60px]"
        style={{ zIndex: 10 }}
        ref={refProp}
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
            <h1 className="mb-2 text-[28px] font-bold">????????????????????????</h1>

            <p className="text-[18px] font-medium">
              ??????????????????????????????????????????????????????
            </p>

            <div className="leading-loose font-medium grid grid-cols-3 md:max-w-[360px]">
              <span>?????????25??????</span>
              <span>??????????????????</span>
              <span>??????????????????</span>
            </div>

            <div className="py-4 flex flex-col gap-4">
              <p className="text-[16px] leading-relaxed">
                ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              </p>
              <p className="text-[16px] leading-relaxed">
                ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              </p>
            </div>

            <div className="hidden md:block">
              <AvatarGroup />
            </div>
          </div>
          <div className="flex-1 hidden md:block relative">
            <div className="sticky top-0">
              <Image src={subBanner} alt="????????????????????????" w={'100%'} />
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} size={'4xl'} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent
          pos={'relative'}
          px={{ base: '20px' }}
          bgColor={'transparent'}
          shadow={'none'}
        >
          <CloseIcon
            pos={'absolute'}
            top={'-30px'}
            right={'15px'}
            color="#FFF"
            cursor={'pointer'}
            onClick={onClose}
          />
          <AspectRatio w="100%" ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/n1Tk6VHVfK0"
              allowFullScreen
            />
          </AspectRatio>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default HeroSection;
