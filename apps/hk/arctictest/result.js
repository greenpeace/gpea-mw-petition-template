import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import {
  Box,
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

import resultBG from './images/result_page_background.jpg';

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
  const [isLargerThan768] = useMediaQuery('(min-width: 48em)'); // follow Chakra UI default md break point
  const [result, setResult] = useState([]);
  const [dynamicImageHeight, setDynamicImage] = useState(null);
  const [bgElementHeight, setBgElementHeight] = useState(null);
  const [width] = useWindowSize();
  const { loading, error, image } = useImage(RESULT[result?.answer]?.image); // animal
  const myRef = useRef(null);
  const dynamicContent = RESULT[result?.answer]?.content;

  useEffect(() => {
    setFormContent(formContent);
    setAnswerToSubmitForm({
      ...hiddenForm,
      CampaignData1__c: result?.answer,
    });
  }, []);

  useEffect(async () => {
    if (!answer) {
      return;
    }

    const calAnswer = await Object.values(answer)
      .map((item) => item.toString())
      .reduce(
        (b, c) => (
          (
            b[b.findIndex((d) => d.el === c)] ||
            b[
              b.push({
                el: c,
                answer: c.substring(0, 1),
                count: 0,
                point: parseInt(c.substring(2)),
              }) - 1
            ]
          ).count++,
          b
        ),
        [],
      )
      .sort((a, b) => (a.count * a.point > b.count * b.point ? -1 : 1)) // sort by calculated points
      .map((d) => ({ ...d, totalPoints: d.count * d.point }));

      console.log('calAnswer', calAnswer) // log result before filter

    const getMostLargerValue = calAnswer.filter(
      (d) => d.totalPoints === calAnswer[0].totalPoints, // get largest points only
    );

    setResult(
      getMostLargerValue[Math.floor(Math.random() * getMostLargerValue.length)], // random item if duplicate
    );
  }, [answer]);

  useEffect(() => {
    if (result) {
      setBgElementHeight(myRef.current.clientHeight);
    }
  }, [myRef.current?.clientHeight, dynamicContent, dynamicImageHeight]);

  // Determine Content Result
  const handleDynamicContent = (result) => 
    result.answer in ['A', 'B', 'C', 'D', 'E'] ? (
      <ArcticResult />
    ) : (
      <OceanResult />
    );

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
              <Box px={4} zIndex={4} pos={'relative'} ref={myRef} minH={{base: 'auto', md: '550px'}}> {/** Form height */}
                <Stack py={4}>
                  <Box pt={6}>
                    <Heading
                      {...headingProps}
                      color={'white'}
                      fontSize={{ base: '2xl', md: '4xl' }}
                      dangerouslySetInnerHTML={{
                        __html: '立即登記解鎖心理測驗結果',
                      }}
                    />
                  </Box>
                  <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
                    <Box position="relative">
                      <Image
                        src={image}
                        onLoad={(e) => setDynamicImage(e.target.clientHeight)}
                        pos={'relative'}
                        w="100%"
                        maxW={{base: "100%", md: "380px"}}
                        zIndex={2}
                      />
                    </Box>
                  </Flex>
                  <Box>
                    <Heading
                      {...headingProps}
                      color={'white'}
                      fontSize={{ base: 'xl', md: '2xl' }}
                      dangerouslySetInnerHTML={{
                        __html: RESULT[result?.answer]?.title,
                      }}
                    />
                  </Box>
                  <Box>
                    <Text
                      as="p"
                      color={'white'}
                      {...paragraphProps}
                      dangerouslySetInnerHTML={{
                        __html: RESULT[result?.answer]?.content,
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
                
                  {submitted && (<ContentContainer theme={theme}><Box>{handleDynamicContent(result)}</Box></ContentContainer>)}
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
            bgImage={resultBG}
            bgSize={'cover'}
            bgPosition={'center center'}
            bgRepeat={'no-repeat'}
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
