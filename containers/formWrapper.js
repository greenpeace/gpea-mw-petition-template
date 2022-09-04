import React from 'react';
import { Box } from '@chakra-ui/react';

const FormWrapper = ({ children }) => {
  return (
    <Box
      maxW="500px"
      mx="auto"
      bgColor="white"
      borderRadius="var(--radius-xl)"
      boxShadow="lg"
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default FormWrapper;
