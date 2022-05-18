import React from 'react';
import { Avatar } from '@chakra-ui/react';

const AvatarItem = ({ image, width, height, name, role }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:mb-4">
      <div className="flex-1">
        <Avatar
          name={name}
          src={image}
          w={`${width}px`}
          h={`${height}px`}
          bgColor={'transparent'}
          p="1"
          sx={{
            border: '2px dotted #66cc00',
          }}
        />
      </div>
      <div className="flex-1">
        <div className="text-center pt-2">
          <h2 className="pt-2 pb-2">{name}</h2>
          <h2 className="font-[700]">{role}</h2>
        </div>
      </div>
    </div>
  );
};

export default AvatarItem;
