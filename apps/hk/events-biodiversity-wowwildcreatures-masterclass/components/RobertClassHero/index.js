import React from 'react';
import { Box, Image } from '@chakra-ui/react';

import mobile_hero from '../../images/robert-class/hero/mobile_hero.png';
import background from '../../images/robert-class/hero/01e-background-colour.png';
import title from '../../images/robert-class/hero/01a-title.png';
import butterfly from '../../images/robert-class/hero/01b-butterfly.png';
import midGround from '../../images/robert-class/hero/01c-mid-ground.png';
import far from '../../images/robert-class/hero/01d-far.png';

export default function Hero() {
	return (
		<>
			<Box display={{ base: 'block', lg: 'none' }}>
				<Image
					src={mobile_hero}
					alt="background"
					w={'full'}
					h={'full'}
					objectFit={'cover'}
				/>
			</Box>
			<Box
				bgImage={background}
				bgSize={'cover'}
				h={'40vh'}
				minH={{ base: 600, lg: '80vh' }}
				position={'relative'}
				display={{ base: 'none', lg: 'block' }}
			>
				<Box maxW={'8xl'} mx={'auto'} px={4}>
					<Box className="title">
						<Image
							src={title}
							alt="title"
							maxW={{ base: 240, md: 320 }}
							pt={120}
						/>
					</Box>

					<Image
						src={butterfly}
						alt="butterfly"
						maxW={'50%'}
						position={'absolute'}
						bottom={0}
						right={0}
						zIndex={3}
					/>
				</Box>

				<Box
					className="mid-ground"
					pos={'absolute'}
					bottom={0}
					w={'full'}
					zIndex={2}
				>
					<Image
						src={midGround}
						alt="midGround"
						maxW={'full'}
						mx={'auto'}
					/>
				</Box>

				<Box
					className="bg-ground"
					pos={'absolute'}
					bottom={0}
					w={'full'}
					zIndex={1}
				>
					<Image
						src={far}
						alt="title"
						maxW={'full'}
						mx={'auto'}
					/>
				</Box>
			</Box>
		</>
	);
}
