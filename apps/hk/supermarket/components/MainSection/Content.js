import React from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import * as statusActions from 'store/actions/action-types/status-actions';

import s1 from '../../images/slide1/20200514-DSCF1434.jpg';
import s2 from '../../images/slide1/A7309550.jpg';
import s3 from '../../images/slide1/GP0STTWHZ_High_res.jpg';
import s4 from '../../images/slide1/GP0STTWIH_High_res.jpg';
import s5 from '../../images/slide1/GP0STTWIU_High_res.jpg';
import c1 from '../../images/slide2/GP0STTWIM_High_res.jpg';
import c2 from '../../images/slide2/GP0STTWJG_High_res.jpg';
import c3 from '../../images/slide2/GP0STTWJM_High_res.jpg';
import c4 from '../../images/slide2/GP0STTWJN_High_res.jpg';
import c5 from '../../images/slide2/R0032663.jpg';

import Supermarket from './Supermarket';
import SwiperCarousel from 'components/Swiper';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  const customConfig = {
    autoHeight: true,
    autoplay: {
      delay: 6000,
    },
    preloadImages: false,
    lazy: true,
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
          images={[s1, s2, s3, s4, s5]}
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
        <SwiperCarousel
          images={[c1, c2, c3, c4, c5]}
          swiperConfig={customConfig}
        />
      </Box>

      <Text as="p" {...paragraphProps}>
        這是一個好開始，但要取得更大成果，我們需要你加入聯署，推動超市加快改變步伐，追上國際走塑潮流，制定完整減塑藍圖，負起對環境、顧客以至我們下一代的責任。
      </Text>

      <Box bgColor={'gray.50'} p={6} mb="6" borderRadius={'md'}>
        <Box {...paragraphProps}>
          <b>立即聯署要求超市:</b>
          <UnorderedList pl={2}>
            <ListItem>
              減少無謂包裝，設立無塑購物區或裸買補充站，增加售賣裸裝產品比例
            </ListItem>
            <ListItem>
              訂立整體塑膠減量目標，並制訂明確的路線圖與時間表
            </ListItem>
            <ListItem>
              設定全面淘汰即棄塑膠期限，立即停用不可回收的塑膠物料，並主動重用或妥善回收可回收塑膠
            </ListItem>
            <ListItem>
              推動「循環再用」減廢模式，改以可重用包裝銷售貨品，主動回收並重用顧客退還的包裝，建立可持續的重用系統
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>

      {/* <Heading {...headingProps} color={`theme.${themeInterests}`}>
        請即聯署，推動超市推行走塑措施！
      </Heading> */}

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
