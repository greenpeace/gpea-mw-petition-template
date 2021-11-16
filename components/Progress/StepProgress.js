import React from 'react';
import { connect } from 'react-redux';
import { Box, Text } from '@chakra-ui/react';

const StepProgress = ({ theme }) => {
  const themeInterests = theme.interests;
  const stepCurrentStyle = {
    fontSize: 16,
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
    fontSize: 16,
    lineHeight: 6,
    bgColor: 'rgb(236, 235, 234)',
    _after: {
      borderLeftType: `solid`,
      borderLeftWidth: '17px',
      borderLeftColor: 'rgb(236, 235, 234)',
    },
  };

  return (
    <Box className="arrow-steps clearfix">
      <Box className="step current" {...stepCurrentStyle}>
        <Text as="span">選擇金額</Text>
      </Box>
      <Box className="step" {...stepStyle}>
        <Text as="span" display="none">
          填寫資料
        </Text>
      </Box>
      <Box className="step" {...stepStyle}>
        <Text as="span" display="none">
          捐款完成
        </Text>
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
