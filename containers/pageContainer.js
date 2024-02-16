import React from 'react';
import { Box } from '@chakra-ui/react';

const PageContainer = ({ children, maxW="1200px" }) => {
  return (
    <Box height="100%" maxW={maxW} mx="auto">
      {children}
    </Box>
  );
};

export default PageContainer;
