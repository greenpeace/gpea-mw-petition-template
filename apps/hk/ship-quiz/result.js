import React, { useEffect, useState, useRef } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import * as formActions from 'store/actions/action-types/form-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';
// Import library
import { Box, Image, Stack, Grid, GridItem } from '@chakra-ui/react';
// Import custom containers
import PageContainer from '@containers/pageContainer';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
// Import custom components
import HeroBanner from './components/ResponsiveBanner/hero.js';
import ThanksBanner from './components/ResponsiveBanner/thanks';
import HeroContent from './components/ResponsiveBanner/heroContent';
import ThanksContent from './components/ResponsiveBanner/thanksContent';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/WebinarForm';

import formContent from './form';
import RESULT from './data/result.json';

import ShipResult from './resultContent/shipResult';
import RoleIntroduction from './resultContent/roleIntroduction';

import resultBG from './images/result_page_background.png?webp';

function Index({
  status,
  setFormContent,
  answer,
  hiddenForm,
  setAnswerToSubmitForm,
}) {
  const signup = useSelector((state) => state?.signup);
  const { step } = signup;
  const submitted = useSelector((state) => state?.signup?.submitted);
  const theme = useSelector((state) => state?.theme);

  let utmSource = new URLSearchParams(document.location.search).get(
    'utm_source',
  );

  const [result, setResult] = useState([]);
  // const { loading, error, image } = useImage(RESULT[result?.answer]?.image); // roles

  const [ref, inView] = useInView({
    threshold: 0,
  });
  const mobileForm = useRef(null);
  const topSection = useRef(null);

  useEffect(() => {
    setFormContent(formContent);
  }, []); // init Form

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

  useEffect(() => {
    setAnswerToSubmitForm({
      ...hiddenForm,
      CampaignData1__c: result?.answer,
      CampaignData2__c: RESULT[result?.answer]?.value,
    });
  }, [result?.answer]);

  useEffect(() => {
    if (submitted) {
      console.log('submitted');
      // Send fbq Subscription event
      window.dataLayer.push({
        event: 'fbqEvent',
        contentName: 'ship-quiz',
        contentCategory: 'Subscription',
      });
    }
  }, [submitted]);

  return (
    <>
      <Box pos={'relative'}>
        <PageContainer>
          {/* Hero Content */}
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            gap={0}
            zIndex={2}
            flexDirection={'column-reverse'}
          >
            <GridItem w="100%">
              <Box
                py={4}
                zIndex={4}
                pos={'relative'}
                ref={topSection}
                minH={{ base: 'auto', md: '550px' }}
              >
                <Stack>
                  {/* Hero Content */}
                  {submitted ? (
                    <ThanksContent
                      defaultImage={
                        theme?.params?.hero_image_desktop ?? resultBG
                      }
                      content={{
                        title: '完整測驗結果將在15分鐘內送至您的電子郵箱',
                        description: [''],
                      }}
                      quizResult={RESULT[result?.answer]}
                      removeMask={true}
                    />
                  ) : (
                    <HeroContent
                      defaultImage={
                        theme?.params?.hero_image_desktop ?? resultBG
                      }
                      content={{
                        title:
                          `${
                            theme?.params?.headline_prefix
                              ? theme?.params?.headline_prefix + '<br/>'
                              : ''
                          }` + '立即登記解鎖完整測驗結果！',
                        description: [''],
                      }}
                      quizResult={RESULT[result?.answer]}
                      removeMask={true}
                    />
                  )}
                </Stack>
              </Box>
            </GridItem>
            <GridItem w="100%">
              <Box py={4}>
                {submitted ? (
                  <FormContainer>
                    <Box>
                      <DonationModule
                        market={'HK'}
                        language={'zh_HK'}
                        campaign={
                          theme?.params?.donation_module_campaign ?? 'oceans'
                        }
                        // campaignId={''}
                        env={'production'}
                      />
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
            </GridItem>
          </Grid>
          {/* Supporting Content */}
          <Box maxW={{ base: '100%', md: '50%' }}>
            {submitted ? (
              <ContentContainer>
                <ShipResult quizResult={RESULT[result?.answer]} />
              </ContentContainer>
            ) : (
              <ContentContainer>
                <RoleIntroduction quizResult={RESULT[result?.answer]} />
              </ContentContainer>
            )}
          </Box>
        </PageContainer>
        <Box zIndex="-1" pos={'absolute'} top={0} right={0} left={0} bottom={0}>
          <Image
            src={resultBG}
            height="100%"
            width="100%"
            objectFit="cover"
            objectPosition={'center bottom'}
          />
        </Box>
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

function propsAreEqual(prevState, nextState) {
  return prevState.status.submitted === nextState.status.submitted;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(Index, propsAreEqual));
