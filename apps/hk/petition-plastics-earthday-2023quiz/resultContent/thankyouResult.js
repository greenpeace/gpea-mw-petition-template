import React from 'react';
import { connect } from 'react-redux';
import { Heading, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps}>
        <span style={{ color: 'black' }}>
          感謝您參與世界地球日心理測驗！除咗我哋可以心理「減廢」，成為更好嘅自己，您知道現實中香港每日平均有幾千噸廢塑膠棄置堆填區，同樣要被清理嗎？
        </span>
      </Heading>

      <Text as="p" {...paragraphProps}>
        即棄塑膠帶來一時嘅便利，換來充斥塑膠垃圾嘅海洋、環境永久嘅傷害 — 2019 年，香港每日平均有約 2,320 公噸廢塑膠棄置堆填區； 全球每年約有 1,270 萬噸塑膠垃圾落入海洋，多達 52% 海龜誤食過塑膠...
      </Text>

      <Heading {...headingProps}>
        <span style={{ color: 'black' }}>
          綠色和平用行動展示走塑解決方案，誠邀您進一步支持，實現各區走塑、重用系統，為地球減廢出一分力！
        </span>
      </Heading>

      <Text as="p" {...paragraphProps}>
        綠色和平全城走塑團隊積極提倡並示範各種減塑銷售模式嘅可行方案。
      </Text>

      <Text as="p" {...paragraphProps}>
        上年 7 月，我哋同本地初創公司合作推出咗上環重用杯借還計劃，利用手機 App 將可重用餐具系統引進香港社區，並喺 11 月中擴展至第二階段，合作咖啡店由首階段嘅 6 間增加至 36 間，示範便利、可行嘅減塑方法。
      </Text>

      <Heading {...headingProps}>
        <span style={{ color: 'black' }}>
          立即捐款，幫助環境逐步回復潔淨健康。
        </span>
      </Heading>

      <Text as="p" {...paragraphProps}>
        您嘅捐款將直接支持綠色和平向政府同企業示範：我哋有能力將借還可重用容器進一步系統化，方便大眾走塑。源頭減少即棄塑膠，減輕環境負擔。
      </Text>

    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
