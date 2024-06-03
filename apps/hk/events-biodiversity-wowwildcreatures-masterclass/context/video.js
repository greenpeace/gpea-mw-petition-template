'use client';

import {
	PropsWithChildren,
	createContext,
	useContext,
	useState,
	useRef
} from 'react';
/**
 * Provider for global context
 */

// type VideoContextProviderProps = PropsWithChildren<{
//   value?: any | object | undefined;
//   video: any;
//   setVideo: any;
//   previewVideo: any;
//   setPreviewVideo: any;
//   setSelectedEp: any;
//   selectedEp: any;
//   EPISODES: any;
//   videoSection: HTMLElement;
//   setVideoSectionMocked: (value: boolean) => void;
// }>;

const videoContext = createContext(undefined);

const VideoContextProvider = videoContext.Provider;

import ep01Image from '../images/robert-class/ep-bg-01.webp';
import ep01Thumbnail from '../images/swiper/gpea-demo-01.jpg';

import ep02Image from '../images/robert-class/ep-bg-02.webp';
import ep02Thumbnail from '../images/swiper/gpea-demo-02.jpg';

import ep03Image from '../images/robert-class/ep-bg-03.webp';
import ep03Thumbnail from '../images/swiper/gpea-demo-03.jpg';

import ep04Image from '../images/robert-class/ep-bg-04.webp';
import ep04Thumbnail from '../images/swiper/gpea-demo-04.jpg';

import ep05Image from '../images/robert-class/ep-bg-05.webp';
import ep05Thumbnail from '../images/swiper/gpea-demo-05.jpg';

import ep06Image from '../images/robert-class/ep-bg-06.webp';
import ep06Thumbnail from '../images/swiper/gpea-demo-06.jpg';

import ep07Image from '../images/robert-class/ep-bg-07.webp';
import ep07Thumbnail from '../images/swiper/gpea-demo-07.jpg';

const TRAILER = {
	key: 0,
	ep: 0,
	name: '預告',
	url: 'RobertMasterClass/Video/ep0_trailer_20240602_NEW_f1tvis',
	content:'',
	message: {
		donor: '',
		nonDonor: ''
	},
	image: ep01Image,
	thumbnail: ep01Thumbnail
};

const EPISODES = [
	{
		key: 0,
		ep: 1,
		name: 'EP1 相知 相會 相識香港「野」',
		url: 'RobertMasterClass/Video/ep1_final_20240527',
		content:
			'要拍出一張出色的生態攝影作品，究竟應注重攝影技術還是故事性呢？第一集 Robert 將與大家分享在香港野外遇見過的神奇生物，以及教導拍攝生態的一些基本概念；您準備好開展「觀察、尋找、發現、學習、愛上、保護」的自然生態旅程嗎？',
		message: {
			donor: '',
			nonDonor: ''
		},
		image: ep01Image,
		thumbnail: ep01Thumbnail
	},
	{
		key: 1,
		ep: 2,
		name: 'EP2 城市手機攝影師？',
		url: 'RobertMasterClass/Video/ep2_dummy_20240527_rei5yc',
		content:
			'生態攝影是否就等於「長途跋涉」或「昂貴相機」的同義詞？原來在香港的鬧市公園裏，已是尋找動物和拍攝的好地方！這一集 Robert 將會由淺入深作教導，先用手機作為主要器材，學習基本拍攝技巧和竅門吧！',
		message: {
			donor: '',
			nonDonor: ''
		},
		image: ep02Image,
		thumbnail: ep02Thumbnail
	},
	{
		key: 2,
		ep: 3,
		name: 'EP3 生態探索及攝影入門手冊',
		url: 'RobertMasterClass/Video/ep3_dummy_20240527_mxuexm',
		content:
			'「如何尋找動物？」「怎樣設定相機？」「應拍RAW還是JPEG？」 「要選甚麼測光模式？」Robert 跟您我一樣，都曾是個生態攝影新手，這一集他將一一解答最常見問題，幫助大家一起踏上探索自然之路。今集我們走到香港較偏遠的地方，尋找不同物種和學習進一步的攝影技巧！',
		message: {
			donor: '',
			nonDonor: ''
		},
		image: ep03Image,
		thumbnail: ep03Thumbnail
	},
	{
		key: 3,
		ep: 4,
		name: 'EP4 香港不止「咕姑固」',
		index: 0,
		url: 'RobertMasterClass/Video/ep4_dummy_20240527_eremvc',
		content:
			'近年最被受討論的雀鳥相信是「咕姑固」與「升Key雀」，但其實香港一年四季中有超過 540 種鳥類，相等於中國的逾三分之一、美國逾四成，以及英國逾八成！今集您將會學到俗稱「打雀」（拍攝雀鳥）的秘訣，快來學習觀察和拍攝更好的雀鳥照片！',
		message: {
			donor: '',
			nonDonor: ''
		},
		image: ep04Image,
		thumbnail: ep04Thumbnail
	},
	{
		key: 4,
		ep: 5,
		name: 'EP5 港版蟲蟲特工隊',
		url: 'RobertMasterClass/Video/ep5_dummy_20240527_dgtj7k',
		content:
			'您知道蜘蛛其實不是昆蟲嗎？但兩者皆屬節肢動物（Arthropods）。今集將帶您近距離欣賞這些美麗的生物，並學習微距拍攝和使用閃光燈的竅門，創作出更閃爍和清晰的照片；拍攝過程更非常刺激好玩，一起加入港版「蟲蟲特工隊」！',
		message: {
			donor: '',
			nonDonor: ''
		},
		image: ep05Image,
		thumbnail: ep05Thumbnail
	},
	{
		key: 5,
		ep: 6,
		name: 'EP6 現代恐龍公園',
		url: 'RobertMasterClass/Video/ep6_dummy_20240527_l17erz',
		content:
			'從蜥蜴到青蛙、壁虎和蛇，這些都是兩棲及爬行動物（Herp）。英籍的 Robert 常說英國只有三種蛇，香港卻有逾 50 種！今集我們將會帶您探索像「小恐龍」的兩棲及爬行動物世界，以及學習更多拍攝和後期製作技巧。',
		message: {
			donor: '',
			nonDonor: ''
		},
		image: ep06Image,
		thumbnail: ep06Thumbnail
	},
	{
		key: 6,
		ep: 7,
		name: '【捐款會員獨家限定】EP7 香港「野」繽紛',
		url: 'RobertMasterClass/Video/ep6_dummy_20240527_l17erz',
		content:
			'您有想過夜間的香港野外世界是怎樣的嗎？來到最後一集，Robert 帶我們出發夜間探險，細看夜行動物的世界！入夜後的大自然既神秘又刺激，我們更遇到以「香港」命名的物種！來吧，一邊探險，一邊學習夜間拍攝技巧！* 此集為綠色和平捐款會員獨家限定集數。',
		message: {
			donor:
				'第七集將於7月10日上架，敬請期待。Episode 7 will be released on 10 July, stay tuned.',
			nonDonor:
				'* 此為綠色和平捐款會員獨家限定集數，誠邀您捐款支持我們在本地及全球守護生物多樣性的工作，並觀看此隱藏集數。如您已捐款，請查看電郵並以新密碼重新登入。【捐款會員限定】第七集 — 香港「野」繽紛您有想過夜間的香港野外世界是怎樣的嗎？來到最後一集，Robert 帶我們出發夜間探險，細看夜行動物的世界！入夜後的大自然既神秘又刺激，我們更遇到以「香港」命名的物種！來吧，一邊探險，一邊學習夜間拍攝技巧！* This episode is exclusive to Greenpeace’s donors. We would like to invite you to support our work to protect biodiversity locally and globally, and get access to this hidden episode. If you have donated already, please check your email and log in again with the new password.'
		},
		image: ep07Image,
		thumbnail: ep07Thumbnail
	}
];

export const VideoProvider = (props) => {
	const videoSection = useRef(null);
	const [selectedEp, setSelectedEp] = useState(EPISODES[0]);

	return (
		<VideoContextProvider
			value={{
				setSelectedEp,
				selectedEp,
				EPISODES,
				videoSection,
        TRAILER
			}}
		>
			{props.children}
		</VideoContextProvider>
	);
};

export const useVideoContext = () => {
	const context = useContext(videoContext);

	if (!context) {
		throw new Error(
			'useVideoContext must be used within a VideoContextProvider'
		);
	}

	return context;
};
