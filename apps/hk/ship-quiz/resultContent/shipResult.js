import React from 'react';
import { connect } from 'react-redux';
import { Heading, Box, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import useImage from '../useImage';

const Content = ({ theme, quizResult }) => {
  const themeInterests = theme.interests;
  const { loading, error, image } = useImage(quizResult?.image);
  return (
    <>
      {quizResult?.description &&
        quizResult?.description.map((d, i) => (
          <Box key={i}>
            <Text as="p" {...paragraphProps}>
              {d}
            </Text>
          </Box>
        ))}
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
