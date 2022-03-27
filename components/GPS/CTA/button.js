import React from 'react';
import { Box, Flex, Text, Icon, Link } from '@chakra-ui/react';

import { BsWhatsapp } from 'react-icons/bs';

export const CTAButton = () => (
  <Link
    href="https://wa.me/國家區號+電話號碼?text=預設內容"
    isExternal
    style={{ textDecoration: 'none' }}
  >
    <Box
      d="inline-block"
      borderRadius={8}
      _hover={{ opacity: 0.9 }}
      cursor={'pointer'}
    >
      <Flex
        bgColor="var(--gps-whatsapp)"
        borderRadius={8}
        px={8}
        py={4}
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
);
