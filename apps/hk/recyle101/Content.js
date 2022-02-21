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
import Speaker from './Speaker';
import Webinar from './Webinar';

import speaker1 from './images/gurugurulogo.jpg';
import speaker2 from './images/MilMilllogo.jpg';
import speaker3 from './images/campaigner-leanne-03.jpg';

const WebinarContent = {
  title: '',
  date: '日期：2022年3月19日（星期六）',
  time: '時間：早上11時至中午12時',
  description: '線上分享會平台：Zoom（網上登記後會獲得相關鏈結和密碼）',
  other: '',
};

const speaker1Content = [
  {
    name: '負責人',
    role: '回收廠Milmill負責人',
    content:
      '喵坊Mil Mil是香港首間紙包飲品盒回收漿廠及教育中心，每日最多可處理約50噸紙包飲品盒，製成再生漿。同時Mil Mil亦會回收各種廢紙，製成多樣再生紙品。',
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

const Content = ({ theme, speaker1Ref, speaker2Ref, speaker3Ref }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        免費報名講座 認識家居減廢與回收要點
      </Heading>

      <Box {...paragraphProps} bgColor="gray.50" borderRadius={8} p={6}>
        <Webinar showTitle={false} content={WebinarContent} />
      </Box>

      <Box {...paragraphProps}>
        家居物品種類繁多，大眾未必清楚知道正確的回收分類與方法，以及​​家居減廢的好辦法。因此，綠色和平特意邀請到紙包飲品盒回收漿廠MilMill負責人、環保網店Guruguru創辦人阿晴參與線上講座，講解回收要點、分類、背後工序與限制，分享業界推廣資源重用、源頭減廢的工作，並為大家提供家居減廢、重用與回收的貼士。同時，綠色和平走塑項目主任譚穎琳將會分享推廣社區減廢經驗，以及回收與重用資源須知。
      </Box>

      <Heading {...headingProps}>
        你願意認識減廢概念，了解回收的分類與限制嗎？
      </Heading>

      <Text as="p" {...paragraphProps}>
        「紙包飲品盒可以在哪裏回收？」「所有塑膠都可以回收嗎？」我們或許對家居減廢和回收有很多疑問，如果因錯誤分類與處理，而浪費了有用資源，則十分可惜。因此，嘉賓會詳細跟我們解釋紙品、塑膠回收的須知，回收品分類與指定收集地點，他們亦會分享回收資源後，如何加以利用，變成再生或重用資源。
      </Text>

      <Text as="p" {...paragraphProps}>
        另外，回收與再造不能處理所有資源，並非保護環境的萬全之策。我們在講座中亦會介紹「源頭減廢」概念，以及生活中實踐源頭減廢的方法，培養「走塑」習慣。
      </Text>

      <Heading {...headingProps}>
        立即報名！學習新春環保減廢貼士，過節都可以善用每一分資源。
      </Heading>

      <Box ref={speaker1Ref}>
        <Speaker content={speaker1Content} />
      </Box>

      <Box ref={speaker2Ref}>
        <Speaker content={speaker2Content} />
      </Box>

      <Box>
        <Speaker content={speaker3Content} />
      </Box>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
