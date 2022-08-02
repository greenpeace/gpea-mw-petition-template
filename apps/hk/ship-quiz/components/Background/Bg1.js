import React from 'react';
import { Box, Image } from '@chakra-ui/react';

import bgImage from '../../images/result_page_background.jpg';

const Bg = () => {
  return (
    <Box>
      <Image
        w="100%"
        h="100%"
        top={0}
        objectFit={'cover'}
        bgImage={bgImage}
        position="absolute"
        zIndex={-1}
        opacity={0.4}
      />
    </Box>
  );
};

export default Bg;
