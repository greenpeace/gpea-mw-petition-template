import React from 'react';
import { connect } from 'react-redux';
import { Heading, Box, Text, Image, SimpleGrid } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import image01 from '../images/20210816-RDPT-PC-21.jpg';
import image02 from '../images/aug_rdpt2.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        為環境多走一步，請捐助走塑項目。
      </Heading>

      <Text as="p" {...paragraphProps}>
        感謝您對走塑議題的關注。
      </Text>

      <Text as="p" {...paragraphProps}>
        從根源解決塑膠污染問題，綠色和平一直以行動、科學研究、倡議等方式，推動政府加強源頭減廢政策，例如提前於2025年管制即棄膠餐具、配合推廣重用容器的配套設施...
      </Text>

      <Text as="p" {...paragraphProps}>
        您願意多走一步，捐助解決塑膠污染問題的工作嗎？
      </Text>

      <Box {...paragraphProps} w={'100%'}>
        <SimpleGrid columns={2} spacing={2}>
          <Image src={image01} alt="Greenpeace 綠色和平" />
          <Image src={image02} alt="Greenpeace 綠色和平" />
        </SimpleGrid>
      </Box>

      <Text as="p" {...paragraphProps}>
        解決塑膠污染問題，您可以施以援手！
      </Text>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助我們推動督促政府訂立更積極的減塑目標與政策、企業淘汰即棄塑膠、招募商戶成為走塑店鋪，源頭減少即棄塑膠，減輕環境負擔。
      </Text>

      <Text as="p" {...paragraphProps}>
        即棄塑膠帶來的一時便利，換來充斥塑膠垃圾的海洋、環境永久的傷害 —{' '}
        <b>
          2019年，香港每日平均有約2,320公噸廢塑膠棄置堆填區；
          全球每年約有1,270萬噸塑膠垃圾落入海洋，多達 52% 海龜誤食過塑膠...
        </b>
        有您的捐助支持，綠色和平便能有更多資源與力量執行解決塑膠污染的工作，幫助海洋、環境逐步回復潔淨健康，減輕下一代面對的環境負擔。
      </Text>

      <Heading {...headingProps}>請即伸出援手，捐助綠色和平走塑工作。</Heading>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
