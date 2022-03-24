import React from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';

import { BsWhatsapp } from 'react-icons/bs';

export const CTAButton = () => (
  <Box
    bgColor={'#fafafa'}
    borderRadius={8}
    _hover={{ opacity: 0.9 }}
    cursor={'pointer'}
    p={1}
  >
    <Flex
      bgColor="var(--gps-whatsapp)"
      borderRadius={8}
      p={4}
      alignItems="center"
      justifyContent="center"
    >
      <Icon
        as={BsWhatsapp}
        fontSize="2xl"
        mr="4"
        color="white"
        fontWeight="bold"
      />
      <Text fontSize={{ base: 'lg', md: 'xl' }} color="white" fontWeight="bold">
        立即啟動走塑GPS
      </Text>
    </Flex>
  </Box>
);
