import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Flex,
  useDisclosure,
  Collapse,
  Link,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import Supermarket from './Supermarket';
import contentBanner from '../../images/ezgif.com-gif-maker-9.gif';
import contentBanner2 from '../../images/ezgif.com-gif-maker-7.gif';

import * as statusActions from 'store/actions/action-types/status-actions';

import contentA from '../../images/img01.jpg';
import contentB from '../../images/img02.jpg';
import contentC from '../../images/img03.jpg';

import watsonLogo from '../../images/brand/ASW-VAG-rounded.png';
import yataLogo from '../../images/brand/yata-logo.jpg';
import dailyFarmLogo from '../../images/brand/DairyFarm_logo.jpg';
import citySuperLogo from '../../images/brand/citysuper-logo.png';
import aeonLogo from '../../images/brand/aeon-logo.png';
import msLogo from '../../images/brand/marksandspencer-logo.jpg';
import vanguardLogo from '../../images/brand/vanguard-logo.jpg';

import brand01 from '../../images/brand/wellcome-logo.png';
import brand02 from '../../images/brand/parknshop-logo.jpg';
import brand03 from '../../images/brand/marksandspencer-logo.jpg';
import brand04 from '../../images/brand/taste-logo.jpg';
import brand05 from '../../images/brand/fusion-logo.png';
import brand06 from '../../images/brand/international-logo.jpg';
import brand07 from '../../images/brand/yata-logo.jpg';
import brand08 from '../../images/brand/citysuper-logo.png';
import brand09 from '../../images/brand/aeon-logo.png';
import brand10 from '../../images/brand/vanguard-logo.jpg';
import brand11 from '../../images/brand/uselect-logo.png';
import SwiperCarousel from 'components/Swiper';

const brandsContent = [
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
];

const brands = {
  watson: {
    name: '屈臣氏集團',
    remark: '旗下超市包括百佳',
    logo: watsonLogo,
    score: 27.1,
    distributions: {
      policy: 26,
      reduction: 24,
      initiative: 26,
      transparency: 36,
    },
    information:
      '屈臣氏集團旗下的超市品牌包括百佳、Fusion、Great、International、Taste等，市場佔有率最高。在綠色和平的全城查膠結果中，百佳、Fusion、International及Taste的包膠率分別達84%、74%、80%及88%。',
    evaluations: {
      policy:
        '成立負責與供應商制定合適走塑包裝指引的工作小組，以及在自家品牌設立使用對環境友善的包裝指引；可惜集團未有提供具體的走塑時間表和目標，或塑膠整體使用量的資料。',
      reduction:
        '實行減少「即棄塑膠製品」的措施，包括在燒味部提供自攜容器優惠、試行共享環保購物袋，及停售即棄塑膠飲管和含微膠珠的沖洗性產品。',
      initiative:
        '全港首間大型超市於旗下一間分店設立裸買補充站，讓顧客自備器皿購買個人護理及家居清潔用品，而且表示會擴展計劃，但暫未提供進一步的具體細節。此外，集團積極參與多個推動零售業界走塑的工作小組，包括推動膠樽生產者責任制等。',
      transparency:
        '在香港多間超市中，此集團的走塑政策透明度最高，提供較多資料，包括部份即棄塑膠製品的銷售量及主動公開裸賣蔬果試行計劃的成效等。不過即棄塑膠包裝使用量方面，只提供自家品牌的資料。另外，他們表示正考慮在企業社會責任報告中公開塑膠使用總量，綠色和平將繼續監督。',
    },
  },
  yata: {
    name: '一田',
    remark: '',
    logo: yataLogo,
    score: 16.7,
    distributions: {
      policy: 14,
      reduction: 10,
      initiative: 20,
      transparency: 32,
    },
    information:
      '一田屬香港新鴻基地產旗下的百貨公司，設有超市部，全港共有8間分店。在綠色和平早前的全城查膠結果中，包膠率達99%。',
    evaluations: {
      policy:
        '有單一的減塑措施，如在熟食部提供自攜容器優惠，但無提出整體的走塑計劃。',
      reduction: '在店內不擺放平頭保鮮膠袋，並在店外設有紙包飲品回收箱。',
      initiative:
        '提供裸裝貨品銷售，如油、醋、果仁 等，表示將會設立裸買補充站，但是沒有提供相關資料。',
      transparency:
        '唯一有提供全面塑膠包裝使用量的超市，並且表明願意配合每年回應相關問卷，希望一田往後能進一步提升資訊透明，主動向大眾公開用膠量及走塑進度。',
    },
  },
  dailyFarm: {
    name: '牛奶公司集團',
    remark: '旗下超市包括惠康',
    logo: dailyFarmLogo,
    score: 15.5,
    distributions: {
      policy: 11,
      reduction: 15,
      initiative: 13,
      transparency: 23,
    },
    information:
      '牛奶公司旗下的超市品牌包括惠康及Market Place by Jasons，分店總數目是全港之冠，市場佔有率則排名第二。在綠色和平早前的全城查膠結果中，惠康及Market Place by Jasons的包膠率分別達82%及83%。',
    evaluations: {
      policy:
        '已制訂內部員工使用包裝指引，但無提出整體減少即棄塑膠使用量的計劃；著重減輕某些類別產品的即棄塑膠包裝重量，例如蔬果的包裝，但仍處於試行階段。',
      reduction:
        '在店內停止提供即棄塑膠餐具，以及停售含微膠珠的沖洗性產品；正研究如何減少部分蔬果包裝，卻未有提出全面減塑計劃。',
      initiative:
        '參與膠樽生產者責任制的業界討論，但是缺乏實際的創新政策與塑膠足跡紀錄。',
      transparency:
        '只提供自家品牌的飲品包裝使用量，針對其他即棄塑膠製品及塑膠包裝的使用量，牛奶公司僅稱難以取得數據。',
    },
  },
  citySuper: {
    name: "city'super",
    remark:
      '沒有回覆本次綠色和平發出的超市塑膠使用量問卷調查，本報告的資料大部分是來自於公開可取得之資訊。',
    logo: citySuperLogo,
    score: 1.9,
    distributions: {
      policy: 2,
      reduction: 2,
      initiative: 3,
      transparency: 1,
    },
    information:
      '屬City Super Group旗下，在香港共有4間分店。在綠色和平早前的全城查膠結果中，包膠率達82%。',
    evaluations: {
      policy:
        '沒有公開資訊顯示其有全面的走塑政策，只有數項單一計劃，包括熟食部提供自攜容器折扣優惠。',
      reduction: '部分分店設有發泡膠果網回收點，但其他相關的公開資訊非常有限。',
      initiative:
        "city'super於售賣熟食及沙律方面，提供自備容器的折扣優惠，鼓勵顧客走塑。",
      transparency:
        '未能於公開資料中找到任何整體塑膠足跡的資訊，或整體減少即棄塑膠的措施或承諾。',
    },
  },
  aeon: {
    name: 'AEON',
    remark:
      '沒有回覆本次綠色和平發出的超市塑膠使用量問卷調查，本報告的資料大部分是來自於公開可取得之資訊。',
    logo: aeonLogo,
    score: 1,
    distributions: {
      policy: 2,
      reduction: 0,
      initiative: 0,
      transparency: 3,
    },
    information:
      'AEON屬永旺（香港）百貨有限公司旗下的超市，總部設於日本，目前在香港設有11間超市分店。在綠色和平早前的全城查膠結果中，包膠率達89%。',
    evaluations: {
      policy:
        'AEON在店內張貼海報向顧客宣傳走塑，並不定期舉行活動鼓勵顧客自攜環保袋及器皿購物，但沒有整體淘汰即棄塑膠的策略或目標。',
      reduction: '無公開的減塑措施相關資料，在走塑的議題上相對被動。',
      initiative:
        '綠色和平在公開資訊中並未發現其有任何全面或具規模的走塑計劃。',
      transparency:
        'AEON從未發佈整體塑膠足跡的資訊，或整體減少即棄塑膠的措施或承諾。',
    },
  },
  ms: {
    name: 'Marks & Spencer',
    remark:
      '沒有回覆本次綠色和平發出的超市塑膠使用量問卷調查，本報告的資料大部分是來自於公開可取得之資訊。',
    logo: msLogo,
    score: 0,
    distributions: {
      policy: 0,
      reduction: 0,
      initiative: 0,
      transparency: 0,
    },
    information:
      'Marks & Spencer原屬英國Marks & Spencer百貨，現在香港的7間分店由中東公司Al-Futtaim特許經營。在綠色和平早前的全城查膠結果中，包膠率達79%。',
    evaluations: {
      policy:
        '英國Marks & Spencer公佈的走塑計劃及時間表，並未表明適用於香港，而在香港的官方渠道上亦沒有任何相關資訊。',
      reduction:
        '在公開資訊中並未發現任何減塑措施，香港的Marks & Spencer在走塑的議題上相對被動。',
      initiative:
        '綠色和平未找到香港的Marks & Spencer為走塑作出創新的嘗試或計劃，也未見其打算投入資源發展無塑購物選項的規劃。',
      transparency:
        '不論在官方網站或媒體報道等公開資訊中，Marks & Spencer亦無公開其走塑政策、措施，或總體塑膠足跡。',
    },
  },
  vanguard: {
    name: '華潤',
    remark:
      '沒有回覆本次綠色和平發出的超市塑膠使用量問卷調查，本報告的資料大部分是來自於公開可取得之資訊。',
    logo: vanguardLogo,
    score: 0,
    distributions: {
      policy: 0,
      reduction: 0,
      initiative: 0,
      transparency: 0,
    },
    information:
      '華潤萬家是由華潤集團擁有，Uselect則由華潤集團及英國超市聯營，各擁有17及47間分店。 在綠色和平早前的全城查膠結果中，華潤萬家及Uselect的包膠率分別達79%及78%。',
    evaluations: {
      policy:
        '綠色和平在公開資訊中並未找到華潤有公佈任何走塑相關的現行或長期政策。',
      reduction:
        '華潤沒有任何現行或即將推行的走塑行動，綠色和平亦找不到其減塑措施相關資料，在走塑的議題上相對被動。',
      initiative:
        '綠色和平在公開資訊中或華潤店鋪內，均並未發現其有任何走塑倡議，或創新的走塑計劃。',
      transparency:
        '無任何關於塑膠足跡的公開資訊，或整體減少即棄塑膠的做法或承諾。',
    },
  },
};

const ListContent = ({ title, value }) => (
  <ListItem>
    <Flex>
      <Box w={'110px'} pr={2} fontWeight={700} pb={2}>
        {title}
      </Box>
      <Box flex={1}>{value}</Box>
    </Flex>
  </ListItem>
);

const CardItem = ({ ranking, data, themeInterests }) => {
  const { isOpen, onToggle } = useDisclosure();
  const contentEl = useRef(null);
  const cardEl = useRef(null);

  const distributionsContent = {
    policy: '走塑政策',
    reduction: '減塑措施',
    initiative: '倡議及創新',
    transparency: '資訊透明度',
  };
  const evaluationsContent = {
    policy: '走塑政策',
    reduction: '減塑措施',
    initiative: '倡議及創新',
    transparency: '資訊透明度',
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => contentEl.current.scrollIntoView(2000), 100);
    } else {
      // cardEl.current.scrollIntoView(2000);
    }
  }, [isOpen]);
  return (
    <Box
      bgColor="#F2F2F2"
      pos={'relative'}
      cursor={'pointer'}
      onClick={onToggle}
      ref={cardEl}
    >
      <Flex direction={'column'}>
        <Box pos={'absolute'} top={2} right={2}>
          <Text fontWeight={700}>{`# ${ranking}`}</Text>
        </Box>
        <Flex
          direction={'row'}
          align={'center'}
          minH={'160px'}
          px={2}
          bgColor={'#FFF'}
          border={'1px solid #F2F2F2'}
        >
          <Box flex={1}>
            <Image src={data.logo} maxW={'200px'} />
          </Box>
          <Box flex={1} textAlign={'right'}>
            <Text fontSize={'2xl'} fontWeight={700}>
              {data.name}
            </Text>
          </Box>
        </Flex>
        <Box alignSelf={'flex-end'} px={1}>
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Box>
        <Box pos={'relative'} bgColor={'gray.200'}>
          <Flex pos={'relative'} zIndex={2} fontSize={'sm'}>
            <Box flex={1} px={2} py={1}>
              <Text fontWeight={700}>整體得分</Text>
            </Box>
            <Box flex={1} px={2} py={1} textAlign={'right'}>
              <Text fontWeight={700}>{data.score} / 100</Text>
            </Box>
          </Flex>
          <Box
            style={{ transition: `width 2s` }}
            h={'29px'}
            w={`${data.score}%`}
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

      <Box px={2}>
        <Collapse in={isOpen} animateOpacity ref={contentEl}>
          <Box py={2}>
            {Object.entries(data.distributions).map(([key, value]) => (
              <Box key={key} mb={2}>
                <Box>
                  <Text fontSize={'sm'}>
                    <b>{distributionsContent[key]}</b>: {value}
                  </Text>
                </Box>
                <Box pos={'relative'} bgColor={'gray.200'} w={'full'} h={'6px'}>
                  <Box
                    style={{ transition: `width 2s` }}
                    h={'6px'}
                    w={`${value}%`}
                    bgColor={themeInterests}
                    bottom={0}
                    pos={'absolute'}
                  />
                </Box>
              </Box>
            ))}
          </Box>

          <Box mb={2}>
            <Text as={'h3'} fontSize={'xl'} fontWeight={700} mb={2}>
              基本資料
            </Text>
            <Text as={'p'} mb={4} fontSize={'sm'}>
              {data.information}
            </Text>
          </Box>
          <Box mb={2}>
            <Text as={'h3'} fontSize={'xl'} fontWeight={700} mb={2}>
              詳細評分
            </Text>
            {Object.entries(data.evaluations).map(([key, value]) => (
              <Text key={key} as={'p'} mb={4} fontSize={'sm'}>
                <b>{evaluationsContent[key]}</b>: {value}
              </Text>
            ))}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  const customConfig = {
    autoplay: {
      delay: 5500,
    },
  };
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        聯署超市走塑 急需您我行動
      </Heading>

      <Box {...paragraphProps}>
        每年，香港有至少112噸塑膠包裝垃圾流入海洋。這些垃圾入侵食物鏈，令你我日常進食的海鮮、食鹽暗藏微塑膠！來自超市的即棄包裝作為塑膠污染主要源頭之一，超市絕對有企業責任改變其貨品包裝及銷售模式！
      </Box>

      <Box {...paragraphProps}>
        一同發聲，要求大型連鎖超市回應你的訴求：制定完整減塑藍圖、發展可重用包裝銷售模式、淘汰無謂塑膠包裝，並提供走塑購物選項，讓你「有得揀」。
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        你願意加入聯署，推動企業帶頭走塑嗎？
      </Heading>

      <Box {...paragraphProps}>
        <SwiperCarousel
          images={[contentA, contentB, contentC]}
          swiperConfig={customConfig}
        />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        超市走塑 有你有可能
      </Heading>

      <Text as="p" {...paragraphProps}>
        事實上，綠色和平早已向各大超市提供「走塑」方案，亦成功促使個別超市踏出減塑的第一步：有賴逾24,000人聯署、組成「全城超市查膠隊」、發佈
        <Link
          href="https://www.greenpeace.org/hongkong/issues/plastics/update/18629/%E3%80%8A%E9%A6%99%E6%B8%AF%E9%80%A3%E9%8E%96%E8%B6%85%E5%B8%82%E8%B5%B0%E5%A1%91%E8%A9%95%E7%B4%9A%E3%80%8B%E5%A0%B1%E5%91%8A/?_gl=1*ulxia2*_gcl_aw*R0NMLjE2Mzg4NTgzNTMuRUFJYUlRb2JDaE1JelpXa2s0Nl85QUlWZ2FxV0NoM1V1Z2h1RUFBWUFTQUFFZ0lRX2ZEX0J3RQ..&_ga=2.13296247.1747380560.1645524117-536208999.1616127401"
          isExternal
          color={`theme.${themeInterests}`}
        >
          《香港連鎖超市走塑評級報告》
        </Link>
        、舉辦
        <Link
          href="https://www.greenpeace.org/hongkong/issues/plastics/update/11980/%E8%B6%85%E5%B8%82%E8%B5%B0%E5%A1%91%E4%B8%8D%E5%90%83%E5%8A%9B%E5%8F%88%E8%A8%8E%E5%A5%BD-%E6%93%B4%E5%B1%95%E5%AE%A2%E6%BA%90%E5%A2%9E%E7%94%9F%E6%84%8F"
          isExternal
          color={`theme.${themeInterests}`}
        >
          跨地超市業界科學峰會
        </Link>
        等行動支持，綠色和平在2021年2月成功推動百佳的母公司屈臣氏集團進一步走塑，首設具體走塑目標！2021年9月政府委託可持續發展委員會，展開「管制即棄塑膠」公眾參與，有關文件亦已將蔬果包裝列為考慮管制的即棄塑膠項目，但未有具體目標。
      </Text>

      <Box {...paragraphProps}>
        <SwiperCarousel images={[contentA, contentB, contentC]} />
      </Box>

      <Text as="p" {...paragraphProps}>
        這是一個好開始，但要取得更大成果，我們需要你加入聯署，推動超市加快改變步伐，追上國際走塑潮流，制定完整減塑藍圖，負起對環境、顧客以至我們下一代的責任。
      </Text>

      <Box bgColor={'gray.50'} p={6} borderRadius={'md'}>
        <Box {...paragraphProps}>
          <b>立即聯署要求超市:</b>
          <UnorderedList pl={2}>
            <ListItem>
              立刻減少無謂包裝，設立無塑購物區域或裸買補充站，增加售賣裸裝產品比例
            </ListItem>
            <ListItem>
              訂下整體塑膠減量目標，並制訂明確的路線圖與時間表
            </ListItem>
            <ListItem>
              設定全面淘汰即棄塑膠期限，停用不可回收的塑膠物料，並將可回收的塑膠重用或妥善回收
            </ListItem>
            <ListItem>
              以「可循環再用」為原則，推動以可重用包裝銷售貨品，主動回收並重用顧客退還的包裝，建立可持續的重用系統，達至源頭減廢
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        請即聯署，推動超市推行走塑措施！
      </Heading>

      {/* <Supermarket /> */}
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setScrollToTarget: (data) => {
      dispatch({ type: statusActions.SET_SCROLL_TO_TARGET, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
