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
import NextImage from "next/image";
import { useRouter } from 'next/router';
import { AppContext } from '../context/appContext';
import { useGlobalContext } from '../context/global';
import RobertClassHero from './RobertClassHero';
import ResponsiveCarousel from './ResponsiveCarousel';
import { VideoProvider } from "../context/video";
import Video from "./Video";
import HomeSwiper from "./HomeSwiper";
import RobertClassVision from "./RobertClassVision";
import { OrangeCTA } from '@common/styles/components/formStyle';
import { useIntersection } from '../util';
import HeroSection from './HeroSection';
import AvatarGroup from './Avatar';
import VisionGroup from './Vision';
import SwiperGroup from './Swiper';
import Information from './Information';
import FixedCTA from '../components/FixedCTA';
import Support from './Support';

import subBanner from '../images/202309_Lantau_documentary_relaunch_poster-03.jpg';
import dolphinBackground from '../images/docu_dolphin.jpg';

import dolphinBackgroundMobile from '../images/docu_dolphin_mobile.jpg';

import joinBackground from '../images/mobile/join_background.jpeg';
import joinBackgroundDesktop from '../images/hd/SignBg2X.jpg';
import main01Img from '../images/robert-class/main-01.webp'
// import joinBackgroundDesktop from '../images/join_background.jpg';

import { getUrlParams } from '@common/utils/helper';

import SignupForm from '@components/GP/HKForm';
import DonationModule from '@components/GP/DonationModule';

const WRAPPER_CLASSES = 'container px-4 relative mx-auto md:max-w-[1345px]';

function MainPage() {
	const data = useContext(AppContext);
	const value = useGlobalContext();
	const router = useRouter();
	const { p, ep, section } = router.query;

	const visionSection = useRef(null);
	const signupSection = useRef(null);
	const videoListSection = useRef(null);
	const introSection = useRef(null);
	const courseSection = useRef(null);
	const ourWorkSection = useRef(null);

	const RenderForm = useCallback(() => {
		return value.isLoggedIn ? <DonationModule /> : <SignupForm />;
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

		if (!!section) {
			const ref = section;
			if (ref) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				scrollToRef(REFS[ref]);
			}
		}
	}, [section]);

	// const scrollToRef = (ref) => {
	// 	ref.current?.scrollIntoView({ behavior: 'smooth' });
	// };

	// const {
	// 	heroSection,
	// 	visionSection,
	// 	swiperSection,
	// 	supportSection,
	// 	signupSection,
	// 	videoSection,
	// 	setVideoSectionMocked,
	// 	heroSectionInView,
	// 	heroSectionInViewTrigger
	// } = data;

	// const SECTIONS = [
	// 	{ refName: 'heroSection', ref: heroSection },
	// 	{ refName: 'visionSection', ref: visionSection },
	// 	{ refName: 'swiperSection', ref: swiperSection },
	// 	{ refName: 'supportSection', ref: supportSection },
	// 	{ refName: 'signupSection', ref: signupSection }
	// ];

	// useEffect(() => {
	// 	const { s } = router.query;
	// 	const mapSection = SECTIONS.find((d) => d.refName === s);
	// 	if (mapSection) {
	// 		scrollToRef(mapSection.ref);
	// 	}
	// }, [router]);

	return (
		<Box>
		<RobertClassHero/>
		<div className="flex-col spacer space-y-12" ref={signupSection}>
        <div
          className={`${WRAPPER_CLASSES} mt-[30px] md:mt-[-240px]`}
          style={{ zIndex: 10 }}
        >
          <div className="relative z-10 flex flex-col-reverse gap-8 md:gap-0 lg:flex-row">
            <div className="relative w-[100%] flex-1 md:mt-[270px]">
              <>
                <div className="w-full flex flex-col gap-4">
                  <h1 className="text-2xl md:text-3xl text-[#007c00] font-bold">
                  一起相識香港「野」 以鏡頭探索我們的野外生態
                  </h1>
                  <p className="">
                  你或許知道香港不止是個石屎森林，但你知道我們擁有極豐富的生物多樣性嗎？香港地擁有超過 540 種鳥類、逾 230 種蝴蝶，以及過百種兩棲及爬行類動物！
                  </p>

                  <p className="">
                  綠色和平特意請來生態攝影師 Robert Ferguson 為大家製作免費網上課程：相識香港野——生態探索及攝影大師班，一連七集精彩內容教你認識香港自然生態，由淺入深分享拍攝大小野外生物冷知識！不論是只有手機在手的自然愛好者，抑或是略有經驗的攝影師，都可從 Robert 的無私分享中加深對香港自然環境及生態攝影的了解。立即登記，一起認識、賞識香港「野」！
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
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="relative w-[40%] md:w-[20%] overflow-hidden">
              <NextImage
                alt={"main-01"}
                src={main01Img}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              ></NextImage>
            </div>
            <h1 className="text-2xl md:text-3xl text-[#007c00] font-bold text-center">
              七集豐富內容 走進林木之間 探索香港野
            </h1>
          </div>
          <ResponsiveCarousel />
        </div>

        {/* VIDEO */}
        {/* <div
          className="vide-bg py-4 md:p-12 bg-[#F2F2F2] relative overflow-hidden xl:overflow-visible"
          ref={videoListSection}
        >
          <div
            className={`${WRAPPER_CLASSES} md:max-w-[960px] relative overflow-hidden md:overflow-visible`}
          >
            <div className="absolute max-w-[256px] z-10 -left-40 hidden md:block">
              <NextImage
                alt={"hero"}
                src={"/robert-class/main-03.webp"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              ></NextImage>
            </div>

            <div className="absolute max-w-[256px] z-10 -right-48 -scale-x-100 -bottom-36 hidden md:block">
              <NextImage
                alt={"hero"}
                src={"/robert-class/main-04.webp"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              ></NextImage>
            </div>

            <div className="absolute max-w-[360px] z-10 -right-64 -scale-x-100 -top-36 hidden md:block">
              <NextImage
                alt={"hero"}
                src={"/robert-class/main-02.webp"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              ></NextImage>
            </div>
            <VideoProvider>
              <Video />
            </VideoProvider>
          </div>
        </div> */}

        {/* Robert Intro */}
        {/* <div
          className={`container px-4 relative mx-auto md:max-w-[1200px]`}
          ref={introSection}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex w-full md:w-1/2">
              <div className="relative overflow-hidden">
                <NextImage
                  alt={"main-01"}
                  src={"/robert-class/robert-intro.webp"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                ></NextImage>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-4">
              <h1 className="text-2xl md:text-3xl text-[#007c00] font-bold">
              導師簡介
              </h1>
              <p className="">
              得獎生態攝影師 Robert Ferguson，曾居港超過 30 年，著有「香港野 Hong Kong Wild Creatures」網誌與書籍，圖文並茂記錄鏡頭下的香港珍貴物種。他希望透過教育實踐他的座右銘：觀察、尋找、發現、學習、愛上、保護。「我深信只要讓人及小孩親身走進大自然，他們就會懂得欣賞：人類與動物皆屬自然環境一分子，並不分割。」
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="pl-0 md:pl-4">
          <HomeSwiper />
        </div> */}

        {/* Other Intro */}
        {/* <div
          className={`container px-4 relative mx-auto md:max-w-[1200px]`}
          ref={ourWorkSection}
        >
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="flex flex-col w-full md:w-1/2 gap-4">
              <h1 className="text-2xl md:text-3xl text-[#007c00] font-bold">
              綠色和平在做什麼？了解我們如何保護瀕臨絕種動物、守護生物多樣性
              </h1>
              <p className="">
              隨着氣候危機、城市發展、塑膠污染等問題，香港以至全球的生物多樣性正受到前所未見的威脅。最新研究指出，全球有一百萬動植物物種正面臨滅絕的危機，綠色和平一直致力守護全球生態，期盼能為動植物留一口喘息的空間。
              </p>
            </div>
            <div className="flex w-full md:w-1/2">
              <div className="relative overflow-hidden">
                <NextImage
                  alt={"main-01"}
                  src={"/robert-class/loving-animals.webp"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                ></NextImage>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div ref={visionSection}>
          <RobertClassVision />
        </div> */}

        {/* <div
          className={`container px-4 relative mx-auto md:max-w-[1200px] text-center py-10`}
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl text-[#007c00] font-bold text-center">
            相識香港野——生態探索及攝影大師班
            </h1>
            <h1 className="text-2xl md:text-3xl text-[#007c00] font-bold text-center">
            一起認識、賞識香港「野」！
            </h1>

            <div className="my-2">
              <Button
                {...OrangeCTA}
                margin={"auto"}
                w="fit-content"
                px={6}
                type={"submit"}
                onClick={() => {
                  scrollToRef(signupSection);
                }}
              >
                立即登記
              </Button>
            </div>

            <div className="relative overflow-hidden max-w-[640px] mx-auto">
              <NextImage
                alt={"main-01"}
                src={"/robert-class/logo-animals.webp"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              ></NextImage>
            </div>
          </div>
        </div> */}
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

export default MainPage;
