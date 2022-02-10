import {
  Box,
  Center,
  Container,
  Image,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import * as surveyActions from 'store/actions/action-types/survey-actions';
import LazyShow from './components/LazyShow';
import bgPlasticsImage from './images/openingending/Starting.png';

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
            >
              <Text
                color="gray.700"
                fontWeight={700}
                fontSize={{ base: 'sm', sm: 'md', md: 'xl' }}
                lineHeight="2"
              >
                您正在畫室中繪製世界地圖d極地位置突然出現一道閃光，帶您穿越到極地之中！
              </Text>
              <Flex mt={4} justifyContent={{ base: 'center' }}>
                <Button
                  onClick={() => setSurveyPage('quiz')}
                  variant={'subCTA'}
                >
                  <Text fontSize={{ base: 'sm', sm: 'md' }}>
                    發掘您的極地動物
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
