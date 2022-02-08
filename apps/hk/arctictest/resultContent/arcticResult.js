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
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        心理測驗結果會於1分鐘後傳送到您的電郵。
      </Heading>

      <Text as="p" {...paragraphProps}>
        再一次感謝您的參與，找出代表您的極地動物。但您知道在遙遠的北極，這些極地動物正遇到種種困難，威脅著牠們的家園嗎？
      </Text>

      <Text as="p" {...paragraphProps}>
        北極原是地球上的淨土，孕育奇妙不凡的野生生態，更具調節全球氣候的功能。可惜，鑽油破壞和工業捕撈等人類行為嚴重威脅，加上氣候危機影響下，海冰在過去數十年已損失三分之二的體積，北極熊的數量亦減少近一半，北極生態岌岌可危。
      </Text>

      <Text as="p" {...paragraphProps}>
        如我們未能及時挽救這場危機，北極生態系統、生物多樣性將受到嚴重破壞，北極熊可能就此滅絕。如若北極陷入困境，人類亦將難逃厄運。
      </Text>

      <Text as="p" {...paragraphProps}>
        綠色和平一直以行動、科學研究、政策倡議等方式守護北極，您願意多走一步，捐助守護北極的工作嗎？
      </Text>

      <Text as="p" {...paragraphProps}>
        現以每月$200捐款支持守護北極，您將獲得兩次「環保手作工作坊」或導賞團的機會！
        名額有限，額滿即止！
      </Text>

      <Box {...paragraphProps}>
        <Image src={image00} maxW="480px" mx="auto" />
      </Box>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助我們的實地科研任務、揭露各國企業與政府破壞北極的行為、以及國際間的倡議工作，直接幫助達成制止破壞行為，守護北極生態的目標。
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
