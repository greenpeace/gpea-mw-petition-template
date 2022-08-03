import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import useImage from '../useImage';
// Import custom components
import IconContent from './iconContent.js';

const Content = ({ theme, quizResult }) => {
  const themeInterests = theme.interests;
  const { loading, error, image } = useImage(quizResult?.image);
  return (
    <>
      <Box>
        <Heading {...headingProps} color="#0075BA" mb="6" lineHeight="1.5">
          立即登記獲取完整測驗結果
          <br />與 {quizResult?.character} 的獨家彩蛋片段！
        </Heading>
      </Box>
      <IconContent quizResult={quizResult} />
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
