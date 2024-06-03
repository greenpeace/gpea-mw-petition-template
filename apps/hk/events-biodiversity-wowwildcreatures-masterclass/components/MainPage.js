import React, {
	useState,
	useEffect,
	useCallback,
	useContext,
	useRef
} from 'react';
import {
	Box,
	Image,
	Button,
	Link,
	useMediaQuery,
	Slide
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { AppContext } from '../context/appContext';
import { useGlobalContext } from '../context/global';
import RobertClassHero from './RobertClassHero';
import ResponsiveCarousel from './ResponsiveCarousel';
import formContent from '../form';
import * as formActions from 'store/actions/action-types/form-actions';
import { VideoProvider } from '../context/video';
import Video from './Video';
import HomeSwiper from './HomeSwiper';
import RobertClassVision from './RobertClassVision';
import { OrangeCTA } from '@common/styles/components/formStyle';
import { useIntersection } from '../util';
// import HeroSection from './HeroSection';
// import AvatarGroup from './Avatar';
// import VisionGroup from './Vision';
// import SwiperGroup from './Swiper';
// import Information from './Information';
// import FixedCTA from '../components/FixedCTA';
// import Support from './Support';

import main01Img from '../images/robert-class/main-01.webp';
import main02Img from '../images/robert-class/main-02.webp';
import main03Img from '../images/robert-class/main-03.webp';
import main04Img from '../images/robert-class/main-04.webp';
import lovingAnimals from '../images/robert-class/loving-animals.webp';
import logoAnimals from '../images/robert-class/logo-animals.webp';

import robertClassIntro from '../images/robert-class/robert-intro.webp';
import { scrollToRef } from '../util';

import SignupForm from '@components/GP/HKForm';
import DonationModule from '@components/GP/DonationModule';

const WRAPPER_CLASSES = 'container px-4 relative mx-auto md:max-w-[1345px]';

function MainPage({ status, theme, setFormContent, signup }) {
  const { submitted } = status;
	const data = useContext(AppContext);
	const value = useGlobalContext();
	const router = useRouter();
	const { p, ep, s } = router.query;

	const [signupBtnRef, setSignupBtnRef] = useState(null);

	const visionSection = useRef(null);
	const signupSection = useRef(null);
	const videoListSection = useRef(null);
	const introSection = useRef(null);
	const courseSection = useRef(null);
	const ourWorkSection = useRef(null);

  console.log("value==============>", value)
  console.log("submitted====>", submitted)

	const RenderForm = useCallback(() => {
		return value.isLoggedIn ? (
			<DonationModule
				market={'HK'}
				language={'zh_HK'}
				campaign={'elm_infopage'}
				campaignId={'7012u000000OtKJAA0'}
				env={'production'}
			/>
		) : (
			<SignupForm setSignupBtnRef={setSignupBtnRef} />
		);
	}, [value.isLoggedIn]);

	useEffect(() => {
		const REFS = {
			visionSection: visionSection,
			signupSection: signupSection,
			videoListSection: videoListSection,
			introSection: introSection,
			courseSection: courseSection,
			ourWorkSection: ourWorkSection
		};

		if (!!s) {
			const ref = s;
			if (ref) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				scrollToRef(REFS[ref]);
			}
		}
	}, [s]);

	useEffect(() => {
		setFormContent(formContent);
	}, []);

  useEffect(() => {
    if(submitted){
      router.push(
				`/?p=thankyou`,
				`${window.location.href.split('?')[0]}/?p=thankyou`,
				{
					shallow: true
				}
			);
    }
	}, [submitted]);

	return (
		<Box>
			<RobertClassHero />
			<div className="spacer flex-col space-y-12" ref={signupSection}>
				<div
					className={`${WRAPPER_CLASSES} mt-[30px] md:mt-[-240px]`}
					style={{ zIndex: 10 }}
				>
					<div className="relative z-10 flex flex-col-reverse gap-8 md:gap-0 lg:flex-row">
						<div className="relative w-[100%] flex-1 md:mt-[270px]">
							<>
								<div className="flex w-full flex-col gap-4">
									<h1 className="text-2xl font-bold text-[#007c00] md:text-3xl">
										一起相識香港「野」 以鏡頭探索我們的野外生態
									</h1>
									<p className="">
										你或許知道香港不止是個石屎森林，但你知道我們擁有極豐富的生物多樣性嗎？香港地擁有超過
										540 種鳥類、逾 230 種蝴蝶，以及過百種兩棲及爬行類動物！
									</p>

									<p className="">
										綠色和平特意請來生態攝影師 Robert Ferguson
										為大家製作免費網上課程：相識香港野——生態探索及攝影大師班，一連七集精彩內容教你認識香港自然生態，由淺入深分享拍攝大小野外生物冷知識！不論是只有手機在手的自然愛好者，抑或是略有經驗的攝影師，都可從
										Robert
										的無私分享中加深對香港自然環境及生態攝影的了解。立即登記，一起認識、賞識香港「野」！
									</p>

									<p className="">
										* 2024 年 6 月 5 日起，逢星期三更新最新集數
									</p>
								</div>
							</>
						</div>
						<div className="relative w-[100%] flex-1">
							<Box
								className="md:sticky md:top-[70px]"
								maxW="500px"
								mx="auto"
								bgColor="white"
								borderRadius={8}
								boxShadow="lg"
								overflow="hidden"
							>
								<RenderForm />
							</Box>
						</div>
					</div>
				</div>

				<div className={`${WRAPPER_CLASSES}`} ref={courseSection}>
					<div className="flex flex-row items-center justify-center gap-4">
						<div className="relative w-[40%] overflow-hidden md:w-[20%]">
							<NextImage
								alt={'main-01'}
								src={main01Img}
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							></NextImage>
						</div>
						<h1 className="text-center text-2xl font-bold text-[#007c00] md:text-3xl">
							七集豐富內容 走進林木之間 探索香港野
						</h1>
					</div>
					<ResponsiveCarousel />
				</div>

				{/* VIDEO */}
				<div
					className="vide-bg relative overflow-hidden bg-[#F2F2F2] py-4 md:p-12 xl:overflow-visible"
					ref={videoListSection}
				>
					<div
						className={`${WRAPPER_CLASSES} relative overflow-hidden md:max-w-[960px] md:overflow-visible`}
					>
						<div className="absolute -left-40 z-10 hidden max-w-[256px] md:block">
							<NextImage
								alt={'hero'}
								src={main03Img}
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							></NextImage>
						</div>

						<div className="absolute -bottom-36 -right-48 z-10 hidden max-w-[256px] -scale-x-100 md:block">
							<NextImage
								alt={'hero'}
								src={main04Img}
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							></NextImage>
						</div>

						<div className="absolute -right-64 -top-36 z-10 hidden max-w-[360px] -scale-x-100 md:block">
							<NextImage
								alt={'hero'}
								src={main02Img}
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							></NextImage>
						</div>
						{/* <VideoProvider>
              <Video />
            </VideoProvider> */}
					</div>
				</div>

				{/* Robert Intro */}
				<div
					className={`container relative mx-auto px-4 md:max-w-[1200px]`}
					ref={introSection}
				>
					<div className="flex flex-col items-center md:flex-row">
						<div className="flex w-full md:w-1/2">
							<div className="relative overflow-hidden">
								<Image
									alt={'robertClassIntro'}
									src={robertClassIntro}
									width={'full'}
									height={'auto'}
								></Image>
							</div>
						</div>
						<div className="flex w-full flex-col gap-4 md:w-1/2">
							<h1 className="text-2xl font-bold text-[#007c00] md:text-3xl">
								導師簡介
							</h1>
							<p className="">
								得獎生態攝影師 Robert Ferguson，曾居港超過 30 年，著有「香港野
								Hong Kong Wild
								Creatures」網誌與書籍，圖文並茂記錄鏡頭下的香港珍貴物種。他希望透過教育實踐他的座右銘：觀察、尋找、發現、學習、愛上、保護。「我深信只要讓人及小孩親身走進大自然，他們就會懂得欣賞：人類與動物皆屬自然環境一分子，並不分割。」
							</p>
						</div>
					</div>
				</div>

				<div className="pl-0 md:pl-4">
					<HomeSwiper />
				</div>

				{/* Other Intro */}
				<div
					className={`container relative mx-auto px-4 md:max-w-[1200px]`}
					ref={ourWorkSection}
				>
					<div className="flex flex-col-reverse items-center md:flex-row">
						<div className="flex w-full flex-col gap-4 md:w-1/2">
							<h1 className="text-2xl font-bold text-[#007c00] md:text-3xl">
								綠色和平在做什麼？了解我們如何保護瀕臨絕種動物、守護生物多樣性
							</h1>
							<p className="">
								隨着氣候危機、城市發展、塑膠污染等問題，香港以至全球的生物多樣性正受到前所未見的威脅。最新研究指出，全球有一百萬動植物物種正面臨滅絕的危機，綠色和平一直致力守護全球生態，期盼能為動植物留一口喘息的空間。
							</p>
						</div>
						<div className="flex w-full md:w-1/2">
							<div className="relative overflow-hidden">
								<Image
									alt={'lovingAnimals'}
									src={lovingAnimals}
									w={'full'}
									h={'auto'}
								></Image>
							</div>
						</div>
					</div>
				</div>

				<div ref={visionSection}>
					<RobertClassVision />
				</div>

				<div
					className={`container relative mx-auto px-4 py-10 text-center md:max-w-[1200px]`}
				>
					<div className="flex flex-col gap-4">
						<h1 className="text-center text-2xl font-bold text-[#007c00] md:text-3xl">
							相識香港野——生態探索及攝影大師班
						</h1>
						<h1 className="text-center text-2xl font-bold text-[#007c00] md:text-3xl">
							一起認識、賞識香港「野」！
						</h1>

						<div className="my-2">
							<Button
								{...OrangeCTA}
								margin={'auto'}
								w="fit-content"
								px={6}
								type={'submit'}
								onClick={() => {
									scrollToRef(signupSection);
								}}
							>
								立即登記
							</Button>
						</div>

						<div className="relative mx-auto max-w-[640px] overflow-hidden">
							<Image
								alt={'logoAnimals'}
								src={logoAnimals}
								w={'full'}
								h={'auto'}
							></Image>
						</div>
					</div>
				</div>
			</div>
			{/* <Box>
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
			{p !== 'petition' && <StickyButton />} */}
		</Box>
	);
}

// const StickyButton = () => {
// 	const data = useContext(AppContext);
// 	const visionSectionInView = useIntersection(data.videoSection, '0px');

// 	const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
// 	const [showCTAButton, setShowCTAButton] = useState(true);
// 	const router = useRouter();

// 	useEffect(() => {
// 		if (data.videoSectionMocked) {
// 			if (isLargerThanLG) {
// 				setTimeout(() => {
// 					setShowCTAButton(false);
// 				}, 500);
// 				return;
// 			}
// 			setShowCTAButton(!visionSectionInView && !isLargerThanLG);
// 		}
// 	}, [visionSectionInView, isLargerThanLG, data.videoSectionMocked]);

// 	return (
// 		<Slide
// 			direction="bottom"
// 			in={showCTAButton}
// 			style={{ zIndex: 10 }}
// 			d={showCTAButton ? 'block' : 'none'}
// 		>
// 			<FixedCTA
// 				onClick={() =>
// 					router.push(
// 						`/?p=petition`,
// 						`${window.location.href.split('?')[0]}/?p=petition`,
// 						{
// 							shallow: true
// 						}
// 					)
// 				}
// 				text={'立即觀看'}
// 			/>
// 		</Slide>
// 	);
// };

// export default MainPage;

const mapStateToProps = ({ status, theme, signup }) => {
	return { status, theme: theme.data, signup: signup.data };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setFormContent: (data) => {
			dispatch({ type: formActions.SET_FORM, data });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
