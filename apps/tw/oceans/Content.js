import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentB from './images/cd8ea365-cd8ea365-gp0sto55a_web_size_with_credit_line.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        連署的意義...
      </Heading>

      <Text as="p" {...paragraphProps}>
        您的連署不只是一個簽名，而是照進深海的一道微光，能推動制定《全球海洋公約》，在2030年前成立至少30%海洋保護區，為萬千海洋生物找到庇蔭。
      </Text>

      <Text as="p" {...paragraphProps}>
        此刻，綠色和平正持續推動各國政府攜手制定《全球海洋公約》，為浩瀚海洋建立完善且長久的保護機制。如果我們成功了，將是環保運動的重要里程碑，能讓至少三分之一以上的海洋生態不受人為干預，生生不息。
      </Text>

      <Text as="p" {...paragraphProps} fontWeight={`bold`}>
        您願意一起守護海洋嗎？
        <br />
        <Text as="span" fontSize={`xl`}>
          現在就連署！
        </Text>
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentB} />
      </Box>

      <Heading {...headingProps}>
        蓬勃的海洋正凋萎...
        <br />
        需要你給大海最實質的幫助！
      </Heading>

      <Text as="p" {...paragraphProps}>
        神秘的海洋孕育了自然萬物，淨化我們的空氣，提供我們充足的食物與工作機會，但如今，海洋正面臨前所未有的威脅
      </Text>

      <Text as="p" {...paragraphProps}>
        氣候變遷讓海水溫度提高、酸化；大量塑膠垃圾流入海中，被鯨豚海龜吞下吐；過度捕撈與大型企業的深海採礦計畫，幾乎快把豐沛的海洋資源吃乾抹淨。
      </Text>

      <Text as="p" {...paragraphProps}>
        海洋就要枯竭！我們必須做點什麼！
      </Text>

      <Text as="p" {...paragraphProps}>
        現在就加入連署，和綠色和平一起促請各國政治領袖坐下來協商，共同制定《全球海洋公約》，在
        2030 年前成立至少 30% 海洋保護區，禁止各國在保護區內從事商業行為。
      </Text>

      <Text as="p" {...paragraphProps}>
        讓枯竭的海洋喘口氣，就是我們所能提供最實質的幫助。
      </Text>

      <Text as="p" {...paragraphProps} fontWeight={`bold`}>
        <Text as="span" fontSize={`xl`}>
          立即連署
        </Text>
        <br />
        拯救脆弱海洋，有您有我
      </Text>
    </>
  );
};

const mapStateToProps = ({ theme }) => {
  return { theme: theme.data };
};

export default connect(mapStateToProps)(Content);
