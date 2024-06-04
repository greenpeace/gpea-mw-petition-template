import { useVideoContext } from '../../context/video';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { Box, Text, Flex, Button, HStack, Image } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import PlayListGroup from '../../components/PlayList';
export default function Episodes() {
	const value = useVideoContext();
	const router = useRouter();
	const { selectedEp } = value;
	const { p, s } = router.query;

	const urlParams = new URLSearchParams(router.asPath);

	const RenderBackgroundVideo = useCallback(() => {
		return (
			<Box
				className="video-container min-h-[640px] lg:min-h-[860px]"
				position={'absolute'}
				w="full"
				h={{base: '640px', xl: 'auto'}}
				overflow={'hidden'}
			>
				<Box
					className="bgVideoMask"
					position={'absolute'}
					top={0}
					left={0}
					width={'full'}
					height={'100%'}
					objectFit={'cover'}
					zIndex={3}
					background={'rgba(0, 0, 0, 0.6)'}
				/>
				<Box
					alt={'bg'}
					backgroundImage={selectedEp?.banner}
					bgPosition={'center center'}
					backgroundSize="cover"
					className="min-h-[640px] lg:min-h-[860px] transition-all duration-300 ease-in-out"
				/>
			</Box>
		);
	}, [selectedEp]);

	return (
		<div className="ep-list">
			<RenderBackgroundVideo />
			<div
				className="container relative mx-auto px-[20px] md:max-w-[1345px]"
				style={{ zIndex: 11 }}
			>
				<div className="flex flex-col pb-[40px] pt-40 md:py-0 md:pt-[80px] lg:pt-[200px]">
					<div className="text-left text-[#FFF]">
						<div>
							<h2
								className="text-2xl font-bold md:text-5xl "
								style={{ textShadow: '0 0 4px rgba(0,0,0,0.8)' }}
							>
								<span className="leading-normal">
									<Text className="block">{selectedEp?.name}</Text>
								</span>
							</h2>
							<Flex gap={2} maxW={480}>
								<Text fontSize={'md'} noOfLines={3}>
									{selectedEp?.content}
								</Text>
							</Flex>
						</div>
					</div>
				</div>
				<Flex pt={6} pb={{ base: 6, md: 12 }}>
					<HStack>
						<Button
							size={'lg'}
							rightIcon={<FaPlay />}
							onClick={() => {
								router.push(
									`?p=video`,
									`${window.location.href.split('?')[0]}?p=video&ep=${
										urlParams.get('ep') ?? '1'
									}`,
									{
										shallow: true
									}
								);
							}}
						>
							播放 Play
						</Button>
					</HStack>
				</Flex>
			</div>

			<Box
				position={'relative'}
				zIndex={99}
				maxW={1920}
				mx={'auto'}
				px={{ base: 0, md: 4 }}
			>
				<PlayListGroup />
			</Box>
		</div>
	);
}
