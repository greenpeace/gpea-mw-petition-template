import { Button, Box, Image, Stack, Center } from '@chakra-ui/react';
import { connect } from 'react-redux';
import LazyShow from './components/LazyShow';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import bgImage from './images/openingending/2022-ocean-quiz-desktop-kv_compressed.jpg?webp';
import mobileBG from './images/openingending/2022-ocean-quiz-mobile-kv_compressed.jpg?webp';
import StartButton from './images/openingending/start_button.png';
import StartButtonMobile from './images/openingending/start_button.png';

const Landing = ({ setSurveyPage }) => {
  return (
    <Box minH={'100vh'} mt={{ base: '-55px' }} pos={'relative'}>
      <Center w={'100%'}>
        <Stack direction="column">
          {/* Desktop Button */}
          <Box
            d={{ base: 'none', md: 'block' }}
            p="8"
            mx="auto"
            maxWidth={{ base: '30%', sm: 'auto' }}
            position="absolute"
            bottom="2px"
            left="50%"
            transform={'translateX(-50%)'}
          >
            <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
              <Image
                minWidth={{ base: '30%', sm: 'auto' }}
                src={StartButton}
                alt="開始測驗"
                onClick={() => setSurveyPage('description')}
              />
            </LazyShow>
          </Box>
          {/* Mobile Button */}
          <Box
            d={{ base: 'block', md: 'none' }}
            p="6"
            mx="auto"
            minWidth={{ base: '70%', sm: 'auto' }}
            position="absolute"
            bottom="2px"
            left="50%"
            transform={'translateX(-50%)'}
          >
            <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
              <Image
                src={StartButtonMobile}
                alt="開始測驗"
                onClick={() => setSurveyPage('description')}
              />
            </LazyShow>
          </Box>
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
        bgPosition={'center'}
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
