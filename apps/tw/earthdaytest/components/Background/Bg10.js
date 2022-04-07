import React from 'react';
import { Box, Image } from '@chakra-ui/react';

import bgImage from '../../images/questionLayers/Q10/背景圖Q10-100.jpg';

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
        zIndex={2}
      />
    </Box>
  );
};

export default Bg;
