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
// import Form from './components/Form';
import DonateForm from '@components/GP/DonateForm';
import SignupForm from '@components/GP/WebinarForm';
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

			

			<Container maxW={`${maxWSize}px`} display={'flex'} flexDirection={{ base: 'column-reverse', md: 'row' }} alignItems={'flex-start'} pb={4} mt={{ base: -20, md: -60 }}>

				<Box
					flex={'1 1 50%'}
					py={10}
					pr={{ md:4, xl: 10 }}
					pb={16}
					mt={{ base: 10, md: 60 }}
				>
					<MainSection speaker1Ref={speaker1Ref} />
				</Box>
				{/** Mobile form */}
				<Box ref={mobileForm} 
					zIndex="2"
					position={{base: 'relative', md: "sticky"}}
					top="4px"
					flex={'1 1 50%'}
					pl={{ md: 4, xl: 10 }}
				>
					<Box 
						maxW="500px"
						mx="auto"
						bgColor="white"
						borderRadius="var(--radius-xl)"
						boxShadow="lg"
						overflow="hidden"
						transform="translateZ(0)"
						ref={ref}
					>
						{status?.submitted ? (
							<DonateForm />
						) : (
							<SignupForm setSignupBtnRef={function () {}} />
						)}
						<div ref={FormBtnref}></div>
					</Box>
				</Box>
				{/** Mobile form End */}
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
