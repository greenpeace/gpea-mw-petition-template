import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image, List, ListItem } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import Speaker from './Speaker';
import Webinar from './Webinar';

import speaker1 from './images/speaker1_v2.jpg';
import speaker2 from './images/speaker2.png';
import speaker3 from './images/speaker3.jpg';

const WebinarContent = {
  title: '',
  date: '日期：2022年1月20日（星期四）',
  time: '時間：晚上8時至9時15分',
  description: '線上分享會平台：Zoom（網上登記後會獲得相關鏈結和密碼）',
  other: '',
};

const speaker1Content = [
  {
    name: '譚穎琳 Leanne',
    role: '綠色和平項目主任',
    content:
      '全城走塑項目主任，倡議及推動走塑的無限可能，積極關心企業塑膠問題及香港塑膠政策。過去活躍於社區回收活動，看到源頭減廢的重要性，更加堅定了走塑的目標。Leanne亦是「唔該借借」重用餐具社區實驗的發起人，積極推動社區走塑工作。',
    avatar: speaker1,
  },
];

const speaker3Content = [
  {
    name: 'Susan',
    role: '環保裸買店「四圍斟」店長',
    content:
      '全裸買店「四圍斟」的理念是推廣裸買好處，讓大家將裸買變成生活習慣，強調源頭減廢的重要性。四圍斟舉辦過「鄰里裸買計劃」，並推出裸網購、裸外賣，令裸買變得「隨時隨地」與方便。店舖裸買商品多樣，包括應節食品蝦子麵、清潔劑、有機腰果糖、環保尿布和乳墊等。',
    avatar: speaker3,
  },
];

const speaker2Content = [
  {
    name: '柯家文 Kaman',
    role: '綠色和平社區外展主任',
    content:
      '全城走塑社區外展主任，與「走塑小隊」走訪香港各大社區，發掘走塑小店。疫情下，講環保，搞走塑，看似天方夜譚，但是Kaman與「走塑小隊」發現，社區仍有好多街坊及小店堅持走塑，未來希望推動更多個體與社區加入走塑行列。',
    avatar: speaker2,
  },
];

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        報名新春教室 齊過綠色新年
      </Heading>

      <Box {...paragraphProps}>
        <Webinar showTitle={false} content={WebinarContent} />
      </Box>

      <Box {...paragraphProps} bgColor="#F9F9F9" borderRadius={8} p={4}>
        裸買店「四圍斟」店長Susan將會聯同綠色和平項目主任譚穎琳（Leanne）、社區外展主任柯家文（Kaman）在網上教室裡，同你分享豐富新春減廢心得，節目內容包括：
        <List mt={3}>
          <ListItem _before={{ content: `"- "` }}>
            裸買店主分享環保辦年貨心得
          </ListItem>
          <ListItem _before={{ content: `"- "` }}>
            新春換物貼士與資源平台分享
          </ListItem>
          <ListItem _before={{ content: `"- "` }}>
            新春換物貼士與資源平台分享
          </ListItem>
          <ListItem _before={{ content: `"- "` }}>環保清潔劑製作</ListItem>
          <ListItem _before={{ content: `"- "` }}>
            新春大掃除減廢與重用、交換資源心得
          </ListItem>
          <ListItem _before={{ content: `"- "` }}>全城走塑工作與展望</ListItem>
        </List>
      </Box>

      <Heading {...headingProps}>
        新一年，你願意參與綠色教室，學習生活中減廢嗎？
      </Heading>

      <Text as="p" {...paragraphProps}>
        虎年將至！想必大家已經開始忙於清理和佈置家居，迎接新春。去舊迎新之際，我們往往產生大量即棄物品，如果未能善用，或會為環境帶來更大負擔。因此，綠色和平將會舉辦綠色新春教室，邀請到裸買店「四圍斟」店長Susan，同大家分享裸買應節物品心得、製作環保清潔劑，推介二手換物平台，讓大家便捷又環保地搜羅應節物品、大掃除，在新一年做到源頭減廢，培養環保新習慣！
      </Text>

      <Text as="p" {...paragraphProps}>
        首500位成功報名並出席新春教室的朋友，更可以獲贈綠色和平送出以環保啞粉紙及大豆油墨印製的吉祥物環保揮春（款式隨機）乙張。立即報名參與教室，與我們一起渡過綠色新春，學會在生活上源頭減廢！
      </Text>

      <Heading {...headingProps}>
        立即報名！學習新春環保減廢貼士，過節都可以善用每一分資源。
      </Heading>

      <Text as="p" {...paragraphProps}>
        綠色和平正號召全球支持者加入海洋聯署，亦誠意邀請您參與聯署，壯大守護海洋力量。您的力量，是推動2030年前成立至少30%海洋保護區的關鍵。
      </Text>

      <Box>
        <Speaker content={speaker3Content} />
      </Box>

      <Box>
        <Speaker content={speaker1Content} />
      </Box>

      <Box>
        <Speaker content={speaker2Content} />
      </Box>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
