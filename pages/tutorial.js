import React from 'react';
import Wrapper from '@containers/gpsWrapper';
import Head from 'next/head';
import { Container, Box, Heading, Text, Flex, Stack } from '@chakra-ui/react';
import { headingProps } from '@common/styles/components/contentStyle';
import { CTAButton } from '@components/GPS/CTA/button';
import { imageLoader } from 'common/utils';

import Image from 'next/image';

const maxWSize = 1200;

function Tutorial() {
  return (
    <Box pt={{ base: '50px', md: '60px' }}>
      <Head>
        <title>走塑GPS 全港走塑店鋪定位地圖 1,100間走塑店鋪輕鬆定位！</title>
        <meta
          property="og:title"
          content="走塑GPS 全港走塑店鋪定位地圖 1,100間走塑店鋪輕鬆定位！"
        />
        <meta name="description" content="走塑GPS小助手 幫你日常走塑零失手" />
        <meta
          property="og:description"
          content="走塑GPS小助手 幫你日常走塑零失手"
        />
        <meta
          property="og:image"
          content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/08/a5120475-gp02i8e_high_res.jpg"
        />
      </Head>
      <Box w={'100%'} pos={'relative'} overflow={'hidden'}>
        <Container maxW={`${maxWSize}px`} pos={`relative`} zIndex={2}>
          <Box py={20} w={{ md: 'md', xl: 'xl' }}>
            <Box>
              <Heading
                {...headingProps}
                color={'white'}
                fontSize={{ base: '2xl', md: '4xl' }}
                dangerouslySetInnerHTML={{
                  __html: '走塑GPS使用教學',
                }}
              />
            </Box>
          </Box>
        </Container>
        <Image
          loader={imageLoader}
          src="/images/banner.jpeg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {/** https://image-component.nextjs.gallery/background */}
      </Box>
      <Container maxW={`${maxWSize}px`} py={6}>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={'space-between'}
          p={6}
          // bgColor={'#77C1D3'}
          // borderRadius={8}
          // color={'white'}
          background="gray.50"
          borderLeft="4px"
          borderColor="#77C1D3"
          align="center"
        >
          <Box mb={{ base: 6, md: 0 }}>
            <Text textStyle={'subTitle'}>
              啟動WhatsApp「走塑GPS」後，發送任何訊息即可開始使用！
            </Text>
          </Box>
          <Box>
            <CTAButton />
          </Box>
        </Flex>

        <Stack spacing="4" maxW="4xl" mx="auto" my="4">
          <Box py={6}>
            <Box mb={6}>
              <Text as="p" fontSize="lg" mb="4">
                你可根據訊息指示或參照以下步驟發送實時位置：
              </Text>
              <Text as="p" fontSize="sm">
                **
                記得把「走塑GPS」加到你的通訊錄，以便日後隨時查詢走塑店鋪位置！
              </Text>
            </Box>
            <Box>
              <Image
                loader={imageLoader}
                src={`/images/7.png`}
                layout="responsive"
                width={1080}
                height={1080}
              />
            </Box>
          </Box>

          <Box borderTop={'1px solid #F2F2F2'} mt={6} py={6}>
            <Box mb={6}>
              <Text as="p" fontSize="lg" mb="4">
                {
                  'iOS: 點選左下角「+」號 > 選擇「位置 / Location」 > 選擇「傳送您目前的位置 / Send Your Current Location'
                }
              </Text>
            </Box>
            <Box>
              <Image
                loader={imageLoader}
                src={`/images/7.png`}
                layout="responsive"
                width={1080}
                height={1080}
              />
            </Box>
          </Box>

          <Box borderTop={'1px solid #F2F2F2'} mt={6} py={6}>
            <Box mb={6}>
              <Text as="p" fontSize="lg" mb="4">
                {
                  'Android: 點擊「萬字夾」圖示 > 選擇「位置 / Location」 > 選擇「傳送您目前的位置 / Send Your Current Location)'
                }
              </Text>
            </Box>
            <Box>
              <Image
                loader={imageLoader}
                src={`/images/8.png`}
                layout="responsive"
                width={1080}
                height={1080}
              />
            </Box>
          </Box>

          <Box borderTop={'1px solid #F2F2F2'} mt={6} py={6}>
            <Box mb={6}>
              <Text as="p" fontSize="lg" mb="4">
                分享位置後，「走塑GPS」會即時顯示最接近你的5間走塑友善小店。
              </Text>
            </Box>
            <Box>
              <Image
                loader={imageLoader}
                src={`/images/9.png`}
                layout="responsive"
                width={1080}
                height={1080}
              />
            </Box>
          </Box>

          <Box borderTop={'1px solid #F2F2F2'} mt={6} py={6}>
            <Box mb={6}>
              <Text as="p" fontSize="lg" mb="4">
                你亦可在「分享位置」頁面輸入搜尋地點（以建築物為佳），「走塑GPS」將為你搜尋指定地點附近的走塑小店。
              </Text>
            </Box>
            <Box>
              <Image
                loader={imageLoader}
                src={`/images/10.png`}
                layout="responsive"
                width={1080}
                height={1080}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

Tutorial.getLayout = (page) => <Wrapper>{page}</Wrapper>;

export default Tutorial;
