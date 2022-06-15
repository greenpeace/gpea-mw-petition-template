import React from 'react';
import { Box } from '@chakra-ui/react';

const Card = ({ image, title, content }) => {
  return (
    <div>
      <p className="text-[18px] font-bold mb-[20px]">{title}</p>
      <div className="flex flex-col rounded-lg overflow-hidden shadow-md items-center">
        <div className="w-full relative min-h-[180px]">
          <Box
            backgroundImage={image}
            backgroundPosition={'top center'}
            backgroundRepeat="no-repeat"
            backgroundSize={'cover'}
            pos={'absolute'}
            top={0}
            bottom={0}
            w={'full'}
          />
        </div>
        <div className="p-6 flex-1 text-[16px] leading-loose bg-[#FFF]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Card;
