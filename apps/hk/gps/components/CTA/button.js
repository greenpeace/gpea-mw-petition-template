import React from 'react';
import { Box, Flex, Text, Icon, Link } from '@chakra-ui/react';

import { BsWhatsapp } from 'react-icons/bs';

export const CTAButton = () => (
  <Box mt="4">
    <Link
      href="https://wa.me/85260459671?text=Hello"
      isExternal
      style={{ textDecoration: 'none' }}
    >
      <Box
        d="inline-block"
        bgColor="var(--gps-whatsapp)"
        borderRadius={8}
        px={8}
        py={4}
        _hover={{ opacity: 0.9 }}
      >
        <Flex alignItems="center" justifyContent="center">
          <Icon
            as={BsWhatsapp}
            fontSize="2xl"
            mr="4"
            color="white"
            fontWeight="bold"
          />
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="white"
            fontWeight="bold"
          >
            立即試用走塑GPS
          </Text>
        </Flex>
      </Box>
    </Link>
  </Box>
);
