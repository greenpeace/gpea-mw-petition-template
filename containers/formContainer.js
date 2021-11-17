import React from 'react';
import { Box, Container } from '@chakra-ui/react';

const FormContainer = ({ children }) => {
  return (
    <Container position="sticky" top="4px">
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
    </Container>
  );
};

export default FormContainer;
