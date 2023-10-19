import React from 'react';
import { connect } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import * as surveyActions from 'store/actions/action-types/survey-actions';

const QuizTop = ({
	setSurveyPage,
	quiz,
	current,
	setCurrentQuiz,
	checked,
	setChecked,
	clickActive,
	setClickActive
}) => {
	const currentQuiz = quiz[current];

	const handleBackButton = () => {
		if (current === 0) {
			setSurveyPage('landing');
		} else {
			console.log(checked);
			setChecked(0);
			setClickActive(true);
			setCurrentQuiz((current -= 1));
		}
	};
	const handleNextButton = () => {
		if (!clickActive) {
			if (current + 1 >= quiz.length) {
				setSurveyPage('result');
			} else {
				setChecked(0);
				setClickActive(true);
				setCurrentQuiz((current += 1));
			}
		}
	};

	return (
		<Flex
			my={6}
			pb={4}
			direction="row"
			align={'center'}
			justifyContent={'space-between'}
		>
			<Box cursor={'pointer'} onClick={() => handleBackButton()}>
				<Flex alignContent={'center'}>
					<ChevronLeftIcon w={6} h={6} pt="1" pr="1" color="white" />
					<Text
						as="span"
						fontWeight="bold"
						fontSize={{ base: 'md' }}
						color="white"
					>
						上一頁
					</Text>
				</Flex>
			</Box>
			<Box>
				<Text
					as="span"
					fontWeight="bold"
					fontSize={{ base: 'md', md: 'xl' }}
					color="white"
				>
					{current + 1} / {quiz.length}
				</Text>
			</Box>
			<Box cursor={'pointer'} onClick={() => handleNextButton()}>
				<Flex alignContent={'center'}>
					<Text
						as="span"
						fontWeight="bold"
						fontSize={{ base: 'md' }}
						color="white"
					>
						下一頁
					</Text>
					<ChevronRightIcon w={6} h={6} pt="1" pr="1" color="white" />
				</Flex>
			</Box>
		</Flex>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuizTop);
