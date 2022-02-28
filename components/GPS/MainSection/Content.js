import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import Speaker from '@components/GPS/Speaker';
import speaker1 from '@components/GPS/images/MilMilllogo.jpg';
import speaker2 from '@components/GPS/images/gurugurulogo.jpg';
import speaker3 from '@components/GPS/images/campaigner-leanne-03.jpg';
import * as statusActions from 'store/actions/action-types/status-actions';

const speaker1Content = [
  {
    name: 'Maria',
    role: '回收廠Mil Mill/SSID可持續發展經理',
    content:
      '喵坊Mil Mill是香港首間紙包飲品盒回收漿廠及教育中心，每日最多可處理約50噸紙包飲品盒，製成再生漿。同時Mil Mill亦會回收各種廢紙，製成多樣再生紙品。',
    avatar: speaker1,
  },
];

const speaker2Content = [
  {
    name: '阿晴',
    role: '環保網店Guruguru創辦人',
    content:
      '瓹窿瓹罅Guruguru是一間綠色網上商店，推廣環保網購，致力減低過度包裝情況，鼓勵消費者重用資源與培養源頭減廢習慣。Guruguru環保配送服務，免費收回紙類、塑膠與玻璃包裝，並將之重用或回收；他們亦曾於疫情期間送出環保外賣器皿，鼓勵客人源頭減廢，少用即棄塑膠餐具。',
    avatar: speaker2,
  },
];

const speaker3Content = [
  {
    name: '譚穎琳 Leanne',
    role: '綠色和平項目主任',
    content:
      '全城走塑項目主任，倡議及推動走塑的無限可能，積極關心企業塑膠問題及香港塑膠政策。過去活躍於社區回收活動，看到源頭減廢的重要性，更加堅定了走塑的目標。',
    avatar: speaker3,
  },
];

const Content = ({ theme, setScrollToTarget }) => {
  const speaker1Ref = useRef(null);
  const speaker2Ref = useRef(null);
  const speaker3Ref = useRef(null);
  const themeInterests = theme.interests;

  useEffect(() => {
    setScrollToTarget([speaker1Ref, speaker2Ref, speaker3Ref]);
  }, [speaker1Ref]);

  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        下載裸買回收攻略 盡覽裸買地圖與回收須知
      </Heading>

      {/* <Box {...paragraphProps} bgColor="gray.50" borderRadius={8} p={6}>
        <Webinar showTitle={false} content={WebinarContent} />
      </Box> */}

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

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        瀏覽裸買地圖、了解回收分類，立即下載手冊
      </Heading>

      <Text as="p" {...paragraphProps}>
        「我家附近有裸買店嗎？」「甚麼塑膠不能被放進回收箱？」不少市民有顆「環保心」，盡量在生活裡做好減廢，卻因缺乏相關訊息、知識而不得其法門，因此未能妥善處理有用資源，十分可惜。因此，綠色和平推出《綠色生活指南》系列第二彈——「裸買・重用資源・回收全攻略」，內含精美裸買地圖、重用餐具借還系統介紹、塑膠與紙包飲品盒回收須知等豐富內容，幫助大家更容易做好日常減廢與資源處理，時常保持家居整潔之餘，更能為環境多走一步，減少廢物產生，緩解塑膠污染。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        請即下載指南，培養減廢生活習慣，愛護環境！
      </Heading>

      <Text as="p" {...paragraphProps}>
        「我家附近有裸買店嗎？」「甚麼塑膠不能被放進回收箱？」不少市民有顆「環保心」，盡量在生活裡做好減廢，卻因缺乏相關訊息、知識而不得其法門，因此未能妥善處理有用資源，十分可惜。因此，綠色和平推出《綠色生活指南》系列第二彈——「裸買・重用資源・回收全攻略」，內含精美裸買地圖、重用餐具借還系統介紹、塑膠與紙包飲品盒回收須知等豐富內容，幫助大家更容易做好日常減廢與資源處理，時常保持家居整潔之餘，更能為環境多走一步，減少廢物產生，緩解塑膠污染。
      </Text>

      {/* <Box ref={speaker1Ref}>
        <Speaker content={speaker1Content} />
      </Box>

      <Box ref={speaker2Ref}>
        <Speaker content={speaker2Content} />
      </Box>

      <Box ref={speaker3Ref}>
        <Speaker content={speaker3Content} />
      </Box> */}
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
