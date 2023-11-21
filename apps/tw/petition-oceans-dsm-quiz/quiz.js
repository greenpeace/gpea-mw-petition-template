import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	Stack,
	Container,
	Box,
	Heading,
	Text,
	Center,
	Image
} from '@chakra-ui/react';
import useImage from './useImage';
import Answer from './components/Answer';
import Question from './components/Question';
import LazyShow from './components/LazyShow';
import * as surveyActions from 'store/actions/action-types/survey-actions';
import bg from './images/background.jpg';

const Quiz = ({ quiz, current }) => {
	const currentQuiz = quiz[current];
	const { loading, error, image } = useImage(currentQuiz?.image);
	const { imageAns } = useImage(currentQuiz?.imageAns);

	// check if the answer is correct
	const [ansChecked, setAnsChecked] = useState(0);
	// prevent click repeatedly after answering
	const [clickActive, setClickActive] = useState(true);

	return (
		<>
			<Container maxW={{ base: 'xl', xl: '2xl' }} pos={'relative'} zIndex={10}>
				<Center py={4}>
					<Stack w="100%" direction="column" spacing={4}>
						{/* <Box borderRadius={'8px'} p={4}>
                <Heading
                  fontSize={{ base: 'xl', md: '2xl' }}
                  color={'#025177'}
                  textAlign={{ base: 'center' }}
                >
                  找出隱藏在你潛意識中的極地動物！
                </Heading>
              </Box> */}
						<Box borderRadius={'8px'} px={4} pt={4}>
							<Heading
								fontSize={{ base: 'md', md: '2xl' }}
								textAlign={'center'}
								color={'white'}
								lineHeight="1.7"
							>
								{currentQuiz?.question.label}
							</Heading>
						</Box>
						<Box>
							<LazyShow
								initial={{ opacity: 0, x: 0, y: 0 }}
								duration={0.5}
								reTrigger={currentQuiz.id}
							>
								<Box
									borderRadius={'4px'}
									border={'4px solid #FFF'}
									minH={{ base: 'auto', md: '240px' }}
								>
									{clickActive ? (
										<Image src={image} loading="lazy" />
									) : (
										<Image src={imageAns} loading="lazy" />
									)}
								</Box>
							</LazyShow>
						</Box>
						<Box>
							<Answer
								py={4}
								quiz={quiz}
								checked={ansChecked}
								setChecked={setAnsChecked}
								clickActive={clickActive}
								setClickActive={setClickActive}
							/>
						</Box>
						<Box>
							<Question
								quiz={quiz}
								checked={ansChecked}
								setChecked={setAnsChecked}
								clickActive={clickActive}
								setClickActive={setClickActive}
							/>
						</Box>
					</Stack>
				</Center>
			</Container>
			<Box
				bgImage={`url(${bg})`}
				bgPosition="center"
				bgRepeat="no-repeat"
				bgSize="cover"
				w="100%"
				h="100%"
				top={0}
				position="absolute"
			/>
			{/* <Image
        src={BackgroundVisual}
        w="100%"
        h="100%"
        top={0}
        objectFit={'cover'}
        objectPosition={'center top'}
        position="absolute"
        blur={'0.5'}
      /> */}
			{/* <DynamicBackground currentQuiz={currentQuiz} /> */}
		</>
	);
};

const mapStateToProps = ({ status, survey }) => {
	return { status, answer: survey.data, current: survey.current };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setSurveyAnswer: (data) => {
			dispatch({ type: surveyActions.SET_SURVEY_ANSWER, data });
		},
		setCurrentQuiz: (data) => {
			dispatch({ type: surveyActions.SET_SURVEY_QUIZ, data });
		},
		setSurveyPage: (data) => {
			dispatch({ type: surveyActions.SET_SURVEY_PAGE, data });
		}
	};
};

function propsAreEqual(prevCurrent, nextCurrent) {
	return prevCurrent === nextCurrent;
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(React.memo(Quiz, propsAreEqual));
