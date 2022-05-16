import React from 'react';
import { Box } from '@chakra-ui/react';

const Card = ({ image, name, role, content }) => {
  return (
    <div className="inline-block px-3">
      <div className="relative w-[285px] h-[495px] max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <Box
          backgroundRepeat="no-repeat"
          backgroundSize={'cover'}
          pos={'absolute'}
          top={0}
          bottom={0}
          w={'full'}
          bgColor={'#000'}
        >
          <div className="absolute left-4 top-4">
            <p className="text-[18px] font-[500] text-[#FFF]">{name}</p>
            <p className="text-[#FFF]">{role}</p>
          </div>

          <div className="absolute left-6 right-6 bottom-6">
            <p className="text-[#FFF]">{content}</p>
          </div>

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
