import { Box, Flex, Image, Container, Link } from '@chakra-ui/react';
import React from 'react';

import logo from '@common/images/logo/GP-logo-2019-TC-white-[web]-01.png';

const WithSubnavigation = ({ href }) => {
  return (
    <Box
      bgColor={'brand.500'}
      // borderBottom={'1px solid var(--shades-100)'}
      // boxShadow={'var(--shadow-1)'}
      pos={'relative'}
      zIndex={3}
    >
      <Flex py={'12px'} align={'center'}>
        <Container maxW={'1200px'}>
          <Box>
            {href ? (
              <Link href={href} isExternal="true">
                <Image
                  src={logo}
                  maxW="145px"
                  padding="2px"
                  alt={'Greenpeace'}
                />
              </Link>
            ) : (
              <Image src={logo} maxW="220px" padding="2px" alt={'Greenpeace'} />
            )}
          </Box>
        </Container>
      </Flex>
    </Box>
  );
};

export default WithSubnavigation;
