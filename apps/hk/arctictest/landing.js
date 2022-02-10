import { Button, Box, Image, Stack, Center } from '@chakra-ui/react';
import { connect } from 'react-redux';
import LazyShow from './components/LazyShow';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import bgPlasticsImage from './images/openingending/keyVisualBackground.png';
import mobileBG from './images/KV_mobile.png';
import TitleKeyVisual from './images/openingending/titleKeyVisual.png';
import TitleKeyVisualMobile from './images/openingending/headline_mobile.png';

const Landing = ({ setSurveyPage }) => {
  return (
    <Box h={'100vh'} mt={{ base: '-55px' }} pos={`relative`}>
      <Center h={'100%'} w={'100%'}>
        <Stack direction="column">
          <Box p={6} mx="auto" maxWidth={{ base: 'auto', md: '680px' }}>
            <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
              <Image
                d={{ base: 'none', md: 'block' }}
                src={TitleKeyVisual}
                alt="2分鐘心理測驗"
              />
              <Image
                d={{ base: 'block', md: 'none' }}
                src={TitleKeyVisualMobile}
                alt="2分鐘心理測驗"
              />
            </LazyShow>
          </Box>
          <Box
            my={4}
            maxWidth={{ base: '50%', sm: 'auto' }}
            alignSelf={'center'}
          >
            <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
              <Button
                variant={'quiz'}
                transform="skew(0, -6deg)"
                fontSize={{ base: '2xl', md: '4xl' }}
                px={{ base: 10, md: 14 }}
                py={{ base: 6, md: 8 }}
                onClick={() => setSurveyPage('description')}
              >
                立即開始
              </Button>
            </LazyShow>
          </Box>
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
      <Box
        position="absolute"
        top={0}
        bottom={0}
        w={'100%'}
        h={'100%'}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        objectFit={'cover'}
        bgImage={{ base: mobileBG, md: bgPlasticsImage }}
        bgPosition={'center center'}
        zIndex={'-1'}
      ></Box>
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
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
