import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ChakraNextImage = (props) => {
  const { src, alt, width, height, ...rest } = props;
  return (
    <Box position="relative" {...rest}>
      <Image
        objectFit="cover"
        layout="fill"
        width={width}
        height={height}
        src={src}
        alt={alt}
      />
    </Box>
  );
};
