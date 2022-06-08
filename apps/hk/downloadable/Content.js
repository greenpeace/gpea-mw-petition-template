import React from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Heading,
  Text,
  Image,
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import cnyBookletSQ from './images/202206-cny-ebook-new-preview.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        下載綠色生活手冊 盡覽素食食譜與掃除收納貼士
      </Heading>

      <Text as="p" {...paragraphProps}>
        綠色和平推出綠色生活手冊，提供由環保掃除到炮製素食家常菜的指南，讓大家不但可以方便環保地生活，更能培養簡便的綠色生活習慣，重用資源，減少浪費，成為愛護地球的一員。
      </Text>

      <Box {...paragraphProps} bgColor="#F9F9F9" borderRadius={8} p={4}>
        手冊內容包括：
        <UnorderedList my={4} spacing={3}>
          <ListItem>8道菜素食家常菜食譜</ListItem>
          <ListItem>家居掃除收納法則</ListItem>
          <ListItem>環保清潔劑簡易做法</ListItem>
          <ListItem>綠色和平獨家走塑貼士與工作成果</ListItem>
        </UnorderedList>
      </Box>

      <Box as="p" {...paragraphProps}>
        <Image src={cnyBookletSQ} />
      </Box>

      <Heading {...headingProps}>環保生活精華貼士齊全，立即下載手冊</Heading>

      <Text as="p" {...paragraphProps}>
        每週忙於清理家居和構思晚飯菜色的你，有沒有想過可以過得更「慳錢、慳時間、慳資源」呢？生活上，我們往往會產生大量即棄塑膠，多餘資源難以處理，棄置卻又會破壞環境。因此，綠色和平提供一系列綠色指南，讓大家輕易做到「減廢、簡約、環保」，以全新的綠色習慣開始，逐步在生活中源頭減廢，完成地球「身體健康」的心願！
      </Text>

      <Heading {...headingProps}>
        請即下載手冊，培養新的綠色習慣！
      </Heading>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
