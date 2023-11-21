import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Box, Text, Center, SimpleGrid, Image } from '@chakra-ui/react';
import * as surveyActions from 'store/actions/action-types/survey-actions';
import CorrectIcon from '../../images/landing_correct.png';
import FalseIcon from '../../images/landing_false.png';

const Quiz = ({
	setSurveyPage,
	quiz,
	answer,
	setSurveyAnswer,
	current,
	setCurrentQuiz,
	checked,
	setChecked,
	clickActive,
	setClickActive
}) => {
	const currentQuiz = quiz[current];

	const handleNextButton = (ans) => {
		setChecked(ans.value);
	};

	return (
		<SimpleGrid
			alignItems="stretch"
			minChildWidth={{ base: '100%' }}
			spacing={2}
		>
			{
				//#292F47 ba422f 66cc00
			}
			{currentQuiz?.options?.map((d, i) => {
				let getCurrentAnswers = answer[current] || [];
				const selected = getCurrentAnswers.indexOf(d.value) > -1;
				const icon =
					d.value === currentQuiz.correct
						? CorrectIcon
						: selected && currentQuiz.correct
						? FalseIcon
						: null;
				return (
					<Box
						key={i}
						p={4}
						border="0"
						borderRadius={'4px'}
						bgColor={
							checked
								? currentQuiz?.correct
									? d.value === currentQuiz.correct
										? '#66cc00'
										: selected
										? '#ba422f'
										: '#292F47'
									: selected
									? '#292F47'
									: '#b7b7b7'
								: '#292F47'
						}
						color={'white'}
						cursor="pointer"
						transition="0.2s ease"
						onClick={async () => {
							if (clickActive && currentQuiz.maximum === 1) {
								setClickActive(false);
								setSurveyAnswer({
									index: current,
									value: [d.value, d.point]
								});
								handleNextButton(d);
							}
						}}
					>
						<Center h="100%" position="relative">
							<Text
								fontSize={{ base: 'base', md: 'md' }}
								fontWeight={700}
								lineHeight="1.7"
								letterSpacing="1px"
								dangerouslySetInnerHTML={{ __html: d.label }}
							></Text>
							{Boolean(checked && icon !== null) && (
								<Image
									src={icon}
									w={6}
									h={6}
									position="absolute"
									right={0}
									top="50%"
									transform={'translateY(-50%)'}
								/>
							)}
						</Center>
					</Box>
				);
			})}
		</SimpleGrid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
