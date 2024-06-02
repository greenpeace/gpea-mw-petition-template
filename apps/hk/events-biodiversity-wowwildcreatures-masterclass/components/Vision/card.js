import React from 'react';
import { Box } from '@chakra-ui/react';

const Card = ({ image, title, content }) => {
	return (
		<div className="inline-block px-2">
			<div className="relative h-[500px] w-[85vw] overflow-hidden rounded-xl shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
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
						<p className="mb-4 border-b-2 pb-4 text-[18px] font-bold text-[#FFF]">
							{title}
						</p>
						<p className="mt-4 min-h-[120px] text-[#FFF]">{content}</p>
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
