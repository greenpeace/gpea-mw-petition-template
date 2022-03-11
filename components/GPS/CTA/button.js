import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

export const CTAButton = () => (
  <Box
    bgColor={'#fafafa'}
    borderRadius={8}
    _hover={{ opacity: 0.9 }}
    cursor={'pointer'}
    align="center"
    p={1}
  >
    <Box bgColor={'orange.500'} borderRadius={8} p={4} align="center">
      <Text fontSize={{ base: 'lg', md: 'xl' }} color={'#FFF'} fontWeight={700}>
        立即啟動走塑GPS
      </Text>
    </Box>
  </Box>
);
