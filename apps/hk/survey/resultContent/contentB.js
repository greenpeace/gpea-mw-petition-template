import React from 'react';
import { connect } from 'react-redux';
import { Heading, Box, Text, Image, SimpleGrid } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import image01 from '../images/MAX_20211211_Greenpeace_荃灣路德圍_56.jpg';
import image02 from '../images/MAX_20211211_Greenpeace_荃灣路德圍_222.jpg';

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
        從根源解決塑膠污染問題，綠色和平一直以行動連結全港各社區店鋪，為市民提供走塑服務或優惠...
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
        您的捐款將直接資助我們招募更多商戶成為走塑店鋪、督促政府訂立更積極的減塑目標與政策、企業淘汰即棄塑膠、源頭減少即棄塑膠，減輕環境負擔。
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
