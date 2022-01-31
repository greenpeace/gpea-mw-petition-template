import { Box, Image, Stack, Center } from '@chakra-ui/react';
import { connect } from 'react-redux';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import bgPlasticsImage from './images/openingending/keyVisualBackground.png';
import titleKeyVisual from './images/openingending/titleKeyVisual.png';
import startButton from './images/openingending/startButtonKeyVisual.png';

const Landing = ({ setSurveyPage }) => {
  return (
    <Box h={'100vh'} mt={{ base: '-55px' }} pos={`relative`}>
      <Image
        w="100%"
        h="100%"
        objectFit={'cover'}
        src={bgPlasticsImage}
        cursor={'pointer'}
      />
      <Box position="absolute" top={0} bottom={0} w={'100%'}>
        <Center h={'100%'}>
          <Stack direction="column">
            <Box px={{ base: 6, md: 0 }}>
              <Image src={titleKeyVisual} />
            </Box>
            <Box
              maxWidth={{ base: '50%', sm: 'auto' }}
              alignSelf={'center'}
              onClick={() => setSurveyPage('description')}
            >
              <Image
                src={startButton}
                cursor={'pointer'}
                _hover={{ opacity: 0.8 }}
              />
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
