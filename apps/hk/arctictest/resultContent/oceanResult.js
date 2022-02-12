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
        再一次感謝您的參與，找出代表您的海洋動物。但您知道在浩瀚的海洋中，這些動物正遇到種種困難，威脅著牠們的家園嗎？
      </Text>

      <Text as="p" {...paragraphProps}>
        海洋孕育無數生物，亦提供地球50%的氧氣，更具調節全球氣候的功能，是我們的無上瑰寶。可惜，現時海洋受過度捕撈、深海採礦、塑膠污染等人類行為嚴重威脅，加上氣候危機影響下，海洋酸化、珊瑚白化問題愈趨嚴峻，海洋生態岌岌可危。
      </Text>

      <Text as="p" {...paragraphProps}>
        如我們未能及時挽救這場危機，海洋生態系統、生物多樣性將受到嚴重破壞，珊瑚及與其共生的魚類可能就此滅絕。如若海洋陷入困境，地球環境亦將難逃厄運。
      </Text>

      <Text as="p" {...paragraphProps}>
        綠色和平一直以行動、科學研究、政策倡議等方式守護海洋，您願意多走一步，捐助守護海洋的工作嗎？
      </Text>

      <Text as="p" {...paragraphProps}>
        現以每月$200捐款支持守護海洋，您將獲得兩次「環保手作工作坊」或導賞團的機會！
        名額有限，額滿即止！
      </Text>

      <Box {...paragraphProps}>
        <Image src={image00} maxW={{ base: '100%', md: '480px' }} mx="auto" />
      </Box>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助我們的海上科研任務、揭露企業破壞海洋的行為、以及國際間的倡議工作，直接幫助達成2030年30%全球海洋保護區的目標。
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
