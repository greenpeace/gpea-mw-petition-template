import React from 'react';
import { Box } from '@chakra-ui/react';

const Card = ({ image, name, role, content }) => {
	return (
		<div className="inline-block px-2">
			<div className="relative h-[495px] w-[285px] max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
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
						<p className="text-[20px] font-bold text-[#FFF]">{name}</p>
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
