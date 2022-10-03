import React, { useEffect, useState, useRef, useContext } from 'react';
import PetitionFooter from '@containers/petitionFooter';
import AppProvider, { AppContext } from './context/appContext';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import {
	Box,
	Container,
	Image,
	useMediaQuery,
	Slide,
	Spinner,
	Stack,
	Text,
	Link
} from '@chakra-ui/react';
import HeroSection from './components/HeroSection';
import MainSection from './components/MainSection';
import Form from './components/Form';
import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import FixedCTA from './components/FixedCTA';
const maxWSize = 1200;

import heroBannerImage from './images/documentary-hero.jpg';

const moviePageUrl =
	'https://cloud.greenhk.greenpeace.org/petition-oceans-lantau-documentary';

const MessageContainer = ({ children }) => {
	return (
		<Stack
			zIndex="99"
			pos="fixed"
			width="100%"
			height="100%"
			top="0"
			right="0"
			bottom="0"
			left="0"
			bg="rgba(0,0,0,0.85)"
			spacing="6"
			alignItems={'center'}
			justifyContent={'center'}
			p="6"
			lineHeight={'2'}
		>
			{children}
		</Stack>
	);
};

const InvalidScreen = () => {
	return (
		<MessageContainer>
			<InfoOutlineIcon color="white" w={12} h={12} mt="8" />
			<Text textAlign={'center'} color="white" size="xl" fontWeight="bold">
				抱歉，您的登記連結無效
				<br />
			</Text>
			<Text textAlign={'center'} color="white" size="md" fontWeight="bold">
				返回
				<Link
					color="#66cc00"
					_hover={{ color: 'white' }}
					isExternal
					href={moviePageUrl}
				>
					《山海大嶼》紀錄片主頁
				</Link>
			</Text>
		</MessageContainer>
	);
};

const MaxRegistrationScreen = () => {
	return (
		<MessageContainer>
			<InfoOutlineIcon color="white" w={12} h={12} mt="8" />
			<Text textAlign={'center'} color="white" size="xl" fontWeight="bold">
				邀請人數已達上限
				<br />
			</Text>
			<Text textAlign={'center'} color="white" size="md" fontWeight="bold">
				歡迎
				<Link
					color="#66cc00"
					_hover={{ color: 'white' }}
					isExternal
					href={moviePageUrl}
				>
					單次捐款100元
				</Link>
				，收看精彩紀錄片內容，並支持綠色和平守護生態！
			</Text>
		</MessageContainer>
	);
};

function Index({ setFormContent, setFormData }) {
	const mobileForm = useRef(null);
	useEffect(async () => {
		setFormContent(formContent);
	}, []);

	const { ref, inView } = useInView({ threshold: 0 });

	return (
		<>
			<SEO />
			<AppProvider>
				<Hero />
				<div ref={ref}>
					<MobileForm refProp={mobileForm} />
				</div>
				<MainContent />
			</AppProvider>
			<StickyButton refProp={mobileForm} refInView={inView} />
			<PetitionFooter locale={'HKChinese'} />
		</>
	);
}

const Hero = () => {
	const data = useContext(AppContext);
	return (
		<Box pos={'relative'} w="100%" minH={{ base: '380px', md: '500px' }}>
			<Container maxW={`${maxWSize}px`}>
				<HeroSection showForm={data.isValid && !data.isFull} />
			</Container>
			<Box
				zIndex="-1"
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
	);
};

const MobileForm = ({ refProp }) => {
	const data = useContext(AppContext);
	return (
		<Box ref={refProp}>
			<Box d={{ base: 'block', lg: 'none' }} mt={-4}>
				{data.isValid && !data.isFull && <Form />}
			</Box>
		</Box>
	);
};

const MainContent = () => {
	const data = useContext(AppContext);
	const { hasToken, isValid, isFull } = data;
	return (
		<Container maxW={`${maxWSize}px`}>
			<Box
				w={{ base: '100%', lg: 'md', xl: maxWSize / 2 }}
				py={10}
				pr={{ xl: 10 }}
				pb={16}
				minH={400}
			>
				{/** checking token existing */}
				{(hasToken === undefined || !hasToken) && (
					<>
						{hasToken === undefined && (
							<MessageContainer>
								<Spinner
									thickness="4px"
									speed="0.65s"
									emptyColor="gray.200"
									color="#66cc00"
									size="xl"
									mt="8"
								/>
								<Text
									textAlign={'center'}
									color="white"
									size="xl"
									fontWeight="bold"
								>
									正在確認您的登記連結...
									<br />
								</Text>
							</MessageContainer>
						)}
						{!hasToken && hasToken !== undefined && (
							<MessageContainer>
								<InfoOutlineIcon color="white" w={12} h={12} mt="8" />
								<Text
									textAlign={'center'}
									color="white"
									size="xl"
									fontWeight="bold"
								>
									抱歉，您的登記連結無效
									<br />
								</Text>
								<Text
									textAlign={'center'}
									color="white"
									size="md"
									fontWeight="bold"
								>
									返回
									<Link
										color="#66cc00"
										_hover={{ color: 'white' }}
										isExternal
										href={moviePageUrl}
									>
										《山海大嶼》紀錄片主頁
									</Link>
								</Text>
							</MessageContainer>
						)}
					</>
				)}

				{hasToken ? (
					isValid && !isFull ? (
						<MainSection />
					) : (
						<Box minH={'md'}>
							{isValid ? <MaxRegistrationScreen /> : <InvalidScreen />}
						</Box>
					)
				) : (
					''
				)}
			</Box>
		</Container>
	);
};

const StickyButton = ({ refProp, refInView }) => {
	const [isLargerThanLG] = useMediaQuery('(min-width: 62em)'); // default md: '62em'
	const [showCTAButton, setShowCTAButton] = useState(false);
	const executeScroll = (ref) => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		if (isLargerThanLG) {
			setTimeout(() => {
				setShowCTAButton(false);
			}, 500);
		}
		setShowCTAButton(!refInView && !isLargerThanLG);
	}, [refInView, isLargerThanLG]);

	return (
		<Slide
			direction="bottom"
			in={showCTAButton}
			style={{ zIndex: 10 }}
			d={showCTAButton ? 'block' : 'none'}
		>
			<FixedCTA onClick={() => executeScroll(refProp)}>
				{formContent.mobile_cta ? formContent.mobile_cta : '立即捐款'}
			</FixedCTA>
		</Slide>
	);
};

const mapStateToProps = ({ status, theme, signup }) => {
	return { status, theme: theme.data, signup: signup.data };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setFormContent: (data) => {
			dispatch({ type: formActions.SET_FORM, data });
		},
		setFormData: (data) => {
			dispatch({ type: formActions.SET_FORM_DATA, data });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
