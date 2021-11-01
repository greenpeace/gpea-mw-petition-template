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
        <Box>
          <div className="arrow-steps clearfix">
            <div className="step current">
              <span>Step 1</span>
            </div>
            <div className="step">
              <span>Step 2</span>
            </div>
            <div className="step">
              <span>Step 3</span>
            </div>
          </div>
        </Box>
        <Box py="6" px="4">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default FormContainer;
