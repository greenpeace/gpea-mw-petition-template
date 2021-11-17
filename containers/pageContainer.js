import React from 'react';
import { Box, Container } from '@chakra-ui/react';

const PageContainer = ({ children }) => {
  return (
    <Box height="100%" maxW="1200px" mx="auto">
      {children}
    </Box>
  );
};

export default PageContainer;
