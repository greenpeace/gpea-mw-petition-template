import React from 'react';
import Head from 'next/head';
import {
  Container,
  Box,
  Text,
  AspectRatio,
  Stack,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import Wrapper from '@containers/gpsWrapper';
import { CTAButton } from '@apps/hk/gps/components/CTA/button';
import SwiperCarousel from '@components/Swiper';
import { imageLoader } from '@common/utils';

import c1 from '../public/images/slider/20210508_SSPHunting_17.jpg';
import c2 from '../public/images/slider/20210508_SSPHunting_5.jpg';
import c3 from '../public/images/slider/GP0STTWGP_High_res.jpg';
import c4 from '../public/images/slider/GP0STTWGV_High_res.jpg';
import c5 from '../public/images/slider/GP0STTWGX_High_res.jpg';

const maxWSize = 1200;

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

      {/* Hero banner */}
      <Box d={{ base: 'block', md: 'none' }}>
        <Image
          loader={imageLoader}
          src={`/images/20220624_GPS_visual_embed-02.jpg`}
          width="1000"
          height="1000"
        />
      </Box>

      <Box d={{ base: 'none', md: 'block' }}>
        <Image
          loader={imageLoader}
          src={`/images/20220624_GPS_visual_embed-01.jpg`}
          width="1920"
          height="700"
        />
      </Box>
      {/* Hero banner */}

      <Container maxW={`${maxWSize}px`} py="6" px="4">
        <Stack spacing={{ base: '40px', md: '80px' }}>
          <Box>
            <Stack
              spacing="6"
              flexDirection={{ base: 'column', lg: 'row' }}
              align="center"
            >
              <Box flex="1" py="6">
                <Stack
                  spacing="4"
                  direction="column"
                  align={{ base: 'center', md: 'flex-start' }}
                >
                  <Text
                    textStyle={'heading'}
                    fontSize={{ base: '2xl', md: '4xl' }}
                  >
                    全港走塑店鋪定位地圖
                  </Text>
                  <Text
                    as="p"
                    textStyle={'content'}
                    textAlign={{ base: 'center', md: 'left' }}
                    mb="6"
                  >
                    綠色和平推出「走塑GPS」WhatsApp Chatbot功能，
                    <br />
                    讓你隨時隨地尋找鄰近走塑友善小店，
                    <br />
                    做到
                    <strong>「Plastic Free, Care Free」</strong>！
                  </Text>
                  <CTAButton />
                </Stack>
              </Box>
              <Box w="100%" flex="1.5">
                <SimpleGrid
                  spacing="4"
                  columns="3"
                  justifyContent={'space-around'}
                >
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
              只須於WhatsApp分享實時位置，
              <br />
              「走塑GPS」將立即搜尋5間鄰近走塑小店，
              <br />
              內附地圖連結助你規劃路線光顧心水小店。
            </Text>
          </Box>

          <SimpleGrid
            p="4"
            spacing="8"
            columns={{ base: 2, md: 4 }}
            justifyContent={'space-around'}
          >
            <Image
              p="4"
              loader={imageLoader}
              src={`/images/svg/25.svg`}
              layout="responsive"
              width={1440}
              height={1440}
            />
            <Image
              p="4"
              loader={imageLoader}
              src={`/images/svg/26.svg`}
              layout="responsive"
              width={1440}
              height={1440}
            />
            <Image
              p="4"
              loader={imageLoader}
              src={`/images/svg/27.svg`}
              layout="responsive"
              width={1440}
              height={1440}
            />
            <Image
              p="4"
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
              spacing="4"
            >
              <Box>
                <Image
                  loader={imageLoader}
                  src={`/images/svg/sticker-free-icon-font.svg`}
                  width="40px"
                  height="40px"
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
                  <Text textStyle={'subTitle'} textAlign="center">
                    一級走塑店鋪
                  </Text>
                  <Text
                    textStyle={'content'}
                    textAlign="center"
                    fontSize={'sm'}
                  >
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
                  <Text textStyle={'subTitle'} textAlign="center">
                    二級走塑店鋪
                  </Text>
                  <Text
                    textStyle={'content'}
                    textAlign="center"
                    fontSize={'sm'}
                  >
                    歡迎自備餐具 / 器皿購物
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>

          <Stack direction={{ base: 'column', lg: 'row' }} spacing="6">
            <Box flex="1">
              <Stack direction={{ base: 'column' }} spacing="4">
                <Box>
                  <Image
                    loader={imageLoader}
                    src={`/images/svg/map-free-icon-font.svg`}
                    width="40px"
                    height="40px"
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
          </Stack>

          <Stack spacing="4" maxW={'680px'} align="center" alignSelf={'center'}>
            <CTAButton />
            <br />
            <Text as="p" textStyle={'content'} textAlign="center">
              *
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

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;

export default Index;
