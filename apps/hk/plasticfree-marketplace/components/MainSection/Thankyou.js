import React from 'react';
import { connect } from 'react-redux';
import { Box, Image, Heading, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentPic1 from '../../images/202205-plastic-free-marketplace-thankyou-page-image1.jpg';
import contentPic2 from '../../images/202205-plastic-free-marketplace-thankyou-page-image2.jpeg';
import contentPic3 from '../../images/202205-plastic-free-marketplace-thankyou-page-image3.jpeg';

const Thankyou = ({ theme, signup }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        感謝您登記參與「惜簡生活節」環保工作坊！
      </Heading>

      <Text as="p" {...paragraphProps}>
        活動詳情與工作坊報名表，將於數分鐘內以電郵寄送給您。
      </Text>

      <Text as="p" {...paragraphProps}>
        讓裸買、可重用概念紮根香港，解決塑膠污染，請捐助支持走塑項目。
      </Text>

      <Text as="p" {...paragraphProps}>
        綠色和平團隊一直推動社區實踐可重用概念、招募商戶成為走塑店鋪、促請超市增設裸賣站與淘汰即棄塑膠、督促政府訂立更積極的減塑目標與政策。您願意多走一步，支持我們的走塑工作做得更完善有效嗎？
      </Text>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助我們持續調查塑膠污染問題、讓可重用概念紮根香港，同時督促企業和政府推出積極的減塑目標與政策，邁向全城走塑。
      </Text>

      {/* <Box {...paragraphProps}>
        <Image src={contentPic1} />
      </Box> */}

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        即棄塑膠永久傷害海洋、環境與人體健康，您願意出手減緩危機嗎？
      </Heading>

      <Text as="p" {...paragraphProps}>
        塑膠垃圾對堆填區造成沉重負擔，同時會傷害海洋、環境與人體健康。塑膠難以自然分解，即使分解或需時過百年，還會碎成微塑膠，流入海洋，損害生態，而人體則會經由海鮮吸收微塑膠，內分泌、生殖系統或會受影響，甚至可能致癌。
      </Text>

      <Text as="p" {...paragraphProps}>
        有您的捐助支持，綠色和平便能有更大力量推動政府、企業和社區走塑，並投放更多資源進行個人減廢教育，帶領香港邁向無塑未來。
      </Text>

      <Text as="p" {...paragraphProps}>
        緩解塑膠污染，捐助綠色和平走塑工作。
      </Text>

      {/* <Box {...paragraphProps}>
        <Image src={contentPic2} />
      </Box>

      <Box {...paragraphProps}>
        <Image src={contentPic3} />
      </Box> */}
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
