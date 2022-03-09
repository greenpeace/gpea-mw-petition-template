import React from 'react';
import Wrapper from '@containers/gpsWrapper';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Container,
  Box,
  Text,
  ListItem,
  UnorderedList,
  Image,
  AspectRatio,
  Stack,
  Flex,
  Center,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
} from '@chakra-ui/react';

import { CTAButton } from '@components/GPS/CTA/button';

const maxWSize = 1200;
const trianglePropsMD = {
  width: 30,
  height: 30,
  borderLeft: '90px solid transparent',
  borderRight: '0px solid transparent',
  borderTop: '60px solid #77C1D3',
  right: 0,
  zIndex: 2,
};

const triangleProps = {
  width: 30,
  height: 30,
  borderLeft: '60px solid transparent',
  borderRight: '0px solid transparent',
  borderTop: '40px solid #77C1D3',
  left: 60,
  zIndex: 2,
};

function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box pt={{ base: '50px', md: '60px' }}>
      {' '}
      {/** NAV Height */}
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
      <HeroSection />
      <Box my={6}>
        <Container maxW={`${maxWSize}px`}>
          <Flex
            flexDirection={{ base: 'column', lg: 'row' }}
            align={{ base: 'initial', lg: 'center' }}
          >
            <Box bgColor="#77C1D3" borderRadius={16} py={4} px={6}>
              <Text
                as="p"
                textStyle={'content'}
                fontWeight={500}
                color={'#FFF'}
                mb={4}
              >
                準備充足走塑的你，最怕店鋪拒收自攜容器<b>「摸門釘」</b>?
              </Text>
              <Text
                as="p"
                textStyle={'content'}
                fontWeight={500}
                color={'#FFF'}
              >
                心血來潮走塑的你，最好走塑小店<b>「總有一間喺左近」</b>?
              </Text>
            </Box>

            <Box flex={1} ml={6} d={{ base: 'none', lg: 'block' }}>
              <ShareContent />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Container maxW={`${maxWSize}px`}>
        <Box d={{ lg: 'none' }}>
          <ShareContent />
        </Box>
        <Center height="50px">
          <Divider borderColor="#77C1D3" orientation="vertical" />
        </Center>
        <Box maxW={'480px'} mx={'auto'} my={6}>
          <CTAButton />
        </Box>

        <Stack spacing={12} py={{ base: 6, lg: 12 }}>
          <Stack direction={{ base: 'column', lg: 'row' }} spacing={{ lg: 12 }}>
            <Stack direction={{ base: 'column' }} flex={1}>
              <Box>
                <Image src={'/images/placeholder.svg'} w={{ base: '40px' }} />
              </Box>
              <Box flex={1}>
                <Text textStyle={'heading'}>邊間走塑小店喺左近 免費幫你搵</Text>
                <Text as="p" textStyle={'content'}>
                  只須於WhatsApp分享實時位置，「走塑GPS」將立即搜尋5間鄰近走塑小店，內附地圖連結助你規劃路線光顧心水小店。
                </Text>
              </Box>
            </Stack>

            <Box flex={1}>
              <Image
                src={'/images/demo_video.jpg'}
                width={'100%'}
                onClick={onOpen}
                cursor={'pointer'}
              />
            </Box>
          </Stack>

          <Box>
            <Stack
              direction={{ base: 'column', lg: 'row-reverse' }}
              spacing={{ lg: 12 }}
            >
              <Stack direction={{ base: 'column' }} flex={1}>
                <Box>
                  <Image src={'/images/sticker.svg'} w={{ base: '40px' }} />
                </Box>
                <Box flex={1}>
                  <Text textStyle={'heading'}>走塑兩級制 唔使心大心細</Text>
                  <Text as="p" textStyle={'content'}>
                    綠色和平以「全城走塑」白色及藍色徽章貼紙，標示店鋪不同程度的走塑措施。「走塑GPS」亦會於搜尋結果顯示店鋪走塑等級，自備容器購物亦得，享受走塑優惠亦得！
                  </Text>
                </Box>
              </Stack>

              <Box flex={1}>
                <Stack direction={{ base: 'row' }}>
                  <Box textAlign="center">
                    <Image src={'/images/PFC_Sticker_blue.png'} />
                    <Image
                      src={'/images/grade1-ribbon.svg'}
                      px={{ base: 8, md: 12 }}
                    />
                    <Text textStyle={'content'} pt={2}>
                      完全淘汰即棄塑膠 或<br />
                      提供走塑優惠
                    </Text>
                  </Box>
                  <Box textAlign="center">
                    <Image src={'/images/PFC_Sticker_white.png'} />
                    <Image
                      src={'/images/grade2-ribbon.svg'}
                      px={{ base: 8, md: 12 }}
                    />
                    <Text textStyle={'content'} pt={2}>
                      不主動提供即棄塑膠 或<br />
                      歡迎自備餐具/器皿購物
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>

          <Stack direction={{ base: 'column' }}>
            <Box>
              <Image src={'/images/like.svg'} w={{ base: '40px' }} />
            </Box>
            <Box flex={1}>
              <Text textStyle={'heading'}>全港走塑版圖 持續擴展中！</Text>
              <Text as="p" textStyle={'content'}>
                綠色和平自2018年發起「全城走塑計劃」，與超過170位義工到訪全港大小社區，遊說店主提供走塑選擇，2021年底達成1,100間里程碑！
                <br />
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
          </Stack>

          <Box maxW={'480px'} align="center" alignSelf={'center'}>
            <CTAButton />
            <Text as="p" fontSize="xs">
              **
              如有任何使用「走塑GPS」疑難，歡迎參閱常見問題或按此填寫表格聯絡我們。
            </Text>
          </Box>
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
              bgColor="#77C1D3"
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
                    全港
                    <Text
                      color={'#FFF'}
                      fontSize={{ base: '4xl', lg: '5xl' }}
                      fontWeight={700}
                      as="span"
                      px={2}
                    >
                      1,100
                    </Text>
                    間走塑店鋪
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
                  color="#77C1D3"
                  fontWeight={900}
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
            <Stack direction={'row'} align={'center'} spacing={6}>
              <Box d={{ base: 'block', lg: 'none' }}>
                {' '}
                <Box textAlign="center" pt={4}>
                  <Text
                    as="h1"
                    fontSize={{ base: '5xl', lg: '9xl' }}
                    color="#77C1D3"
                    fontWeight={900}
                  >
                    <Box as="span" style={{ transform: 'rotate(-190deg)' }}>
                      走
                    </Box>
                    塑GPS
                  </Text>
                </Box>
              </Box>
              <Box>
                {' '}
                <Image
                  src={'/images/Plastic-free_GPS.svg'}
                  maxW={{ base: '160px', lg: '360px' }}
                  ml={{ lg: 20 }}
                />
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

const ShareContent = () => {
  return (
    <Box>
      <Text
        as="p"
        textStyle={'content'}
        fontWeight={500}
        color={'#77C1D3'}
        textAlign={'justify'}
      >
        為了方便市民搜尋「全城走塑計劃」超過
        <Text fontSize={{ base: '2xl', md: '5xl' }} fontWeight={700} as="span">
          1,100
        </Text>
        間走塑商戶，綠色和平推出「走塑GPS」WhatsApp
        Chatbot功能，讓你隨時隨地尋找鄰近走塑友善小店，做到
        <b>「Plastic Free, Care Free」</b>!
      </Text>
      <UnorderedList pl={2} mb={4} color="#77C1D3">
        <ListItem>即時定位：5間最就近走塑小店</ListItem>
        <ListItem>資訊齊全：地址、地圖、走塑等級</ListItem>
        <ListItem>費用全免！</ListItem>
      </UnorderedList>
    </Box>
  );
};

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;

export default Index;
