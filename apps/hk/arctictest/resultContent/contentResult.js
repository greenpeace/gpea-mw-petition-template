import React from 'react';
import { connect } from 'react-redux';
import { Heading, Box, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        誠邀您加入聯署，合力解決塑膠污染！
      </Heading>

      <Text as="p" {...paragraphProps}>
        您的聯署將幫助綠色和平從個人、社區、企業與政策層面，推動源頭減少即棄塑膠，長遠解決塑膠污染問題，令美麗海洋與環境回復潔淨健康！
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
