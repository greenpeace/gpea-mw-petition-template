import React from 'react';
import Wrapper from '@containers/gpsWrapper';
import Head from 'next/head';
import {
  Text,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Flex,
  Icon,
  Link,
} from '@chakra-ui/react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

import { CTAButton } from '@components/GPS/CTA/button';
import { imageLoader } from 'common/utils';

import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import Image from 'next/image';

const maxWSize = 1200;

const questionWrapProps = {
  _expanded: {
    textDecoder: 'underline',
  },
  sx: {
    ':focus:not(:focus-visible)': {
      shadow: 'none',
    },
  },
};

const questionProps = {
  fontSize: { base: 'md', md: 'lg' },
  py: 4,
  fontWeight: 'bold',
};

const QuestionIcon = () => {
  return (
    <Icon
      as={AiOutlineQuestionCircle}
      fontSize="2xl"
      mr="4"
      fontWeight="bold"
    />
  );
};

function Faq() {
  return (
    <Box pt={{ base: '50px', md: '60px' }}>
      <Head>
        <title>走塑GPS 常見問題 - Greenpeace 綠色和平 | 香港</title>
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
                  __html: '走塑GPS 常見問題',
                }}
              />
            </Box>
          </Flex>
        </Container>
        <Image
          loader={imageLoader}
          src="/images/20220318_GPS-03.jpg"
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

        <Box maxW="4xl" mx="auto" py={6}>
          <Accordion defaultIndex={[0]}>
            <AccordionItem>
              <AccordionButton {...questionWrapProps}>
                <QuestionIcon />
                <Box flex="1" textAlign="left" {...questionProps}>
                  訊息顯示「根據紀錄，你已經使用3次查詢」，未能繼續使用？
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text as="p" textStyle={'content'}>
                  你只需按此完成簡單登記，就能免費使用「走塑GPS」服務！
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton {...questionWrapProps}>
                <QuestionIcon />
                <Box flex="1" textAlign="left" {...questionProps}>
                  搜尋結果顯示店鋪，與我的實時位置距離甚遠？
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text as="p" textStyle={'content'}>
                  綠色和平正持續邀請更多商戶加入全城走塑計劃，「走塑GPS」將定期更新資料庫。
                  <br />
                  你亦可以在「分享位置」頁面直接輸入地點，以搜尋更多走塑店鋪。
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton {...questionWrapProps}>
                <QuestionIcon />
                <Box flex="1" textAlign="left" {...questionProps}>
                  我能否選擇不分享位置，而使用「走塑GPS」？
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text as="p" textStyle={'content'}>
                  你可以在「分享位置」頁面直接輸入地點，以搜尋更多走塑店鋪。
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton {...questionWrapProps}>
                <QuestionIcon />
                <Box flex="1" textAlign="left" {...questionProps}>
                  我未能與「走塑GPS」分享位置？
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text as="p" textStyle={'content'}>
                  你可能需要於手機的應用程式設定，容許WhatsApp存取你的位置。
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton {...questionWrapProps}>
                <QuestionIcon />
                <Box flex="1" textAlign="left" {...questionProps}>
                  我已完成登記，卻未能繼續使用「走塑GPS」？
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text as="p" textStyle={'content'}>
                  你的登記號碼須與使用「走塑GPS」的號碼相同。如仍未能使用，歡迎你按此填寫表格匯報相關錯誤，我們將會盡快跟進。
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton {...questionWrapProps}>
                <QuestionIcon />
                <Box flex="1" textAlign="left" {...questionProps}>
                  我發現店鋪資料有誤？
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text as="p" textStyle={'content'}>
                  歡迎你按此填寫表格匯報相關錯誤，我們將會盡快跟進，經核實後亦會更新資料庫。
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton {...questionWrapProps}>
                <QuestionIcon />
                <Box flex="1" textAlign="left" {...questionProps}>
                  我曾經光顧走塑店鋪，但該店不在「走塑GPS」搜尋結果？
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text as="p" textStyle={'content'}>
                  歡迎你
                  <Link href="" isExternal>
                    按此
                  </Link>
                  填寫表格提供相關店鋪資料，我們將會盡快跟進，經核實後亦會更新資料庫。
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton {...questionWrapProps}>
                <QuestionIcon />
                <Box flex="1" textAlign="left" {...questionProps}>
                  甚麼是「全城走塑」計劃？
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text as="p" textStyle={'content'}>
                  綠色和平自2018年發起「全城走塑計劃」，與超過170位義工到訪全港大小社區，遊說店主提供走塑選擇，2021年底達成1,100間里程碑！
                </Text>
                <Text as="p" textStyle={'content'}>
                  未來我們會籌辦更多活動，擴展全港走塑版圖，歡迎您
                  <Link
                    href="https://change.greenpeace.org.hk/app/plastic-community/"
                    isExternal
                  >
                    按此瀏覽
                  </Link>
                  「全城走塑」網頁，了解更多計劃理念與社區故事！
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton {...questionWrapProps}>
                <QuestionIcon />
                <Box flex="1" textAlign="left" {...questionProps}>
                  我是店主，如何加入「全城走塑」計劃？
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text as="p" textStyle={'content'}>
                  歡迎你按此填寫表格留下簡單店鋪資料，我們將盡快與你聯絡！
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton {...questionWrapProps}>
                <QuestionIcon />
                <Box flex="1" textAlign="left" {...questionProps}>
                  我想進一步支持「全城走塑」計劃？
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text as="p" textStyle={'content'}>
                  綠色和平從不接受政府和商界資助，因此你的捐助支持，將有效幫助我們進一步鞏固與走塑店鋪的合作，致力促進社區走塑風潮，以具體的解決方案作示範，促請政府及企業提出更積極走塑措施。
                </Text>
                <Text as="p" textStyle={'content'}>
                  你亦可按此填寫表格留下聯絡方法，加入我們的「走塑小隊」，一起發掘更多社區走塑力量！
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton {...questionWrapProps}>
                <QuestionIcon />
                <Box flex="1" textAlign="left" {...questionProps}>
                  綠色和平為解決本地塑膠污染問題，展開了甚麼工作？
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text as="p" textStyle={'content'}>
                  綠色和平2016年起在香港推動減塑項目工作，從個人、社區、企業到政府層面，透過權威科學研究、提倡可行政策、凝聚社區力量等途徑，設法解決塑膠污染問題。
                </Text>
                <Text as="p" textStyle={'content'}>
                  2016年：屈臣氏集團、759阿信屋等大型零售商，宣佈淘汰含微塑膠的產品
                  <br />
                  2017年：麥當勞、肯德基、美心MX大家樂、大快活等連鎖快餐店，公佈減塑政策與承諾
                  <br />
                  2018年：推出「全城走塑計劃」，至今超過1,100間店鋪加入
                  <br />
                  2019年：倡議連鎖超市走塑，百佳和惠康分別公佈進一步減塑承諾及走塑第一步
                  <br />
                  2020年：成功推動政府​​加強管制廢塑膠進出口
                  <br />
                  2021年：促使政府就全面管制塑膠餐具進行公眾諮詢
                </Text>
                <Text as="p" textStyle={'content'}>
                  你亦可按此了解更多綠色和平全城走塑里程碑。
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton {...questionWrapProps}>
                <QuestionIcon />
                <Box flex="1" textAlign="left" {...questionProps}>
                  全球反塑膠污染行動中，綠色和平有何角色？
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text as="p" textStyle={'content'}>
                  綠色和平遍佈全球六大洲，覆蓋超過55個國家及地區的辦公室網絡，除了推動本地減塑政策，亦會攜手合作展開跨地域研究調查（例：追蹤洋垃圾去向）、敦促跨國企業減少生產即棄塑膠（例：可口可樂2030年重用容器承諾），以及遊說各地領袖達成減塑協議（例：推動全球塑膠公約）。
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
}

Faq.getLayout = (page) => <Wrapper>{page}</Wrapper>;

export default Faq;
