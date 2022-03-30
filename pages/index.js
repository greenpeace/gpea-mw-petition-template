import React from 'react';
import Wrapper from '@containers/gpsWrapper';
import Head from 'next/head';
import {
  Container,
  Box,
  Text,
  ListItem,
  UnorderedList,
  AspectRatio,
  Stack,
  SimpleGrid,
  Flex,
  Center,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import Image from 'next/image';
import { CTAButton } from '@components/GPS/CTA/button';
import SwiperCarousel from '@components/Swiper';
import { imageLoader } from 'common/utils';

import c1 from '../public/images/slider/20210508_SSPHunting_17.jpg';
import c2 from '../public/images/slider/20210508_SSPHunting_5.jpg';
import c3 from '../public/images/slider/GP0STTWGP_High_res.jpg';
import c4 from '../public/images/slider/GP0STTWGV_High_res.jpg';
import c5 from '../public/images/slider/GP0STTWGX_High_res.jpg';

const maxWSize = 1200;
const trianglePropsMD = {
  width: 30,
  height: 30,
  borderLeft: '90px solid transparent',
  borderRight: '0px solid transparent',
  borderTop: '60px solid var(--gps-primary)',
  right: 0,
  zIndex: 2,
};

const triangleProps = {
  width: 30,
  height: 30,
  borderLeft: '60px solid transparent',
  borderRight: '0px solid transparent',
  borderTop: '40px solid var(--gps-primary)',
  left: 60,
  zIndex: 2,
};

function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box pt={{ base: '50px', md: '60px' }}>
      <Head>
        <title>
          走塑GPS：全港走塑店鋪定位地圖 1,100間走塑店鋪輕鬆定位！ - Greenpeace
          綠色和平 | 香港
        </title>
      </Head>
      {/* <HeroSection /> */}
      <Container maxW={`${maxWSize}px`} py="6" px="4">
        <Stack spacing={{ base: '40px', md: '80px' }}>
          <Box>
            <Box>
              <Image
                loader={imageLoader}
                src={`/images/svg/Plastic-free-GPS-banner-v2.svg`}
                width="1400"
                height="800"
              />
            </Box>
            <Stack
              spacing="6"
              flexDirection={{ base: 'column', lg: 'row' }}
              align="center"
            >
              <Box flex="1" py="6">
                <Stack spacing="6" align={{ base: 'center', md: 'flex-start' }}>
                  <Text
                    as="p"
                    textStyle={'content'}
                    textAlign={{ base: 'center', md: 'left' }}
                  >
                    綠色和平推出「走塑GPS」WhatsApp
                    Chatbot功能，讓你隨時隨地尋找鄰近走塑友善小店， 做到
                    <strong>「Plastic Free, Care Free」</strong>！
                  </Text>
                  <Box>
                    <CTAButton />
                  </Box>
                </Stack>
              </Box>
              <Box w="100%" flex="1">
                <SimpleGrid columns="3" justifyContent={'space-around'}>
                  <Image
                    loader={imageLoader}
                    src={`/images/svg/22.svg`}
                    layout="responsive"
                    width={1440}
                    height={1440}
                  />
                  <Image
                    loader={imageLoader}
                    src={`/images/svg/GPS-如何使用.svg`}
                    layout="responsive"
                    width={1440}
                    height={1440}
                  />
                  <Image
                    loader={imageLoader}
                    src={`/images/svg/24.svg`}
                    layout="responsive"
                    width={1440}
                    height={1440}
                  />
                </SimpleGrid>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Text as="p" textStyle={'content'} textAlign="center">
              只須於WhatsApp分享實時位置，「走塑GPS」將立即搜尋5間鄰近走塑小店，
              <br />
              內附地圖連結助你規劃路線光顧心水小店。
            </Text>
          </Box>

          <SimpleGrid
            p="4"
            spacing="6"
            columns={{ base: 2, md: 4 }}
            justifyContent={'space-around'}
          >
            <Image
              loader={imageLoader}
              src={`/images/svg/25.svg`}
              layout="responsive"
              width={1440}
              height={1440}
            />
            <Image
              loader={imageLoader}
              src={`/images/svg/26.svg`}
              layout="responsive"
              width={1440}
              height={1440}
            />
            <Image
              loader={imageLoader}
              src={`/images/svg/27.svg`}
              layout="responsive"
              width={1440}
              height={1440}
            />
            <Image
              loader={imageLoader}
              src={`/images/svg/28.svg`}
              layout="responsive"
              width={1440}
              height={1440}
            />
          </SimpleGrid>

          <Stack direction={{ base: 'column', lg: 'row-reverse' }} spacing="6">
            <Stack
              px={{ base: 0, md: 4 }}
              direction={{ base: 'column' }}
              flex={1}
              spacing="6"
            >
              <Box px="2">
                <Image
                  loader={imageLoader}
                  src={`/images/svg/sticker-free-icon-font.svg`}
                  width="48px"
                  height="48px"
                />
              </Box>
              <Box flex={1}>
                <Text textStyle={'heading'}>認住走塑貼紙 走塑生活好Easy</Text>
                <Text as="p" textStyle={'content'}>
                  綠色和平以「全城走塑」白色及藍色徽章貼紙，標示店鋪不同程度的走塑措施。「走塑GPS」亦會於搜尋結果顯示店鋪走塑等級，自備容器購物亦得，享受走塑優惠亦得！
                </Text>
              </Box>
            </Stack>
            <Box px={{ base: 0, md: 4 }} flex={1}>
              <Stack spacing="4" direction={{ base: 'row' }}>
                <Stack flex={1} textAlign="center" spacing="4">
                  <Image
                    loader={imageLoader}
                    src={`/images/PFC_Sticker_white.png`}
                    layout="responsive"
                    width={1440}
                    height={1440}
                  />
                  {/* <Image
                    loader={imageLoader}
                    src={`/images/grade1-ribbon.svg`}
                    px={{ base: 8, md: 12 }}
                    layout="responsive"
                    width={150}
                    height={30}
                  /> */}
                  <Text textStyle={'subTitle'} textAlign="center">
                    一級走塑店鋪
                  </Text>
                  <Text textStyle={'content'} textAlign="center">
                    提供走塑優惠
                  </Text>
                </Stack>
                <Stack flex={1} textAlign="center" spacing="4">
                  <Image
                    loader={imageLoader}
                    src={`/images/PFC_Sticker_blue.png`}
                    layout="responsive"
                    width={1440}
                    height={1440}
                  />
                  {/* <Image
                    loader={imageLoader}
                    src={`/images/grade2-ribbon.svg`}
                    px={{ base: 8, md: 12 }}
                    layout="responsive"
                    width={150}
                    height={30}
                  /> */}
                  <Text textStyle={'subTitle'} textAlign="center">
                    二級走塑店鋪
                  </Text>
                  <Text textStyle={'content'} textAlign="center">
                    歡迎自備餐具 / 器皿購物
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>

          <Stack direction={{ base: 'column', lg: 'row' }} spacing="6">
            <Box flex="1">
              <Stack direction={{ base: 'column' }} spacing="6">
                <Box px="2">
                  <Image
                    loader={imageLoader}
                    src={`/images/svg/map-free-icon-font.svg`}
                    width="48px"
                    height="48px"
                  />
                </Box>
                <Box flex={1}>
                  <Text textStyle={'heading'}>全港走塑版圖 持續擴展中！</Text>
                  <Text as="p" textStyle={'content'}>
                    綠色和平自2018年發起「全城走塑計劃」，與超過170位義工到訪全港大小社區，遊說店主提供走塑選擇，2021年底達成1,100間里程碑！
                  </Text>
                  <Text as="p" textStyle={'content'}>
                    未來我們會邀請更多類型店鋪營造走塑友善環境，示範具體解決方案，促請政府及企業提出更積極走塑措施。歡迎您按此提供走塑店鋪資料，或加入全城走塑小隊，一起擴大全港走塑版圖！
                  </Text>
                </Box>
              </Stack>
            </Box>
            <Box flex="1">
              <Box
                w="100%"
                maxW="580px"
                borderRadius={'xl'}
                overflow={'hidden'}
              >
                <SwiperCarousel images={[c1, c2, c3, c4, c5]} />
              </Box>
            </Box>
            {/* <Stack spacing="6">
              <Box borderRadius="xl" overflow="hidden">
                <Image
                  loader={imageLoader}
                  src={`/images/20210508_SSPHunting_8.jpg`}
                  layout="responsive"
                  width={1920}
                  height={1280}
                  priority={true}
                />
              </Box>
              <Box borderRadius="xl" overflow="hidden">
                <Image
                  loader={imageLoader}
                  src={`/images/20210508_SSPHunting_17.jpg`}
                  layout="responsive"
                  width={1920}
                  height={1280}
                  priority={true}
                />
              </Box>
            </Stack> */}
          </Stack>

          <Stack spacing="4" maxW={'480px'} align="center" alignSelf={'center'}>
            <CTAButton />
            <br />
            <Text as="p" fontSize="xs">
              **
              如有任何使用「走塑GPS」疑難，歡迎參閱常見問題或按此填寫表格聯絡我們。
            </Text>
            <br />
          </Stack>
        </Stack>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={'2xl'}>
        <ModalOverlay />
        <ModalContent
          bgColor={'transparent'}
          boxShadow={'none'}
          maxW={{ md: '80%' }}
        >
          <ModalBody py={10} px={4} boxShadow={'none'}>
            <ModalCloseButton
              color="#000"
              sx={{
                ':focus:not(:focus-visible)': {
                  shadow: 'none',
                },
              }}
            />
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/kz_EDIfH7gU"
                alt="demo"
              />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

const HeroSection = () => {
  {
    /** #F9BD82 */
  }
  const [isLargerThanMD] = useMediaQuery('(min-width: 62em)'); // default md: '62em'
  return (
    <Box
      rounded={16}
      bg="white"
      bgGradient="linear(to-b, #ace0f9, #fff1eb)"
      mx={4}
      px={{ lg: 10 }}
      pt={{ lg: 10 }}
    >
      <Container maxW={`${maxWSize}px`}>
        <Flex direction={{ base: 'column', lg: 'row' }}>
          <Box
            flex={{ base: 1, lg: 'initial' }}
            pt={4}
            maxW={{ base: '480px', lg: '100%' }}
            mx={{ md: 'auto' }}
          >
            <Box
              bgColor="var(--gps-primary)"
              borderRadius={'xl'}
              py={{ base: 4, lg: 8 }}
              px={{ md: 12 }}
              position="relative"
            >
              <Center w={'100%'} h={'100%'}>
                <Stack direction={'column'} textAlign={'center'}>
                  <Text
                    color={'#FFF'}
                    fontSize={{ base: '2xl', lg: '5xl' }}
                    fontWeight={700}
                  >
                    全港 1,100 間走塑店鋪
                  </Text>
                  <Text
                    color={'#FFF'}
                    fontSize={{ base: '2xl', lg: '6xl' }}
                    fontWeight={700}
                  >
                    一鍵導航
                  </Text>
                </Stack>
              </Center>

              <Box
                style={isLargerThanMD ? trianglePropsMD : triangleProps}
                position="absolute"
              />
            </Box>
            <Box d={{ base: 'none', lg: 'block' }}>
              {' '}
              <Box textAlign="center" pt={4}>
                <Text
                  as="h1"
                  fontSize={{ base: '5xl', lg: '8xl' }}
                  color="var(--gps-primary)"
                  fontWeight="bold"
                >
                  <Box as="span" style={{ transform: 'rotate(-190deg)' }}>
                    走
                  </Box>
                  塑GPS
                </Text>
              </Box>
            </Box>
          </Box>
          <Box flex={1} alignSelf={{ base: 'flex-end', md: 'center' }} pt={6}>
            <Stack direction={'row'} align={'center'} spacing={6} mb={'-5px'}>
              <Box d={{ base: 'block', lg: 'none' }}>
                {' '}
                <Box textAlign="center" pt={4}>
                  <Text
                    as="h1"
                    fontSize={{ base: '5xl', lg: '9xl' }}
                    color="var(--gps-primary)"
                    fontWeight="bold"
                  >
                    <Box as="span" style={{ transform: 'rotate(-190deg)' }}>
                      走
                    </Box>
                    塑GPS
                  </Text>
                </Box>
              </Box>
              <Box
                className="mainVisualWrap"
                maxW={{ base: '160px', lg: '365px' }}
              >
                <Image
                  loader={imageLoader}
                  src={`/images/Plastic-free_GPS.svg`}
                  width={533}
                  height={767}
                  layout={'intrinsic'}
                />
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;

export default Index;
