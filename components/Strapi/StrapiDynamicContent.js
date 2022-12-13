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
const StrapiDynamicBlocks = ({ blocks = 'contentBlocks', strapi }) => {
	if (!strapi) {
		return null;
	}

	return strapi?.[blocks]?.map((content, i) => {
		return (
			<div key={i}>
				{(() => {
					switch (content?.__component) {
						case 'blocks.rich-content':
							return (
								<Box py="4">
									<div className="strapi-content">
										<div
											dangerouslySetInnerHTML={{ __html: content?.richContent }}
										/>
									</div>
								</Box>
							);
						case 'blocks.card-swiper':
							return (
								<Box py="4">
									<Stack direction="column" textAlign="center" py={2} mb={2}>
										<Heading {...headingProps} mb={0}>
											{content?.title}
										</Heading>
										<Text as="p">{content?.text}</Text>
									</Stack>
									<CardCarousel data={content?.CardSlider} />
								</Box>
							);
						case 'blocks.testimonial-swiper':
							return (
								<Box py="4">
									<Stack direction="column" textAlign="center" py={2} mb={2}>
										<Heading {...headingProps} mb={0}>
											{content?.title}
										</Heading>
										<Text as="p">{content?.text}</Text>
									</Stack>
									<TestimonialCarousel data={content?.TestimonialSlider} />
								</Box>
							);
						case 'blocks.carousel':
								return (
									<Box py="4">
										<Stack direction="column" textAlign="center" py={2} mb={2}>
											<Heading {...headingProps} mb={0}>
												{content?.title}
											</Heading>
											<Text as="p">{content?.text}</Text>
										</Stack>
										<SwiperCarousel data={content?.CarouselSlider} />
									</Box>
								);
						default:
							return null;
					}
				})()}
			</div>
		);
	});
};

export default StrapiDynamicBlocks;
