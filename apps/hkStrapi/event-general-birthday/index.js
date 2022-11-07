import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as formActions from 'store/actions/action-types/form-actions';
// Import library
import { useInView } from 'react-intersection-observer';
import { Box, Flex, Heading } from '@chakra-ui/react';
// Import custom containers
import PageContainer from '@containers/pageContainer';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
// Import custom components
import HeroBanner from '@components/ResponsiveBanner/hero';
import ThanksBanner from '@components/ResponsiveBanner/thanks';
import ThoughList from './ThoughtList';
import Form from './FormComponent';
// Import Strapi content components
import StrapiSEO from '@components/Strapi/StrapiSEO';
import StrapiDynamicBlocks from '@components/Strapi/StrapiDynamicContent';
import StrapiDonateFAQ from '@components/Strapi/StrapiDonateFAQ';
import StrapiFixedButton from '@components/Strapi/StrapiFixedButton';
// Import Contents
import formContent from './form';

const Index = ({ submitted = false, strapi }) => {
	const dispatch = useDispatch();
	let theme = useSelector((state) => state?.theme);
	const pageType = strapi?.page_type?.data?.attributes?.name;
	const [ref, inView] = useInView({
		threshold: 0
	});
	const FormRef = useRef(null);

	submitted = useSelector((state) => state?.status?.submitted);

	useEffect(() => {
		dispatch({ type: formActions.SET_FORM, data: formContent }); // set form content from form.json
	}, [dispatch]);

	return (
		<>
			<StrapiSEO strapi={strapi} />
			<Box>
				{(() => {
					if (pageType?.toLowerCase() === 'donation') {
						return (
							<HeroBanner
								removeMask={strapi?.contentHero?.removeMask}
								defaultImage={
									theme?.params?.hero_image_desktop ||
									strapi?.contentHero?.desktopImageURL
								}
								imageSrcset={[
									{
										media: '(min-width: 48em)',
										srcset:
											theme?.params?.hero_image_desktop ||
											strapi?.contentHero?.desktopImageURL
									},
									{
										media: '',
										srcset:
											theme?.params?.hero_image_mobile ||
											strapi?.contentHero?.mobileImageURL
									}
								]}
								content={{
									title: theme?.params?.headline_prefix
										? theme?.params?.headline_prefix +
										  '<br/>' +
										  strapi?.contentHero?.richContent
										: strapi?.contentHero?.richContent,
									description: strapi?.contentHero?.richContentParagraph
								}}
							/>
						);
					} else {
						return submitted ? (
							<ThanksBanner
								removeMask={strapi?.thankyouHero?.removeMask}
								defaultImage={
									theme?.params?.hero_image_desktop ||
									strapi?.thankyouHero?.desktopImageURL
								}
								imageSrcset={[
									{
										media: '(min-width: 48em)',
										srcset:
											theme?.params?.hero_image_desktop ||
											strapi?.thankyouHero?.desktopImageURL
									},
									{
										media: '',
										srcset:
											theme?.params?.hero_image_mobile ||
											strapi?.thankyouHero?.mobileImageURL
									}
								]}
								content={{
									title: strapi?.thankyouHero?.richContent,
									description: strapi?.thankyouHero?.richContentParagraph
								}}
							/>
						) : (
							<HeroBanner
								removeMask={strapi?.contentHero?.removeMask}
								defaultImage={
									theme?.params?.hero_image_desktop ||
									strapi?.thankyouHero?.desktopImageURL
								}
								imageSrcset={[
									{
										media: '(min-width: 48em)',
										srcset:
											theme?.params?.hero_image_desktop ||
											strapi?.contentHero?.desktopImageURL
									},
									{
										media: '',
										srcset:
											theme?.params?.hero_image_mobile ||
											strapi?.contentHero?.mobileImageURL
									}
								]}
								content={{
									title: theme?.params?.headline_prefix
										? theme?.params?.headline_prefix +
										  '<br/>' +
										  strapi?.contentHero?.richContent
										: strapi?.contentHero?.richContent,
									description: strapi?.contentHero?.richContentParagraph
								}}
							/>
						);
					}
				})()}
			</Box>
			<Box
				className="contentOverlayWrap"
				m={{ base: '-20px 0px', md: '-20px 20px 0 20px' }}
				position="relative"
				zIndex={10}
			>
				<PageContainer>
					<Flex
						flexDirection={{ base: 'column-reverse', md: 'row' }}
						className="contentWrap"
					>
						<Box minWidth={0} flex={1}>
							<ContentContainer issue={strapi?.issue?.data?.attributes?.slug}>
								{/* <Box>
									<img
										className="h-auto max-w-full"
										src="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/10/855db730-sl_111019_24830_70-scaled.jpg"
									/>
								</Box> */}

								<Box>
									{submitted ? (
										<StrapiDynamicBlocks
											blocks={'thankyouBlocks'}
											strapi={strapi}
										/>
									) : (
										<StrapiDynamicBlocks
											blocks={'contentBlocks'}
											strapi={strapi}
										/>
									)}
								</Box>
								{/* <>
									{submitted ? (
										<StrapiDynamicBlocks
											blocks={'thankyouBlocks'}
											strapi={strapi}
										/>
									) : (
										<StrapiDynamicBlocks
											blocks={'contentBlocks'}
											strapi={strapi}
										/>
									)}
								</> */}
							</ContentContainer>
						</Box>
						<Box flex={1} ref={FormRef}>
							<FormContainer>
								<Box position="sticky">
									<Box ref={ref}>
										<div className="relative flex h-[180px] items-center justify-center overflow-hidden md:h-[220px]">
											<iframe
												src="https://player.vimeo.com/video/643277567"
												width="100%"
												height="100%"
												frameborder="0"
												allow="autoplay;"
												allowfullscreen
											/>
										</div>
										<Form />
									</Box>
								</Box>
							</FormContainer>
						</Box>
					</Flex>
					<ThoughList />
				</PageContainer>
			</Box>
			<PetitionFooter locale={'HKChinese'} />
			<StrapiFixedButton target={FormRef} targetInView={inView} />
		</>
	);
};

export default Index;
