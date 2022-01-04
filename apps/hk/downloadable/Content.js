import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image, List, ListItem } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import cnyBookletCover from './images/CNY_booklet_cover.jpeg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        下載綠色生活手冊 盡覽素食食譜與大掃除貼士
      </Heading>

      <Text as="p" {...paragraphProps}>
        臨近歲晚，綠色和平推出綠色生活手冊新春篇，提供由環保大掃除到炮製素食團年飯的指南，讓大家不但可以方便環保地過節，更能從新一年起，培養簡便的綠色生活習慣，重用資源，減少浪費，成為愛護地球的一員。
      </Text>

      <Box {...paragraphProps} bgColor="#F9F9F9" borderRadius={8} p={4}>
        手冊內容包括：
        <List mt={3}>
          <ListItem _before={{ content: `"- "` }}>8道菜素食團年飯食譜</ListItem>
          <ListItem _before={{ content: `"- "` }}>大掃除收納法則</ListItem>
          <ListItem _before={{ content: `"- "` }}>環保清潔劑簡易做法</ListItem>
          <ListItem _before={{ content: `"- "` }}>
            綠色和平獨家走塑貼士與工作成果
          </ListItem>
        </List>
      </Box>

      <Heading {...headingProps}>環保過節精華貼士齊全，立即下載手冊</Heading>

      <Text as="p" {...paragraphProps}>
        忙於清理家居和構思團年飯的你，有沒有想過新年也可以過得「慳錢、慳時間、慳資源」呢？在籌備過節當中，往往會產生大量即棄塑膠，多餘資源難以處理，棄置卻又會破壞環境。因此，綠色和平提供一系列綠色指南，讓大家在年假前後輕易做到「減廢、簡約、環保」，新一年以全新的綠色習慣開始，逐步在生活中源頭減廢，完成地球「身體健康」的心願！
      </Text>

      <Box as="p" {...paragraphProps}>
        <Image src={cnyBookletCover} />
      </Box>

      <Text as="p" {...paragraphProps}>
        下載後，你更可以在確認頁面中報名綠色和平在1月20日舉辦的《綠色新春教室：社區走塑達人同你環保大掃除》網上分享會，了解更多環保辦年貨與走塑心得。
      </Text>

      <Heading {...headingProps}>
        請即下載手冊，新一年培養新的綠色習慣！
      </Heading>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
