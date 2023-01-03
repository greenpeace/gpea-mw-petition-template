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
			// renderBullet: function (index, className) {
			// 	return '<span className="' + className + '"></span>';
			// }
		}
	};
	return (
		<Box>
			<Box className="carousel-swiper-pagination" textAlign="center" mb={4} />
			<Swiper
				modules={[Autoplay, Mousewheel, Navigation, Pagination]}
				{...defaultConfig}
				pagination={{
					el: '.carousel-swiper-pagination',
					clickable: true
				}}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}}
			>

				<Box className="swiper-button-prev">
					<ChevronLeftIcon w={8} h={8} color="green.400" />
				</Box>
				<Box className="swiper-button-next">
					<ChevronRightIcon w={8} h={8} color="green.400" />
				</Box>
				{data?.map((d, i) => (
					<SwiperSlide key={i}>
						<Box w={'90%'}>
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
								<Text textAlign="center">{d?.title}</Text>
								<Text fontSize={14} py={4}>
									{d?.description}
								</Text>
							</Box>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
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
		<Box>
			<Box className="carousel-swiper-pagination" textAlign="center" mb={4} />
			<Swiper
				modules={[EffectFade, Pagination, Navigation]}
				{...defaultConfig}
				pagination={{
					el: '.carousel-swiper-pagination',
					clickable: true
				}}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}}
			>
				
				<Box className="swiper-button-prev">
					<ChevronLeftIcon w={8} h={8} color="green.400" />
				</Box>
				<Box className="swiper-button-next">
					<ChevronRightIcon w={8} h={8} color="green.400" />
				</Box>
				{data?.map((d, i) => (
					<SwiperSlide key={i}>
						<Box w={'90%'}>
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
							<Box pt="4">
								<Text textAlign="center">{d?.title}</Text>
								<Text py={4}>{d?.description}</Text>
							</Box>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export const CardCarousel = ({ data }) => {
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
				<Box className="swiper-button-prev">
					<ChevronLeftIcon w={8} h={8} color="green.400" />
				</Box>
				<Box className="swiper-button-next">
					<ChevronRightIcon w={8} h={8} color="green.400" />
				</Box>

				{data?.map((d, i) => (
					<SwiperSlide key={i} style={{ maxWidth: '90%' }}>
						<Box
							bgColor="#FFF"
							w={'100%'}
							shadow="md"
							pb={6}
							borderRadius="20px"
							m={4}
						>
							<Stack
								direction="column"
								space="4"
								borderRadius="20px"
								overflow={'hidden'}
							>
								<img
									className="w-full"
									src={d?.image?.data?.attributes?.url}
									alt={d?.title}
									loading="lazy"
								/>
								<div className="card-body">
									<p className="card-title">{d?.title}</p>
									<p className="">{d?.text}</p>
								</div>
							</Stack>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export const TestimonialCarousel = ({ data }) => {
	const defaultConfig = {
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		autoplay: false
	};

	return (
		<Box>
			<Box
				className="custom-testimonial-swiper-pagination"
				textAlign="center"
				mb={4}
			/>
			<Swiper
				modules={[Navigation, Pagination]}
				{...defaultConfig}
				pagination={{
					el: '.custom-testimonial-swiper-pagination',
					clickable: true
				}}
				navigation={{
					nextEl: '.testimonial-swiper-button-next',
					prevEl: '.testimonial-swiper-button-prev'
				}}
			>
				<Box className="testimonial-swiper-button-prev swiper-button-prev">
					<ChevronLeftIcon w={8} h={8} color="green.400" />
				</Box>
				<Box className="testimonial-swiper-button-next swiper-button-next">
					<ChevronRightIcon w={8} h={8} color="green.400" />
				</Box>

				{data?.map((d, i) => (
					<SwiperSlide key={i} style={{ maxWidth: '90%' }}>
						<Box
							bgColor="#FFF"
							w={'100%'}
							shadow="md"
							py={8}
							borderRadius="20px"
							mx={2}
							mt={4}
							mb={6}
						>
							<Stack
								direction="column"
								textAlign="center"
								space="4"
								alignItems={'center'}
							>
								<Box className="avatar mt-2">
									<div className="w-24 rounded-full ring ring-[#66cc00] ring-offset-2 ring-offset-base-100">
										<img src={d?.avatar?.data?.attributes?.url} alt={d?.name} />
									</div>
								</Box>
								<Box
									dangerouslySetInnerHTML={{ __html: d?.quote }}
									p={4}
									alignSelf="self-start"
									textAlign="left"
								/>
								<Box p={4}>
									<Text textAlign="center" fontWeight={'bold'}>
										{d?.name}
									</Text>
									<Text
										fontSize={'sm'}
										dangerouslySetInnerHTML={{ __html: d?.description }}
									/>
								</Box>
							</Stack>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};
