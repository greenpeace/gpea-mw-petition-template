import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperCarousel = ({ data, swiperConfig }) => {
	const defaultConfig = {
		spaceBetween: 0,
		centeredSlides: true,
		slidesPerView: 1,
		loop: true,
		fadeEffect: { crossFade: true },
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		effect: 'fade'
	};
	const config = swiperConfig
		? { ...defaultConfig, ...swiperConfig }
		: defaultConfig;

	return (
		<Swiper
			className="slider"
			modules={[Autoplay, EffectFade, Navigation, Pagination]}
			{...config}
		>
			{data?.map((d, i, alt) => (
				<SwiperSlide key={i}>
					<Image src={d?.image?.data?.attributes?.url} alt={alt} />
					<Text>{d?.title}</Text>
					<Text>{d?.text}</Text>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

const Testimonial = ({ data }) => {
	return (
		<Box>
			{data?.map(({avatar, description, name, quote, id})=>{
				return (
					<Box key={`${id}-${name}`}>
						<Image src={avatar?.data?.attributes?.url} alt={avatar?.data?.attributes?.alternativeText} />
						<Text>{name}</Text>
						<div dangerouslySetInnerHTML={{ __html: quote }} />
						<div dangerouslySetInnerHTML={{ __html: description }} />
					</Box>
				)
			})}
		</Box>
	);
};

const StrapiDynamicBlocks = ({ content }) => {
	switch (content?.__component) {
		case 'blocks.rich-content':
			return (
				<div className="strapi-content">
					<div dangerouslySetInnerHTML={{ __html: content?.richContent }} />
				</div>
			);
		case 'blocks.card-swiper':
			return (
				<Box>
					<Text>{content?.title}</Text>
					<Text>{content?.text}</Text>
					<SwiperCarousel data={content?.CardSlider} />
				</Box>
			);

		case 'blocks.testimonial-swiper':
			return (
				<Box>
					<Text>{content?.title}</Text>
					<Text>{content?.text}</Text>
					<Testimonial data={content?.TestimonialSlider} />
				</Box>
			);

		default:
			return '';
	}
};

export default StrapiDynamicBlocks;
