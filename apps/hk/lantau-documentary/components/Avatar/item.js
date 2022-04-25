import React from 'react';
import { Avatar } from '@chakra-ui/react';

const AvatarItem = ({ image, width, height, name, role }) => {
  return (
    <div>
      <div>
        <Avatar name="馮漢城" src={image} w={width} h={height} bgColor={'transparent'}/>
      </div>
      <div className="text-center pt-2">
        <h2 className="pb-1">{name}</h2>
        <h2 className="font-[700]">{role}</h2>
      </div>
    </div>
  );
}

export default AvatarItem;
