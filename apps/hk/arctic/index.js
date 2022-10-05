import React, { useEffect, useRef } from 'react';
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
	const { ref, inView } = useInView({
		threshold: 0
	});
	const mobileForm = useRef(null);
	const myRef = useRef(null);
	const executeScroll = () => scrollToRef(myRef);

	useEffect(() => {
		setFormContent(formContent);
	}, []);

	return (
		<>
			<SEO />
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
										<SignupForm />
									)}
								</Box>
							</FormContainer>
						</Box>
					</Flex>
				</OverflowWrapper>
			</PageContainer>
			<PetitionFooter locale={'HKChinese'} />
			<ScrollToTargetButton target={mobileForm} targetInView={inView} />
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
