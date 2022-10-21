import React from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import { Mousewheel, Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
	headingProps,
	paragraphProps
} from '@common/styles/components/contentStyle';
// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperCarousel = ({ data }) => {
	const defaultConfig = {
		spaceBetween: 20,
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		fadeEffect: { crossFade: true },
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
			className="slider"
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

const SingleCarousel = ({ data }) => {
	const defaultConfig = {
		slidesPerView: '1',
		loop: true,
		fadeEffect: { crossFade: true },
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
			className="slider"
			modules={[Autoplay, Mousewheel, Navigation, Pagination]}
			{...defaultConfig}
		>
			<Box className="swiper-pagination" /> {/** CSS */}
			{data?.map((d, i) => (
				<SwiperSlide key={i} className="dynamic-swiper">
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

const CardCarousel = ({ data, cardSide = false }) => {
	const defaultConfig = {
		spaceBetween: 20,
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		fadeEffect: { crossFade: true },
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
			className="slider"
			modules={[Autoplay, Mousewheel, Navigation, Pagination]}
			{...defaultConfig}
		>
			{data?.map((d, i) => (
				<SwiperSlide key={i}>
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
			<div className="swiper-pagination"></div>
		</Swiper>
	);
};

const TestimonialSwiperCarousel = ({ data }) => {
	const defaultConfig = {
		spaceBetween: 20,
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		fadeEffect: { crossFade: true },
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
			className="slider"
			modules={[Autoplay, Mousewheel, Navigation, Pagination]}
			{...defaultConfig}
		>
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

// Dynamic Content
const StrapiDynamicBlocks = ({ content }) => {
	switch (content?.__component) {
		case 'blocks.rich-content':
			return (
				<Box py="4">
					<div className="strapi-content">
						<div dangerouslySetInnerHTML={{ __html: content?.richContent }} />
					</div>
				</Box>
			);
		case 'blocks.card-swiper':
			return (
				<Box py="4">
					<Stack direction="column" textAlign="center" py={2}>
						<Heading {...headingProps}>{content?.title}</Heading>
						<Text as="p" {...paragraphProps}>
							{content?.text}
						</Text>
					</Stack>
					<Text>Default Swiper</Text>
					<SwiperCarousel data={content?.CardSlider} />
					<Text>Single Swiper</Text>
					<SingleCarousel data={content?.CardSlider} />
					<Text>Card Swiper</Text>
					<CardCarousel data={content?.CardSlider} />
					<Text>Card Swiper</Text>
					<CardCarousel data={content?.CardSlider} cardSide={true} />
				</Box>
			);
		case 'blocks.testimonial-swiper':
			return (
				<Box py="4">
					<Heading {...headingProps}>{content?.title}</Heading>
					<Text as="p" {...paragraphProps}>
						{content?.text}
					</Text>
					<TestimonialSwiperCarousel data={content?.TestimonialSlider} />
				</Box>
			);
	}
};

export default StrapiDynamicBlocks;
