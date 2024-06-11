import React, { useRef, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Image } from '@chakra-ui/react';

import epCover01s from '../../images/robert-class/episode/episode-cover-01-s.png';
import epCover02s from '../../images/robert-class/episode/episode-cover-02-s.png';
import epCover03s from '../../images/robert-class/episode/episode-cover-03-s.png';
import epCover04s from '../../images/robert-class/episode/episode-cover-04-s.png';
import epCover05s from '../../images/robert-class/episode/episode-cover-05-s.png';
import epCover06s from '../../images/robert-class/episode/episode-cover-06-s.png';
import epCover07s from '../../images/robert-class/episode/episode-cover-07-s.png';

import epCover01l from '../../images/robert-class/episode/episode-cover-01-l.png';
import epCover02l from '../../images/robert-class/episode/episode-cover-02-l.png';
import epCover03l from '../../images/robert-class/episode/episode-cover-03-l.png';
import epCover04l from '../../images/robert-class/episode/episode-cover-04-l.png';
import epCover05l from '../../images/robert-class/episode/episode-cover-05-l.png';
import epCover06l from '../../images/robert-class/episode/episode-cover-06-l.png';
import epCover07l from '../../images/robert-class/episode/episode-cover-07-l.png';

const ResponsiveCarousel = () => {
	const CONTROLS = [
		{
			key: 0,
			image: epCover01s,
			name: '第一集'
		},
		{
			key: 1,
			image: epCover02s,
			name: '第二集'
		},
		{
			key: 2,
			image: epCover03s,
			name: '第三集'
		},
		{
			key: 3,
			image: epCover04s,
			name: '第四集'
		},
		{
			key: 4,
			image: epCover05s,
			name: '第五集'
		},
		{
			key: 5,
			image: epCover06s,
			name: '第六集'
		},
		{
			key: 6,
			image: epCover07s,
			name: '第七集'
		}
	];

	const SLIDES = [
		{
			key: 0,
			image: epCover01l,
			title: '第一集 — 相知 相會 相識香港「野」',
			content:
				'要拍出一張出色的生態攝影作品，究竟應注重攝影技術還是故事性呢？第一集 Robert 將與大家分享在香港野外遇見過的神奇生物，以及教導拍攝生態的一些基本概念；你準備好開展「觀察、尋找、發現、學習、愛上、保護」的自然生態旅程嗎？'
		},
		{
			key: 1,
			image: epCover02l,
			title: '第二集 — 城市手機攝影師？',
			content:
				'生態攝影是否就等於「長途跋涉」或「昂貴相機」的同義詞？原來在香港的鬧市公園裏，已是尋找動物和拍攝的好地方！這一集 Robert 將會由淺入深作教導，先用手機作為主要器材，學習基本拍攝技巧和竅門吧！'
		},
		{
			key: 2,
			image: epCover03l,
			title: '第三集 — 生態探索及攝影入門手冊',
			content:
				'「如何尋找動物？」「怎樣設定相機？」「應拍RAW還是JPEG？」 「要選甚麼測光模式？」Robert 跟你我一樣，都曾是個生態攝影新手，這一集他將一一解答最常見問題，幫助大家一起踏上探索自然之路。今集我們走到香港較偏遠的地方，尋找不同物種和學習進一步的攝影技巧！'
		},
		{
			key: 3,
			image: epCover04l,
			title: '第四集 — 香港不止「咕姑固」',
			content:
				'近年最備受討論的雀鳥相信是「咕姑固」與「升Key雀」，但其實香港一年四季中有超過 540 種鳥類，相等於中國的逾三分之一、美國逾四成，以及英國逾八成！今集你將會學到俗稱「打雀」（拍攝雀鳥）的秘訣，快來學習觀察和拍攝更好的雀鳥照片！'
		},
		{
			key: 4,
			image: epCover05l,
			title: '第五集 — 港版蟲蟲特工隊',
			content:
				'你知道蜘蛛其實不是昆蟲嗎？但兩者皆屬節肢動物（Arthropods）。今集將帶你近距離欣賞這些美麗的生物，並學習微距拍攝和使用閃光燈的竅門，創作出更閃爍和清晰的照片；拍攝過程更非常刺激好玩，一起加入港版「蟲蟲特工隊」！'
		},
		{
			key: 5,
			image: epCover06l,
			title: '第六集 — 現代恐龍公園',
			content:
				'從蜥蜴到青蛙、壁虎和蛇，這些都是兩棲及爬行動物（Herp）。英籍的 Robert 常說英國只有三種蛇，香港卻有逾 50 種！今集我們將會帶你探索像「小恐龍」的兩棲及爬行動物世界，以及學習更多拍攝和後期製作技巧。'
		},
		{
			key: 6,
			image: epCover07l,
			title: '【捐款會員獨家限定】第七集 — 香港「野」繽紛',
			content:
				"你有想過夜間的香港野外世界是怎樣的嗎？來到最後一集，Robert 帶我們出發夜間探險，細看夜行動物的世界！入夜後的大自然既神秘又刺激，我們更遇到以「香港」命名的物種！來吧，一邊探險，一邊學習夜間拍攝技巧！<br/><br/><span style={{fontSize: '12px'}}>* 此集為綠色和平捐款會員限定集數</span>。"
		}
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	const mainCarousel = useRef(null);

	const handleOnClick = (key) => {
		setCurrentSlide(key);
		if (mainCarousel.current) {
			mainCarousel.current.moveTo(key);
		}
	};

	return (
		<div className="main-carousel mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 md:flex-row">
			<div className="flex w-full flex-row gap-4 overflow-x-auto md:w-1/6 md:flex-col">
				{CONTROLS.map((control) => (
					<div
						key={control.key}
						className="relative max-w-[128px] flex-shrink-0 overflow-hidden rounded-xl bg-[#000]"
						onClick={() => handleOnClick(control.key)}
					>
						<div className="absolute flex h-full w-full select-none items-center justify-center font-bold text-white">
							{control.name}
						</div>
						<Image
							alt={'hero'}
							src={control.image}
							width={'full'}
							height={'auto'}
							draggable={false}
							borderRadius={'lg'}
							className={`cursor-pointer transition-all ${
								currentSlide === control.key ? 'opacity-100' : 'opacity-50'
							}`}
						/>
					</div>
				))}
			</div>
			<div className="w-full overflow-hidden rounded-xl shadow-lg md:w-5/6">
				<Carousel
					ref={mainCarousel}
					showThumbs={false}
					showIndicators={false}
					showArrows={false}
					preventMovementUntilSwipeScrollTolerance={true}
					swipeScrollTolerance={50}
				>
					{SLIDES.map((slide) => (
						<div className="video-wrap flex flex-col gap-4" key={slide.key}>
							<div>
								<Image
									alt={'hero'}
									src={slide.image}
									width={'full'}
									height={'auto'}
								/>
							</div>
							<div className="text-bold p-6 text-left">
								<h2 className="mb-6 text-xl font-bold">{slide.title}</h2>
								<p
									className="mb-6"
									dangerouslySetInnerHTML={{ __html: slide?.content }}
								/>
							</div>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default ResponsiveCarousel;
