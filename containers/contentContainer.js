import React from 'react';
import { Box } from '@chakra-ui/react';

const ContentContainer = ({ children, theme }) => {
  return (
    <Box py={6} px={4} className="content">
      <Box className={`${theme?.interests}`}>{children}</Box>
    </Box>
  );
};

export default ContentContainer;
