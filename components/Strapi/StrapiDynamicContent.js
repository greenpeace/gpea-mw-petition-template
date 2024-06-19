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
	donationSummary,
	utm_source
}) => {
	if (!strapi) {
		return null;
	}

	return strapi?.[blocks]
		?.filter((content) => {
			// filter the content of group a/b or diff-amount, diff-type, and diff-utm
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
			const groupB = contentHTML.querySelector('.raw-html-embed *[hidden]')
				? contentHTML
						.querySelector('.raw-html-embed *[hidden]')
						.textContent.toLocaleLowerCase()
						.includes('group b')
				: false;
			const diffAmount = contentHTML.querySelector(
				'.raw-html-embed *[data-diff-amount]'
			);
			const diffType = contentHTML.querySelector(
				'.raw-html-embed *[data-diff-type]'
			);
			const diffUtm = contentHTML.querySelector(
				'.raw-html-embed *[data-diff-utm_source]'
			);
			

			// this is for group A/B content show/hide
			if (!groupA && !groupB) {
				pass = true;
			} else if (groupA && variation === 'A') {
				pass = true;
			} else if (groupB && variation === 'B') {
				pass = true;
			} else {
				pass = false;
			}

			// this is for diff-amount and diff-type content show/hide
			if (diffAmount) {
				// console.log(diffAmount.getAttribute("data-diff-amount"), diffAmount.getAttribute("data-diff-type"))
				// get type and amount from donationSummary for set condition of content show/hide
				const { type, amount } = donationSummary || {};
				// console.log(amount >= Number(diffAmount.getAttribute("data-diff-amount")), type == diffAmount.getAttribute("data-diff-type"))
				if(!diffType) {
					// if no specific type, show this content if amount is more than 800 for recurring and 3000 for oneoff, this is default condition
					if (
						(type == 'Recurring' && amount >= 800) ||
						(type == 'Oneoff' && amount >= 3000)
					) {
						pass = true;
					} else {
						pass = false;
					}
				}else {
					// show this content if amount is more than the amount in data-diff-amount and type is same as data-diff-type
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
			if(diffUtm){
				// show or hide content based on utm_source
				if(utm_source == 'dd') {
					pass = false;
				}else {
					pass = true;
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
