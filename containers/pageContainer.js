import React from 'react';
import { Container } from '@chakra-ui/react';

const PageContainer = ({ children }) => {
  return (
    <Container height="100%" maxW="1200px">
      {children}
    </Container>
  );
};

export default PageContainer;
