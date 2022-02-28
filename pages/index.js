import React from 'react';
import Wrapper from '@containers/gpsWrapper';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import {
  Container,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Image,
  AspectRatio,
  Stack,
  Flex,
} from '@chakra-ui/react';

import { CTAButton } from '@components/GPS/CTA/button';

function Index() {
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
      <Container maxW={{ base: '100%', md: '1200px' }} py={6}>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Stack spacing={6} flex={1}>
            <Text textStyle={'heading'}>走塑GPS 全港1,100間走塑店鋪</Text>
            <Text as="p" textStyle={'content'}>
              準備充足走塑的你，最怕店鋪拒收自攜容器「摸門釘」？ <br />
              心血來潮走塑的你，最好走塑小店「總有一間喺左近」？
              <br />
              為了方便市民搜尋「全城走塑計劃」超過1,100間走塑商戶，綠色和平推出「走塑GPS」WhatsApp
              Chatbot功能，讓你隨時隨地尋找鄰近走塑友善小店，做到「Plastic Free,
              Care Free」！
            </Text>

            <Box bgColor={'gray.100'} p={4} mb={6} borderRadius={'md'}>
              <UnorderedList pl={2} mb={4}>
                <ListItem>即時定位：5間最就近走塑小店</ListItem>
                <ListItem>資訊齊全：地址、地圖、走塑等級</ListItem>
                <ListItem>費用全免！</ListItem>
              </UnorderedList>
              <CTAButton />
            </Box>
            <Box>
              <Image src={'/images/location.png'} w={'80px'} />
              <Text textStyle={'heading'}>邊間走塑小店喺左近 免費幫你搵</Text>
              <Text as="p" textStyle={'content'}>
                只須於WhatsApp分享實時位置，「走塑GPS」將立即搜尋5間鄰近走塑小店，內附地圖連結助你規劃路線光顧心水小店。
              </Text>
            </Box>

            <Box>
              <Image src={'/images/sticker.png'} w={'80px'} />
              <Text textStyle={'heading'}>走塑兩級制 唔使心大心細</Text>
              <Text as="p" textStyle={'content'}>
                綠色和平以「全城走塑」白色及藍色徽章貼紙，標示店鋪不同程度的走塑措施。「走塑GPS」亦會於搜尋結果顯示店鋪走塑等級，自備容器購物亦得，享受走塑優惠亦得！
              </Text>
              <Stack direction="row">
                <Box>
                  <Image src={'/images/PFC_Sticker_blue.png'} />
                </Box>
                <Box>
                  <Image src={'/images/PFC_Sticker_white.png'} />
                </Box>
              </Stack>
            </Box>

            <Box>
              {/* <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/kz_EDIfH7gU"
                  alt="demo"
                />
              </AspectRatio> */}
            </Box>

            <Box>
              <Image src={'/images/like.png'} w={'80px'} />
              <Text textStyle={'heading'}>全港走塑版圖 持續擴展中！</Text>
              <Text as="p" textStyle={'content'}>
                綠色和平自2018年發起「全城走塑計劃」，與超過170位義工到訪全港大小社區，遊說店主提供走塑選擇，2021年底達成1,100間里程碑！
                <br />
                未來我們會繼續擴大全港走塑版圖，邀請更多類型店鋪營造走塑友善環境，示範具體解決方案，促請政府及企業提出更積極走塑措施！
              </Text>
            </Box>

            <Box>
              <Stack direction="column">
                <Box>
                  <Image src={'/images/20210508_SSPHunting_5.jpg'} />
                </Box>
                <Box>
                  <Image src={'/images/20210508_SSPHunting_8.jpg'} />
                </Box>
                <Box>
                  <Image src={'/images/20210508_SSPHunting_17.jpg'} />
                </Box>
              </Stack>
            </Box>

            <Box>
              <CTAButton />
              <Text as="p" fontSize="xs">
                **
                如有任何使用「走塑GPS」疑難，歡迎參閱常見問題或按此填寫表格聯絡我們。
              </Text>
            </Box>
          </Stack>
          <Box flex={1}>
            <Box position="sticky" top={'0px'}>
              <Box
                borderRadius={{ base: 48, md: 64 }}
                border={'8px solid #77C1D3'}
                overflow={'hidden'}
                mx={12}
                my={{ base: 6, md: 0 }}
              >
                <Image src={'/images/demo_app_screen.png'} />
                {/* <Box bgImage={"url('/images/demo_app_screen.png')"} bgSize={'cover'} w={'100%'}/> */}
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </div>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;

export default Index;
