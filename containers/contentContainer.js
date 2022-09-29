import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';

const ContentContainer = ({ children, theme, issue }) => {
  const interest = issue || theme?.interests;
  return (
    <Box py={6} px={4} className="content">
      <Box className={`${interest}`}>{children}</Box>
    </Box>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(ContentContainer);
