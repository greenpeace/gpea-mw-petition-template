import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, List, ListItem } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import * as statusActions from 'store/actions/action-types/status-actions';

const Content = ({ theme, setScrollToTarget }) => {
  const speaker1Ref = useRef(null);
  const speaker2Ref = useRef(null);
  const speaker3Ref = useRef(null);
  const themeInterests = theme.interests;

  useEffect(() => {
    setScrollToTarget([speaker1Ref, speaker2Ref, speaker3Ref]);
  }, [speaker1Ref]);

  return (
    <Box minH={{ base: 'auto', md: '400px' }}>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        只需簡單登記，就能使用完整版「走塑GPS」！
      </Heading>

      <Text {...paragraphProps}>
        感謝您試用「走塑GPS」全港走塑店鋪定位地圖，希望幫到您更輕鬆、方便實踐綠色生活！
      </Text>

      <Text {...paragraphProps}>
        **「走塑GPS」WhatsApp對話將顯示您成功登記的確認訊息。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        尚未試用過「走塑GPS」？立即免費體驗，輕鬆搜尋全港走塑店鋪！
      </Heading>
    </Box>
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
