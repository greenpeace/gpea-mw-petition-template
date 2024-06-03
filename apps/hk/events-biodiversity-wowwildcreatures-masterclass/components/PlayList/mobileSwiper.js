import React, { useRef, useState, useCallback } from 'react';
// import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useRouter } from 'next/router';
import { Box, Center, Icon } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { useVideoContext } from '../../context/video';
import { useGlobalContext } from '../../context/global';

import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const MobileSwiper = ({ isDetail }) => {
	const swiperRef = useRef(null);
	const value = useVideoContext();
	const globalValue = useGlobalContext;

	const { userType } = globalValue();

	const { setVideo, setSelectedEp, EPISODES } = value;

	return (
		<div className="pb-[30px]">
			<Swiper
				freeMode={true}
				slidesPerView={'auto'}
				centeredSlides={true}
				spaceBetween={isDetail ? 10 : 20}
				className="mySwiper"
				ref={swiperRef}
				modules={[Scrollbar]}
				scrollbar={{
					el: '.mobile-swiper-scrollbar',
					hide: false,
					draggable: true
				}}
			>
				{(EPISODES || []).map((d, i) => {
					return (
						<SwiperSlide key={`${d.title}-${i}`} style={{ width: '90%' }}>
							<div
								className={`relative  w-full ${
									isDetail ? 'h-[180px]' : 'h-[180px]'
								} max-w-[100%] overflow-hidden rounded-[20px] shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl`}
							>
								<Box
									backgroundImage={d.image}
									backgroundRepeat="no-repeat"
									backgroundSize={'cover'}
									backgroundPosition={'center center'}
									pos={'absolute'}
									top={0}
									bottom={0}
									w={'full'}
									onClick={() => {
										if (i === 6 && userType() === 'user') {
											alert('Please subscribe to access this content');
											return;
										}

										setSelectedEp(d);

										router.push(
											`/?p=episodes`,
											`${window.location.href.split('?')[0]}/?p=episodes&ep=${
												d.ep
											}`,
											{
												shallow: true
											}
										);
									}}
								>
									<div className="absolute left-4 top-4 z-10">
										<p className="text-[20px] font-bold text-[#FFF]">
											{d.name}
										</p>
										{/* <p className="text-[16px] text-[#FFF]">{d.role}</p> */}
									</div>

									{/* {!isDetail && (
                    <div className="absolute left-6 right-6 bottom-6 z-10">
                      <p className="text-[#FFF]">{d.content}</p>
                    </div>
                  )} */}
									<Box
										bgGradient="linear(to-b, black 0%, transparent 50%, black 100%)"
										opacity={0.6}
										h={'full'}
										zIndex={2}
									/>
								</Box>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>

			<div className="mx-[20px] mt-[30px] flex max-w-[830px] flex-row items-center gap-4 md:mx-auto">
				<div className="flex-1">
					<div className="mobile-swiper-scrollbar h-[12px]"></div>
				</div>
				<div>
					<div className="flex flex-row gap-4">
						<div
							id="previousButton"
							onClick={() => swiperRef.current.swiper.slidePrev()}
							className={'h-[40px] w-[40px] cursor-pointer rounded-lg'}
						>
							<Center h={'100%'}>
								<Icon as={RiArrowLeftLine} w={6} h={6} color={'#FFF'} />
							</Center>
						</div>
						<div
							id="nextButton"
							onClick={() => swiperRef.current.swiper.slideNext()}
							className={'h-[40px] w-[40px] cursor-pointer rounded-lg'}
						>
							<Center h={'100%'}>
								<Icon as={RiArrowRightLine} w={6} h={6} color={'#FFF'} />
							</Center>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileSwiper;
