import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import DonateFAQ from '@components/DonateFAQ';

import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps}>
        您願意進一步支持解決塑膠污染問題嗎？立即捐款，幫助海洋、環境逐步回復潔淨健康。
      </Heading>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助我們推動企業淘汰即棄塑膠、招募商戶成為走塑店鋪、督促政府訂立更積極的減塑目標與政策，源頭減少即棄塑膠，減輕環境負擔。
      </Text>

      <Heading {...headingProps}>
        拯救被塑膠殘害的生命，您可以施以援手！
      </Heading>

      <Text as="p" {...paragraphProps}>
        即棄塑膠帶來的一時便利，換來充斥塑膠垃圾的海洋、環境永久的傷害 —
        2019年，香港每日平均有約 2,320 公噸廢塑膠棄置堆填區； 全球每年約有 1270
        萬噸塑膠垃圾落入海洋，多達 52% 海龜誤食過塑膠...
      </Text>

      <Text as="p" {...paragraphProps}>
        有您的捐助支持，綠色和平便能有更多資源與力量執行解決塑膠污染的工作，幫助海洋、環境逐步回復潔淨健康，減輕下一代面對的環境負擔。
      </Text>

      <Text as="p" {...paragraphProps}>
        請即伸出援手，捐助綠色和平走塑工作。
      </Text>

      <Heading
        textAlign="center"
        py="6"
        {...headingProps}
        color={`theme.${themeInterests}`}
      >
        常見問題
      </Heading>

      <DonateFAQ locale="HKChinese" />
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
