import React, { useRef, useState, useCallback } from 'react';
// import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { useVideoContext } from '../../context/video';
import { useGlobalContext } from '../../context/global';
const DesktopSwiper = ({ isDetail = false }) => {
	const router = useRouter();
	// const pathname = usePathname();
	const swiperRef = useRef(null);
	const value = useVideoContext();
	const globalValue = useGlobalContext;

	const { userType } = globalValue();

	const { setSelectedEp, selectedEp, EPISODES } = value;

	return (
		<div className="pb-[30px]">
			<Swiper
				freeMode={true}
				slidesPerView={'auto'}
				centeredSlides={false}
				keyboard={true}
				spaceBetween={isDetail ? 10 : 20}
				className="mySwiper"
				ref={swiperRef}
				mousewheel={{ forceToAxis: true }}
				modules={[Mousewheel, Scrollbar]}
				preventInteractionOnTransition={true}
				scrollbar={{ el: '.swiper-scrollbar', hide: false, draggable: true }}
			>
				{(EPISODES || []).map((d, i) => {
					const isSelected = selectedEp?.key === d.key;
					return (
						<SwiperSlide key={`${d.name}-${i}`} style={{ width: '320px' }}>
							<div
								className={`relative w-full ${
									isDetail ? 'h-[180px]' : 'h-[180px]'
								} max-w-[300px] overflow-hidden rounded-[20px] shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl`}
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
									opacity={isSelected ? 1 : 0.5}
									cursor={'pointer'}
									_hover={{
										opacity: 1
									}}
									onClick={() => {
										if (i === 6 && userType() === 'user') {
											alert('會員才能觀看完整影片');
											return;
										}

										setSelectedEp(d);

										router.push(
											`?p=${isDetail ? 'video' : 'episodes'}`,
											`${window.location.href.split('?')[0]}?p=${isDetail ? 'video' : 'episodes'}&ep=${
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
		</div>
	);
};

export default DesktopSwiper;
