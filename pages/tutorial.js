import React, { useState } from 'react';
import Wrapper from '@containers/gpsWrapper';
import Head from 'next/head';
import {
  Container,
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react';
import { CTAButton } from '@components/GPS/CTA/button';
import { imageLoader } from 'common/utils';
import { AiFillAndroid, AiFillApple } from 'react-icons/ai';
import Image from 'next/image';

import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const maxWSize = 1200;

const TutorialImage = ({ children }) => {
  return (
    <Box
      w="100%"
      maxW="480px"
      mx="auto"
      my="4"
      borderRadius="xl"
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

function Tutorial() {
  const [OS, setOS] = useState('');
  return (
    <Box pt={{ base: '50px', md: '60px' }}>
      <Head>
        <title>走塑GPS 使用教學 - Greenpeace 綠色和平 | 香港</title>
      </Head>

      <Box minH="300px" w={'100%'} pos={'relative'} overflow={'hidden'}>
        <Container maxW={`${maxWSize}px`} pos={`relative`} zIndex={2}>
          <Flex py={20} w={{ md: 'md', xl: 'xl' }} alignItems="center">
            <Box p="4" bg="var(--gps-primary)">
              <Heading
                {...headingProps}
                mb="0"
                color={'white'}
                fontSize={{ base: '3xl', md: '5xl' }}
                dangerouslySetInnerHTML={{
                  __html: '走塑GPS 使用教學',
                }}
              />
            </Box>
          </Flex>
        </Container>
        <Image
          loader={imageLoader}
          src="/images/20220318_GPS-03.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>

      <Container maxW={`${maxWSize}px`} py={6}>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={'center'}
          justifyContent={'space-between'}
          p={6}
          background="gray.10"
          borderLeft="4px"
          borderColor="var(--gps-primary)"
        >
          <Box py="4">
            <Text as="p" textStyle={'content'}>
              啟動WhatsApp「走塑GPS」後，發送任何訊息即可開始使用！
            </Text>
          </Box>
          <Box>
            <CTAButton />
          </Box>
        </Flex>

        <Stack spacing="4" maxW="3xl" mx="auto" align="center">
          {/* Intro */}
          <Stack my="6">
            <Box>
              <Box mb={6}>
                <Text as="p" textStyle={'content'}>
                  你可根據訊息指示或參照以下步驟發送實時位置：
                </Text>
                <Text as="p" textStyle={'content'}>
                  <b>
                    *
                    記得把「走塑GPS」加到你的通訊錄，以便日後隨時查詢走塑店鋪位置！
                  </b>
                </Text>
              </Box>
              <TutorialImage>
                <Image
                  loader={imageLoader}
                  src={`/images/svg/4.svg`}
                  layout="responsive"
                  width={1080}
                  height={1080}
                />
              </TutorialImage>
            </Box>
          </Stack>

          <SimpleGrid columns="2" spacing="4" mx="auto" mb="6">
            <Button
              variant="outline"
              colorScheme="green"
              leftIcon={<AiFillApple />}
              onClick={() => setOS('iOS')}
            >
              iOS 系統
            </Button>
            <Button
              variant="outline"
              colorScheme="green"
              leftIcon={<AiFillAndroid />}
              onClick={() => setOS('Android')}
            >
              Android 系統
            </Button>
          </SimpleGrid>

          <Flex flexDirection={'column'}>
            {/* iOS */}
            <Stack order={OS === 'iOS' ? '1' : '2'} spacing="6" align="center">
              <Box>
                <Text as="p" textStyle={'subTitle'}>
                  <b>iOS：</b>
                </Text>
                <Text as="p" textStyle={'content'}>
                  {
                    '點選左下角「+」號 > 選擇「位置 / Location」 > 選擇「傳送您目前的位置 / Send Your Current Location'
                  }
                </Text>
              </Box>
              <TutorialImage>
                <Image
                  loader={imageLoader}
                  src={`/images/svg/14.svg`}
                  layout="responsive"
                  width={1080}
                  height={1080}
                />
              </TutorialImage>
              <Text as="p" textStyle={'content'}>
                分享位置後，「走塑GPS」會即時顯示最接近你的5間走塑友善小店。
              </Text>
              <TutorialImage>
                <Image
                  loader={imageLoader}
                  src={`/images/svg/6.svg`}
                  layout="responsive"
                  width={1080}
                  height={1080}
                />
              </TutorialImage>
              <Text as="p" textStyle={'content'}>
                你亦可在「分享位置」頁面輸入搜尋地點（以建築物為佳），「走塑GPS」將為你搜尋指定地點附近的走塑小店。
              </Text>
              <TutorialImage>
                <Image
                  loader={imageLoader}
                  src={`/images/svg/21.svg`}
                  layout="responsive"
                  width={1080}
                  height={1080}
                />
              </TutorialImage>
            </Stack>

            {/* Android */}
            <Stack
              order={OS === 'Android' ? '1' : '2'}
              spacing="6"
              align="center"
            >
              <Box>
                <Text as="p" textStyle={'subTitle'}>
                  <b>Android：</b>
                </Text>
                <Text as="p" textStyle={'content'}>
                  {
                    '點擊「萬字夾」圖示 > 選擇「位置 / Location」 > 選擇「傳送您目前的位置 / Send Your Current Location)'
                  }
                </Text>
              </Box>
              <TutorialImage>
                <Image
                  loader={imageLoader}
                  src={`/images/svg/16.svg`}
                  layout="responsive"
                  width={1080}
                  height={1080}
                />
              </TutorialImage>
              <TutorialImage>
                <Image
                  loader={imageLoader}
                  src={`/images/svg/18.svg`}
                  layout="responsive"
                  width={1080}
                  height={1080}
                />
              </TutorialImage>
              <Text as="p" textStyle={'content'}>
                分享位置後，「走塑GPS」會即時顯示最接近你的5間走塑友善小店。
              </Text>
              <TutorialImage>
                <Image
                  loader={imageLoader}
                  src={`/images/svg/6.svg`}
                  layout="responsive"
                  width={1080}
                  height={1080}
                />
              </TutorialImage>
              <Text as="p" textStyle={'content'}>
                你亦可在「分享位置」頁面輸入搜尋地點（以建築物為佳），「走塑GPS」將為你搜尋指定地點附近的走塑小店。
              </Text>
              <TutorialImage>
                <Image
                  loader={imageLoader}
                  src={`/images/svg/Plastic-free-GPS- 如何使用.svg`}
                  layout="responsive"
                  width={1080}
                  height={1080}
                />
              </TutorialImage>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

Tutorial.getLayout = (page) => <Wrapper>{page}</Wrapper>;

export default Tutorial;