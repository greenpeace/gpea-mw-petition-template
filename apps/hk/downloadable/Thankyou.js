import React from 'react';
import { connect } from 'react-redux';
import { Box, Image, Heading, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import borrow from './images/plastics_borrow_event.jpg';

const Thankyou = ({ theme, signup }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  return (
    <>
      <Heading {...headingProps}>
        感謝您下載手冊，實踐走塑減廢生活習慣。
      </Heading>

      <Text as="p" {...paragraphProps}>
        您的參與意義重大，我們將一起學習實踐走塑生活，步向無塑未來，為環境出一分力。
      </Text>

      <Text as="p" {...paragraphProps}>
        綠色和平團隊一直推動超市淘汰即棄塑膠、招募商戶成為走塑店鋪、督促政府訂立更積極的減塑目標與政策。你願意多走一步，支持我們的走塑工作做得更完善有效嗎？
      </Text>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助我們持續調查塑膠污染問題、督促企業和政府推出積極的減塑目標與政策，以及推動超市淘汰即棄塑膠、招募更多商戶成為走塑店鋪，邁向全城走塑。
      </Text>

      <Box {...paragraphProps}>
        <Image src={borrow} />
      </Box>

      <Heading {...headingProps}>
        即棄塑膠永久傷害海洋、環境與人體健康，你願意出手減緩危機嗎？
      </Heading>

      <Text as="p" {...paragraphProps}>
        塑膠垃圾對堆填區造成沉重負擔，同時會傷害海洋、環境與人體健康。塑膠難以自然分解，分解或需時過百年，還會碎成微塑膠，流入海洋會損害生態，而人體則會經過海鮮吸收微塑膠，內分泌、生殖系統或會受影響，甚至可能致癌。
      </Text>

      <Text as="p" {...paragraphProps}>
        有您的捐助支持，綠色和平便能有更大力量推動政府、企業和社區走塑，並投放更多資源進行個人減廢教育，帶領香港邁向無塑未來。
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
