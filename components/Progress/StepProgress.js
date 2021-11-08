import React from 'react';
import { connect } from 'react-redux';
import { Box, Text } from '@chakra-ui/react';

const StepProgress = ({ theme }) => {
  const themeInterests = theme.interests;
  const stepCurrentStyle = {
    fontSize: 14,
    lineHeight: 6,
    color: '#FFF',
    bgColor: `theme.${themeInterests}`,
    _after: {
      borderLeftType: `solid`,
      borderLeftWidth: '17px',
      borderLeftColor: `theme.${themeInterests}`,
    },
  };

  const stepStyle = {
    fontSize: 14,
    lineHeight: 6,
    bgColor: `#d9e3f7`,
    _after: {
      borderLeftType: `solid`,
      borderLeftWidth: '17px',
      borderLeftColor: `#d9e3f7`,
    },
  };

  return (
    <Box mb={15} borderRadius={`md`} overflow={`hidden`}>
      <Box className="arrow-steps clearfix">
        <Box className="step current" {...stepCurrentStyle}>
          <Text as="span" fontWeight={'bold'}>
            Step 1
          </Text>
        </Box>
        <Box className="step" {...stepStyle}>
          <Text as="span">Step 2</Text>
        </Box>
        <Box className="step" {...stepStyle}>
          <Text as="span">Step 3</Text>
        </Box>
      </Box>
    </Box>
  );
};

const mapStateToProps = ({ theme }, props) => {
  return {
    theme: theme.data,
  };
};

export default connect(mapStateToProps)(StepProgress);
