import React from 'react';
import { connect } from 'react-redux';
import {
  chakra,
  Stack,
  Container,
  Box,
  Heading,
  Text,
  Center,
  Image,
} from '@chakra-ui/react';
import useImage from './useImage';
import Answer from './components/Answer';
import Question from './components/Question';
import LazyShow from './components/LazyShow';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import BackgroundVisual from './images/Question Interface Background.png';

const Quiz = ({ quiz, current }) => {
  const currentQuiz = quiz[current];
  const { loading, error, image } = useImage(currentQuiz?.image);

  return (
    <>
      <Container maxW={{ base: 'xl', xl: '2xl' }} pos={'relative'} zIndex={10}>
        <Center py={4}>
          <Stack w="100%" direction="column" spacing={4}>
            <Box py={2}>
              <Heading
                fontSize={{ base: 'lg', md: '2xl' }}
                color={'blue.500'}
                lineHeight="1.7"
              >
                <Text as="span" mr="2">
                  Q{current + 1}.
                </Text>
                {currentQuiz?.question.label}
              </Heading>
            </Box>
            <Box>
              {/* <LazyShow
                initial={{ opacity: 0, x: 0, y: 0 }}
                duration={0.35}
                reTrigger={currentQuiz.id}
              >
                <Box
                  borderRadius={'md'}
                  minH={{ base: 'auto', md: '240px', lg: '360px' }}
                  overflow={'hidden'}
                >
                  <Image src={image} alt={currentQuiz?.question.label} />
                </Box>
              </LazyShow> */}
              <Box
                borderRadius={'md'}
                minH={{ base: 'auto', md: '240px', lg: '360px' }}
                overflow={'hidden'}
              >
                <Image src={image} alt={currentQuiz?.question.label} />
              </Box>
            </Box>
            <Box>
              <Answer py={4} quiz={quiz} />
            </Box>
            <Box>
              <Question quiz={quiz} />
            </Box>
          </Stack>
        </Center>
      </Container>
      <Image
        src={BackgroundVisual}
        w="100%"
        h="100%"
        top={0}
        left={0}
        objectFit={'cover'}
        objectPosition={'center'}
        position="absolute"
        // blur={'0.5'}
      />
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
    },
  };
};

function propsAreEqual(prevCurrent, nextCurrent) {
  return prevCurrent === nextCurrent;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(Quiz, propsAreEqual));
