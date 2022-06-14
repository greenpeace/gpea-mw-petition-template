import React from 'react';
import { Box } from '@chakra-ui/react';

const Card = ({ image, title, content }) => {
  return (
    <div className="inline-block px-2">
      <div className="relative w-[85vw] h-[500px] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <Box
          backgroundImage={image}
          backgroundRepeat="no-repeat"
          backgroundSize={'cover'}
          pos={'absolute'}
          top={0}
          bottom={0}
          w={'full'}
        >
          <div className="absolute left-6 right-6 bottom-6">
            <p className="text-[18px] font-bold text-[#FFF] border-b-2 pb-4 mb-4">
              {title}
            </p>
            <p className="mt-4 text-[#FFF] min-h-[120px]">{content}</p>
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
