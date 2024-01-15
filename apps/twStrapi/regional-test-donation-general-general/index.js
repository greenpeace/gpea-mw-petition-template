/** 
 * Dploy Setting:
PROJECT=twStrapi/regional-test-donation-general-general
MARKET=tw
PROJECT_NAME=regional-test-donation-general-general
BASEPATH=/htdocs/2023/test/regional-test-donation-general-general
ASSETPREFIX=https://change.greenpeace.org.tw/2023/test/regional-test-donation-general-general/
FTP_CONFIG_NAME=ftp_tw
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=regional-test-donation-general-general
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
import SignupForm from '@components/GP/TWForm';
// import new layout components
import MainHeading from '@components/ResponsiveBanner/main-heading';
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
	const hiddenForm = useSelector((state) => state?.hiddenForm);
	const pageType = strapi?.page_type?.data?.attributes?.name;

	const FormRef = useRef(null);
	const [signupBtnRef, setSignupBtnRef] = useState(null);
	const signupBtnRootMargin = useSignupBtnRootMargin(FormRef, signupBtnRef);

	const [ref, inView] = useInView({
		threshold: 0,
		rootMargin: signupBtnRootMargin
	});
	// mobile sticky btn show ref
	const [FormBtnref, btnInView] = useInView({
		threshold: 0,
		rootMargin: '-70px 0px 120px 0px'
	});

	submitted = useSelector((state) => state?.status?.submitted);

	useEffect(() => {
		dispatch({ type: formActions.SET_FORM, data: formContent }); // set form content from form.json
	}, [dispatch]);

	// const { FirstName } = signup;

	// get utm_source
	const { utm_source } = hiddenForm?.data;

	// pass signer / donor name to TY Banner
	const [TYName, setTYName] = useState();

	// get convert experiment variation
	const [variation, setVariation] = useState('A');

	useEffect(() => {
		// get donation module firstname
		window.__greenpeace__ = window.__greenpeace__ || {};
		window.__greenpeace__.onDonationModulePaymentCompleted = function (data) {
			setTYName(data.firstName);
		};

		if(window.__greenpeace__.testSet) {
			setVariation(window.__greenpeace__.testSet)
		}
	});
	useEffect(() => {
		setTYName(signup?.data?.FirstName);
	}, [signup]);

	// group b title with this function, like: ABCHRich(strapi?.contentHero?.richContent)
	const ABCHRich = (target) => {
		const parser = new DOMParser();
		const CHRichHtml = parser.parseFromString(target, 'text/html');
		if(CHRichHtml.querySelector('h1') )CHRichHtml.querySelector('h1').setAttribute('hidden', '');
		if(CHRichHtml.querySelector('.raw-html-embed h1')) CHRichHtml.querySelector('.raw-html-embed h1').removeAttribute('hidden');
		return new XMLSerializer().serializeToString(CHRichHtml);
	};

	return (
		<>
			<StrapiSEO strapi={strapi} />
			{variation === 'B' ? (
				<Box className="layout-1col">
					{submitted ? (
						<MainHeading
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
								title: `${TYName ? TYName : '綠色和平支持者'}，${
									strapi?.thankyouHero?.richContent
								}`,
								description: strapi?.thankyouHero?.richContentParagraph
							}}
						/>
					) : (
						<MainHeading
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
									  ABCHRich(strapi?.contentHero?.richContent)
									: ABCHRich(strapi?.contentHero?.richContent),
								description: strapi?.contentHero?.richContentParagraph
							}}
						/>
					)}

					<ContentContainer
						issue={strapi?.issue?.data?.attributes?.slug}
						layout={'1col'}
					>
						{submitted ? (
							<StrapiDynamicBlocks
								className={'layout-1col'}
								blocks={'thankyouBlocks'}
								strapi={strapi}
								variation={variation}
							/>
						) : (
							<StrapiDynamicBlocks
								className={'layout-1col'}
								blocks={'contentBlocks'}
								strapi={strapi}
								variation={variation}
							/>
						)}

						<Box flex={1} ref={FormRef} py={'4rem'}>
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
												isUAT={false}
												env={strapi?.donationModuleEnv}
											/>
										)
									) : (
										<SignupForm setSignupBtnRef={setSignupBtnRef} />
									)}
								</Box>
								<div ref={FormBtnref}></div>
							</FormContainer>
						</Box>
					</ContentContainer>
				</Box>
			) : (
				<>
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
											//title: strapi?.thankyouHero?.richContent,
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
								);
							}
						})()}
					</Box>
					<PageContainer>
						<OverflowWrapper>
							<Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
								<Box minWidth={0} flex={1} mt={{ base: 10, sm: 60 }}>
									<ContentContainer
										issue={strapi?.issue?.data?.attributes?.slug}
									>
										<>
											{submitted ? (
												<StrapiDynamicBlocks
													blocks={'thankyouBlocks'}
													strapi={strapi}
													variation={variation}
												/>
											) : (
												<StrapiDynamicBlocks
													blocks={'contentBlocks'}
													strapi={strapi}
													variation={variation}
												/>
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
														isUAT={false}
														env={strapi?.donationModuleEnv}
													/>
												)
											) : (
												<SignupForm
													setSignupBtnRef={setSignupBtnRef}
												/>
											)}
										</Box>
										<div ref={FormBtnref}></div>
									</FormContainer>
								</Box>
							</Flex>
						</OverflowWrapper>
					</PageContainer>
					<PetitionFooter locale={'TWChinese'} />
				</>
			)}

			<StrapiFixedButton
				target={FormRef}
				targetInView={
					pageType?.toLowerCase() === 'donation' || submitted
						? btnInView
						: inView
				}
			/>
		</>
	);
}

export default Index;
