import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentImageA from './images/202207-plastic-dpt-policy-thankyou-image01.jpg';
import contentImageB from './images/202207-plastic-dpt-policy-thankyou-image02.jpg';
import contentImageC from './images/DSC02887.jpg';
import contentImageD from './images/KV6_final-01.jpg';

const Thankyou = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      {/* <Heading {...headingProps} color={`theme.${themeInterests}`}>
        您願意進一步支持解決塑膠污染問題嗎？
      </Heading>

      <Box {...paragraphProps}>
        <Image src={contentImageA} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        用行動展示走塑解決方案，實現各區走塑、重用系統！
      </Heading>

      <Text as="p" {...paragraphProps}>
        綠色和平全城走塑團隊積極提倡並示範各種減塑銷售模式的可行方案。在 6
        月初舉行「惜簡生活節」，吸引超過 2,000 人報名參與環保工作坊，更與裸買店
        loop store
        環圓生活合辦裸買士多，顧客共同心願是希望「越嚟越多」甚至「每區都有」裸買店，並以行動實現
        "We are part of the solution" 理念──每個人都可以為減塑作出貢獻。
      </Text>

      <Text as="p" {...paragraphProps}>
        連同去年底「唔該借借」社區實驗，與荃灣路德圍 4
        間小店合作借出可重用餐具，兩日共節省 1,470
        件即棄塑膠餐具。希望向政府及企業示範：我們有能力將借還可重用容器進一步系統化，方便大眾走塑。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentImageB} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        請即伸出援手，捐助綠色和平走塑工作。
      </Heading>

      */}

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        感謝您加入實現減塑政策！誠邀您進一步實現各區走塑、重用系統！
      </Heading>

      <Text as="p" {...paragraphProps}>
        綠色和平全城走塑團隊積極提倡並示範各種減塑銷售模式的可行方案。
      </Text>

      <Text as="p" {...paragraphProps}>
        在 7 月推出上環重用杯借還計劃，與本地初創公司合作，利用手機 App
        將可重用餐具系統引進香港社區，首階段於上環 6
        間咖啡店提供重用杯借還服務，示範便利、可行的減塑方法。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentImageC} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        用行動展示走塑解決方案，實現各區走塑、重用系統！
      </Heading>

      <Text as="p" {...paragraphProps}>
        在 6 月初舉行「惜簡生活節」，與裸買店 loop store
        環圓生活合辦裸買士多，顧客共同心願是希望「越嚟越多」甚至「每區都有」裸買店，並以行動實現
        "We are part of the solution" 理念──每個人都可以為減塑作出貢獻。
      </Text>

      <Text as="p" {...paragraphProps}>
        連同去年底「唔該借借」社區實驗，與荃灣路德圍 4
        間小店合作借出可重用餐具，兩日共節省 1,470
        件即棄塑膠餐具。希望向政府及企業示範：我們有能力將借還可重用容器進一步系統化，方便大眾走塑。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentImageD} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        立即捐款，幫助環境逐步回復潔淨健康。
      </Heading>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接支持綠色和平向政府及企業示範：我們有能力將借還可重用容器進一步系統化，方便大眾走塑。源頭減少即棄塑膠，減輕環境負擔。
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Thankyou);
