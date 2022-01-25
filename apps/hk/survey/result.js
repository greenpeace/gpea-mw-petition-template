import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import PetitionFooter from '@containers/petitionFooter';
import FormContainer from '@containers/formContainer';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Flex, Image, Stack, Heading, Text } from '@chakra-ui/react';
import formContent from './form';
import * as formActions from 'store/actions/action-types/form-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';

import bgA from './images/2.jpg';
import bgB from './images/MAX_20211211_Greenpeace_荃灣路德圍_222.jpg';
import bgC from './images/GP0STTWIG_Medium_res.jpg';
import bgD from './images/20210816-RDPT-PC-21.jpg';
import bgE from './images/gp0stunis_medium_res-1024x707.jpg';

const ContentResult = dynamic(() => import('./resultContent/contentResult'));
const ContentA = dynamic(() => import('./resultContent/contentA'));
const ContentB = dynamic(() => import('./resultContent/contentB'));
const ContentC = dynamic(() => import('./resultContent/contentC'));
const ContentD = dynamic(() => import('./resultContent/contentD'));
const ContentE = dynamic(() => import('./resultContent/contentE'));
const Thankyou = dynamic(() => import('./Thankyou'));

const PageContainer = dynamic(() => import('@containers/pageContainer'));
const DonateForm = dynamic(() => import('@components/GP/DonateForm'));
const SignupForm = dynamic(() => import('@components/GP/WebinarForm'));
const FixedCTA = dynamic(() => import('@components/GP/FixedCTA'));

const ImageBGProps = {
  w: '100%',
  h: '100%',
  objectFit: 'cover',
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
  const getFinalAnswer = answer[4]?.toString().replace('clear', '5');

  const scrollToRef = (ref) =>
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    setFormContent(formContent);
    setAnswerToSubmitForm({
      ...hiddenForm,
      CampaignData1__c: answer[0]?.toString().replace('clear', '5'),
      CampaignData2__c: answer[1]?.toString().replace('clear', '5'),
      CampaignData3__c: answer[2]?.toString().replace('clear', '5'),
      CampaignData4__c: answer[3]?.toString().replace('clear', '5'),
      CampaignData5__c: answer[4]?.toString().replace('clear', '5'),
    });
  }, []);

  return (
    <>
      <Box
        minH={{ base: 'lg', md: 'xl' }}
        pos={'relative'}
        zIndex={2}
        paddingBottom={'4rem'}
      >
        <Box pos={'relative'} zIndex={4}>
          <PageContainer>
            <Box py={8} px={4} maxW={{ base: '100%' }}>
              <Flex direction="row">
                <Box flex={1}>
                  <Stack spacing="4">
                    <Heading
                      as="h1"
                      fontSize={{
                        base: 'var(--text-xl)',
                        md: 'var(--text-2xl)',
                      }}
                      color="white"
                      mb={4}
                      dangerouslySetInnerHTML={{
                        __html: '感謝您參與問卷調查！',
                      }}
                    />
                    <Text as="p" color="white">
                      您的參與意義重大，協助綠色和平塑膠污染問題尋找出路！
                    </Text>
                  </Stack>
                </Box>
                <Box flex={{ base: 0, md: 1 }}></Box>
              </Flex>
            </Box>
          </PageContainer>
        </Box>
        <Box pos={'absolute'} top={0} right={0} left={0} bottom={0}>
          {(() => {
            switch (getFinalAnswer) {
              case '1':
                return <Image {...ImageBGProps} src={bgA} />;
              case '2':
                return <Image {...ImageBGProps} src={bgB} />;
              case '3':
                return <Image {...ImageBGProps} src={bgC} />;
              case '4':
                return <Image {...ImageBGProps} src={bgD} />;
              case '5':
                return <Image {...ImageBGProps} src={bgE} />;
              default:
                return <Image {...ImageBGProps} src={bgE} />;
            }
          })()}
        </Box>
        <Box
          pos={'absolute'}
          top={0}
          right={0}
          left={0}
          bottom={0}
          bgColor={'rgba(0,0,0,0.5)'}
        />
      </Box>
      <Box maxW="1200px" mx="auto">
        <OverflowWrapper>
          <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={1} mt={{ base: 10, sm: 60 }}>
              {submitted ? (
                <ContentContainer theme={theme}>
                  {(() => {
                    switch (getFinalAnswer) {
                      case '1':
                        return <ContentA />;
                      case '2':
                        return <ContentB />;
                      case '3':
                        return <ContentC />;
                      case '4':
                        return <ContentD />;
                      case '5':
                        return <ContentE />;
                      default:
                        return <ContentE />;
                    }
                  })()}
                </ContentContainer>
              ) : (
                <ContentContainer theme={theme}>
                  <ContentResult />
                </ContentContainer>
              )}
            </Box>
            <Box flex={1} ref={myRef}>
              <FormContainer>
                <Box ref={ref}>
                  {submitted ? <DonateForm /> : <SignupForm />}
                </Box>
              </FormContainer>
            </Box>
          </Flex>
        </OverflowWrapper>
      </Box>

      <PetitionFooter locale={'HKChinese'} />
      {!inView && (
        <FixedCTA onClick={executeScroll}>
          {formContent.mobile_cta ? formContent.mobile_cta : '立即捐款'}
        </FixedCTA>
      )}
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
