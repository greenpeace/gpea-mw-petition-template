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
import bgPlasticsImage from './images/openingending/Starting.png';

import BackgroundVisual from './images/Question Interface Background.png';

const Description = ({ setSurveyPage }) => {
  return (
    <>
      <Container maxW={{ base: 'xl', xl: '2xl' }} pos={'relative'} zIndex={10}>
        <Center py={4}>
          <Stack w="100%" direction="column" spacing={4}>
            <Box borderRadius={'8px'} p={4}>
              <Heading
                fontSize={{ base: 'xl', md: '2xl' }}
                color={'#025177'}
                textAlign={{ base: 'center' }}
              >
                【航海心理測驗】找出您的第二人生職業！
              </Heading>
            </Box>
            <Box
              borderRadius={'8px'}
              pb={4}
              minH={{ base: 'auto', md: '240px' }}
            >
              <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.5}>
                <Box borderRadius={'4px'} border={'4px solid #FFF'}>
                  <Image src={bgPlasticsImage} loading="lazy" />
                </Box>
              </LazyShow>
            </Box>

            <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
              <Box bgColor={'rgba(255,255,255,0.8)'} borderRadius={'8px'} p={4}>
                <Heading
                  fontSize={{ base: 'md', md: 'xl' }}
                  color={'#025177'}
                  lineHeight="1.7"
                >
                  您即將登上綠色和平「彩虹勇士號」，執行守護海洋任務！您會適合擔任船隊中的哪個崗位?
                </Heading>
              </Box>
            </LazyShow>
            <Box>
              <Flex mt={4} justifyContent={{ base: 'center' }}>
                <Button
                  variant={'quiz'}
                  fontSize={{ base: '2xl', md: '4xl' }}
                  px={{ base: 10, md: 14 }}
                  py={{ base: 6, md: 8 }}
                  onClick={() => setSurveyPage('quiz')}
                >
                  <Text fontSize={{ base: 'sm', sm: 'md' }}>
                    立即登船
                  </Text>
                </Button>
              </Flex>
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
