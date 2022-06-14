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
        感謝您報名共讀會！
      </Heading>

      <Text as="p" {...paragraphProps}>
        講座連結和密碼將於數分鐘內寄送到您的電郵，請查閱。
      </Text>

      <Text as="p" {...paragraphProps}>
        緩減氣候危機，守護動物家園。想拿著《無家可歸的我》參加共讀會，同時教育您我的下一代環境保護的意識，請即捐助支持綠色和平「童愛環境
        · 贈書教育」計劃。
      </Text>

      <Text as="p" {...paragraphProps}>
        藉著4月世界地球日，綠色和平舉辦「童愛環境 ·
        贈書教育」計劃，計劃將原創氣候危機繪本《無家可歸的我》及教材送達100間小學，同時您亦會獲得一本原創繪本。孩子對環境保護的意識，必須從小培養。您願意多走一步，支持我們派送繪本及教材到小學嗎？
      </Text>

      <Text as="p" {...paragraphProps}>
        是次原創繪本除了以故事人類主角豆豆帶領我們在海上歷險，遇見各種動物無家可歸的情況外，更增添更多環保小知識及互動教材，希望小朋友在理解故事外，還能以有趣互動的方式，鞏固對氣候危機的理解。在家抗疫的日子裡，不妨用《無家可歸的我》，讓小朋友在家學懂愛護環境的知識吧！
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentPic} />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        緩解氣候危機 刻不容緩
      </Heading>

      <Text as="p" {...paragraphProps}>
        氣候危機逼在眉睫，冰川融化、海平面上升、導致更多極端天氣等都是其帶來的惡果，我們必須關注並以實質行動應對氣候問題。
      </Text>

      <Text as="p" {...paragraphProps}>
        綠色和平一直積極採取應對氣候危機的行動，今年請攜手推動各國企業、政府實現能源轉型，加速發展可再生能源，設法讓全球暖化控制在攝氏1.5度，減緩影響一代又一代人類、物種存亡的氣候危機。
      </Text>

      <Text as="p" {...paragraphProps}>
        有您的捐助支持，綠色和平便能推動各國政府、企業加入氣候改革，發展可再生能源，推進全球減碳步伐！
      </Text>

      <Text as="p" {...paragraphProps}>
        為在環境工作上保持100%公正獨立，綠色和平堅持不接受政商界捐助，所以您捐助的一分一毫，也是支持我們項目工作的關鍵力量！
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
