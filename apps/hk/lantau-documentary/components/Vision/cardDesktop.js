import React from 'react';
import { Box } from '@chakra-ui/react';

const Card = ({ image, title, content }) => {
  return (
    <div className="flex-1 relative" key={title}>
      <div className="absolute left-6 right-6 -bottom-[60px] z-30 max-w-[80%]">
        <p className="text-[20px] font-bold text-[#FFF] border-b-2 pb-4 mb-4">
          {title}
        </p>
        <p className="mt-4 text-[#FFF] min-h-[120px]">{content}</p>
      </div>
      <div className="relative w-[80%] h-[420px] rounded-[20px] mx-auto overflow-hidden">
        <Box
          backgroundImage={image}
          backgroundRepeat="no-repeat"
          backgroundSize={'cover'}
          pos={'absolute'}
          top={0}
          bottom={0}
          w={'full'}
        >
          <Box
            bgGradient="linear(to-b, transparent 0%, transparent 50%, black 100%)"
            h={'full'}
          />
        </Box>
      </div>
    </div>
  );
};

export default Card;
