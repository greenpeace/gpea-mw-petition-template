import React from 'react';
import { connect } from 'react-redux';
import { Box, Image, Heading, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentPic from '../../images/A7307470.jpg';

const Thankyou = ({ theme, signup }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
      感謝您下載電子書，電子書將於3分鐘內以短訊及電郵寄送給您。
      </Heading>

      <Text as="p" {...paragraphProps}>
      您願意進一步守護香港自然環境嗎？立即捐款，攜手守護大嶼。
      </Text>

      <Text as="p" {...paragraphProps}>
      您的捐款將直接資助綠色和平繼續以紮實研究，揭露真相，推動政府善用棕地，直接幫助守護大嶼與自然環境的目標！
      </Text>

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

      {/* <Box {...paragraphProps}>
        <Image src={contentPic} />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        緩解氣候危機 刻不容緩
      </Heading>

      <Text as="p" {...paragraphProps}>
      向香港自然環境伸出援手，捐助綠色和平守護大嶼工作。
      </Text>

      <Text as="p" {...paragraphProps}>
        綠色和平一直積極採取應對氣候危機的行動，今年請攜手推動各國企業、政府實現能源轉型，加速發展可再生能源，設法讓全球暖化控制在攝氏1.5度，減緩影響一代又一代人類、物種存亡的氣候危機。
      </Text>

      <Text as="p" {...paragraphProps}>
        有您的捐助支持，綠色和平便能推動各國政府、企業加入氣候改革，發展可再生能源，推進全球減碳步伐！
      </Text>

      <Text as="p" {...paragraphProps}>
        為在環境工作上保持100%公正獨立，綠色和平堅持不接受政商界捐助，所以您捐助的一分一毫，也是支持我們項目工作的關鍵力量！
      </Text> */}
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
