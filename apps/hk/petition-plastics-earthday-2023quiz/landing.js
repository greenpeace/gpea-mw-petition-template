import { Button, Box, Image, Stack, Center } from '@chakra-ui/react';
import { connect } from 'react-redux';
import LazyShow from './components/LazyShow';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import bg from './images/earthday-landing-bg.png';
import mobileBG from './images/earthday-landing-bg-m.jpg';
import TitleKeyVisual from './images/earthday-landing-title.png';


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
					ml={{ xl: '25%' }}
				>
					<Stack direction="column">
						<Box
							p={{ base: 0 }}
							mx="auto"
							w={{ base: 'auto', md: 'auto' }}
							maxWidth={{ base: '360px', '2xl': '420px' }}
							pt={{ base: 20, md: 6, lg: 0 }}
							mt={{ base: '5vh', '2xl': '5vh' }}
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
									mt={1}
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
