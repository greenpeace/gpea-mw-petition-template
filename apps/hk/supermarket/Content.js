import React from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
  ListItem,
  UnorderedList,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentA from './images/img01.jpg';
import contentB from './images/img02.jpg';
import contentC from './images/img03.jpg';

import brand01 from './images/brand/wellcome-logo.png';
import brand02 from './images/brand/parknshop-logo.jpg';
import brand03 from './images/brand/marksandspencer-logo.jpg';
import brand04 from './images/brand/taste-logo.jpg';
import brand05 from './images/brand/fusion-logo.png';
import brand06 from './images/brand/international-logo.jpg';
import brand07 from './images/brand/yata-logo.jpg';
import brand08 from './images/brand/citysuper-logo.png';
import brand09 from './images/brand/aeon-logo.png';
import brand10 from './images/brand/vanguard-logo.jpg';
import brand11 from './images/brand/uselect-logo.png';
import brand12 from './images/brand/marksandspencer-logo.jpg';

const brands = [
  {
    name: 'wellcome',
    src: brand01,
  },
  {
    name: 'parknshop',
    src: brand02,
  },
  {
    name: 'marksandspencer',
    src: brand03,
  },
  {
    name: 'taste',
    src: brand04,
  },
  {
    name: 'fusion',
    src: brand05,
  },
  {
    name: 'international',
    src: brand06,
  },
  {
    name: 'yata',
    src: brand07,
  },
  {
    name: 'citysuper',
    src: brand08,
  },
  {
    name: 'aeon',
    src: brand09,
  },
  {
    name: 'vanguard',
    src: brand10,
  },
  {
    name: 'uselect',
    src: brand11,
  },
  {
    name: 'marksandspencer',
    src: brand12,
  },
];

const ListContent = ({ title, value }) => (
  <ListItem>
    <Flex>
      <Box w={'110px'} pr={2} fontWeight={'bold'} pb={2}>
        {title}
      </Box>
      <Box flex={1}>{value}</Box>
    </Flex>
  </ListItem>
);

const CardItem = ({ themeInterests }) => (
  <Box bgColor="#F2F2F2" pos={'relative'} cursor={'pointer'}>
    <Flex direction={'column'}>
      <Box pos={'absolute'} top={2} right={2}>
        #1
      </Box>
      <Flex direction={'row'} align={'center'}>
        <Box flex={1}>
          <Image src={brand01} />
        </Box>
        <Box flex={1} textAlign={'right'} p={1}>
          屈臣氏集團
        </Box>
      </Flex>
      <Box pos={'relative'} bgColor={'gray.200'}>
        <Flex pos={'relative'} zIndex={2} fontSize={'sm'}>
          <Box flex={1} p={1}>
            整體得分
          </Box>
          <Box flex={1} p={1} textAlign={'right'}>
            27.1/100
          </Box>
        </Flex>
        <Box
          style={{ transition: `width 2s` }}
          h={'29px'}
          w={'38%'}
          bgColor={themeInterests}
          pos={'absolute'}
          bottom={0}
        />
      </Box>
    </Flex>
    <Flex>
      <Box flex={1} bgColor={'#c9213a'} h={'4px'} />
      <Box flex={1} bgColor={'#fbed01'} h={'4px'} />
      <Box flex={1} bgColor={'#80c342'} h={'4px'} />
    </Flex>
  </Box>
);

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        推動超市走塑 急需您我行動
      </Heading>

      <Text as="p" {...paragraphProps}>
        每年，香港有至少112噸塑膠包裝垃圾流入海洋。超市即棄包裝是塑膠污染的主要源頭之一；這些垃圾入侵食物鏈，您我日常進食的海鮮、食鹽亦無一倖免，暗藏微塑膠！
      </Text>

      <Box {...paragraphProps}>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={6}
        >
          {brands.map((d) => (
            <GridItem
              colSpan={1}
              key={d.name}
              alignItems={'center'}
              alignSelf={'center'}
            >
              <Image src={d.src} alt={d.name} />
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Text as="p" {...paragraphProps}>
        超市每天售賣無數食材、飲品、日常用品，大部分產品都預先包裝，令顧客「冇得揀」。然而，根據我們的評估和海外經驗，超市絕對有能力改變其貨品包裝及銷售模式，減少無謂包裝。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentA} />
      </Box>

      <Text as="p" {...paragraphProps}>
        事實上，綠色和平早已向各大超市提供「走塑」方案，亦成功促使個別超市踏出減塑的第一步：有賴逾24,000人聯署、組成「全城超市查膠隊」、發佈
        <a
          href="https://www.greenpeace.org/hongkong/issues/plastics/press/9373/%e9%81%8e%e7%99%be%e5%b8%82%e6%b0%91%e7%b5%84%e9%9a%8a%e6%9f%a5%e8%86%a0-%e6%8f%ad%e9%80%be%e5%8d%8a%e5%8c%85%e8%a3%9d%e7%94%b1%e8%b6%85%e5%b8%82%e8%87%aa%e8%a1%8c%e5%8a%a0%e4%b8%8a"
          target="_blank"
        >
          <Text
            as="span"
            color={`theme.${themeInterests}`}
            textDecoration={'underline'}
          >
            超市即棄塑膠包裝使用情況調查
          </Text>
        </a>
        、舉辦
        <a
          href="https://www.greenpeace.org/hongkong/issues/plastics/update/11980/%E8%B6%85%E5%B8%82%E8%B5%B0%E5%A1%91%E4%B8%8D%E5%90%83%E5%8A%9B%E5%8F%88%E8%A8%8E%E5%A5%BD-%E6%93%B4%E5%B1%95%E5%AE%A2%E6%BA%90%E5%A2%9E%E7%94%9F%E6%84%8F"
          target="_blank"
        >
          <Text
            as="span"
            color={`theme.${themeInterests}`}
            textDecoration={'underline'}
          >
            跨地超市業界科學峰會
          </Text>
        </a>
        等行動支持，綠色和平
        <b>
          在2021年2月成功推動百佳的母公司屈臣氏集團進一步走塑，首設具體走塑目標，重點包括在2030年前：
        </b>
      </Text>

      <Text as="p" {...paragraphProps}>
        <UnorderedList>
          <ListContent
            title={'裸買補充站'}
            value={'增加設有裸買補充站的分店數量最少 10 倍'}
          />
          <ListContent title={'減塑蔬果區'} value={'擴展至最少 50 間分店'} />
          <ListContent
            title={'走塑優惠'}
            value={
              '自備餐盒可享$2折扣，於所有沙律櫃位及最少50%的燒味櫃位全面實施'
            }
          />
          <ListContent title={'環保袋共享站'} value={'擴展至全線分店'} />
          <ListContent
            title={'減售原生塑膠即棄品'}
            value={
              '淘汰最少 50%以原生塑膠為原料的即棄用品，以其他可重用、紙製、回收或生物基原料代替'
            }
          />
          <ListContent
            title={'膠袋減量'}
            value={'用於即棄膠袋及透明平頭袋的原生塑膠量，將分別減少30%及50%'}
          />
        </UnorderedList>
      </Text>

      <Box {...paragraphProps}>
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={6}
        >
          <GridItem colSpan={1} alignItems={'center'} alignSelf={'center'}>
            <Image src={contentB} />
          </GridItem>

          <GridItem colSpan={1} alignItems={'center'} alignSelf={'center'}>
            <Image src={contentC} />
          </GridItem>
        </Grid>
      </Box>

      <Text as="p" {...paragraphProps}>
        除此之外，綠色和平於2020年5月發佈
        <a
          href="https://www.greenpeace.org/hongkong/issues/plastics/update/18629/%E3%80%8A%E9%A6%99%E6%B8%AF%E9%80%A3%E9%8E%96%E8%B6%85%E5%B8%82%E8%B5%B0%E5%A1%91%E8%A9%95%E7%B4%9A%E3%80%8B%E5%A0%B1%E5%91%8A/"
          target="_blank"
        >
          <Text
            as="span"
            color={`theme.${themeInterests}`}
            textDecoration={'underline'}
          >
            《香港連鎖超市走塑評級報告》
          </Text>
        </a>
        ，本港7間連鎖超市的走塑表現均不合格。
        <b>
          當中惠康和百佳同屬超市龍頭，但前者的走塑資訊透明度低，欠缺創新走塑政策，走塑表現較百佳遜色。
        </b>
      </Text>

      <Text as="p" {...paragraphProps}>
        這是一個好開始，但要取得更大成果，我們需要在2021年得到40,000人加入聯署，推動超市加快改變步伐，加入國際的走塑潮流，發展可重用包裝銷售模式及制定完整減塑藍圖，並確保避免使用紙、生物塑膠等其他即棄物料取代塑膠，負起對環境、顧客以至我們下一代的責任。
      </Text>

      <Text as="p" {...paragraphProps}>
        <b>立即聯署要求超市：</b>
        <UnorderedList>
          <ListItem>
            立刻減少無謂包裝，設立無塑購物區域或裸買補充站，增加售賣裸裝產品比例
          </ListItem>
          <ListItem>訂下整體塑膠減量目標，並制訂明確的路線圖與時間表</ListItem>
          <ListItem>
            設定全面淘汰即棄塑膠期限，停用不可回收的塑膠物料，並將可回收的塑膠重用或妥善回收
          </ListItem>
          <ListItem>
            以「可循環再用」為原則，發展並向員工及公眾推廣可大規模實行的走塑方案
          </ListItem>
        </UnorderedList>
      </Text>

      <Text as="p" {...paragraphProps}>
        <b>我們亦要求政府：</b>
        <UnorderedList>
          <ListItem>
            設立生產者責任制，從源頭管制即棄塑膠，包括塑膠包裝、即棄餐具、微膠珠等
          </ListItem>
          <ListItem>
            制訂走塑時間表，逐步禁用即棄及難以回收的塑膠產品，並向市民公布進度
          </ListItem>
          <ListItem>
            投放資源予社區教育及提供回收減廢設施，例如鼓勵超市設置自取站予人拿取環保袋及器皿等
          </ListItem>
        </UnorderedList>
      </Text>

      <Text as="p" {...paragraphProps}>
        <b>＊ 甚麼是無謂包裝？</b>
        <br />
        無謂包裝是指預先以不必要、用完即棄的塑膠，例如用一層或多層塑膠（如保鮮紙、發泡膠盤、膠袋）包裝蔬果、零食等。
        <br />
        <br />
        <b>＊＊ 甚麼是無塑購物區域？</b>
        <br />
        該區域的貨品沒有使用任何即棄塑膠包裝，店舖以按樽制收回及重用器皿，或讓顧客使用可重用器皿，按需要購買合適份量。
        <br />
        <br />
        <b>＊＊＊ 甚麼是原生塑膠？</b>
        <br />
        指直接由石油提煉而成的塑膠，而非以回收塑膠再製成的「再生塑膠」。
        <br />
        <br />
        <b>＊＊＊＊ 甚麼是裸買補充站？</b>
        <br />
        該站讓顧客自備容器，按照實際需要決定購買份量。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        香港超市表現逐間睇 <br />
        <Text as="span" fontSize={'md'}>
          點擊超市以查看詳細結果。
        </Text>
      </Heading>

      <Box as="p" {...paragraphProps}>
        <SimpleGrid spacing={2}>
          <CardItem themeInterests={`theme.${themeInterests}`} />
          <CardItem themeInterests={`theme.${themeInterests}`} />
          <CardItem themeInterests={`theme.${themeInterests}`} />
          <CardItem themeInterests={`theme.${themeInterests}`} />
          <CardItem themeInterests={`theme.${themeInterests}`} />
          <CardItem themeInterests={`theme.${themeInterests}`} />
          <CardItem themeInterests={`theme.${themeInterests}`} />
        </SimpleGrid>
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        評級方法
      </Heading>

      <Text as="p" {...paragraphProps}>
        《香港連鎖超市走塑表現評級報告》參考綠色和平應用於全球多個國家或地區，包括美國、英國、西班牙及台灣等超市走塑表現評分準則，並依據各超市在香港的分店數目以及市場佔有率，調整訂下適用於香港市場的「超市塑膠使用問卷調查」及評分方法。於2019年8月向7大連鎖超市品牌的管理層發出問卷，包括（依字首筆畫或首字母排序）：一田、牛奶公司、屈臣氏集團、華潤、AEON、city'super及Marks
        & Spencer *。
        <br />
        <br />
        問卷針對「即棄塑膠包裝」、「即棄塑膠製品」、「供應鏈合作」、
        「員工訓練、消費者溝通及政策倡議」及「資訊公開及透明度」五大範疇，邀請超市用約兩個月時間回覆。
        <br />
        <br />
        若想瞭解更多，請 點擊此處查看完整報告。 <br />
        <br />* 華潤、AEON、city'super及Marks &
        Spencer沒有回覆本次綠色和平發出的超市塑膠使用量問卷調查，本報告的資料大部分是來自於公開可取得之資訊。
      </Text>

      {/* <Text as="p" {...paragraphProps}>
        <b>
          請即聯署，向正受破壞的美麗大海伸出援手，支持訂立《全球海洋公約》！
        </b>
      </Text> */}
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
