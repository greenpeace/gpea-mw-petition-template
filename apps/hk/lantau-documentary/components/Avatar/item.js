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
          alt={name}
        />
      </div>
      <div className="flex-1">
        <div className="text-center md:text-left p-4">
          <p className="text-[20px] pt-2 pb-2 font-bold">{name}</p>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
};

export default AvatarItem;
