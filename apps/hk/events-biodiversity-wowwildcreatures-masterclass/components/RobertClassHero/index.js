import React from 'react';
import { Box, Image } from '@chakra-ui/react';

import mobile_hero from '../../images/robert-class/hero/mobile_hero.png';
import background from '../../images/robert-class/hero/01e-background-colour.png';
import title from '../../images/robert-class/hero/01a-title.png';
import butterfly from '../../images/robert-class/hero/01b-butterfly.png';
import midGround from '../../images/robert-class/hero/01c-mid-ground.png';
import far from '../../images/robert-class/hero/01d-far.png';
import { useViewportScroll, motion, useTransform } from 'framer-motion';
export default function Hero() {
	const { scrollY, scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, (value) => 1 + value * 1.25);
	const scale2 = useTransform(scrollYProgress, (value) => 1 + value * 1.15);
	const y = useTransform(scrollY, [0, 100], [0, -160]);
	const y2 = useTransform(scrollY, [0, 100], [0, 80]);

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
				overflow={'hidden'}
				bgSize={'cover'}
				h={'40vh'}
				minH={{ base: 600, lg: 960 }}
				position={'relative'}
				display={{ base: 'none', lg: 'block' }}
			>
				<Box maxW={'8xl'} mx={'auto'} px={4}>
					<motion.div
						className="title"
						style={{
							y: y2,
							// scale: scale2,
							position: 'absolute',
							bottom: 0,
							top: 0,
							width: '100%',
							zIndex: 0
						}}
					>
						<Image
							src={title}
							alt="title"
							maxW={{ base: 240, md: 320 }}
							pt={120}
						/>
					</motion.div>

					<motion.div
						className="butterfly"
						style={{
							y: y,
							// scale: scale2,
							position: 'absolute',
							bottom: 0,
							right: 0,
							width: '100%',
							maxW: '50%',
							zIndex: 3
						}}
					>
						<Image
						src={butterfly}
						alt="butterfly"
						maxW={'50%'}
						position={'absolute'}
						bottom={0}
						right={0}
						zIndex={3}
					/>
						
					</motion.div>

				
				</Box>

				<motion.div
					className="mid-ground"
					w={'full'}
					zIndex={2}
					style={{
							// y: y2,
							scale: scale2,
							position: 'absolute',
							bottom: 0,
							width: '100%',
							zIndex: 2
						}}
				>
					<Image src={midGround} alt="midGround" maxW={'full'} mx={'auto'} />
				</motion.div>

				<Box
					className="bg-ground"
					pos={'absolute'}
					bottom={0}
					w={'full'}
					zIndex={1}
				>
					<Image src={far} alt="title" maxW={'full'} mx={'auto'} />
				</Box>
			</Box>
		</>
	);
}
