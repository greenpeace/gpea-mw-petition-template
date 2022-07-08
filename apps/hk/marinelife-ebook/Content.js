import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentBookCover from './images/2022-ocean-ebook-main-launch.jpg';
import contentImage from './images/202206-marinelife-booklet-content-image01.gif';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        下載《瀕危的海洋生物手冊》電子圖鑑，一起揭開海洋奧秘！
      </Heading>

      <Text as="p" {...paragraphProps}>
        浩瀚海洋裡，孕育人類已知 20 多萬種海洋生物，對於看似熟悉的鯨魚、鯊魚、海豚、海龜與企鵝，您又真正了解牠們的種類、習性和生存危機嗎？綠色和平推出《瀕危的海洋生物手冊》電子圖鑑 ，特別挑選 5 大海洋生物中 10 種面對各類生存危機的物種，以手繪插畫配以精要資訊，追加由綠色和平船隊實地拍攝的獨家照片：企鵝在海面飛躍、海龜被塑膠緊纏、鯊魚遭捕撈等，帶您進一步認識奇妙的海洋生物，見證牠們的美麗與危機，一起揭開海洋奧秘！
      </Text>

      <Box {...paragraphProps} bgColor="#F9F9F9" borderRadius={8} p={4}>
        本電子圖鑑豐富內容包括：
        <UnorderedList>
          <ListItem>藍鯨、玳瑁、非洲企鵝等 10 種瀕危海洋生物習性與危機</ListItem>
          <ListItem>手繪插畫輔助介紹與綠色和平獨家實地海洋見證攝影作品</ListItem>
          <ListItem>綠色和平守護海洋行動概述</ListItem>
          <ListItem>《全球海洋公約》與守護海洋倡議</ListItem>
        </UnorderedList>
      </Box>

      <Box {...paragraphProps}>
        <Image src={contentBookCover} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>

      <Heading {...headingProps}>
        牠們原來已經瀕臨滅絕？下載電子圖鑑了解原因與保護方法
      </Heading>

      <Text as="p" {...paragraphProps}>
        史上最大的藍鯨原來是瀕危動物？加灣鼠海豚估計全球剩下約 10 條？——過度捕撈、海洋污染、船隻撞擊、棲息地減少等人為破壞行為，正將許多海洋生物推向水深火熱。本圖鑑除了介紹中華白海豚、皇帝企鵝等外貌與習性小知識，我們更想讓您認識到牠們正面對的危機，展示我們船隊在進行守護行動時，拍攝到牠們的珍貴實況照片，全面認識海洋生物此刻的生活狀況。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentImage} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>

      <Text as="p" {...paragraphProps}>
        小如海龜、大如鯨魚，均受到相似的海洋破壞威脅生存，單憑個人或船隊的救援行動，亦恐怕難以長期守護全部海洋動物。因此除了揭露破壞與見證行動，綠色和平在近 10 年來一直進行遊說、倡議和動員行動，推動各國政府訂立守護海洋的「終極方案」——《全球海洋公約》，以推動在 2030 年前建立至少 30% 海洋保護區。此電子書亦會帶您走進綠色和平的「守護海洋之路」，見證我們多年來守護海洋的行動，並透過海洋保護區模擬地圖，展望海洋得以復育豐饒的願景。
      </Text>

      <Heading {...headingProps}>
        請即下載海洋生物電子圖鑑，一起認識並守護海洋。
      </Heading>

    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
