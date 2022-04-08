import React from 'react';
import { Box, Image } from '@chakra-ui/react';

import CLOUD1 from '../../images/202204_EarthDayPush_R3_cloud01.svg';
import CLOUD2 from '../../images/202204_EarthDayPush_R3_cloud02.svg';
import CLOUD3 from '../../images/202204_EarthDayPush_R3_cloud03.svg';

export const Clouds = () => {
  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  const cloudProps = {
    position: 'absolute',
    transition: 'all 1.5s ease-out',
  };
  const randomSize = () => {
    return `${random(10, 30)}%`;
  };
  const randomOpacity = () => {
    return random(0.5, 0.9);
  };
  const randomX = () => {
    return `${random(1, 99)}%`;
  };

  const randomY = () => {
    return `${random(1, 99)}%`;
  };

  return (
    <>
      <Image
        src={CLOUD1}
        {...cloudProps}
        opacity={randomOpacity()}
        w={randomSize()}
        bottom={randomY()}
        right={randomX()}
      />
      <Image
        src={CLOUD1}
        {...cloudProps}
        opacity={randomOpacity()}
        w={randomSize()}
        bottom={randomY()}
        right={randomX()}
      />
      <Image
        src={CLOUD2}
        {...cloudProps}
        opacity={randomOpacity()}
        w={randomSize()}
        bottom={randomY()}
        right={randomX()}
      />
      <Image
        src={CLOUD3}
        {...cloudProps}
        opacity={randomOpacity()}
        w={randomSize()}
        bottom={randomY()}
        right={randomX()}
      />
      <Image
        src={CLOUD1}
        {...cloudProps}
        opacity={randomOpacity()}
        w={randomSize()}
        bottom={randomY()}
        right={randomX()}
      />
      <Image
        src={CLOUD2}
        {...cloudProps}
        opacity={randomOpacity()}
        w={randomSize()}
        bottom={randomY()}
        right={randomX()}
      />
      <Image
        src={CLOUD3}
        {...cloudProps}
        opacity={randomOpacity()}
        w={randomSize()}
        bottom={randomY()}
        right={randomX()}
      />
    </>
  );
};
