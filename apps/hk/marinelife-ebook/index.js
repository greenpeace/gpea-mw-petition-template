/**
 * Deploy setting
# Project Apps Directory: /apps/{PROJECT}
PROJECT=hk/marinelife-ebook
MARKET=hk
PROJECT_NAME=marinelife-ebook
BASEPATH=/web/api.greenpeace.org.hk/htdocs/2022/marinelife-ebook
ASSETPREFIX=https://api.greenpeace.org.hk/2022/marinelife-ebook/
FTP_CONFIG_NAME=api_hk_cloud 
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=zh-hk.2022.oceans.marinelife_ebook.registration.event.na
*/

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';

// Import helpers
import { useSignupBtnRootMargin } from '@common/utils';

import formContent from './form';
import SEO from './SEO';

import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/2022-ocean-ebook-desktop-banner.jpg';
import heroBannerImageMobile from './images/2022-ocean-ebook-mobile-banner.jpg';

import Content from './Content';
import Thankyou from './Thankyou';
import HeroBanner from './components/ResponsiveBanner/hero';
import ThanksBanner from './components/ResponsiveBanner/thanks';

const PageContainer = dynamic(() => import('@containers/pageContainer'));
const DonationModule = dynamic(() => import('@components/GP/DonationModule'));
const SignupForm = dynamic(() => import('@components/GP/WebinarForm'));

function Index({ status, theme, setFormContent, signup }) {
	const { submitted } = status;
	const { FirstName } = signup;

	const mobileForm = useRef(null);

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
		setFormContent(formContent);
	}, []);

	return (
		<>
			{submitted ? (
				<ThanksBanner
					bgImage={heroBannerImage}
					content={{
						title: `${
							FirstName ? FirstName : '綠色和平支持者'
						}，歡迎您成為愛護的海洋一分子！`,
						description: [
							'向陷入危機的海洋生物伸出援手，誠邀您捐助支持綠色和平守護海洋工作！'
						]
					}}
					removeMask={true}
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
					bgImage={heroBannerImage}
					content={{
						title: '請即下載<br/>瀕危海洋生物手冊<br/>電子圖鑑'
					}}
					removeMask={true}
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
							<ContentContainer theme={theme}>
								{submitted ? <Thankyou /> : <Content />}
							</ContentContainer>
						</Box>
						<Box flex={1} ref={mobileForm}>
							<FormContainer>
								<Box ref={ref}>
									{submitted ? (
										<DonationModule
											market={theme.Market}
											language={'zh_HK'}
											campaign={'oceans_marine'}
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
