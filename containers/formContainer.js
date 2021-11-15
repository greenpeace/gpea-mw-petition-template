import React from 'react';
import { Box } from '@chakra-ui/react';

const FormContainer = ({ children }) => {
  return (
    <Box position="sticky" top="4px">
      <Box
        maxW="500px"
        mx="auto"
        bgColor="white"
        borderRadius={8}
        boxShadow="lg"
        overflow="hidden"
      >
        {children}
      </Box>
    </Box>
  );
};

export default FormContainer;
