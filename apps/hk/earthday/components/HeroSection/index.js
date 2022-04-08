import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroSection from './hero';
import HeroSectionDesktop from './desktop';
import HeroSectionMobile from './mobile';

function Index(props) {
  return (
    <Box>
      <HeroSection {...props} />
      {/* <Box d={{ base: 'none', md: 'block' }}>
        <HeroSectionDesktop {...props} />
      </Box>
      <Box d={{ base: 'block', md: 'none' }}>
        <HeroSectionMobile {...props} />
      </Box> */}
    </Box>
  );
}

export default Index;
