import React from 'react';
import { connect } from 'react-redux';
import { Heading, Text, Box } from '@chakra-ui/react';

import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const Thankyou = ({ theme, signup }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        感謝您成為推動環境改變的一員
      </Heading>

      <Text as="p" {...paragraphProps}>
        衷心感謝您的捐助支持，您的捐款將更進一步幫助推動環境保護。您捐助的一分一毫，都參與了綠色和平在當地與全球的環境工作，而每一項環境成果也都有您的力量！
      </Text>

      <Text as="p" {...paragraphProps}>
        為環境帶來改變，難以一蹴而成，但我們會堅守環境優先的原則，以科學為依據，不斷向利害關係者與政策制定者施壓，推動改變發生。
      </Text>

      <Text as="p" {...paragraphProps}>
        綠色和平維持 100%
        公正獨立，從不接受政府、企業或政治團體資助。因此，您與每一位支持者的捐款，
        對推動長期環境工作尤其重要，因為穩定的捐款收入，是綠色和平環境專案得以長遠實行、應對連場環境硬仗的致勝關鍵！
      </Text>

      <Text as="p" {...paragraphProps}>
        當眾人攜手行動，本來微弱的聲音，可以擴大成各國領袖無法忽視的力量，感謝您的加入，成為環境守護的堅實力量！
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
