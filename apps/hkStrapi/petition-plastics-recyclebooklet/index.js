/**
 * Deploy setting
# Project Apps Directory: /apps/{PROJECT}
PROJECT=hkStrapi/petition-plastics-recyclebooklet
MARKET=hk
PROJECT_NAME=petition-plastics-recyclebooklet
BASEPATH=/web/api.greenpeace.org.hk/htdocs/2022/petition-plastics-recyclebooklet
ASSETPREFIX=https://api.greenpeace.org.hk/2022/petition-plastics-recyclebooklet/
FTP_CONFIG_NAME=api_hk_cloud 
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=zh-hk.2022.plastics.recycle_booklet.registration.event.na
*/

import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as formActions from 'store/actions/action-types/form-actions';
// Import library
import { useInView } from 'react-intersection-observer';
import { Box, Flex } from '@chakra-ui/react';
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
import SignupForm from '@components/GP/WebinarForm';
// Import Strapi content components
import StrapiSEO from '@components/Strapi/StrapiSEO';
import StrapiDynamicBlocks from '@components/Strapi/StrapiDynamicContent';
import StrapiFixedButton from '@components/Strapi/StrapiFixedButtonFull';
// Import helpers
import { useSignupBtnRootMargin } from '@common/utils'; 
// Import Contents
import formContent from './form';
// Import static

function Index({ submitted = false, strapi }) {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state?.theme);
	const signup = useSelector((state) => state?.signup);
	const pageType = strapi?.page_type?.data?.attributes?.name;

	const FormRef = useRef(null);

	const [signupBtnRef, setSignupBtnRef] = useState(null);
	const signupBtnRootMargin = useSignupBtnRootMargin(FormRef, signupBtnRef);

	const [ref, inView] = useInView({
		threshold: 0,
		rootMargin: signupBtnRootMargin,
	});
	// mobile sticky btn show ref
	const [FormBtnref, btnInView] = useInView({
		threshold: 0,
		rootMargin: '-70px 0px 120px 0px'
	});
	// const FormRef = useRef(null);

	// get utm_source
	const hiddenForm = useSelector((state) => state?.hiddenForm);
	const { utm_source } = hiddenForm?.data;
	const { AsiaPayResult } = hiddenForm?.data;

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
							// title: strapi?.thankyouHero?.richContent,
							title: `${TYName ? TYName : '綠色和平支持者'}，${
								strapi?.thankyouHero?.richContent
							}`,
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
												utm_source={utm_source}
											/>
									) : (
										<StrapiDynamicBlocks
												blocks={'contentBlocks'}
												strapi={strapi}
												utm_source={utm_source}
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
												常見問題
											</Heading>
											<DonateFAQ locale="HKChinese" />
										</>
									)}
								</>
							</ContentContainer>
						</Box>
						<Box flex={1} ref={FormRef}>
							<FormContainer>
								<Box ref={ref}>
									{pageType?.toLowerCase() === 'donation' || submitted ? (
										<DonationModule
											market={
												strapi?.market?.data?.attributes?.market === 'Hong Kong'
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
									) : (
										<SignupForm setSignupBtnRef={ setSignupBtnRef } />
									)}
								</Box>
									<div ref={ FormBtnref }></div>
								</FormContainer>
						</Box>
					</Flex>
				</OverflowWrapper>
			</PageContainer>
			<PetitionFooter locale={'HKChinese'} />
			<StrapiFixedButton target={FormRef} targetInView={ (pageType?.toLowerCase() === 'donation' || submitted) ? btnInView : inView} />
		</>
	);
}

export default Index;