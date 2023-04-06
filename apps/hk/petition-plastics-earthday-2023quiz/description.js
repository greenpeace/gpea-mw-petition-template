import React from 'react';
import { connect } from 'react-redux';
import {
  Heading,
  Stack,
  Container,
  Box,
  Center,
  Image,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';
import LazyShow from './components/LazyShow';
import * as surveyActions from 'store/actions/action-types/survey-actions';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import leafImage from './images/earthday-landing-bg.png';

const Description = ({ setSurveyPage }) => {
  return (
    <>
      <Container maxW={{ base: 'xl', xl: '2xl' }} pos={'relative'} zIndex={10}>
        <Center py={4}>
          <Stack w="100%" direction="column" spacing={4}>
            <Box borderRadius={'8px'} p={4}>
              <Heading
                fontSize={{ base: 'xl', md: '2xl' }}
                color={'black'}
                textAlign={{ base: 'center' }}
              >
                A Better World, A Better You!
              </Heading>
            </Box>
            <Box
              borderRadius={'8px'}
              pb={4}
              minH={{ base: 'auto', md: '240px' }}
            >
              <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.5}>
                <Box borderRadius={'4px'} border={'4px solid #FFF'}>
                  <Image src={leafImage} loading="lazy" />
                </Box>
              </LazyShow>
            </Box>

            <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
              <Box bgColor={'rgba(255,255,255,0.8)'} borderRadius={'8px'} p={4}>
                <Text as="p" color={'black'} {...paragraphProps} mb={0}>
                  邀請你用2分鐘時間，極速搵出你內心最需要被清理嘅垃圾，同地球一齊減廢，做個更好嘅自己！
                </Text>
              </Box>
            </LazyShow>
            <Box>
              <Flex mt={4} justifyContent={{ base: 'center' }}>
                <Button
                  variant={'quizSquare'}
                  fontSize={{ base: 'xl', lg: '2xl' }}
                  px={{ base: 10, md: 14 }}
                  py={{ base: 6, md: 8 }}
                  onClick={() => setSurveyPage('quiz')}
                >
                  <Text>開始測驗</Text>
                </Button>
              </Flex>
            </Box>
          </Stack>
        </Center>
      </Container>
      <Box bgColor={'#eee'} w="100%" h="100%" top={0} position="absolute" />
    </>
  );
};

const mapStateToProps = ({ status, survey }) => {
  return { status, answer: survey.data, current: survey.current };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSurveyPage: (data) => {
      dispatch({ type: surveyActions.SET_SURVEY_PAGE, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Description);
