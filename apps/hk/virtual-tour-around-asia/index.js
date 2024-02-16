/**
 * Deploy setting
# Project Apps Directory: /apps/{PROJECT}
PROJECT=hk/virtual-tour-around-asia
MARKET=hk
PROJECT_NAME=virtual-tour-around-asia
BASEPATH=/web/api.greenpeace.org.hk/htdocs/2022/virtual-tour-around-asia
ASSETPREFIX=https://api.greenpeace.org.hk/2022/virtual-tour-around-asia/
FTP_CONFIG_NAME=api_hk_cloud 
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=zh-hk.2022.general.virtual_tour_around_asia.registration.event.na
*/

import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import * as formActions from 'store/actions/action-types/form-actions';
// Import library
import { useInView } from 'react-intersection-observer';
import { Box, Flex } from '@chakra-ui/react';
// Import custom containers
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import PageContainer from '@containers/pageContainer';
// Import custom components
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';
import HeroBanner from '@components/ResponsiveBanner/hero';
import ThanksBanner from '@components/ResponsiveBanner/thanks';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/WebinarForm';
// Import helpers
import { useSignupBtnRootMargin } from '@common/utils';
// Import Contents
import formContent from './form';
import SEO from './SEO';

import Content from './Content';
import Thankyou from './Thankyou';
// Import static
import heroBannerImage from './images/2022-general-post-launch-webinar-desktop-banner.jpg';
import heroBannerImageMobile from './images/2022-general-post-launch-webinar-mobile-banner.jpg';

function Index({ status, theme, setFormContent, signup }) {
	const { submitted } = status;
	const { FirstName } = signup;

	const mobileForm = useRef(null);

	useEffect(() => {
		setFormContent(formContent);
	}, []);

	const [signupBtnRef, setSignupBtnRef] = useState(null);
	const signupBtnRootMargin = useSignupBtnRootMargin(mobileForm, signupBtnRef);

	const [ref, inView] = useInView({
		threshold: 0,
		rootMargin: signupBtnRootMargin
	});
	// mobile sticky btn show ref
	const [FormBtnref, btnInView] = useInView({
		threshold: 0,
		rootMargin: '-70px 0px 120px 0px'
	});

	useEffect(() => {
		if (submitted) {
			//
			window.dataLayer = window.dataLayer || [];

			window.dataLayer.push({
				event: 'fbqEvent',
				contentName: 'annual-report-webinar',
				contentCategory: 'Subscribe'
			});
		}
	}, [submitted]);

	return (
		<>
			{submitted ? (
				<ThanksBanner
					defaultImage={heroBannerImage}
					content={{
						title: `${
							FirstName ? FirstName : '綠色和平支持者'
						}，感謝您報名分享會！`,
						description: [
							'確認電郵將於 12 小時內向您發送，內含講座連結和密碼，敬請留意。'
						]
					}}
					removeMask={false}
					imageSrcset={[
						{
							media: '(min-width: 48em)',
							srcset: heroBannerImage
						},
						{
							media: '',
							srcset: heroBannerImageMobile
						}
					]}
				/>
			) : (
				<HeroBanner
					defaultImage={heroBannerImage}
					content={{
						title: '請即報名：<br/>眼睛去旅行<br/>港台日韓四地連線'
					}}
					removeMask={false}
					imageSrcset={[
						{
							media: '(min-width: 48em)',
							srcset: heroBannerImage
						},
						{
							media: '',
							srcset: heroBannerImageMobile
						}
					]}
				/>
			)}
			<PageContainer>
				<OverflowWrapper>
					<Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
						<Box flex={1} mt={{ base: 10, sm: 60 }}>
							<ContentContainer>
								{submitted ? <Thankyou /> : <Content />}
							</ContentContainer>
						</Box>
						<Box flex={1} ref={mobileForm}>
							<FormContainer>
								<Box ref={ref}>
									{submitted ? (
										<DonationModule
											market={'HK'}
											language={'zh_HK'}
											campaign={'general'}
											// campaignId={''}
											env={'production'}
										/>
									) : (
										<SignupForm setSignupBtnRef={setSignupBtnRef} />
									)}
								</Box>
								<div ref={FormBtnref}></div>
							</FormContainer>
						</Box>
					</Flex>
				</OverflowWrapper>
			</PageContainer>
			<PetitionFooter locale={'HKChinese'} />
			<ScrollToTargetButton
				target={mobileForm}
				targetInView={submitted ? btnInView : inView}
			/>
		</>
	);
}

const mapStateToProps = ({ status, theme, signup }) => {
	return { status, theme: theme.data, signup: signup.data };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setFormContent: (data) => {
			dispatch({ type: formActions.SET_FORM, data });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
