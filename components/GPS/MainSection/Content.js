import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import * as statusActions from 'store/actions/action-types/status-actions';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;

  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        只需簡單登記，就能使用完整版「走塑GPS」！
      </Heading>

      <Text {...paragraphProps}>
        感謝您試用「走塑GPS」全港走塑店鋪定位地圖，希望幫到您更輕鬆、方便實踐綠色生活！
      </Text>

      <Text {...paragraphProps}>
        * 「走塑GPS」WhatsApp對話將顯示您成功登記的確認訊息。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        尚未試用「走塑GPS」？
        <br />
        立即免費體驗，輕鬆搜尋全港走塑店鋪！
      </Heading>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setScrollToTarget: (data) => {
      dispatch({ type: statusActions.SET_SCROLL_TO_TARGET, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
