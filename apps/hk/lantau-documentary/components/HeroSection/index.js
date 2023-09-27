import React, { useEffect } from 'react';
import {
	AspectRatio,
	Box,
	Button,
	Image,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent
} from '@chakra-ui/react';
import { useViewportScroll, motion, useTransform } from 'framer-motion';
import { useRouter } from 'next/router';
import { CloseIcon } from '@chakra-ui/icons';
import AvatarGroup from '../../components/Avatar';
import MobileHero from '../../images/mobile/hero.png';
import MobileHeroFront from '../../images/mobile/hero_front.png';
import DesktopHero from '../../images/hero_v2.jpg';
import DesktopHeroFront from '../../images/hero_front_v2.png';

import subBanner from '../../images/202309_Lantau_documentary_relaunch_poster-03.jpg';
import moviePoster from '../../images/GP_lantau_poster4.jpg';
import appLogo from '../../images/app_logo.png';

import Logo from './logo';

function HeroSection({
	refProp,
	videoRefProp,
	setVideoSectionMocked,
	heroSectionInView
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { scrollY, scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, (value) => 1 + value * 1.25);
	const scale2 = useTransform(scrollYProgress, (value) => 1 + value * 1.15);
	const y = useTransform(scrollY, [0, 100], [0, -50]);
	const y2 = useTransform(scrollY, [0, 100], [0, 130]);
	const router = useRouter();

	useEffect(() => {
		if (videoRefProp !== null) {
			setVideoSectionMocked(true);
		}
	}, [videoRefProp]);

	return (
		<div className="relative">
			<Box d={{ base: 'block', md: 'none' }}>
				{!heroSectionInView && (
					<motion.div
						className="box"
						style={{
							y: y2,
							scale: scale2,
							position: 'absolute',
							bottom: 0,
							top: 0,
							width: '100%',
							zIndex: 0
						}}
					>
						<Image src={MobileHero} width={'100%'} />
					</motion.div>
				)}
			</Box>

			<Box d={{ base: 'none', md: 'block' }}>
				{!heroSectionInView && (
					<motion.div
						className="box"
						style={{
							y: y2,
							scale: scale2,
							position: 'absolute',
							bottom: 0,
							top: 0,
							width: '100%',
							zIndex: 0
						}}
					>
						<Image src={DesktopHero} width={'100%'} />
					</motion.div>
				)}
			</Box>
			{/* <Box
        backgroundImage={{ base: MobileHero, lg: DesktopHero }}
        backgroundPosition={'top center'}
        backgroundRepeat="no-repeat"
        backgroundSize={'100%'}
        w={'100%'}
        position="absolute"
        top={0}
        bottom={0}
        backgroundAttachment={'fixed'}
      /> */}
			<div
				className="relative mx-[10px] min-h-[105px] pt-[125px] md:mx-0 md:pt-[160px] lg:pt-[130px] xl:pt-[195px]"
				style={{ zIndex: 1 }}
			>
				<Box
					maxW={{ base: '355px', sm: '480px', lg: '720px', xl: '1040px' }}
					h={{ base: '105px', sm: '145px', lg: '215px', xl: '310px' }}
					mx={'auto'}
				>
					<Logo refInView={heroSectionInView}>
						<Image
							src={appLogo}
							m={'auto'}
							maxW={{ base: '355px', sm: '480px', lg: '720px', xl: '1040px' }}
						/>
					</Logo>
				</Box>
			</div>
			<Box d={{ base: 'block', md: 'none' }}>
				{!heroSectionInView && (
					<motion.div
						className="box"
						style={{
							y: y,
							scale: scale,
							position: 'absolute',
							bottom: 0,
							top: 0,
							width: '100%',
							zIndex: 2
						}}
					>
						<Image src={MobileHeroFront} width={'100%'} />
					</motion.div>
				)}
			</Box>

			<Box d={{ base: 'none', md: 'block' }}>
				{!heroSectionInView && (
					<motion.div
						className="box"
						style={{
							y: y,
							scale: scale,
							position: 'absolute',
							bottom: 0,
							top: 0,
							width: '100%',
							zIndex: 2
						}}
					>
						<Image src={DesktopHeroFront} width={'100%'} />
					</motion.div>
				)}
			</Box>
			<div
				className="container relative mx-auto px-[20px]"
				style={{ zIndex: 11 }}
			>
				<div
					className="flex flex-col pt-[65px] pb-[50px] md:py-0 md:pt-[100px] lg:pt-[140px]"
					ref={videoRefProp}
				>
					<div className="text-center text-[#FFF]">
						<div>
							<h1
								className="mb-4 text-3xl font-bold leading-relaxed md:mb-8 md:text-5xl"
								style={{ textShadow: '0 0 4px rgba(0,0,0,0.45)' }}
							>
								香港大嶼山生態紀錄片
							</h1>
							<h2
								className="mb-6 text-xl leading-relaxed md:mb-10  md:text-2xl"
								style={{ textShadow: '0 0 4px rgba(0,0,0,0.45)' }}
							>
								<span className="mb-2 md:block">免費登記觀看</span>
								<span className="md:inline-block">認識本地生態</span>
								<span className="block md:inline-block md:pl-2">
									支持堅守大嶼工作
								</span>
							</h2>
						</div>
						<div className="mx-auto flex flex-row gap-4 md:max-w-[380px]">
							<div className="flex-1">
								<Button
									size="lg"
									w="100%"
									color="white"
									bgColor={'orange.500'}
									_hover={{ bg: 'orange.300', color: '#FFF' }}
									onClick={() =>
										router.push(
											`/?p=petition`,
											`${window.location.href.split('?')[0]}/?p=petition`,
											{ shallow: true }
										)
									}
								>
									立即觀看
								</Button>
							</div>
							<div className="flex-1">
								<Button
									size="lg"
									w="100%"
									color="orange.500"
									bgColor={'rgba(255,255,255,0.95)'}
									borderColor={'orange.500'}
									_hover={{ color: 'orange.300' }}
									onClick={onOpen}
								>
									紀錄片預告
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="container relative mx-auto px-[20px] pb-[40px] md:max-w-[1180px] md:pt-[150px] md:pb-[60px] lg:pt-[270px]"
				style={{ zIndex: 10 }}
				ref={refProp}
			>
				<Box
					bgGradient={{
						base: 'linear(to-b, transparent 0%, white 50%, white 100%)',
						md: 'linear(to-b, transparent 0%, white 30%, white 100%)',
						xl: 'linear(to-b, transparent 0%, white 50%, white 100%)'
					}}
					className="mask"
					position="absolute"
					left={0}
					right={0}
					top={0}
					bottom={0}
					zIndex={3}
					w={'full'}
					d={{ xl: 'none' }}
				/>
				<div
					className="space-between relative flex flex-col md:gap-[40px] lg:flex-row xl:gap-[120px]"
					style={{ zIndex: 6 }}
				>
					<div className="flex flex-col gap-4 md:flex-1">
						<h1 className="mb-2 text-[28px] font-bold">大嶼山生態紀錄片</h1>

						<p className="text-[18px] font-medium">
							歷時大半年製作的生態盛會
						</p>

						<div className="font-medium leading-loose md:max-w-[460px]">
							<span className="inline-block mr-2">片長：25分鐘</span> 
							<span className="inline-block mr-2">編導：馮漢城</span> 
							<span className="inline-block mr-2">聲音導航：陳志雲</span>
						</div>

						<div className="flex flex-col gap-4 py-4">
							<p className="text-[16px] leading-relaxed">
								《山海大嶼》是由綠色和平歷時大半年製作，與本地得獎攝製班底合作出品的大嶼山生態紀錄片。製作團隊曾多次上山下海、通宵逗留野外拍攝物種的珍貴時刻，多角度呈現大嶼生態面貌。
							</p>
							<p className="text-[16px] leading-relaxed">
								全片包含航拍、水底拍攝、夜視拍攝等，務求將大嶼山生態最真實一面呈現螢幕上。我們亦邀請到本地資深傳媒人陳志雲先生為本片聲音導航，全方位帶領您了解大嶼山豐富的生物多樣性、值得香港人驕傲的一面。
							</p>
						</div>

						<div className="hidden md:block">
							<AvatarGroup />
						</div>
					</div>
					<div className="relative hidden flex-1 md:block">
						<div className="sticky top-0">
							<Image src={subBanner} alt="大嶼山生態紀錄片" w={'100%'} />
						</div>
					</div>
				</div>
			</div>

			<Modal isOpen={isOpen} size={'4xl'} onClose={onClose} isCentered={true}>
				<ModalOverlay />
				<ModalContent
					pos={'relative'}
					px={{ base: '20px' }}
					bgColor={'transparent'}
					shadow={'none'}
				>
					<CloseIcon
						pos={'absolute'}
						top={'-30px'}
						right={'15px'}
						color="#FFF"
						cursor={'pointer'}
						onClick={onClose}
					/>
					<AspectRatio w="100%" ratio={16 / 9}>
						<iframe
							src="https://www.youtube.com/embed/KeMRrYCfKFI"
							allowFullScreen
						/>
					</AspectRatio>
				</ModalContent>
			</Modal>
		</div>
	);
}

export default HeroSection;
