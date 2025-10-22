import React from 'react';
import { Box, Container } from '@chakra-ui/react';

const FormContainer = ({ 
  styleFix=true, // set to false to disable white bg and border radius
  children }) => {
  return (
    <Container zIndex="2" position="sticky" top="4px">
      <Box
        maxW="500px"
        mx="auto"
        bgColor={styleFix ? 'white' : 'transparent'}
        borderRadius={styleFix ? 'var(--radius-xl)' : '0'}
        boxShadow="lg"
        overflow="hidden"
        transform="translateZ(0)"
      >
        {children}
      </Box>
    </Container>
  );
};

export default FormContainer;
