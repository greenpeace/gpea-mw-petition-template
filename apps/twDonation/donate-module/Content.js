import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentImg1 from './images/image6.jpg';
import contentImg2 from './images/GP01B4T_PressMedia.jpg';
import contentImg3 from './images/image8.jpg';
import contentImg4 from './images/image10.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        連署是一份支持海洋保育的力量
      </Heading>
      <Text as="p" {...paragraphProps}>
        您的連署不只是一個簽名，而是照進深海的一道微光，能推動制定《全球海洋公約》與臺灣《海洋保育法》，在2030年前成立至少30%海洋保護區，為萬千海洋生物找到庇蔭。
      </Text>
      <Text as="p" {...paragraphProps}>
        此刻，綠色和平正持續推動各國政府攜手制定《全球海洋公約》，為浩瀚海洋建立完善且長久的保護機制。並敦促臺灣政府催生《海洋保育法》，擴大臺灣海洋保護區，共同響應全球海洋公約，於2030年前達到30%的海洋保護區。
      </Text>
      <Text as="p" {...paragraphProps}>
        如果我們成功了，將是環保運動的重要里程碑，能讓至少三分之一以上的海洋生態不受人為干預，生生不息。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        您願意一起守護海洋嗎？現在就連署！
      </Heading>
      <Box {...paragraphProps}>
        <Image src={contentImg1} />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        全球海洋面臨重重危機
      </Heading>
      <Text as="p" {...paragraphProps}>
        由於缺少全球保護機制，地球上的公海只有不到1%受到保護，成為強勢石油、捕撈漁業、深海採礦產業的「海洋大戰」競技場，以及面臨塑膠污染和氣候變遷等問題。
      </Text>
      <Text as="p" {...paragraphProps}>
        鯨魚、海龜、企鵝、北極熊以至人類幾乎一無所知的深海生物正面臨各種存亡危機。
      </Text>
      <Box {...paragraphProps}>
        <Image src={contentImg4} />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        臺灣四面環海，但我們卻沒有好好愛護它
      </Heading>
      <Text as="p" {...paragraphProps}>
        除了珊瑚白化、海洋污染之外，過度捕撈與棲地破壞，是破壞沿海海域甚鉅的原因。
      </Text>
      <Text as="p" {...paragraphProps}>
        根據漁業署統計年報顯示，臺灣近10年的近海漁獲量，已不到30年前的50%。
      </Text>
      <Text as="p" {...paragraphProps}>
        根據中研院在臺灣北海岸近15年來的長期監測調查，發現野生魚種數量已銳減超過70%。
      </Text>
      <Text as="p" {...paragraphProps}>
        顯示臺灣魚類物種多樣性包括魚群數量與豐富度都正在快速地消失。
      </Text>
      <Text as="p" {...paragraphProps}>
        如再不努力推動海洋保育，「年年有魚」恐將成為過去式。
      </Text>
      <Box {...paragraphProps}>
        <Image src={contentImg3} />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        蓬勃的海洋正凋萎... 需要您給大海最實質的幫助！
      </Heading>

      <Text as="p" {...paragraphProps}>
        神秘的海洋孕育了自然萬物，淨化我們的空氣，提供我們充足的食物與工作機會，但如今，海洋正面臨前所未有的威脅
      </Text>

      <Text as="p" {...paragraphProps}>
        氣候變遷讓海水溫度提高、酸化；大量塑膠垃圾流入海中，被鯨豚海龜吞下吐；過度捕撈與大型企業的深海採礦計畫，幾乎快把豐沛的海洋資源吃乾抹淨。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentImg2} />
      </Box>
      <Text as="p" {...paragraphProps}>
        海洋就要枯竭！我們必須做點什麼！
      </Text>

      <Text as="p" {...paragraphProps}>
        現在就加入連署，和綠色和平一起推動《全球海洋公約》與臺灣《海洋保育法》，在
        2030 年前成立至少 30% 海洋保護區，禁止各國在保護區內從事商業行為。
      </Text>

      <Text as="p" {...paragraphProps}>
        讓枯竭的海洋喘口氣，就是我們所能提供最實質的幫助。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        立即連署
        <br />
        拯救脆弱海洋，有您有我
      </Heading>
    </>
  );
};

const mapStateToProps = ({ theme }) => {
  return { theme: theme.data };
};

export default connect(mapStateToProps)(Content);
