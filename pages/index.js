import React from 'react';
import Wrapper from '@containers/gpsWrapper';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Container,
  Box,
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
  Center,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import { CTAButton } from '@components/GPS/CTA/button';

const maxWSize = 1200;
const trianglePropsMD = {
  width: 50,
  height: 50,
  borderLeft: '120px solid transparent',
  borderRight: '0px solid transparent',
  borderTop: '90px solid #77C1D3',
  right: 0,
  zIndex: 2,
};

const triangleProps = {
  width: 50,
  height: 50,
  borderLeft: '80px solid transparent',
  borderRight: '0px solid transparent',
  borderTop: '70px solid #77C1D3',
  left: 0,
  zIndex: 2,
};

function Index() {
  const [isLargerThanMD] = useMediaQuery('(min-width: 62em)'); // default md: '62em'
  const { isOpen, onOpen, onClose } = useDisclosure();
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

      <Box bgColor="#F9BD82">
        <Container maxW={`${maxWSize}px`} pt={6}>
          <Flex direction={{ base: 'column', lg: 'row' }}>
            <Box flex={1}>
              <Stack direction={'column'}>
                <Box textAlign="center">
                  <Text
                    as="h1"
                    fontSize={{ base: '6xl', md: '9xl' }}
                    color="#005F89"
                    fontWeight={700}
                  >
                    走塑GPS
                  </Text>
                </Box>
                <Box
                  bgColor="#77C1D3"
                  p={2}
                  borderRadius={'xl'}
                  py={12}
                  position="relative"
                >
                  <Center w={'100%'} h={'100%'}>
                    <Stack direction={'column'} textAlign={'center'}>
                      <Text
                        color={'#FFF'}
                        fontSize={{ base: '3xl', md: '5xl' }}
                        fontWeight={700}
                      >
                        全港1,100間走塑店鋪
                      </Text>
                      <Text
                        color={'#FFF'}
                        fontSize={{ base: '3xl', md: '6xl' }}
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
              </Stack>
            </Box>
            <Box flex={1}>
              {' '}
              <Image src={'/images/Plastic-free_GPS.svg'} />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Container maxW={`${maxWSize}px`} py={6}>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Stack spacing={10} flex={1}>
            <Flex
              flexDirection={{ base: 'column', lg: 'row' }}
              justifyContent={'space-between'}
              bgColor={'#77C1D3'}
              p={6}
              borderRadius={8}
              align="center"
            >
              <Box mb={{ base: 6, md: 0 }} pr={{ base: 0, md: 6 }} flex={1}>
                <Text
                  as="p"
                  textStyle={'content'}
                  color={'#FFF'}
                  fontWeight={700}
                >
                  準備充足走塑的你，最怕店鋪拒收自攜容器「摸門釘」？ <br />
                  心血來潮走塑的你，最好走塑小店「總有一間喺左近」？
                  <br />
                  為了方便市民搜尋「全城走塑計劃」超過1,100間走塑商戶，綠色和平推出「走塑GPS」WhatsApp
                  Chatbot功能，讓你隨時隨地尋找鄰近走塑友善小店，做到「Plastic
                  Free, Care Free」！
                </Text>
                <UnorderedList pl={2} mb={4} color={'#FFF'}>
                  <ListItem>即時定位：5間最就近走塑小店</ListItem>
                  <ListItem>資訊齊全：地址、地圖、走塑等級</ListItem>
                  <ListItem>費用全免！</ListItem>
                </UnorderedList>
              </Box>
              <Box>
                <CTAButton />
              </Box>
            </Flex>
            <Box>
              <Stack
                spacing={{ base: 6, lg: 12 }}
                direction={{ base: 'column', md: 'row' }}
              >
                <Box flex={1}>
                  <Image src={'/images/placeholder.svg'} w={'80px'} />
                  <Text textStyle={'heading'}>
                    邊間走塑小店喺左近 免費幫你搵
                  </Text>
                  <Text as="p" textStyle={'content'}>
                    只須於WhatsApp分享實時位置，「走塑GPS」將立即搜尋5間鄰近走塑小店，內附地圖連結助你規劃路線光顧心水小店。
                  </Text>

                  <Box>
                    <Image
                      src={'/images/demo_video.jpg'}
                      width={'100%'}
                      onClick={onOpen}
                      cursor={'pointer'}
                    />
                  </Box>
                </Box>
                <Box flex={1}>
                  <Image src={'/images/sticker.svg'} w={'80px'} />
                  <Text textStyle={'heading'}>走塑兩級制 唔使心大心細</Text>
                  <Text as="p" textStyle={'content'}>
                    綠色和平以「全城走塑」白色及藍色徽章貼紙，標示店鋪不同程度的走塑措施。「走塑GPS」亦會於搜尋結果顯示店鋪走塑等級，自備容器購物亦得，享受走塑優惠亦得！
                  </Text>

                  <Box>
                    <Stack direction={{ base: 'column', md: 'row' }}>
                      <Box textAlign="center">
                        <Image src={'/images/PFC_Sticker_blue.png'} />
                        <Image
                          src={'/images/grade1-ribbon.svg'}
                          px={{ base: 8, md: 12 }}
                        />
                        <Text textStyle="center" pt={2}>
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
                        <Text textStyle="center" pt={2}>
                          不主動提供即棄塑膠 或<br />
                          歡迎自備餐具/器皿購物
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Image src={'/images/like.svg'} w={'80px'} />
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

            <Box maxW={'480px'} align="center" alignSelf={'center'}>
              <CTAButton />
              <Text as="p" fontSize="xs">
                **
                如有任何使用「走塑GPS」疑難，歡迎參閱常見問題或按此填寫表格聯絡我們。
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody py={12}>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/kz_EDIfH7gU"
                alt="demo"
              />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;

export default Index;
