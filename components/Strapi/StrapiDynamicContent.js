import React from 'react';
import { Box, Text, Stack } from '@chakra-ui/react';
import { Mousewheel, Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperCarousel = ({ data }) => {
	const defaultConfig = {
		spaceBetween: 20,
		centeredSlides: true,
		slidesPerView: "auto",
		loop: true,
		fadeEffect: { crossFade: true },
		autoplay: {
			delay: 5000,
			speed: 3000,
			disableOnInteraction: true
		},
		pagination: {
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '"></span>';
			}
		}
	};

	return (
		<Swiper
			className="slider"
			modules={[Autoplay, Mousewheel, Navigation, Pagination]}
			{...defaultConfig}
		>
		<Box class="swiper-pagination"/> {/** CSS */}
			{data?.map((d, i) => (
				<SwiperSlide key={i} className="dynamic-swiper">
					<Box>
						<Box
							borderRadius={'10px'}
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
							<Text fontSize={14}>{d?.text}</Text>
						</Box>
					</Box>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

const Testimonial = ({ data }) => {
	return (
		<Box>
			{/* {data?.map(({avatar, description, name, quote, id})=>{
				return (
					<Box key={`${id}-${name}`}>
						<Image src={avatar?.data?.attributes?.url} alt={avatar?.data?.attributes?.alternativeText} />
						<Text>{name}</Text>
						<div dangerouslySetInnerHTML={{ __html: quote }} />
						<div dangerouslySetInnerHTML={{ __html: description }} />
					</Box>
				)
			})} */}
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
					<Stack direction="column" textAlign="center" py={2}>
						<Text as="h2" fontSize={20}>
							{content?.title}
						</Text>
						<Text as="p" fontSize={14}>
							{content?.text}
						</Text>
					</Stack>
					<SwiperCarousel
						title={content?.title}
						content={content?.text}
						data={content?.CardSlider}
					/>
				</Box>
			);

		case 'blocks.testimonial-swiper':
			return (
				<Box>
					{/* <Text>{content?.title}</Text>
					<Text>{content?.text}</Text> */}
					{/* <Testimonial data={content?.TestimonialSlider} /> */}
				</Box>
			);

		default:
			return '';
	}
};

export default StrapiDynamicBlocks;
