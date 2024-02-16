/**
 * Deploy setting
# Project Apps Directory: /apps/{PROJECT}
PROJECT=hk/arctic
MARKET=hk
PROJECT_NAME=arctic
BASEPATH=/web/api.greenpeace.org.hk/htdocs/2022/arctic
ASSETPREFIX=https://api.greenpeace.org.hk/2022/arctic/
FTP_CONFIG_NAME=api_hk_cloud 
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=zh-hk.2022.arctic.savethearctic.mindwise_version.signup
*/

import React, { useEffect, useRef, useState } from 'react';
import HeroBanner from '@components/Banner/hero';
import ThanksBanner from '@components/Banner/thanks';
import PageContainer from '@containers/pageContainer';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';

import SignupForm from '@components/GP/HKForm';
import DonationModule from '@components/GP/DonationModule';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';
// Import helpers
import { useSignupBtnRootMargin } from '@common/utils';

import Content from './Content';
import Thankyou from './Thankyou';

import SEO from './SEO';
import formContent from './form';
import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/GP01RWO_PressMedia.jpg';

function Index({ status, theme, setFormContent, signup }) {
	const { submitted } = status;
	const { FirstName } = signup;

	const scrollToRef = (ref) =>
		ref.current?.scrollIntoView({ behavior: 'smooth' });

	const mobileForm = useRef(null);
	const myRef = useRef(null);
	const executeScroll = () => scrollToRef(myRef);

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
						}，感謝您加入守護北極行列！`
					}}
				/>
			) : (
				<HeroBanner
					bgImage={heroBannerImage}
					content={{
						title: '請即聯署<br/>守護北極生態！',
						description: [
							'過去數十年，北極在全球暖化下，已損失三分之二的海冰體積，北極熊的數量亦減少近一半。失去海冰屏障，加上北極海洋不到1.5%範圍得到正式保護，石油公司、工業捕漁船可以不分季節，直入北極奪取資源。'
						]
					}}
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
											market={'HK'}
											language={'zh_HK'}
											campaign={'arctic'}
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
