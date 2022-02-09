import React from 'react';
import { connect } from 'react-redux';
import {
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
            {/* <Box bgColor={'#025177'} borderRadius={'8px'} p={4}>
              <Heading
                fontSize={{ base: 'md', md: 'xl' }}
                color={'#FFF'}
                textAlign={{ base: 'left', md: 'center' }}
              >
                找出隱藏在您潛意識中的極地動物！
              </Heading>
            </Box> */}
            {current == 0 && (
              <Box borderRadius={'8px'} p={4}>
                <Heading
                  fontSize={{ base: 'xl', md: '2xl' }}
                  color={'#025177'}
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  找出隱藏在您潛意識中的極地動物！
                </Heading>
              </Box>
            )}
            <Box bgColor={'rgba(255,255,255,0.8)'} borderRadius={'8px'} p={4}>
              <Heading
                fontSize={{ base: 'md', md: 'xl' }}
                color={'#025177'}
                lineHeight="1.7"
              >
                <Text as="span" mr="2">
                  {current + 1}.
                </Text>
                {currentQuiz?.question.label}
              </Heading>
            </Box>
            <Box>
              <LazyShow
                initial={{ opacity: 0, x: 0, y: 0 }}
                duration={0.5}
                reTrigger={currentQuiz.id}
              >
                <Box borderRadius={'4px'} border={'4px solid #FFF'}>
                  <Image src={image} loading="lazy" />
                </Box>
              </LazyShow>
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
        objectFit={'cover'}
        objectPosition={'center top'}
        position="absolute"
        blur={'0.5'}
      />
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
