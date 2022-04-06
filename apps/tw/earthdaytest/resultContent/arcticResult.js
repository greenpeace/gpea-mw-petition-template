import React from 'react';
import { connect } from 'react-redux';
import { Heading, Button, Box, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import image00 from '../images/GIY工作坊_R1.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Text as="p" {...paragraphProps}>
        綠色和平氣候大使謝哲青邀您一起投資地球
      </Text>

      <Text as="p" {...paragraphProps}>
        走遍世界，看見科技不斷進步
        <br />
        我們的環境卻沒有變得更好
        <br />
        為什麼？
        <br />
        也許是過去我們向環境借走了太多
        <br />
        現在，是時候加倍奉還
      </Text>

      <Text as="p" {...paragraphProps}>
        我是綠色和平氣候大使謝哲青
        <br />
        氣候危機已近在咫尺
        <br />
        邀請您定期捐款支持綠色和平的環境工作
        <br />
        和我一起投資地球，擁抱好生活
      </Text>

      {/* <Box {...paragraphProps}>
        <Image
          src={image00}
          p={4}
          maxW={{ base: '100%', md: '480px' }}
          mx="auto"
        />
      </Box> */}
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
