import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
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
        免費報名共讀會 從繪本了解環境危機
      </Heading>

      <Box {...paragraphProps} bgColor="gray.50" borderRadius={8} p={6}>
        <Webinar showTitle={false} content={WebinarContent} />
      </Box>

      <Box {...paragraphProps}>
        適逢世界地球日，綠色和平推出了最新版環保主題原創繪本《無家可歸的我》！《無家可歸的我》自去年面世後得到大眾熱烈迴響，共100位會員捐款支持繪本計劃，超過400名觀眾參與2021年的讀書會。
      </Box>

      <Box {...paragraphProps}>
        繪本改版後，不但增添了更多環保小知識及互動遊戲工作紙，故事人類主角豆豆將會繼續與我們走遍極地、海洋與森林，遇上北極熊、樹熊和小丑魚。究竟豆豆與動物們會因甚麼環境問題而無家可歸？綠色和平邀請到「MeeliMami
        認真·去玩」親子學習活動專頁創辦人MeeliMami，以故事共讀形式，帶領我們走入不同動物的生境，生動地了解極端天氣、海洋暖化、海冰消融等環境問題。
      </Box>

      <Box {...paragraphProps}>
        <Image src={heroBannerImage} />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        環境問題如何影響動物生存？趁地球日齊來了解！
      </Heading>

      <Text as="p" {...paragraphProps}>
        繪本採用綠色和平守護的環境議題：極地、海洋、森林，以代表性的動物作為主角，涵括地球不同地方的環境問題，呼籲小朋友與大朋友一起關注全球氣候。事實上，氣候危機影響著人類、動物的家園，例如海冰融化使北極熊難以覓食；森林大火令樹熊等動物流離失所；極端天氣更會危及我們的社區與建築物⋯⋯因此，氣候危機需要每個人積極緩解，而透過繪本教育下一代，亦是有效的行動之一。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        立即報名！聽故事識環保，您也可以守護地球。
      </Heading>

      <Box ref={speaker1Ref}>
        <Speaker content={speaker1Content} />
        <Speaker content={speaker2Content} />
      </Box>
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
