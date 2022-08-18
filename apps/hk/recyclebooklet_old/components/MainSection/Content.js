import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text, List, ListItem } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import * as statusActions from 'store/actions/action-types/status-actions';

import image01 from '../../images/recycle-ebook-simple-launch.jpg';

const Content = ({ theme, setScrollToTarget }) => {
  const themeInterests = theme.interests;

  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        下載裸買回收攻略 盡覽裸買地圖與回收須知
      </Heading>

      <Box {...paragraphProps}>
        近年來走塑文化在香港邁向普及，大家都漸漸培養出減廢環保意識。綠色和平希望進一步推廣裸買文化，消費時多選擇無包裝貨品，減少浪費；教育大眾好好處理現有資源，探索重用的可能性。至於回收時，大家亦需了解資源分類，廢紙、塑膠、紙包飲品盒等的回收須知，做好惜物減廢，成為愛護地球的一員。綠色生活指南內容包括：
      </Box>

      <Box {...paragraphProps} bgColor="gray.50" borderRadius={8} p={6}>
        <List>
          <ListItem>- 2022全港裸買地圖</ListItem>
          <ListItem>- 重用資源與再造指南</ListItem>
          <ListItem>- 廢紙、塑膠、紙包飲品盒回收攻略</ListItem>
        </List>
      </Box>

      <Box {...paragraphProps}>
        <Image src={image01} alt="瀏覽裸買地圖、了解回收分類，立即下載手冊" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        瀏覽裸買地圖、了解回收分類，立即下載手冊
      </Heading>

      <Text as="p" {...paragraphProps}>
        「我家附近有裸買店嗎？」
      </Text>

      <Text as="p" {...paragraphProps}>
        「甚麼塑膠不能被放進回收箱？」
      </Text>

      <Text as="p" {...paragraphProps}>
        不少市民有顆「環保心」，盡量在生活裡做好減廢，卻因缺乏相關訊息、知識而不得其法門，因此未能妥善處理有用資源，十分可惜。因此，綠色和平推出《綠色生活指南》系列第二彈
        ——「裸買・重用資源・回收全攻略」，內含精美裸買地圖、重用餐具借還系統介紹、塑膠與紙包飲品盒回收須知等豐富內容，幫助大家更容易做好日常減廢與資源處理，時常保持家居整潔之餘，更能為環境多走一步，減少廢物產生，緩解塑膠污染。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        請即下載指南，培養減廢生活習慣，愛護環境！
      </Heading>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setScrollToTarget: (data) => {
      dispatch({ type: statusActions.SET_SCROLL_TO_TARGET, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
