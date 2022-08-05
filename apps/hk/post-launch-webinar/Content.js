import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
// custom components
import Webinar from '@apps/hk/post-launch-webinar/components/Webinar';
import Speaker from './components/Speaker';

import contentImageA from './images/202208-general-post-launch-webinar-content-image01.jpg';
import contentImageB from './images/202208-general-post-launch-webinar-content-image02.jpg';
import contentImageC from './images/202208-general-post-launch-webinar-content-image03.png';
import contentImageD from './images/202208-general-post-launch-webinar-content-image04.png';
import speaker1 from './images/202208-general-post-launch-webinar-content-speaker01.png';
import speaker2 from './images/202208-general-post-launch-webinar-content-speaker02.png';
import speaker3 from './images/202208-general-post-launch-webinar-content-speaker03.png';
import speaker4 from './images/202208-general-post-launch-webinar-content-speaker04.png';

const WebinarContent = {
  title: '「眼睛去旅行：港台日韓四地環保成果巡禮」線上分享會',
  date: '日期：2022 年 8 月 29 日（星期一）',
  time: '時間：晚上 8 時至 9 時',
  description: '線上分享會平台：Zoom（網上登記後會獲得相關鏈結和密碼）',
  other: [
    '語言：廣東話（部分講者以英語或日語分享，設即時傳譯服務）',
    '參與講座建議年齡：15歲或以上'
  ],
};

const speaker1Content = [
  {
    name: '譚穎琳（Leanne）',
    role: '香港辦公室代表：塑膠項目主任',
    content:
      '在香港，綠色和平積極推行「全城走塑」項目，除了把握政府政策窗口發聲，Leanne 曾帶領團隊舉行多個不同形式的大型社區活動，促進社區走塑風潮；過往成功招募超過 1,100 間走塑店鋪，又推出重用餐具社區實驗活動，最近更夥拍初創公司開創智能借杯手機 App！',
    avatar: speaker1,
  },
];

const speaker2Content = [
  {
    name: '楊令衠（Chun）',
    role: '台北辦公室代表：塑膠項目負責人、高級研究人員',
    content:
      '在香港土生土長的 Chun，早年在香港辦公室統籌多項研究工作，近年轉移至台北辦公室，帶領當地塑膠項目迎來亮麗成果：政府宣佈逐步淘汰即棄塑膠杯、全家（FamilyMart）成為「東亞第一」首間大規模提供重用杯的連鎖便利店、台灣 7-11 和 Starbucks 進一步落實減塑。',
    avatar: speaker2,
  },
];

const speaker3Content = [
  {
    name: '李炫淑（Jude）',
    role: '首爾辦公室代表：副總幹事（項目）',
    content:
      '身為綠色和平東亞分部副總幹事的 Jude，今次以首爾辦公室代表身份，分享綠色和平在韓國如何持續企業遊說工作，成功推動港人到韓國必到之地「樂天超市」（Lotte Mart）承諾2025年前即棄塑膠量減半，隸屬同集團的「樂天七星」、「樂天製菓」也有跟進行動。',
    avatar: speaker3
  },
];

const speaker4Content = [
  {
    name: '儀同千弥（Chihiro）',
    role: '東京辦公室代表：項目外展主任',
    content:
      '在日本，綠色和平以 Starbucks 為目標發起聯署，獲當地意見領袖及廣大群眾支持，團隊持續與日本星巴克保持溝通。於 2021 年中，日本 Starbucks 終宣佈在部分分店試行重用杯機制。背後，Chihiro 跟團隊積極動員群眾，並推出網上互動地圖普及環保生活方式。',
    avatar: speaker4,
  },
];

const Content = ({ theme, speakerRef }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        免費線上分享會 帶您穿梭港台日韓了解環保實況
      </Heading>

      <Box {...paragraphProps} bgColor="gray.50" borderRadius={8} p={6}>
        <Webinar showTitle={true} content={WebinarContent} />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        港台日韓四地實時連線：帶您親眼去看亞洲各地環保實況
      </Heading>

      <Box {...paragraphProps} borderRadius={8} p={4}>
        以下熱門環保焦點，您又知多少？
        <UnorderedList>
          <ListItem>香港終於有智能借杯手機應用程式？</ListItem>
          <ListItem>某地的連鎖便利店推出免費借杯計劃，惠及超過 2,300 萬人口？</ListItem>
          <ListItem>在「香港人心靈故鄉」，星巴克（Starbucks）推出免費借杯服務？</ListItem>
          <ListItem>香港人到韓國旅遊必到之地，該企業推出走塑時間表？</ListItem>
          <ListItem>綠色和平以公正獨立的身份，發佈多份重磅研究報告，推動了政府改善環保政策？</ListItem>
        </UnorderedList>
      </Box>

      <Text as="p" {...paragraphProps}>
        年尾香港有望通關，當很多香港人熱切期待出外旅行之際，是次活動特別邀請綠色和平香港、台北、首爾、東京辦公室的代表，實時與我們連線，剖析各地環保工作的甜酸苦辣，更會分享他們一手拍攝的照片、影片，讓您了解，您我即使身在香港，也能參與具國際影響力的環保行動！
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentImageA} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>
      <Box {...paragraphProps}>
        <Image src={contentImageB} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        個人做不到的，綠色和平集結力量去推動！
      </Heading>

      <Text as="p" {...paragraphProps}>
        綠色和平的環境倡議工作，致力連繫全球力量，推行在地環保行動，讓您我即使身在香港，也能關注、了解、貢獻全球環保進程。
      </Text>

      <Text as="p" {...paragraphProps}>
        針對塑膠污染問題越演越烈，在香港，綠色和平在 2016 年推出塑膠項目，至今 6 年多以來，成功推動不同行業龍頭宣佈走塑承諾及試行減塑計劃，包括：屈臣氏集團、759 阿信屋、麥當勞、大家樂、大快活、百佳、惠康等。我們更
        <Text as="span" fontWeight="bold" {...paragraphProps}>
          成功促使香港政府 2020 年​​加強管制廢塑膠進出口；2021 年底終就全面管制即棄塑膠餐具進行諮詢。
        </Text>
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentImageC} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>
      <Box {...paragraphProps}>
        <Image src={contentImageD} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        立即報名：實時連線港台日韓四地，<br />眼睛去旅行之餘，了解最新環保熱話！
      </Heading>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        活動嘉賓
      </Heading>

      <Box ref={speakerRef}>
        <Speaker content={speaker1Content} />
        <Speaker content={speaker2Content} />
        <Speaker content={speaker3Content} />
        <Speaker content={speaker4Content} />
      </Box>

    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
