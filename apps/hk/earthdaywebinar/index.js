/**
 * Deploy setting
# Project Apps Directory: /apps/{PROJECT}
PROJECT=hk/earthdaywebinar
MARKET=hk
PROJECT_NAME=earthdaywebinar
BASEPATH=/web/api.greenpeace.org.hk/htdocs/2022/earthdaywebinar
ASSETPREFIX=https://api.greenpeace.org.hk/2022/earthdaywebinar/
FTP_CONFIG_NAME=api_hk_cloud 
CLOUD_PAGE_NAME=zh-hk.2022.climate.webinar_earthday_story.registration.event.na
*/

import React, { useEffect, useState, useRef } from 'react';
import PetitionFooter from '@containers/petitionFooter';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Container, Image, useMediaQuery, Slide } from '@chakra-ui/react';
import HeroSection from './components/HeroSection';
import MainSection from './components/MainSection';
import Form from './components/Form';
import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';

import FixedCTA from './components/FixedCTA';
const maxWSize = 1200;

import heroBannerImage from './images/202204-earthday-KV-sns-website-banner_2.jpg';
import speaker1 from './images/Asset-2-shion.png';

function Index({ setFormContent, status }) {
	const [isLargerThanLG] = useMediaQuery('(min-width: 62em)'); // default md: '62em'
	const { ref, inView } = useInView({ threshold: 0 });
	// mobile sticky btn show ref
	const [FormBtnref, btnInView] = useInView({
		threshold: 0
	});
	const mobileForm = useRef(null);
	const executeScroll = (ref) => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};
	const speaker1Ref = useRef(null);
	const [showCTAButton, setShowCTAButton] = useState(false);

	useEffect(() => {
		setFormContent(formContent);
	}, []);

	useEffect(() => {
		console.log('isLargerThanLG-', isLargerThanLG);
		if (isLargerThanLG) {
			setTimeout(() => {
				setShowCTAButton(false);
			}, 500);
		}
		if (!inView && !isLargerThanLG) {
			setShowCTAButton(true);
		} else {
			setShowCTAButton(false);
		}
		if (status?.submitted) {
			setShowCTAButton(!btnInView);
		}
	}, [inView, btnInView, isLargerThanLG]);

	return (
		<>
			<Box pos={'relative'} w="100%" minH={{ base: '380px', md: '500px' }}>
				<Container maxW={`${maxWSize}px`}>
					<HeroSection />
				</Container>
				<Box
					// zIndex="-1"
					height="100%"
					width="100%"
					pos={'absolute'}
					top={0}
					left={0}
				>
					<Image
						src={heroBannerImage}
						height="100%"
						width="100%"
						objectFit="cover"
						objectPosition="65% 25%"
					/>
				</Box>
			</Box>

			{/** Mobile form */}
			<Box ref={mobileForm}>
				<Box d={{ base: 'block', lg: 'none' }} mt={-4} ref={ref}>
					<Form />
					<div ref={FormBtnref}></div>
				</Box>
			</Box>
			{/** Mobile form End */}

			<Container maxW={`${maxWSize}px`}>
				<Box
					w={{ base: '100%', lg: 'md', xl: maxWSize / 2 }}
					py={10}
					pr={{ xl: 10 }}
					pb={16}
				>
					<MainSection speaker1Ref={speaker1Ref} />
				</Box>
			</Container>

			<PetitionFooter locale={'HKChinese'} />

			<Slide
				direction="bottom"
				in={showCTAButton}
				style={{ zIndex: 10 }}
				d={showCTAButton ? 'block' : 'none'}
			>
				<FixedCTA onClick={() => executeScroll(mobileForm)}>
					{formContent.mobile_cta ? formContent.mobile_cta : '立即捐款'}
				</FixedCTA>
			</Slide>
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
