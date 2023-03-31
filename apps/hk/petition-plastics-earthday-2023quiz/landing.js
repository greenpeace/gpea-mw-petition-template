import { Button, Box, Image, Stack, Center } from '@chakra-ui/react';
import { connect } from 'react-redux';
import LazyShow from './components/LazyShow';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import bg from './images/earthday-landing-bg.png';
import mobileBG from './images/earthday-landing-bg-m.png';
import TitleKeyVisual from './images/earthday-landing-title.png';
// import signPicture from './images/earthday-sign.png';
// import signPictureMobile from './images/earthday-sign-m.png';
import startButton from './images/earthday-sign-m.png';


const Landing = ({ setSurveyPage }) => {
	return (
		<Box h={'100vh'} w={'100%'} pos={'relative'}>
			<Box pos={'relative'} zIndex={'2'}>
				<Center
					transform={{ md: 'translate(0,-20%)', lg: 'translate(0,0)' }}
					h={'100%'}
					w={{ base: '50%', md: '48%', xl: '50%' }}
					minWidth={'180px'}
					alignItems={{ base: 'flex-start', md: 'center' }}
					// ml={{ xl: '25%' }}
					ml={{ xl: '6%' }}
				>
					<Stack direction="column">
						<Box
							p={{ base: 0 }}
							mx="auto"
							w={{ base: 'auto', md: 'auto' }}
							maxWidth={{ base: '360px', '2xl': '420px' }}
							pt={{ base: 20, md: 6, lg: 0 }}
							// mt={{ base: '5vh', '2xl': '5vh' }}
							mt={{ base: '5vh', '2xl': '-5vh' }}
						>
							<LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
								<Image
									src={TitleKeyVisual}
									ml={{ base: 6, md: 4 }}
									alt="你內心最需要被清理嘅垃圾"
								/>
							</LazyShow>
						</Box>
						<Box
							my={4}
							maxWidth={{ base: 'auto', sm: 'auto' }}
							alignSelf={'center'}
						>
							<LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
								<Button
									// mt={1}
									mt={4}
									ml={{ base: 6, md: 4 }}
									variant={'quizSquare'}
									fontSize={{ base: 'xl', sm: '2xl' }}
									px={{ base: 10, sm: 16 }}
									py={{ base: 4, sm: 8 }}
									onClick={() => setSurveyPage('description')}
								>
									開始測驗
								</Button>
							</LazyShow>
						</Box>
						{/* <Box>
							<Image
								d={{ base: 'block', md: 'none' }}
								// position="absolute"
								// bottom={{base: '10%', md:'1%', lg: '2%', xl: '2%'}}
								left={{ base: 0 }}
								mt={'8vh'}
								ml={7}
								src={signPictureMobile}
								w={{ base: '30%', sm: '40%' }}
								minWidth={'100px'}
							/>
						</Box> */}

						{/* <Box
								maxWidth={{ base: '50%', sm: 'auto' }}
								alignSelf={'center'}
								onClick={() => setSurveyPage('description')}
							>
								<LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
									<Image
									src={startButton}
									cursor={'pointer'}
									_hover={{ opacity: 0.85 }}
									/>
								</LazyShow>
							</Box> */}
					</Stack>
				</Center>
			</Box>
			<Box
				id="bg"
				position="absolute"
				top={0}
				bottom={0}
				w={'100%'}
				h={'100%'}
				bgSize={'cover'}
				bgRepeat={'no-repeat'}
				objectFit={'cover'}
				bgImage={{ base: mobileBG, md: bg }}
				bgPosition={{
					base: 'center center',
					md: '65% 40px',
					lg: 'center center'
				}}
				zIndex={'1'}
			>
				{/* <Image
					d={{ base: 'none', lg: 'block' }}
					position="absolute"
					bottom={{ lg: '3%', xl: '2%' }}
					left={{ lg: '78%', xl: '70%' }}
					src={signPicture}
					w={{ base: 'auto', md: '18%', lg: '10%' }}
				/>

				<Image
					d={{ base: 'none', md: 'block', lg: 'none' }}
					position="absolute"
					bottom={{ base: '0', md: '5%' }}
					left={{ base: '0', md: '20%' }}
					src={signPictureMobile}
					w={{ base: 'auto', md: '18%', lg: '12%' }}
				/> */}
			</Box>
		</Box>
	);
};

const mapStateToProps = ({ status, survey }) => {
	return { status, survey };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setSurveyPage: (data) => {
			dispatch({ type: surveyActions.SET_SURVEY_PAGE, data });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
