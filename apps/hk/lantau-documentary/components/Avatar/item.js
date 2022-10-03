import React from 'react';
import { Avatar } from '@chakra-ui/react';

const AvatarItem = ({ image, width, height, name, role }) => {
	return (
		<div className="flex flex-col items-center md:mb-4 md:flex-row">
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
				<div className="p-4 text-center md:text-left">
					<p className="pt-2 pb-2 text-[20px] font-bold">{name}</p>
					<span>{role}</span>
				</div>
			</div>
		</div>
	);
};

export default AvatarItem;
