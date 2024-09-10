/** 
 * Dploy Setting:
PROJECT=krPreview
MARKET=kr
PROJECT_NAME=preview
BASEPATH=/web/api.greenpeace.org.hk/htdocs/app/preview-kr
ASSETPREFIX=https://api.greenpeace.org.hk/app/preview-kr/
FTP_CONFIG_NAME=api_hk_cloud
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=preview
*/
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import * as formActions from 'store/actions/action-types/form-actions';
import * as themeActions from 'store/actions/action-types/theme-actions';
// Import library
import { useInView } from 'react-intersection-observer';
import { Box, Flex } from '@chakra-ui/react';
import { stringify } from 'qs';
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
import SignupForm from '@components/GP/KRForm';
// Import Strapi content components
import StrapiSEO from '@components/Strapi/StrapiSEO';
import StrapiDynamicBlocks from '@components/Strapi/StrapiDynamicContent';
import StrapiFixedButton from '@components/Strapi/StrapiFixedButtonFull';
// Import helpers
import { useSignupBtnRootMargin } from '@common/utils';
// Import Contents
import CustomFields from './CustomFields';
import CustomRules from './CustomRules';
import formContent from './form';
// Import static

function Index({ submitted = false, strapi }) {
	strapi = useSelector((state) => state?.theme?.strapi);
	const router = useRouter();
	const dispatch = useDispatch();
	const theme = useSelector((state) => state?.theme);
	const signup = useSelector((state) => state?.signup);
	const hiddenForm = useSelector((state) => state?.hiddenForm);
	const pageType = strapi?.page_type?.data?.attributes?.name;

	const FormRef = useRef(null);

	const [signupBtnRef, setSignupBtnRef] = useState(null);
	const signupBtnRootMargin = useSignupBtnRootMargin(FormRef, signupBtnRef);
	const [hideFixedButton, setHideFixedButton] = useState(false);

	const [ref, inView] = useInView({
		threshold: 0,
		rootMargin: signupBtnRootMargin
	});
	// mobile sticky btn show ref
	const [FormBtnref, btnInView] = useInView({
		threshold: 0,
		rootMargin: '-70px 0px 120px 0px'
	});
	const [isLoaded, setIsLoaded] = useState(false);


	submitted = useSelector((state) => state?.status?.submitted);

	useEffect(() => {
		dispatch({ type: formActions.SET_FORM, data: formContent }); // set form content from form.json
		if (pageType !== undefined) {
			setIsLoaded(true);
		}
	}, [dispatch, pageType]);

	const { LastName } = signup;
	
	useEffect(async () => {
		if (router?.isReady) {
			const { preview } = router?.query;
			if (preview) {
				const endpoint = 'https://strapi.small-service.gpeastasia.org/api';
				const query = stringify(
					{
						filters: {
							market: { slug: 'kr' },
							campaign: preview
						},
						populate: {
							contentBlocks: {
								populate: [
									'CardSlider.image',
									'TestimonialSlider.avatar',
									'CarouselSlider.image'
								]
							},
							contentHero: { populate: '*' },
							issue: { populate: { filters: { name: { $neq: 'pages' } } } },
							market: { populate: { filters: { name: { $neq: 'pages' } } } },
							page_type: { populate: { filters: { name: { $neq: 'pages' } } } },
							seo: { populate: '*' },
							thankyouBlocks: { populate: [
								'CardSlider.image',
								'TestimonialSlider.avatar',
								'CarouselSlider.image'
							] },
							thankyouHero: { populate: '*' }
						}
					},
					{
						encodeValuesOnly: true // prettify URL
					}
				);

				const res = await fetch(
					`${endpoint}/pages?${query}`
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

	// get utm_source
	const { utm_source } = hiddenForm?.data;

	// pass signer / donor name to TY Banner
	const [TYName, setTYName] = useState();

	useEffect(() => {
		// get donation module firstname
		window.__greenpeace__ = window.__greenpeace__ || {};
		window.__greenpeace__.onDonationModulePaymentCompleted = function (data) {
			setTYName(data.lastName);
		};
		if(window?.__greenpeace__?.currentStep > 1 && document.querySelector('.step--15')) {
			setHideFixedButton(window.getComputedStyle(document.querySelector('.step--15')).display !== 'none');
		}else {
			setHideFixedButton(false);
		}
	});
	useEffect(() => {
		setTYName(signup?.data?.LastName);
	}, [signup]);



	return (
		<>
			<StrapiSEO strapi={strapi} />
			<Box>
				{isLoaded && (
					<>
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
									//title: strapi?.thankyouHero?.richContent,
									title: `${TYName ? TYName : '綠色和平支持者'}님，${strapi?.thankyouHero?.richContent
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
					</>
				)}
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
								)}
								{isLoaded && (
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
												<DonateFAQ locale="TWChinese" />
											</>
										)}
									</>
								)}
							</ContentContainer>
						</Box>
						<Box flex={1} ref={FormRef}>
							{isLoaded && (
							<FormContainer>
								<Box ref={ref}>
									{pageType?.toLowerCase() === 'donation' || submitted ? (
										utm_source !== 'dd' && (
											<DonationModule
												market={
													strapi?.market?.data?.attributes?.market ===
														'Hong Kong'
														? 'HK'
														: strapi?.market?.data?.attributes?.market === 'Korea'
															? 'KR'
															:'TW'
												}
												language={'ko_KR'}
												campaign={
													theme?.params?.donation_module_campaign ??
													strapi?.donationModuleCampaign
												}
												campaignId={
													theme?.params?.campaignId ??
													strapi?.donationModuleCampaignId ??
													''
												}
												isUAT={false}
												env={strapi?.donationModuleEnv}
											/>
										)
									) : (
										<SignupForm hasMKT={false} setSignupBtnRef={setSignupBtnRef} CustomFields={CustomFields} CustomRules={CustomRules} />
									)}
								</Box>
								<div ref={FormBtnref}></div>
							</FormContainer>
							)}
						</Box>
					</Flex>
				</OverflowWrapper>
			</PageContainer>
			<PetitionFooter locale={'Korean'} />
			<StrapiFixedButton
				target={FormRef}
				targetInView={
					pageType?.toLowerCase() === 'donation' || submitted
						? btnInView
						: inView
				}
				hideFixedButton={hideFixedButton}
			/>
		</>
	);
}

export default Index;
