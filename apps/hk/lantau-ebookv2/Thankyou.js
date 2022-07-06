import React from 'react';
import { connect } from 'react-redux';
import { Box, Image, Heading, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentPic from './images/DJI_0386.jpg';
import contentPic_02 from './images/elm_flag.jpg';

const Thankyou = ({ theme, signup }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        感謝您下載電子書，電子書將於15分鐘內以短訊及電郵寄送給您。
      </Heading>

      <Text as="p" {...paragraphProps}>
        您願意進一步守護香港自然環境嗎？立即捐款，攜手守護大嶼。
      </Text>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助綠色和平繼續以紮實研究，揭露真相，推動政府善用棕地，直接幫助守護大嶼與自然環境的目標！
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentPic} />
        <Text fontSize={'sm'}>© Schindler Leung / Greenpeace</Text>
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        填海將嚴重危害海洋生態，您可以施以援手！
      </Heading>

      <Text as="p" {...paragraphProps}>
        鄰近東大嶼水域一帶具有白腹海鵰的鳥巢、鮑氏雙足蜥、海筆等珍稀物種，距離填海範圍最近僅約十多公里，正是全港唯一綠海龜的產卵地—南丫島深灣，在如此敏感的生態區域大興土木，必然破壞珍貴的海洋生態，野生動物亦恐從此絕跡。
      </Text>

      <Text as="p" {...paragraphProps}>
        有您的捐助支持，綠色和平便能有更多資源與力量執行守護大嶼工作，推動政府優先發展棕地，守護香港自然環境。
      </Text>

      <Text as="p" {...paragraphProps}>
        向香港自然環境伸出援手，捐助綠色和平守護大嶼工作。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        堅持發聲 行動帶來改變
      </Heading>

      <Text as="p" {...paragraphProps}>
        現以每月$200捐款支持堅守大嶼工作，即可獲得一面「堅守大嶼」旗幟及2次「環保手作工作坊」的機會。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentPic_02} />
      </Box>
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
