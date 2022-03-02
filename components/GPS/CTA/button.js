import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const CTAButton = () => (
  <Box
    bgColor={'green.500'}
    borderRadius={8}
    p={6}
    _hover={{ bgColor: '#005F89' }}
    cursor={'pointer'}
    align="center"
  >
    <Text fontSize={{ base: 'lg', md: 'xl' }} color={'#FFF'} fontWeight={700}>
      立即免費使用走塑GPS/立即啟動走塑GPS
    </Text>
  </Box>
);
