import React from 'react';
import { Box } from '@chakra-ui/react';

const FormContainer = ({ children }) => {
  return (
    <Box position="sticky" top="0">
      <Box
        boxShadow="lg"
        py="6"
        px="4"
        bgColor="#FFF"
        borderRadius={8}
        maxW="500px"
        mx="auto"
      >
        {children}
      </Box>
    </Box>
  );
};

export default FormContainer;
