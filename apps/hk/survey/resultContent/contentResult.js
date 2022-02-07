import React from 'react';
import { connect } from 'react-redux';
import {
  Heading,
  Box,
  Text,
  Image,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import image01 from '../images/plastic_sj.gif';
import image02 from '../images/Artboard 12-100.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        誠邀您加入聯署，合力解決塑膠污染！
      </Heading>

      <Text as="p" {...paragraphProps}>
        您的聯署將幫助綠色和平從個人、社區、企業與政策層面，推動源頭減少即棄塑膠，長遠解決塑膠污染問題，令美麗海洋與環境回復潔淨健康！
      </Text>

      <Box as="p" {...paragraphProps}>
        <Image src={image01} />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        拯救被塑膠殘害的生命，您可以施以援手！
      </Heading>

      <Text as="p" {...paragraphProps}>
        即棄塑膠帶來的一時便利，換來充斥塑膠垃圾的海洋、環境永久的傷害 —
        2019年，香港每日平均有約2,320公噸廢塑膠棄置堆填區；
        全球每年約有1,270萬噸塑膠垃圾落入海洋，多達 52% 海龜誤食過塑膠...
      </Text>

      <Text as="p" {...paragraphProps}>
        自2016年起，綠色和平致力推動源頭減塑，由推動快餐、超市等企業淘汰即棄塑膠、招募社區商戶成為走塑店鋪、督促政府訂立更積極的減塑目標與政策，竭力解決塑膠污染，幫助海洋、環境逐步回復潔淨健康，減輕下一代面對的環境負擔。
      </Text>

      <Box as="p" {...paragraphProps}>
        <Image src={image02} />
      </Box>

      <Box {...paragraphProps} bgColor="#F9F9F9" borderRadius={8} p={4}>
        手冊內容包括：
        <UnorderedList my={4} spacing={3}>
          <ListItem>8道菜素食團年飯食譜</ListItem>
          <ListItem>大掃除收納法則</ListItem>
          <ListItem>環保清潔劑簡易做法</ListItem>
          <ListItem>綠色和平獨家走塑貼士與工作成果</ListItem>
        </UnorderedList>
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        2分鐘完成登記，掌握走塑、環保工作的最新脈動！
      </Heading>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
