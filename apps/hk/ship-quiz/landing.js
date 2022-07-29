import { Button, Box, Image, Stack, Center } from '@chakra-ui/react';
import { connect } from 'react-redux';
import LazyShow from './components/LazyShow';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import bgImage from './images/openingending/keyVisualBackground.jpeg';
import mobileBG from './images/openingending/KV_mobile.jpg';
import StartButton from './images/openingending/start_button.png';
import StartButtonMobile from './images/openingending/start_button_mobile.png';

const Landing = ({ setSurveyPage }) => {
  return (
    <Box h={'100vh'} mt={{ base: '-55px' }} pos={'relative'}>
      <Center h={'100%'} w={'100%'}>
        <Stack direction="column">
          {/* <Box
            px={{ base: 10, md: 14 }}
            py={{ base: 6, md: 8 }}
            mx="auto"
            maxWidth={{ base: '50%', sm: 'auto' }}
          >
            <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
              <Image
                d={{ base: 'none', md: 'block' }}
                maxWidth={{ base: '50%', sm: 'auto' }}
                src={StartButton}
                alt="開始測驗"
                onClick={() => setSurveyPage('description')}
              />
              <Image
                d={{ base: 'block', md: 'none' }}
                src={StartButtonMobile}
                alt="開始測驗"
                onClick={() => setSurveyPage('description')}
              />
            </LazyShow>
          </Box> */}
          {/* <Box
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
                開始測驗
              </Button>
            </LazyShow>
          </Box> */}
        </Stack>
      </Center>
      <Box
        position="absolute"
        top={10}
        bottom={0}
        w={'100%'}
        h={'100%'}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        objectFit={'cover'}
        bgImage={{ base: mobileBG, md: bgImage }}
        bgPosition={'40% center'}
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
