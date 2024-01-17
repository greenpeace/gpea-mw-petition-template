/** 
PROJECT=hkStrapi/donation-general-special_appeal_2024_eng
MARKET=hk
PROJECT_NAME=donation-general-special_appeal_2024_eng
BASEPATH=/web/api.greenpeace.org.hk/htdocs/2024/donation-general-special_appeal_2024_eng
ASSETPREFIX=https://api.greenpeace.org.hk/2024/donation-general-special_appeal_2024_eng/
FTP_CONFIG_NAME=api_hk_cloud
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=donation-general-special_appeal_2024_eng
*/
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as formActions from 'store/actions/action-types/form-actions';
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
import StrapiFixedButton from '@components/Strapi/StrapiFixedButtonFull';
// Import Contents
import formContent from './form';
// Import static

function Index({ submitted = false, strapi }) {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state?.theme);
	const signup = useSelector((state) => state?.signup);
	const pageType = strapi?.page_type?.data?.attributes?.name;
	const [ref, inView] = useInView({
		threshold: 0
	});
	// mobile sticky btn show ref
	const [FormBtnref, btnInView] = useInView({
		threshold: 0,
		rootMargin: '-70px 0px 120px 0px'
	});

	const FormRef = useRef(null);

	// get utm_source
	const hiddenForm = useSelector((state) => state?.hiddenForm);
	const { utm_source } = hiddenForm?.data;

	// pass signer / donor name to TY Banner
	const [TYName, setTYName] = useState();

	useEffect(() => {
		// get donation module firstname
		window.__greenpeace__ = window.__greenpeace__ || {};
		window.__greenpeace__.onDonationModulePaymentCompleted = function (data) {
			setTYName(data.firstName);
		};
	});
	useEffect(() => {
		setTYName(signup?.data?.FirstName);
	}, [signup]);

	submitted = useSelector((state) => state?.status?.submitted);

	useEffect(() => {
		dispatch({ type: formActions.SET_FORM, data: formContent }); // set form content from form.json
	}, [dispatch]);

	return (
		<>
			<StrapiSEO strapi={strapi} />
			<Box>
				{submitted ? (
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
							// title: `${TYName ? TYName : '綠色和平支持者'}，${
							// 	strapi?.thankyouHero?.richContent
							// }`,
							description: strapi?.thankyouHero?.richContentParagraph
						}}
					/>
				) : (
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
				)}
			</Box>
			<PageContainer>
				<OverflowWrapper>
					<Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
						<Box minWidth={0} flex={1} mt={{ base: 10, sm: 60 }}>
							<ContentContainer issue={strapi?.issue?.data?.attributes?.slug}>
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
								</>
								<>
									{pageType?.toLowerCase() === 'donation' && !submitted && (
										<>
											<Heading
												as="p"
												textAlign="center"
												py="6"
												fontSize={{ base: 'xl', md: '2xl' }}
											>
												Frequently Asked Questions (FAQ)
											</Heading>
											<DonateFAQ locale="HKEnglish" />
										</>
									)}
								</>
							</ContentContainer>
						</Box>
						<Box flex={1} ref={FormRef}>
							<FormContainer>
								<Box ref={ref}>
									{pageType?.toLowerCase() === 'donation' || submitted ? (
										utm_source !== 'dd' && (
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
												campaignId={
													theme?.params?.campaignId ??
													strapi?.donationModuleCampaignId ??
													''
												}
												env={strapi?.donationModuleEnv}
											/>
										)
									) : (
										<SignupForm />
									)}
								</Box>
								<div ref={FormBtnref}></div>
							</FormContainer>
						</Box>
					</Flex>
				</OverflowWrapper>
			</PageContainer>
			<PetitionFooter locale={'HKEnglish'} />
			<StrapiFixedButton target={FormRef} targetInView={btnInView} />
		</>
	);
}

export default Index;