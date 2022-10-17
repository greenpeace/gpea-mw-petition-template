import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperCarousel = ({ data, swiperConfig }) => {
	console.log('data-',data)
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

const Testimonial = ({data}) => {
	console.log('data-',data)
	return (
		<div>123</div>
	)
}

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
					<Testimonial/>
				</Box>
			);

		default:
			return '';
	}
};

export default StrapiDynamicBlocks;
