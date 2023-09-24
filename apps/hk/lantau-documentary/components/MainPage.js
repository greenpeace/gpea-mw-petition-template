import React, { useState, useEffect, useContext } from 'react';
import {
	Box,
	Image,
	Button,
	Link,
	useMediaQuery,
	Slide
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AppContext } from '../context/appContext';
import { useIntersection } from '../util';
import HeroSection from './HeroSection';
import AvatarGroup from './Avatar';
import VisionGroup from './Vision';
import SwiperGroup from './Swiper';
import Information from './Information';
import FixedCTA from '../components/FixedCTA';
import Support from './Support';

import subBanner from '../images/2022_lantau_docu_poster_b.jpg';
import moviePoster from '../images/GP_lantau_poster4.jpg';
import dolphinBackground from '../images/docu_dolphin.jpg';

import dolphinBackgroundMobile from '../images/docu_dolphin_mobile.jpg';

import joinBackground from '../images/mobile/join_background.jpeg';
import joinBackgroundDesktop from '../images/hd/SignBg2X.jpg';
// import joinBackgroundDesktop from '../images/join_background.jpg';

function MainPage() {
	const data = useContext(AppContext);
	const router = useRouter();
	const { p } = router.query;
	const scrollToRef = (ref) => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const {
		heroSection,
		visionSection,
		swiperSection,
		supportSection,
		signupSection,
		videoSection,
		setVideoSectionMocked,
		heroSectionInView,
		heroSectionInViewTrigger
	} = data;

	const SECTIONS = [
		{ refName: 'heroSection', ref: heroSection },
		{ refName: 'visionSection', ref: visionSection },
		{ refName: 'swiperSection', ref: swiperSection },
		{ refName: 'supportSection', ref: supportSection },
		{ refName: 'signupSection', ref: signupSection }
	];

	useEffect(() => {
		const { s } = router.query;
		const mapSection = SECTIONS.find((d) => d.refName === s);
		if (mapSection) {
			scrollToRef(mapSection.ref);
		}
	}, [router]);

	return (
		<>
			<Box>
				<div className="overflow-hidden">
					<HeroSection
						refProp={heroSection}
						videoRefProp={videoSection}
						setVideoSectionMocked={setVideoSectionMocked}
						heroSectionInView={heroSectionInView}
					/>
				</div>
				<div className="container mx-auto md:hidden md:p-[30px]">
					<Image src={subBanner} alt="香港大嶼山生態紀錄片" w={'100%'} />
				</div>

				<div className="md:hidden">
					<AvatarGroup />
				</div>

				<div ref={visionSection}>
					<VisionGroup />
				</div>

				<Box
					backgroundImage={{
						base: dolphinBackgroundMobile,
						md: dolphinBackground
					}}
					backgroundPosition={'center center'}
					backgroundRepeat="no-repeat"
					backgroundSize={'cover'}
					h={{ base: '360px', lg: '480px' }}
					w="100%"
				/>

				<Box ref={heroSectionInViewTrigger} />

				<div ref={swiperSection}>
					<SwiperGroup />
				</div>

				<div>
					<Support />
				</div>

				<Box
					backgroundImage={{ base: joinBackground, md: joinBackgroundDesktop }}
					backgroundPosition={'bottom center'}
					backgroundSize={{ base: '100%' }}
					backgroundRepeat={'no-repeat'}
					w={'full'}
				>
					<div ref={supportSection}>
						<Information />
					</div>

					<div ref={signupSection}>
						<div className="container mx-auto min-h-[480px] max-w-[1180px] px-[20px] py-[36px] lg:min-h-[600px]">
							<div className="md:ml-[60%]">
								<h2 className="pb-[20px] text-[24px] font-bold md:text-[28px]">
									參與聯署
								</h2>
								<p className="pb-[30px]  text-[16px] leading-[24px]">
									你的聯署將有助推動政府撤回「明日大嶼」填海計劃，守護本地珍貴海洋生態。
								</p>
								<Link
									isExternal
									href="https://cloud.greenhk.greenpeace.org/petition-general-elm-mw?ref=lantau-documentary-petition-section"
									_hover={{ underline: 'none' }}
								>
									<Button
										color="white"
										bgColor={'orange.500'}
										_hover={{ bg: 'orange.300' }}
									>
										立即聯署
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</Box>
			</Box>
			{p !== 'petition' && <StickyButton />}
		</>
	);
}

const StickyButton = () => {
	const data = useContext(AppContext);
	const visionSectionInView = useIntersection(data.videoSection, '0px');

	const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
	const [showCTAButton, setShowCTAButton] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (data.videoSectionMocked) {
			if (isLargerThanLG) {
				setTimeout(() => {
					setShowCTAButton(false);
				}, 500);
				return;
			}
			setShowCTAButton(!visionSectionInView && !isLargerThanLG);
		}
	}, [visionSectionInView, isLargerThanLG, data.videoSectionMocked]);

	return (
		<Slide
			direction="bottom"
			in={showCTAButton}
			style={{ zIndex: 10 }}
			d={showCTAButton ? 'block' : 'none'}
		>
			<FixedCTA
				onClick={() =>
					router.push(
						`/?p=petition`,
						`${window.location.href.split('?')[0]}/?p=petition`,
						{
							shallow: true
						}
					)
				}
				text={'捐款收看'}
			/>
		</Slide>
	);
};

export default MainPage;
