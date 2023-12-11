import React from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';

import {
	SwiperCarousel,
	SingleCarousel,
	CardCarousel,
	TestimonialCarousel
} from './StrapiCarousels';

import PageContainer from '@containers/pageContainer';

import {
	headingProps,
	paragraphProps
} from '@common/styles/components/contentStyle';

// Dynamic Content
const StrapiDynamicBlocks = ({
	blocks = 'contentBlocks',
	strapi,
	className,
	hackle
}) => {
	if (!strapi) {
		return null;
	}

	return strapi?.[blocks]
		?.filter((content) => {
			// filter the content of group a/b
			let pass = true;
			const groupA = content?.richContent?.includes('<div class="raw-html-embed"><p hidden=""> group a </p></div>');
				// '<div class="raw-html-embed"><p hidden=""> group a </p></div>';
			const groupB = content?.richContent?.includes('<div class="raw-html-embed"><p hidden=""> group b </p></div>');
				// '<div class="raw-html-embed"><p hidden=""> group b </p></div>';
			if (
				!groupA &&
				!groupB
			) {
				pass = true;
			} else if (
				groupA &&
				hackle.variation === 'A'
			) {
				pass = true;
			} else if (
				groupB &&
				hackle.variation === 'B'
			) {
				pass = true;
			} else {
				pass = false;
			}
			return pass;
		})
		?.map((content, i) => {
			return (
				<div key={i} className={className}>
					{className === 'layout-1col' ? (
						<>
							{(() => {
								switch (content?.__component) {
									case 'blocks.rich-content':
										return (
											<Box
												backgroundColor={
													i % 2 !== 0 ? 'var(--thematic-color-lightest)' : ''
												}
												py={i % 2 !== 0 ? '3rem' : ''}
												px={4}
											>
												<PageContainer>
													<Box py="4">
														<div className="strapi-content">
															<div
																dangerouslySetInnerHTML={{
																	__html: content?.richContent
																}}
															/>
														</div>
													</Box>
												</PageContainer>
											</Box>
										);
									case 'blocks.card-swiper':
										return (
											<Box py="4">
												<Stack
													direction="column"
													textAlign="center"
													py={2}
													mb={2}
												>
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
												<Stack
													direction="column"
													textAlign="center"
													py={2}
													mb={2}
												>
													<Heading {...headingProps} mb={0}>
														{content?.title}
													</Heading>
													<Text as="p">{content?.text}</Text>
												</Stack>
												<TestimonialCarousel
													data={content?.TestimonialSlider}
												/>
											</Box>
										);
									case 'blocks.carousel':
										return (
											<Box py="4">
												<Stack
													direction="column"
													textAlign="center"
													py={2}
													mb={2}
												>
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
						</>
					) : (
						<>
							{(() => {
								switch (content?.__component) {
									case 'blocks.rich-content':
										return (
											<Box py="4">
												<div className="strapi-content">
													<div
														dangerouslySetInnerHTML={{
															__html: content?.richContent
														}}
													/>
												</div>
											</Box>
										);
									case 'blocks.card-swiper':
										return (
											<Box py="4">
												<Stack
													direction="column"
													textAlign="center"
													py={2}
													mb={2}
												>
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
												<Stack
													direction="column"
													textAlign="center"
													py={2}
													mb={2}
												>
													<Heading {...headingProps} mb={0}>
														{content?.title}
													</Heading>
													<Text as="p">{content?.text}</Text>
												</Stack>
												<TestimonialCarousel
													data={content?.TestimonialSlider}
												/>
											</Box>
										);
									case 'blocks.carousel':
										return (
											<Box py="4">
												<Stack
													direction="column"
													textAlign="center"
													py={2}
													mb={2}
												>
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
						</>
					)}
				</div>
			);
		});
};

export default StrapiDynamicBlocks;
