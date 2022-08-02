import React from 'react';
import Image from 'next/image';

export const StaticNextImage = (props) => {
  const { src, alt, width, height, ...rest } = props;
  return <Image width={width} height={height} src={src} alt={alt} {...rest} />;
};
