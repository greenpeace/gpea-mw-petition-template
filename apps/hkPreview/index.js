import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import * as formActions from 'store/actions/action-types/form-actions';
import * as themeActions from 'store/actions/action-types/theme-actions';
// Import library
import { useInView } from 'react-intersection-observer';
import { Box, Flex, Heading } from '@chakra-ui/react';
// Import custom containers
import PageContainer from '@containers/pageContainer';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
// Import custom components
import HeroBanner from '@components/ResponsiveBanner/hero';
import ThanksBanner from '@components/ResponsiveBanner/thanks';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/HKForm';
import DonateFAQ from '@components/DonateFAQ';
// Import Strapi content components
import StrapiSEO from '@components/Strapi/StrapiSEO';
import StrapiDynamicBlocks from '@components/Strapi/StrapiDynamicContent';
import StrapiFixedButton from '@components/Strapi/StrapiFixedButton';
// Import Contents
import formContent from './form';
// Import static

function Index({ submitted = false, strapi: strapiData }) {
	const strapi = strapiData ?? useSelector((state) => state?.theme?.strapi);
	const router = useRouter();
	const dispatch = useDispatch();
	const theme = useSelector((state) => state?.theme);
	const signup = useSelector((state) => state?.signup);
	const pageType = strapi?.page_type?.data?.attributes?.name;
	const [ref, inView] = useInView({
		threshold: 0
	});
	const [isLoaded, setIsLoaded] = useState(false);
	const FormRef = useRef(null);

	submitted = useSelector((state) => state?.status?.submitted);

	useEffect(() => {
		dispatch({ type: formActions.SET_FORM, data: formContent }); // set form content from form.json
		if (pageType !== undefined) {
			setIsLoaded(true);
		}
	}, [dispatch, pageType]);

	useEffect(async () => {
		if (router?.isReady) {
			const { preview } = router?.query;
			if (preview) {
				const endpoint = 'https://strapi.small-service.gpeastasia.org/api';

				const res = await fetch(
					`${endpoint}/pages?filters[market][slug]=hk&filters[campaign]=${preview}&populate=deep`
				).then((response) => response);
				const themes = await res.json();
				const theme = themes?.data[0] ?? {};

				dispatch({
					type: themeActions.SET_STRAPI_DATA,
					data: theme?.attributes
				});
			}
		}
	}, [router]);

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
			<PageContainer>
				<OverflowWrapper>
					<Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
						<Box minWidth={0} flex={1} mt={{ base: 10, sm: 60 }}>
							<ContentContainer issue={strapi?.issue?.data?.attributes?.slug}>
								{isLoaded && (
									<>
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
										{/* {(() => {
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
										})()} */}
									</>
								)}
								{isLoaded && (
									<>
										<Heading textAlign="center" py="6" fontSize="2xl">
											常見問題
										</Heading>
										<DonateFAQ locale="HKChinese" />
									</>
								)}
							</ContentContainer>
						</Box>
						<Box minWidth={0} flex={1} ref={FormRef}>
							{isLoaded && (
								<FormContainer>
									<Box ref={ref}>
										{pageType?.toLowerCase() === 'donation' || submitted ? (
											<DonationModule
												market={
													strapi?.market?.data?.attributes?.market ===
													'Hong Kong'
														? 'HK'
														: 'TW'
												}
												language={strapi?.donationModuleLanguage}
												campaign={
													theme?.params?.donation_module_campaign ??
													strapi?.donationModuleCampaign
												}
												campaignId={theme?.params?.campaignId ?? ''}
												env={strapi?.donationModuleEnv}
											/>
										) : (
											<SignupForm />
										)}
									</Box>
								</FormContainer>
							)}
						</Box>
					</Flex>
				</OverflowWrapper>
			</PageContainer>
			<PetitionFooter locale={'HKChinese'} />
			<StrapiFixedButton target={FormRef} targetInView={inView} />
		</>
	);
}

export default Index;
