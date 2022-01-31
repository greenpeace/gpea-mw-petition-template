import React from 'react';
import { Box, Image } from '@chakra-ui/react';

import bgImage from '../../images/questionLayers/Q1/背景圖Q1.jpg';
import bgImage02 from '../../images/questionLayers/Q1/極光Q1.png';
import bgImage03 from '../../images/questionLayers/Q1/冰山Q1.png';

const Bg = () => {
  return (
    <Box>
      <Image
        w="100%"
        h="100%"
        top={0}
        objectFit={'cover'}
        bgImage={bgImage02}
        position="absolute"
        zIndex={2}
        opacity={0.4}
      />

      <Image
        w="100%"
        h="100%"
        top={0}
        objectFit={'cover'}
        bgImage={bgImage03}
        position="absolute"
        zIndex={1}
        opacity={0.4}
      />

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
