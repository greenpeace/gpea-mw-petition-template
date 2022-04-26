import React from 'react';
import { Box } from '@chakra-ui/react';

const Card = ({ image, title, content }) => {
  return (
    <div>
      <h1 className="text-[18px] font-[700] leading-[36px] pb-[12px]">{title}</h1>
      <div className="flex flex-row gap-4 rounded-lg overflow-hidden shadow-md">
        <div className="w-[130px] relative">
          <Box
            backgroundImage={image}
            backgroundPosition={'top center'}
            backgroundRepeat="no-repeat"
            backgroundSize={'100%'}
            pos={'absolute'}
            top={0}
            bottom={0}
            w={'full'}
          />
        </div>
        <div className="flex-1 text-[16px] p-[14px]">{content}</div>
      </div>
    </div>
  );
};

export default Card;
