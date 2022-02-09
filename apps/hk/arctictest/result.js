import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import {
  Box,
  Center,
  Container,
  Stack,
  Text,
  Heading,
  Image,
  useMediaQuery,
  Grid,
  GridItem,
  Flex,
} from '@chakra-ui/react';
import PetitionFooter from '@containers/petitionFooter';
import FormContainer from '@containers/formContainer';
import PageContainer from '@containers/pageContainer';
import ContentContainer from '@containers/contentContainer';
import formContent from './form';
import RESULT from './data/result.json';
import useImage from './useImage';
import * as formActions from 'store/actions/action-types/form-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const DonateForm = dynamic(() => import('@components/GP/DonateForm'));
const SignupForm = dynamic(() => import('@components/GP/WebinarForm'));

const ArcticResult = dynamic(() => import('./resultContent/arcticResult'));
const ContentResult = dynamic(() => import('./resultContent/contentResult'));
const OceanResult = dynamic(() => import('./resultContent/oceanResult'));

const useWindowSize = () => {
  const [size, setSize] = useState([0]);
  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

function Index({
  status,
  theme,
  setFormContent,
  answer,
  hiddenForm,
  setAnswerToSubmitForm,
}) {
  const { submitted } = status;
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [result, setResult] = useState([]);
  const [dynamicImageHeight, setDynamicImage] = useState(null);
  const [bgElementHeight, setBgElementHeight] = useState(null);
  // const [width] = useWindowSize();
  const { loading, error, image } = useImage(RESULT[result?.el]?.image); // animal
  const myRef = useRef(null);
  const dynamicContent = RESULT[result?.el]?.content;

  useEffect(() => {
    setFormContent(formContent);
    setAnswerToSubmitForm({
      ...hiddenForm,
      CampaignData1__c: result?.el,
    });
  }, []);

  useEffect(() => {
    if (!answer) {
      return;
    }
    const calAnswer = Object.values(answer)
      .map((item) => item.toString())
      .reduce(
        (b, c) => (
          (
            b[b.findIndex((d) => d.el === c)] ||
            b[b.push({ el: c, count: 0 }) - 1]
          ).count++,
          b
        ),
        [],
      )
      .sort((a, b) => (a.count > b.count ? -1 : 1));

    const getMostLargerValue = calAnswer.filter(
      (d, i) => d.count === calAnswer[0].count,
    );

    setResult(
      getMostLargerValue[Math.floor(Math.random() * getMostLargerValue.length)],
    );
  }, [answer]);

  useEffect(() => {
    if (result) {
      setBgElementHeight(myRef.current.clientHeight);
    }
  }, [myRef.current?.clientHeight, dynamicContent, dynamicImageHeight]);

  // Determine Content Result
  const handleDynamicContent = (result) => {
    console.log('result.el-', result.el);
    result.el in ['A', 'B', 'C', 'D', 'E'] ? <ArcticResult /> : <OceanResult />;
  };

  const RenderContent = () =>
    submitted ? <Box>{handleDynamicContent(result)}</Box> : null;

  const RenderForm = () => (submitted ? <DonateForm /> : <SignupForm />);

  return (
    <>
      <Box pos={'relative'}>
        <PageContainer>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={0}
            zIndex={2}
            flexDirection={'column-reverse'}
          >
            <GridItem w="100%">
              <Box px={4} zIndex={4} pos={'relative'} ref={myRef}>
                <Stack>
                  <Flex
                    py={8}
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                  >
                    <Box
                      maxW={{ base: '220px', md: '280px' }}
                      position="relative"
                      _before={{
                        content: `""`,
                        position: 'absolute',
                        top: '60%',
                        left: '40%',
                        transform: 'translate(-50%, -50%)',
                        width: '200px',
                        height: '200px',
                        bg: RESULT[result?.el]?.color,
                        opacity: '0.5',
                        borderRadius: '100%',
                      }}
                    >
                      <Image
                        src={image}
                        onLoad={(e) => setDynamicImage(e.target.clientHeight)}
                        pos={'relative'}
                        w="100%"
                        h="100%"
                        objectFit={'cover'}
                        zIndex={2}
                      />
                    </Box>
                  </Flex>
                  <Box>
                    <Heading
                      {...headingProps}
                      dangerouslySetInnerHTML={{
                        __html: '立即登記解鎖心理測驗結果',
                      }}
                    />
                  </Box>
                  <Box>
                    <Text
                      as="p"
                      {...paragraphProps}
                      dangerouslySetInnerHTML={{
                        __html: RESULT[result?.el]?.content,
                      }}
                    />
                  </Box>
                </Stack>
              </Box>
              <Box flex={1} position="relative" zIndex={3}>
                {!isLargerThan768 && (
                  <Container>
                    <Box
                      maxW="100%"
                      mx="auto"
                      bgColor="white"
                      borderRadius={8}
                      boxShadow="lg"
                      overflow="hidden"
                    >
                      <RenderForm />
                    </Box>
                  </Container>
                )}
                <ContentContainer theme={theme}>
                  <RenderContent />
                </ContentContainer>
              </Box>
            </GridItem>
            <GridItem w="100%">
              {isLargerThan768 && (
                <Box
                  zIndex={9}
                  position={{ md: 'sticky' }}
                  top={{ base: 'auto', md: 20 }}
                  right={{ base: 0 }}
                >
                  <FormContainer>
                    <Box>
                      <RenderForm />
                    </Box>
                  </FormContainer>
                </Box>
              )}
            </GridItem>
          </Grid>
        </PageContainer>

        {bgElementHeight && (
          <Box
            top={0}
            w={'100%'}
            h={`${bgElementHeight}px`}
            position="absolute"
            // bgColor={'#cbf7fc'}
            zIndex={1}
          />
        )}
      </Box>
      <PetitionFooter locale={'HKChinese'} />
    </>
  );
}

const mapStateToProps = ({ status, theme, signup, survey, hiddenForm }) => {
  return {
    status,
    answer: survey.data,
    theme: theme.data,
    signup: signup.data,
    hiddenForm: hiddenForm.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
    setAnswerToSubmitForm: (data) => {
      dispatch({ type: hiddenFormActions.SET_HIDDEN_FORM, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
