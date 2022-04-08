import React from 'react';
import { Box } from '@chakra-ui/react';
import MainContentDesktop from './desktop';
import MainContentMobile from './mobile';

function Index(props) {
  return (
    <Box>
      <MainContentDesktop {...props} />
      {/* <Box d={{ base: 'none', md: 'block' }}>
        <MainContentDesktop {...props} />
      </Box>

      <Box d={{ base: 'block', md: 'none' }}>
        <MainContentMobile {...props} />
      </Box> */}
    </Box>
  );
}

export default Index;
