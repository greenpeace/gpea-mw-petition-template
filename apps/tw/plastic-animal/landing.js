import { Button, Box, Image, Stack, Center } from '@chakra-ui/react';
import { connect } from 'react-redux';
import LazyShow from './components/LazyShow';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import bg from './images/landing-bg.jpg';
import mobileBG from './images/landing-bg.jpg';

const Landing = ({ setSurveyPage }) => {
  return (
    <Box h={'100vh'} w={'100%'} mt={{ base: '-55px' }} pos={`relative`}>
      <Center
        transform={{ md: 'translate(0,-20%)', lg: 'translate(0,0)' }}
        h={'100%'}
        w={{ base: '50%', md: '48%', xl: '50%' }}
        minWidth={'180px'}
        alignItems={{ base: 'flex-start', md: 'center' }}
        ml={{ xl: '6%' }}
      >
        <Stack direction="column">
          <Box
            p={{ base: 0 }}
            mx="auto"
            w={{ base: 'auto', md: 'auto' }}
            maxWidth={{ base: '360px', '2xl': '420px' }}
            pt={{ base: 20, md: 6, lg: 0 }}
            mt={{ base: '5vh', '2xl': '-5vh' }}
          >
            {/* <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
              <Image
                src={TitleKeyVisual}
                ml={{ base: 6, md: 4 }}
                alt="你是哪種地球投資者"
              />
            </LazyShow> */}
          </Box>
          <Box
            my={4}
            maxWidth={{ base: 'auto', sm: 'auto' }}
            alignSelf={'center'}
          >
            <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
              <Button
                mt={4}
                ml={{ base: 6, md: 4 }}
                variant={'quizSquare'}
                fontSize={{ base: 'xl', sm: '2xl' }}
                px={{ base: 10, sm: 16 }}
                py={{ base: 4, sm: 8 }}
                onClick={() => setSurveyPage('quiz')}
              >
                我來聽牠們的心聲
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
        bgImage={{ base: mobileBG, md: bg }}
        bgPosition={{
          base: 'center center',
          // md: '65% 40px',
          // lg: 'center center',
        }}
        zIndex={'-1'}
      >
        
      </Box>
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
