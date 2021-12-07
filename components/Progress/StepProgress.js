import React from 'react';
import { connect } from 'react-redux';
import { Box, Text } from '@chakra-ui/react';

const StepProgress = ({ theme }) => {
  const themeInterests = theme.interests;
  const stepCurrentStyle = {
    fontSize: 16,
    lineHeight: 6,
    color: '#FFF',
    bgColor: `${themeInterests}.500`,
    _after: {
      borderLeftType: `solid`,
      borderLeftWidth: '17px',
      borderLeftColor: `${themeInterests}.500`,
    },
  };

  const stepStyle = {
    fontSize: 16,
    lineHeight: 6,
    bgColor: `${themeInterests}.100`,
    _after: {
      borderLeftType: `solid`,
      borderLeftWidth: '17px',
      borderLeftColor: `${themeInterests}.100`,
    },
  };

  const arrowShadow = {
    marginRight: '-20px',
    marginTop: '-4px',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '24px 0 23px 20px',
    borderColor: 'transparent transparent transparent #FFF',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  };

  return (
    <Box className="arrow-steps clearfix">
      <Box className="step current" {...stepCurrentStyle}>
        <Text as="span">選擇金額</Text>
        <Box {...arrowShadow} />
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

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme.data,
  };
};

export default connect(mapStateToProps)(StepProgress);
