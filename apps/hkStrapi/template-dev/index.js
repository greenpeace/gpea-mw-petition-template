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
import ThoughList from './ThoughtList';
import Form from './FormComponent';
import DonateFAQ from '@components/DonateFAQ';
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
			<Box
				className="contentOverlayWrap"
				m={{
					md: '-20px 20px',
					position: 'relative',
					backgroundColor: '#FFF',
					zIndex: 10
				}}
			>
				<PageContainer>
					<Flex
						flexDirection={{ base: 'column-reverse', md: 'row' }}
						className="contentWrap"
					>
						<Box minWidth={0} flex={1}>
							<ContentContainer issue={strapi?.issue?.data?.attributes?.slug}>
								<Box>
									<img
										className="h-auto max-w-full"
										src="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/10/855db730-sl_111019_24830_70-scaled.jpg"
									/>
								</Box>
								{(() => {
									if (pageType?.toLowerCase() === 'donation') {
										return (
											<StrapiDynamicBlocks
												blocks={'contentBlocks'}
												strapi={strapi}
											/>
										);
									} else {
										return submitted ? (
											<StrapiDynamicBlocks
												blocks={'thankyouBlocks'}
												strapi={strapi}
											/>
										) : (
											<StrapiDynamicBlocks
												blocks={'contentBlocks'}
												strapi={strapi}
											/>
										);
									}
								})()}
							</ContentContainer>
						</Box>
						<Box flex={1} ref={FormRef}>
							<FormContainer>
								<Box ref={ref}>
									<Form />
								</Box>
							</FormContainer>
						</Box>
					</Flex>

					<Heading textAlign="center" py="6" fontSize="2xl">
						常見問題
					</Heading>

					<StrapiDonateFAQ locale="zh-Hant-HK" />

					<ThoughList />
				</PageContainer>
			</Box>
			<PetitionFooter locale={'HKChinese'} />
			<StrapiFixedButton target={FormRef} targetInView={inView} />
		</>
	);
};

export default Index;
