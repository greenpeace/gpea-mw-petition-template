import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentBookCover from './images/recycle-ebook-simple-launch.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        下載裸買重用回收攻略 盡覽裸買地圖與回收須知
      </Heading>

      <Text as="p" {...paragraphProps}>
        近年來走塑文化在香港邁向普及，大家都漸漸培養出減廢環保意識。綠色和平希望進一步推廣裸買文化，消費時多選擇無包裝貨品，減少浪費；教育大眾好好處理現有資源，探索各地現行的重用措施及試行在香港響應重用風潮。至於回收時，大家亦需了解資源分類，廢紙、塑膠、紙包飲品盒等的回收須知。綠色生活指南內容包括：
      </Text>

      <Box {...paragraphProps} bgColor="#F9F9F9" borderRadius={8} p={4}>
        <UnorderedList>
          <ListItem>2022全港裸買地圖</ListItem>
          <ListItem>重用系統種類與再造指南</ListItem>
          <ListItem>香港本地重用系統</ListItem>
          <ListItem>廢紙、塑膠、紙包飲品盒回收攻略</ListItem>
        </UnorderedList>
      </Box>

      <Box {...paragraphProps}>
        <Image src={contentBookCover} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>

      <Heading {...headingProps}>
        瀏覽裸買地圖、了解回收分類及重用系統，立即下載手冊
      </Heading>

      <Text as="p" {...paragraphProps}>
        「我家附近有裸買店嗎？」
      </Text>

      <Text as="p" {...paragraphProps}>
        「甚麼塑膠不能被放進回收箱？」
      </Text>

      <Text as="p" {...paragraphProps}>
        「甚麼是重用系統？香港可以做到嗎？」
      </Text>

      <Text as="p" {...paragraphProps}>
        不少市民有顆「環保心」，盡量在生活裡做好減廢，卻因缺乏相關訊息、知識而不得其法門，因此未能妥善處理有用資源，十分可惜。因此，綠色和平推出《綠色生活指南》系列第三彈——「裸買・重用系統・回收全攻略」，內含精美裸買地圖、本地及環球重用系統介紹、塑膠與紙包飲品盒回收須知等豐富內容，幫助大家更容易做好日常減廢與資源處理，時常保持家居整潔之餘，更能為環境多走一步，減少廢物產生，緩解塑膠污染。
      </Text>

      <Heading {...headingProps}>
        請即下載指南，培養減廢生活習慣，愛護環境！
      </Heading>

    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
