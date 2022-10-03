import React from 'react';
import { Box } from '@chakra-ui/react';

const Card = ({ image, title, content }) => {
	return (
		<div>
			<p className="mb-[20px] text-[18px] font-bold">{title}</p>
			<div className="flex flex-col items-center overflow-hidden rounded-lg shadow-md">
				<div className="relative min-h-[180px] w-full">
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
				<div className="flex-1 bg-[#FFF] p-6 text-[16px] leading-loose">
					{content}
				</div>
			</div>
		</div>
	);
};

export default Card;
