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
        全港1,100間走塑店鋪 一鍵導航
      </Heading>

      <Box {...paragraphProps}>
        為了方便市民搜尋「全城走塑計劃」超過1,100間走塑商戶，綠色和平推出「走塑GPS」WhatsApp
        Chatbot功能，讓你隨時隨地尋找鄰近走塑友善小店，做到「Plastic Free, Care
        Free」！
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        只需簡單登記，你就能免費使用「走塑GPS」服務，即時定位鄰近走塑小店！
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
