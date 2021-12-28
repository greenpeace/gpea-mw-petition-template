import React from 'react';
import { connect } from 'react-redux';
import { Heading, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const Thankyou = ({ theme, signup }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  return (
    <>
      <Heading {...headingProps}>
        感謝您報名參與綠色新春教室，實踐減廢生活。
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
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
