import React from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Heading,
  Text,
  Image,
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
import Webinar from '@apps/hk/earthdaywebinar/components/Webinar';

import * as statusActions from 'store/actions/action-types/status-actions';
import Speaker from '../Speaker';

import heroBannerImage from '../../images/202204-earthday-KV-sns-website-banner-2.jpg';
import speaker1 from '../../images/Asset-2-shion.png';
import speaker2 from '../../images/ken.png';

const WebinarContent = {
  title: '',
  date: '日期：2022年4月23日（星期六）',
  time: '時間：早上11時至中午12時',
  description: '線上分享會平台：Zoom（網上登記後會獲得相關連結和密碼）',
  other: '',
};

const speaker1Content = [
  {
    name: 'MeeliMami',
    role: '「MeeliMami 認真·去玩」親子學習活動專頁創辦人',
    content:
      'MeeliMami在2021年開辦「MeeliMami 認真·去玩」親子學習活動專頁，為親子舉辦許多環保與學習活動，例如廚餘回收工作坊、再生膠工作坊、獨木舟淨灘活動、植樹活動等等，曾接受903電台《兒童適宜》節目訪問。\n近月疫情嚴峻，為了讓孩子們留下「居家抗疫」的美好回憶，MeeliMami每星期亦自發策劃免費參與且題材不同的線上讀書會，得到廣泛家長支持。',
    avatar: speaker1,
  },
];

const speaker2Content = [
  {
    name: 'Ken',
    role: '綠色和平籌款經理',
    content:
      'Ken由2009年起加入綠色和平，從事推動環保工作已有14年，最大的使命是推動更多人加入環保力量，與綠色和平同行，一起為環境創造更好的改變。Ken同樣是新手爸爸，熱衷於與女兒一同參與環保共學活動，提倡「環保教育需從小做起」，為未來環境盡一分力。',
    avatar: speaker2,
  },
];

const Content = ({ theme, speaker1Ref }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        下載《山海大嶼》特刊 認識您不知道的大嶼風光與生態
      </Heading>

      <Box {...paragraphProps}>
        綠色和平誠意推出《山海大嶼》電子書，精選大嶼山在環境、人文、風景、生態等方面的內容與珍貴面貌，部分內容由守護大嶼行動者、得獎攝影團隊用心撰寫、提供，呈現了大嶼山鮮為人知卻又彌足珍貴的資訊。透過閱讀此書，我們希望同熱愛這片土地的你，能進一步了解並守護大嶼山生態，免受「明日大嶼」填海項目破壞。電子書內容包括：
      </Box>

      <Box {...paragraphProps}>
        <UnorderedList>
          <ListItem>3條大嶼精選行山路線</ListItem>
          <ListItem>大嶼珍貴物種圖鑑</ListItem>
          <ListItem>攝影比賽與攝影行作品一覽</ListItem>
          <ListItem>綠色和平大嶼紀錄片製作班底訪談</ListItem>
        </UnorderedList>
      </Box>

      {/*<Box {...paragraphProps}>*/}
      {/*  <Image src={heroBannerImage} />*/}
      {/*</Box>*/}

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        您認識大嶼的人文、生態與風景特色嗎？下載電子書了解更多
      </Heading>

      <Box {...paragraphProps}>
        雖然您我有不少前往大嶼山的經驗，但對於「大嶼山有甚麼物種」、「大嶼環境為甚麼值得守護」等問題，則未必很了解。我們熱愛香港這個家園，就更需要了解它有甚麼環境與生態價值，值得我們驕傲：大嶼山具國家一級保護野生動物白腹海鵰的鳥巢、全球獨有的鮑氏雙足蜥、中華白海豚等珍貴生物，濃厚的人文情懷與旖旎風光亦被好好保留下來。
      </Box>

      <Box {...paragraphProps}>
        綠色和平藉由《山海大嶼》電子書，集合大嶼環境、行山、人文、生態等眾多資訊與照片，務求令大眾更全面了解這片屬於香港的「桃源淨土」，從而加入守護行列，免它遭受基建工程嚴重破壞。《山海大嶼》是香港人不可錯過的大嶼山主題特刊，請即下載了解。
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        請即下載大嶼電子書，一同認識並守護大嶼。
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
