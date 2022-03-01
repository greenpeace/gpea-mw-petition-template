import React from 'react';
import Wrapper from '@containers/gpsWrapper';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Container, Box, Heading, Text, Flex, Image } from '@chakra-ui/react';
import { headingProps } from '@common/styles/components/contentStyle';
import { CTAButton } from '@components/GPS/CTA/button';
import heroBannerImage from '@components/GPS/images/banner.jpeg';

const maxWSize = 1200;

function Tutorial() {
  return (
    <div>
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
      <Box bgImage={heroBannerImage} bgRepeat={'no-repeat'} bgSize={'cover'}>
        <Container maxW={`${maxWSize}px`}>
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
      </Box>
      <Container maxW={`${maxWSize}px`} py={6}>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={'space-between'}
          bgColor={'#77C1D3'}
          p={6}
          borderRadius={8}
          align="center"
        >
          <Box mb={{ base: 6, md: 0 }}>
            <Text textStyle={'subTitle'} color={'white'}>
              啟動WhatsApp「走塑GPS」後，發送任何訊息即可開始使用！
            </Text>
          </Box>
          <Box>
            <CTAButton />
          </Box>
        </Flex>

        <Box borderTop={'1px solid #F2F2F2'} mt={6} py={6}>
          <Box mb={6}>
            <Text as="p" fontSize="lg">
              你可根據訊息指示或參照以下步驟發送實時位置：
            </Text>
            <Text as="p" fontSize="xs">
              ** 記得把「走塑GPS」加到你的通訊錄，以便日後隨時查詢走塑店鋪位置！
            </Text>
          </Box>
          <Image src={'/images/7.png'} w={'100%'} />
        </Box>

        <Box borderTop={'1px solid #F2F2F2'} mt={6} py={6}>
          <Box mb={6}>
            <Text as="p" fontSize="lg">
              {
                'iOS: 點選左下角「+」號 > 選擇「位置 / Location」 > 選擇「傳送您目前的位置 / Send Your Current Location'
              }
            </Text>
          </Box>
          <Image src={'/images/7.png'} w={'100%'} />
        </Box>

        <Box borderTop={'1px solid #F2F2F2'} mt={6} py={6}>
          <Box mb={6}>
            <Text as="p" fontSize="lg">
              {
                'Android: 點擊「萬字夾」圖示 > 選擇「位置 / Location」 > 選擇「傳送您目前的位置 / Send Your Current Location)'
              }
            </Text>
          </Box>
          <Image src={'/images/8.png'} w={'100%'} />
        </Box>

        <Box borderTop={'1px solid #F2F2F2'} mt={6} py={6}>
          <Box mb={6}>
            <Text as="p" fontSize="lg">
              分享位置後，「走塑GPS」會即時顯示最接近你的5間走塑友善小店。
            </Text>
          </Box>
          <Image src={'/images/9.png'} w={'100%'} />
        </Box>

        <Box borderTop={'1px solid #F2F2F2'} mt={6} py={6}>
          <Box mb={6}>
            <Text as="p" fontSize="lg">
              你亦可在「分享位置」頁面輸入搜尋地點（以建築物為佳），「走塑GPS」將為你搜尋指定地點附近的走塑小店。
            </Text>
          </Box>
          <Image src={'/images/10.png'} w={'100%'} />
        </Box>

        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={'space-between'}
          bgColor={'#77C1D3'}
          p={6}
          borderRadius={8}
          align="center"
        >
          <Box mb={{ base: 6, md: 0 }}>
            <Text textStyle={'subTitle'} color={'white'}>
              啟動WhatsApp「走塑GPS」後，發送任何訊息即可開始使用！
            </Text>
          </Box>
          <Box>
            <CTAButton />
          </Box>
        </Flex>
      </Container>
      {/* <Container maxWidth="100%" py={6}>
        <Box>
          <Heading>走塑GPS使用教學</Heading>
        </Box>
        <Box bgColor={'green.500'} d={'inline-block'} borderRadius={8} p={6}>
          <Text>立即免費使用走塑GPS/立即啟動走塑GPS</Text>
        </Box>

        <Box>
          <Text as="p">
            啟動WhatsApp「走塑GPS」後，發送任何訊息即可開始使用！
          </Text>
          <Text as="p">你可根據訊息指示或參照以下步驟發送實時位置：</Text>
          <Text as="p" fontSize="xs">
            ** 記得把「走塑GPS」加到你的通訊錄，以便日後隨時查詢走塑店鋪位置！
          </Text>
          <Image src={'/images/7.png'} />
        </Box>

        <Box>
          <Text as="p">
            {
              'iOS: 點選左下角「+」號 > 選擇「位置 / Location」 > 選擇「傳送您目前的位置 / Send Your Current Location'
            }
          </Text>
          <Image src={'/images/7.png'} />
        </Box>

        <Box>
          <Text as="p">
            {
              'Android: 點擊「萬字夾」圖示 > 選擇「位置 / Location」 > 選擇「傳送您目前的位置 / Send Your Current Location)'
            }
          </Text>
          <Image src={'/images/8.png'} />
        </Box>

        <Box>
          <Text as="p">
            分享位置後，「走塑GPS」會即時顯示最接近你的5間走塑友善小店。
            <br />
            除了地址及走塑等級（一級為「提供走塑優惠」；二級為「歡迎自備餐具/器皿」），你亦可點擊地圖查詢路線。
          </Text>
          <Image src={'/images/9.png'} />
        </Box>

        <Box>
          <Text as="p">
            你亦可在「分享位置」頁面輸入搜尋地點（以建築物為佳），「走塑GPS」將為你搜尋指定地點附近的走塑小店。
          </Text>
          <Image src={'/images/10.png'} />
        </Box>

        <Box bgColor={'green.500'} d={'inline-block'} borderRadius={8} p={6}>
          <Text>立即免費使用走塑GPS/立即啟動走塑GPS</Text>
        </Box>
      </Container> */}
    </div>
  );
}

Tutorial.getLayout = (page) => <Wrapper>{page}</Wrapper>;

export default Tutorial;
