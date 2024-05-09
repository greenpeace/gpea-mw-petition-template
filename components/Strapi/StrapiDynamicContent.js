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
	variation = 'A',
	donationSummary
}) => {
	if (!strapi) {
		return null;
	}

	return strapi?.[blocks]
		?.filter((content) => {
			// filter the content of group a/b
			let pass = true;
			const parser = new DOMParser();
			const contentHTML = parser.parseFromString(
				content?.richContent,
				'text/html'
			);
			const groupA = contentHTML.querySelector('.raw-html-embed *[hidden]')
				? contentHTML
						.querySelector('.raw-html-embed *[hidden]')
						.textContent.toLocaleLowerCase()
						.includes('group a')
				: false;
			// '<div class="raw-html-embed"><p hidden=""> group a </p></div>';
			const groupB = contentHTML.querySelector('.raw-html-embed *[hidden]')
				? contentHTML
						.querySelector('.raw-html-embed *[hidden]')
						.textContent.toLocaleLowerCase()
						.includes('group b')
				: false;
			// '<div class="raw-html-embed"><p hidden=""> group b </p></div>';
			const diffAmount = contentHTML.querySelector(
				'.raw-html-embed *[data-diff-amount]'
			);
			const diffType = contentHTML.querySelector(
				'.raw-html-embed *[data-diff-type]'
			);
			// '<div class="raw-html-embed"><p data-diff-amount=""></p></div>';

			// a/b test
			if (!groupA && !groupB) {
				pass = true;
			} else if (groupA && variation === 'A') {
				pass = true;
			} else if (groupB && variation === 'B') {
				pass = true;
			} else {
				pass = false;
			}

			// diff-amount
			
			if (diffAmount) {
				console.log(diffAmount.getAttribute("data-diff-amount"), diffAmount.getAttribute("data-diff-type"))
				const { type, amount } = donationSummary || {};
				console.log(amount >= Number(diffAmount.getAttribute("data-diff-amount")), type == diffAmount.getAttribute("data-diff-type"))
				if(!diffType) {
					if (
						(type == 'Recurring' && amount >= 800) ||
						(type == 'Oneoff' && amount >= 3000)
					) {
						pass = true;
					} else {
						pass = false;
					}
				}else {
					if(diffAmount.getAttribute("data-diff-amount") && 
						amount >= Number(diffAmount.getAttribute("data-diff-amount")) &&
						type == diffAmount.getAttribute("data-diff-type")
					) {
						pass = true;
					}else {
						pass = false;
					}
				}
				
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
