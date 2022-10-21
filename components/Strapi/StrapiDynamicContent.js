import React from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';

import {
	SwiperCarousel,
	SingleCarousel,
	CardCarousel,
	TestimonialCarousel
} from './StrapiCarousels';

import {
	headingProps,
	paragraphProps
} from '@common/styles/components/contentStyle';

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
					<TestimonialCarousel data={content?.TestimonialSlider} />
				</Box>
			);
	}
};

export default StrapiDynamicBlocks;
