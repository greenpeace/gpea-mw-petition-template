import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentImageA from './images/202207-plastic-dpt-policy-thankyou-image01.jpg';
import contentImageB from './images/202207-plastic-dpt-policy-thankyou-image02.jpg';

const Thankyou = ({ theme, signup }) => {
  return (
    <>
      <Heading {...headingProps}>
        您願意進一步支持解決塑膠污染問題嗎？
      </Heading>

      <Text as="p" {...paragraphProps}>
        立即捐款，幫助環境逐步回復潔淨健康。
      </Text>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助我們推動企業淘汰即棄塑膠、展示減塑銷售模式的可行方案、督促政府訂立更積極的減塑目標與政策，源頭減少即棄塑膠，減輕環境負擔。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentImageA} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>

      <Heading {...headingProps}>
        用行動展示走塑解決方案，實現各區走塑、重用系統！
      </Heading>

      <Text as="p" {...paragraphProps}>
        綠色和平全城走塑團隊積極提倡並示範各種減塑銷售模式的可行方案。在 6 月初舉行「惜簡生活節」，吸引超過 2,000 人報名參與環保工作坊，更與裸買店 loop store 環圓生活合辦裸買士多，顧客共同心願是希望「越嚟越多」甚至「每區都有」裸買店，並以行動實現 ”We are part of the solution” 理念──每個人都可以為減塑作出貢獻。
      </Text>

      <Text as="p" {...paragraphProps}>
        連同去年底「唔該借借」社區實驗，與荃灣路德圍 4 間小店合作借出可重用餐具，兩日共節省 1,470 件即棄塑膠餐具。希望向政府及企業示範：我們有能力將借還可重用容器進一步系統化，方便大眾走塑。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentImageB} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>

      <Heading {...headingProps}>
        請即伸出援手，捐助綠色和平走塑工作。
      </Heading>

    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
