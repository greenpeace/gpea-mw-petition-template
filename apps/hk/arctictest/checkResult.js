import {
  Box,
  Image,
  Center,
  Container,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import * as surveyActions from 'store/actions/action-types/survey-actions';
import LazyShow from './components/LazyShow';
import bgPlasticsImage from './images/openingending/Ending-100.jpg';

const Description = ({ setSurveyPage }) => {
  return (
    <Box h={'100vh'} mt={{ base: '-55px' }}>
      <Center h={'100%'} zIndex={2} position={'relative'}>
        <Container maxW={'4xl'}>
          <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
            <Box
              py={40}
              bgColor={'rgba(255,255,255,0.8)'}
              borderRadius={'8px'}
              p={8}
              cursor={'pointer'}
            >
              <Text
                color="gray.700"
                fontWeight={700}
                fontSize={{ base: 'sm', sm: 'md', md: 'xl' }}
              >
                光芒果然把您吸進去！您成功返回畫室，想照鏡子確認自己的狀態時，鏡子上出現的居然是自己潛意識中隱藏著的極地動物？！
              </Text>
              <Flex mt={4} justifyContent={{ base: 'center' }}>
                <Button
                  onClick={() => setSurveyPage('result')}
                  variant={'subCTA'}
                >
                  <Text fontSize={{ base: 'sm', sm: 'md' }}>
                    查看我的極地動物
                  </Text>
                </Button>
              </Flex>
            </Box>
          </LazyShow>
        </Container>
      </Center>

      <Image
        w="100%"
        h="100%"
        objectFit={'cover'}
        src={bgPlasticsImage}
        cursor={'pointer'}
        position="absolute"
        top={0}
        bottom={0}
        zIndex={1}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(Description);
