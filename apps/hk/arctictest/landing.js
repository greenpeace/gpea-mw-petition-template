import { Box, Image, Stack, Center } from '@chakra-ui/react';
import { connect } from 'react-redux';
import LazyShow from './Components/LazyShow';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import bgPlasticsImage from './images/openingending/keyVisualBackground.png';
import titleKeyVisual from './images/openingending/titleKeyVisual.png';
import startButton from './images/openingending/startButtonKeyVisual.png';

const Landing = ({ setSurveyPage }) => {
  return (
    <Box h={'100vh'} mt={{ base: '-55px' }} pos={`relative`}>
      <Box
        position="absolute"
        top={0}
        bottom={0}
        w={'100%'}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        objectFit={'cover'}
        bgImage={`url(${bgPlasticsImage})`}
        bgPosition={'center center'}
      >
        <Center h={'100%'} w={'100%'}>
          <Stack direction="column">
            <Box px={{ base: 6, md: 0 }}>
              <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
                <Image src={titleKeyVisual} />
              </LazyShow>
            </Box>
            <Box
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
            </Box>
          </Stack>
        </Center>
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
