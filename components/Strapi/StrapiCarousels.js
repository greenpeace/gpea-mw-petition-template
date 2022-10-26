import React from 'react';
import { Box, Text, Stack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// Core modules imports are same as usual
import {
	EffectFade,
	Mousewheel,
	Autoplay,
	Pagination,
	Navigation
} from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css';
// import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export const SwiperCarousel = ({ data }) => {
	const defaultConfig = {
		spaceBetween: 20,
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		autoplay: false,
		pagination: {
			clickable: true,
			renderBullet: function (index, className) {
				return '<span className="' + className + '"></span>';
			}
		}
	};
	return (
		<Swiper
			modules={[Autoplay, Mousewheel, Navigation, Pagination]}
			{...defaultConfig}
		>
			<Box className="swiper-pagination" />
			{data?.map((d, i) => (
				<SwiperSlide key={i}>
					<Box>
						<Box
							overflow={'hidden'}
							w={'100%'}
							h={{ base: '240px', md: '320px' }}
							position="relative"
						>
							<Box
								bgPosition={'center'}
								objectFit={'cover'}
								bgImage={d?.image?.data?.attributes?.url}
								w={'100%'}
								h={'100%'}
								position={'absolute'}
							/>
						</Box>
						<Box pt={2}>
							<Text>{d?.title}</Text>
							<Text fontSize={14} py={4}>
								{d?.text}
							</Text>
						</Box>
					</Box>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export const SingleCarousel = ({ data }) => {
	const defaultConfig = {
		slidesPerView: '1',
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		autoplay: false,
		pagination: {
			clickable: true
		}
	};
	return (
		<Swiper modules={[EffectFade, Pagination]} {...defaultConfig}>
			<Box className="swiper-pagination" /> {/** CSS */}
			{data?.map((d, i) => (
				<SwiperSlide key={i}>
					<Box>
						<Box
							overflow={'hidden'}
							w={'100%'}
							h={{ base: '300px', md: '400px' }}
							position="relative"
						>
							<Box
								bgPosition={'center'}
								objectFit={'cover'}
								bgImage={d?.image?.data?.attributes?.url}
								w={'100%'}
								h={'100%'}
								position={'absolute'}
							/>
						</Box>
						<Box pt={2}>
							<Text>{d?.title}</Text>
							<Text fontSize={14} py={4}>
								{d?.text}
							</Text>
						</Box>
					</Box>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export const CardCarousel = ({ data, cardSide = false }) => {
	const defaultConfig = {
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		autoplay: false
	};

	return (
		<Box>
			<Box className="custom-swiper-pagination" textAlign="center" mb={4} />
			<Swiper
				modules={[Navigation, Pagination]}
				{...defaultConfig}
				pagination={{
					el: '.custom-swiper-pagination',
					clickable: true
				}}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}}
			>
				<Box
					className="swiper-button-prev"
					bgColor="#FFF"
					borderRadius="50%"
					w="40px"
					height="40px"
					shadow="md"
				>
					<ChevronLeftIcon w={8} h={8} color="green.400"/>
				</Box>
				<Box
					className="swiper-button-next"
					bgColor="#FFF"
					borderRadius="50%"
					w="40px"
					height="40px"
					shadow="md"
				>
					<ChevronRightIcon  w={8} h={8} color="green.400" />
				</Box>

				{data?.map((d, i) => (
					<SwiperSlide key={i} style={{ maxWidth: '90%' }}>
						<div
							className={`card mx-4 mb-10 bg-base-100 shadow-xl ${
								cardSide && 'card-side w-full'
							}`}
						>
							<figure>
								<img src={d?.image?.data?.attributes?.url} alt={d?.title} />
							</figure>
							<div className="card-body">
								<p className="card-title">{d?.title}</p>
								<p className="">{d?.text}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export const TestimonialCarousel = ({ data }) => {
	const defaultConfig = {
		spaceBetween: 20,
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		autoplay: false,
		pagination: {
			clickable: true,
			renderBullet: function (index, className) {
				return '<span className="' + className + '"></span>';
			}
		}
	};

	return (
		<Swiper modules={[Navigation, Pagination]} {...defaultConfig}>
			<Box className="swiper-pagination" /> {/** CSS */}
			{data?.map((d, i) => (
				<SwiperSlide key={i}>
					<Stack
						direction="column"
						textAlign="center"
						space="4"
						alignItems={'center'}
					>
						<div className="avatar mt-2">
							<div className="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
								<img src={d?.avatar?.data?.attributes?.url} alt={d?.name} />
							</div>
						</div>
						<Text className="">{d?.name}</Text>
						<Box className="" dangerouslySetInnerHTML={{ __html: d?.quote }} />
					</Stack>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
