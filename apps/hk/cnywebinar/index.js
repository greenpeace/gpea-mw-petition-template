/**
 * Deploy setting
# Project Apps Directory: /apps/{PROJECT}
PROJECT=hk/cnywebinar
MARKET=hk
PROJECT_NAME=cnywebinar
BASEPATH=/web/api.greenpeace.org.hk/htdocs/2022/cnywebinar
ASSETPREFIX=https://api.greenpeace.org.hk/2022/cnywebinar/
FTP_CONFIG_NAME=api_hk_cloud 
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=zh-hk.2022.general.webinar_cny.registration.event.na
*/

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Avatar, AvatarGroup, Box, Flex, Text } from '@chakra-ui/react';
// Import helpers
import { useSignupBtnRootMargin } from '@common/utils';

import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';

import speaker1 from './images/speaker1_v2.jpg';
import speaker2 from './images/speaker2.png';
import speaker3 from './images/speaker3.jpg';

import heroBannerImage from './images/q1-cny-webinar-kv-banner.jpg';

const Content = dynamic(() => import('./Content'));
const Thankyou = dynamic(() => import('./Thankyou'));

const HeroBanner = dynamic(() => import('@components/Banner/hero'));
const ThanksBanner = dynamic(() => import('@components/Banner/thanks'));
const PageContainer = dynamic(() => import('@containers/pageContainer'));

const DonateForm = dynamic(() => import('@components/GP/DonateForm'));
const SignupForm = dynamic(() => import('@components/GP/WebinarForm'));
const FixedCTA = dynamic(() => import('@components/GP/FixedCTA'));

function Index({ status, theme, setFormContent, signup }) {
	const { submitted } = status;
	const { FirstName } = signup;

	const myRef = useRef(null);
	const speaker1Ref = useRef(null);
	const speaker2Ref = useRef(null);
	const speaker3Ref = useRef(null);
	const executeScroll = () => scrollToRef(myRef);

	const [signupBtnRef, setSignupBtnRef] = useState(null);
	const signupBtnRootMargin = useSignupBtnRootMargin(myRef, signupBtnRef);

	const [ref, inView] = useInView({
		threshold: 0,
		rootMargin: signupBtnRootMargin
	});
	// mobile sticky btn show ref
	const [FormBtnref, btnInView] = useInView({
		threshold: 0,
		rootMargin: '-24px 0px 80px 0px'
	});
	useEffect(() => {
		setFormContent(formContent);
	}, []);

	return (
		<>
			<Box className="cny">
				{submitted ? (
					<ThanksBanner
						bgImage={heroBannerImage}
						content={{
							title: `${
								FirstName ? FirstName : '綠色和平支持者'
							}，感謝您報名綠色新春教室`,
							description: [
								'為我們的無塑未來與環境多走一步，捐助支持綠色和平走塑項目。<b>以每月$200捐款支持綠色和平的項目工作，您將獲得兩次「環保手作工作坊」或探訪的機會</b>！名額有限，額滿即止。'
							]
						}}
						removeMask="true"
					></ThanksBanner>
				) : (
					<HeroBanner
						bgImage={heroBannerImage}
						content={{
							title:
								'請即報名綠色新春教室<br/>裸買店店主同你<br/>環保辦年貨大掃除'
						}}
						removeMask="true"
					>
						<Flex pos="relative" zIndex="2" py={4} flexDirection="column">
							<Text fontSize="xl" px="2" mb="4" fontWeight="bold" color="white">
								嘉賓主持：
							</Text>
							<AvatarGroup size="xl" max={4}>
								<Avatar
									name="「四圍斟」Susan"
									src={speaker3}
									onClick={() => scrollToRef(speaker3Ref)}
								/>
								<Avatar
									name="譚穎琳 Leanne"
									src={speaker1}
									onClick={() => scrollToRef(speaker1Ref)}
								/>
								<Avatar
									name="柯家文 Kaman"
									src={speaker2}
									onClick={() => scrollToRef(speaker2Ref)}
								/>
							</AvatarGroup>
						</Flex>
					</HeroBanner>
				)}
			</Box>
			<PageContainer>
				<OverflowWrapper>
					<Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
						<Box flex={1} mt={{ base: 10, sm: 60 }}>
							<ContentContainer theme={theme}>
								{submitted ? (
									<Thankyou />
								) : (
									<Content
										speaker1Ref={speaker1Ref}
										speaker2Ref={speaker2Ref}
										speaker3Ref={speaker3Ref}
									/>
								)}
							</ContentContainer>
						</Box>
						<Box flex={1} ref={myRef}>
							<FormContainer>
								<Box ref={ref}>
									{submitted ? (
										<DonateForm />
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
			{((!submitted && !inView) || (submitted && !btnInView)) && (
				<FixedCTA onClick={executeScroll}>
					{formContent.mobile_cta ? formContent.mobile_cta : '立即捐款'}
				</FixedCTA>
			)}
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
