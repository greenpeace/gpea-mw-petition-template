import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import useImage from './useImage';
import * as formActions from 'store/actions/action-types/form-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';
// Import library
import {
  Avatar,
  Box,
  Container,
  Stack,
  Text,
  Heading,
  Image,
  Grid,
  GridItem,
  Flex,
} from '@chakra-ui/react';
// Import custom containers
import PageContainer from '@containers/pageContainer';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
// Import custom components
import HeroBanner from '@components/ResponsiveBanner/hero';
import ThanksBanner from '@components/ResponsiveBanner/thanks';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/WebinarForm';

import formContent from './form';
import RESULT from './data/result.json';
import oceansContent from './oceans';

import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const ArcticResult = dynamic(() => import('./resultContent/arcticResult'));
const OceanResult = dynamic(() => import('./resultContent/oceanResult'));

import resultBG from './images/result_page_background.jpg';

function Index({
  status,
  setFormContent,
  answer,
  hiddenForm,
  setAnswerToSubmitForm,
}) {
  const signup = useSelector((state) => state?.signup);
  const { step } = signup;
  const submitted = useSelector((state) => state?.status?.submitted);
  const theme = useSelector((state) => state?.theme);

  let utmSource = new URLSearchParams(document.location.search).get(
    'utm_source',
  );

  const [result, setResult] = useState([]);
  const [dynamicImageHeight, setDynamicImage] = useState(null);
  const [bgElementHeight, setBgElementHeight] = useState(null);
  const { loading, error, image } = useImage(RESULT[result?.answer]?.image); // animal
  const topSection = useRef(null);
  const dynamicContent = RESULT[result?.answer]?.content;

  const [ref, inView] = useInView({
    threshold: 0,
  });
  const mobileForm = useRef(null);

  useEffect(() => {
    setFormContent(formContent);
  }, []); // init Form

  useEffect(() => {
    const isArcticResult = ['A', 'B', 'C', 'D', 'E'].includes(result?.answer);
    // if (!isArcticResult) {
    setFormContent(oceansContent);
    // } else {
    // setFormContent(formContent);
    // }
  }, [submitted]); // switch Form by result

  useEffect(async () => {
    if (!answer) {
      return;
    }

    const sumTotalPointArray = await Object.values(answer)
      .map((answer_item) => answer_item[1]) // get the point part
      .reduce((sum, current_point) => sum + current_point)
      .toString()
      .split('');

    const maxAnswerCount = Math.max(...sumTotalPointArray);
    const maxAnswerCountIndex = sumTotalPointArray.indexOf(
      maxAnswerCount.toString(),
    );
    const answerType = ['A', 'B', 'C', 'D', 'E'];

    setResult({
      answer: answerType[maxAnswerCountIndex],
    });
  }, [answer]);

  // useEffect(() => {
  //   if (result) {
  //     setBgElementHeight(topSection.current.clientHeight);
  //   }
  // }, [
  //   topSection.current?.clientHeight,
  //   dynamicContent,
  //   dynamicImageHeight,
  //   submitted,
  // ]);

  useEffect(() => {
    setAnswerToSubmitForm({
      ...hiddenForm,
      CampaignData1__c: result?.answer,
      CampaignData2__c: RESULT[result?.answer]?.value,
      CampaignData3__c: ['A', 'B', 'C', 'D', 'E'].includes(result?.answer)
        ? 'Arctic'
        : 'Oceans',
    });
  }, [result?.answer]);

  // Determine Content Result
  const handleDynamicContent = (result) =>
    ['A', 'B', 'C', 'D', 'E'].includes(result?.answer) ? (
      <ArcticResult />
    ) : (
      <OceanResult />
    );

  const RenderForm = () => (submitted ? <DonateForm /> : <SignupForm />);

  return (
    <>
      <Box pos={'relative'}>
        <Box>
          {submitted ? (
            <ThanksBanner
              defaultImage={theme?.params?.hero_image_desktop ?? resultBG}
              content={{
                title: '完整測驗結果將在15分鐘內送至您的電子郵箱',
                description: [''],
              }}
            />
          ) : (
            <HeroBanner
              defaultImage={theme?.params?.hero_image_desktop ?? resultBG}
              content={{
                title:
                  `${
                    theme?.params?.headline_prefix
                      ? theme?.params?.headline_prefix + '<br/>'
                      : ''
                  }` + '認識現實中與您匹配的船隊成員',
                description: [''],
              }}
            />
          )}
        </Box>

        <PageContainer>
          <OverflowWrapper>
            <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
              <Box flex={1} mt={{ base: 10, sm: 60 }}>
                {submitted && (
                  <ContentContainer>
                    <Box>{handleDynamicContent(result)}</Box>
                    <Box>
                      <Avatar
                        name="Dan Abrahmov"
                        src={RESULT[result?.answer]?.icon}
                      />
                      我有些話對您說
                    </Box>
                  </ContentContainer>
                )}
              </Box>
              <Box flex={1} ref={mobileForm}>
                {submitted ? (
                  <FormContainer>
                    <Box ref={ref}>
                      {utmSource == 'dd' ? (
                        <Box h="40px" />
                      ) : (
                        <DonationModule
                          market={'HK'}
                          language={'zh_HK'}
                          campaign={
                            theme?.params?.donation_module_campaign ?? 'oceans'
                          }
                          // campaignId={''}
                          env={'production'}
                        />
                      )}
                    </Box>
                  </FormContainer>
                ) : (
                  <FormContainer>
                    <Box ref={ref}>
                      <SignupForm />
                    </Box>
                  </FormContainer>
                )}
              </Box>
            </Flex>
          </OverflowWrapper>
        </PageContainer>

        {/* Old layout */}

        {/* <PageContainer>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={0}
            zIndex={2}
            flexDirection={'column-reverse'}
          >
            <GridItem w="100%">
              <Box
                px={4}
                zIndex={4}
                pos={'relative'}
                ref={topSection}
                minH={{ base: 'auto', md: '550px' }}
              >
                <Stack py={4}>
                  <Box pt={6}>
                    {submitted ? (
                      <Heading
                        {...headingProps}
                        color={'white'}
                        fontSize={{ base: '2xl', md: '4xl' }}
                        dangerouslySetInnerHTML={{
                          __html: '完整測驗結果將在15分鐘內送至您的電子郵箱',
                        }}
                      />
                    ) : (
                      <Heading
                        {...headingProps}
                        color={'white'}
                        fontSize={{ base: '2xl', md: '4xl' }}
                        dangerouslySetInnerHTML={{
                          __html: '認識現實中與您匹配的船隊成員',
                        }}
                      />
                    )}
                  </Box>
                  <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
                    <Box position="relative">
                      <Image
                        src={image}
                        onLoad={(e) => setDynamicImage(e.target.clientHeight)}
                        pos={'relative'}
                        w="90%"
                        p={4}
                        maxW={{ base: '280px', md: '380px' }}
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
                <Box py={2}>
                  <Container>
                    <Box
                      maxW="100%"
                      mx="auto"
                      bgColor="white"
                      borderRadius={8}
                      boxShadow="lg"
                      overflow="hidden"
                      d={{ base: 'block', md: 'none' }}
                    >
                      {submitted ? <DonateForm /> : <SignupForm />}
                    </Box>
                  </Container>
                </Box>

                {submitted && (
                  <ContentContainer theme={theme} py={4}>
                    <Box>{handleDynamicContent(result)}</Box>
                    <Box>
                      <Avatar
                        name="Dan Abrahmov"
                        src={RESULT[result?.answer]?.icon}
                      />
                      我有些話對您說
                    </Box>
                  </ContentContainer>
                )}
              </Box>
            </GridItem>
            <GridItem w="100%" d={{ base: 'none', md: 'block' }}>
              {submitted && (
                <Box h={`${bgElementHeight - bgElementHeight / 2}px`} />
              )}
              <Box
                zIndex={9}
                position={{ md: 'sticky' }}
                top={{ base: 'auto', md: 2 }}
                right={{ base: 0 }}
                pt={3}
              >
                <FormContainer>
                  <Box>
                    <RenderForm />
                  </Box>
                </FormContainer>
              </Box>
            </GridItem>
          </Grid>
        </PageContainer> */}

        {/* {bgElementHeight && (
          <Box
            top={0}
            w={'100%'}
            h={`${bgElementHeight}px`}
            position="absolute"
            bgImage={resultBG}
            bgSize={'cover'}
            bgPosition={'center center'}
            bgRepeat={'no-repeat'}
            blur={'0.75'}
            opacity={'0.9'}
            zIndex={1}
          />
        )} */}
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
      console.log('setAnswerToSubmitForm data');
      console.log(data);
    },
  };
};

function propsAreEqual(prevState, nextState) {
  return prevState.status.submitted === nextState.status.submitted;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(Index, propsAreEqual));
