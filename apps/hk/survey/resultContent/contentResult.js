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
        立即登記接收到更多走塑資訊，優先報名工作坊、線上分享會活動！
      </Heading>

      <Text as="p" {...paragraphProps}>
        綠色和平將每月為您送上精選資訊：羅列本地、全球塑膠重點消息、研究調查結果、社區故事與項目進程，還有一系列線下線上活動資訊，讓您掌握走塑、環保工作的最新脈動！
      </Text>

      <Box as="p" {...paragraphProps}>
        <Image maxW={{ base: 'auto', sm: '400px' }} src={image01} />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        現在登記，立即為您送上「 綠色生活電子手冊-新春篇」!
      </Heading>

      <Text as="p" {...paragraphProps}>
        臨近歲晚，綠色和平推出「
        綠色生活電子手冊-新春篇」，提供由環保大掃除到炮製素食團年飯的指南，讓大家不但可以方便環保地過節，更能從新一年起，培養簡便的綠色生活習慣，重用資源，減少浪費，成為愛護地球的一員。
      </Text>

      <Box as="p" {...paragraphProps}>
        <Image maxW={{ base: 'auto', sm: '400px' }} src={image02} />
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

      <Heading {...headingProps}>
        2分鐘完成登記，掌握走塑、環保工作的最新脈動！
      </Heading>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
