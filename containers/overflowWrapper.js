import React from 'react';
import { Box } from '@chakra-ui/react';

const OverflowWrapper = ({ children }) => {
  return (
    <Box py={{ base: 4 }} mt={{ base: -20, md: -60 }} pos={`relative`}>
      {children}
    </Box>
  );
};

export default OverflowWrapper;
