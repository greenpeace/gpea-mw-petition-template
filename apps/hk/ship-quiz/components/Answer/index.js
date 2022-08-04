import React from 'react';
import { connect } from 'react-redux';
import { Box, Text, Center, SimpleGrid } from '@chakra-ui/react';
import * as surveyActions from 'store/actions/action-types/survey-actions';

const Quiz = ({
  setSurveyPage,
  quiz,
  answer,
  setSurveyAnswer,
  current,
  setCurrentQuiz,
}) => {
  const currentQuiz = quiz[current];

  const handleNextButton = () => {
    if (current + 1 >= quiz.length) {
      setSurveyPage('result');
    } else {
      setCurrentQuiz((current += 1));
    }
  };

  return (
    <SimpleGrid
      alignItems="stretch"
      minChildWidth={{ base: '280px' }}
      spacing={4}
    >
      {currentQuiz?.options?.map((d, i) => {
        let getCurrentAnswers = answer[current] || [];
        const selected = getCurrentAnswers.indexOf(d.value) > -1;
        return (
          <Box
            key={i}
            p={4}
            border="2px"
            borderColor="blue.400"
            borderRadius={'md'}
            bgColor={selected ? 'blue.400' : 'white'}
            color={selected ? 'rgba(255,255,255,0.8)' : 'blue.400'}
            cursor="pointer"
            transition="0.2s ease"
            onClick={() => {
              if (currentQuiz.maximum === 1) {
                setSurveyAnswer({
                  index: current,
                  value: [d.value, d.point],
                });
                setTimeout(() => handleNextButton(), 100);
              }
            }}
          >
            <Center h="100%">
              <Text
                fontSize={{ base: 'base', md: 'md' }}
                fontWeight={500}
                letterSpacing="1px"
                dangerouslySetInnerHTML={{ __html: d.label }}
              ></Text>
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
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
