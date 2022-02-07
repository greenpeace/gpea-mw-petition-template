import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';
import {
  Box,
  Stack,
  Text,
  Heading,
  Flex,
  Image,
  useDisclosure,
  useMediaQuery,
  Grid,
  GridItem,
  Center,
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

const ContentResult = dynamic(() => import('./resultContent/contentResult'));
const DonateForm = dynamic(() => import('@components/GP/DonateForm'));
const SignupForm = dynamic(() => import('@components/GP/WebinarForm'));

function Index({
  status,
  theme,
  setFormContent,
  answer,
  hiddenForm,
  setAnswerToSubmitForm,
}) {
  const { submitted } = status;
  const controls = useAnimation();
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [result, setResult] = useState([]);
  const [dynamicImageHeight, setDynamicImage] = useState(null);
  const [bgElementHeight, setBgElementHeight] = useState(null);
  const { loading, error, image } = useImage(RESULT[result[0]?.el]?.image); // animal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const myRef = useRef(null);
  const dynamicContent = RESULT[result[0]?.el]?.content;

  useEffect(() => {
    setFormContent(formContent);
    setAnswerToSubmitForm({
      ...hiddenForm,
      CampaignData1__c: result[0]?.el,
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

    setResult(calAnswer);
  }, [answer]);

  useEffect(() => {
    if (result.length > 0) {
      setBgElementHeight(myRef.current.clientHeight);
    }
  }, [myRef.current?.clientHeight, dynamicContent, dynamicImageHeight]);

  const handleMobileFormOnClick = () => {
    if (!isOpen) {
      controls
        .start({
          transition: {
            type: 'tween',
            duration: 0.25,
          },
          y: '10px', // hide borderRadius
        })
        .then(() => onOpen());
    }
  };

  const handleMobileFormClose = () => {
    if (isOpen) {
      controls
        .start({
          y: '430px',
          transition: {
            type: 'tween',
            duration: 0.25,
          },
        })
        .then(() => onClose());
    }
  };

  return (
    <>
      <Box pos={'relative'}>
        <PageContainer>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={0}
            position={'relative'}
            zIndex={2}
          >
            <GridItem w="100%" pos={'relative'}>
              <Box px={4} zIndex={4} pos={'relative'} ref={myRef}>
                <Stack spacing="4">
                  <Center position="relative" w="320px" h="320px">
                    <Box
                      _before={{
                        content: `""`,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        height: '80%',
                        bg: 'gray.500',
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
                  </Center>
                  <Box>
                    <Heading
                      {...headingProps}
                      dangerouslySetInnerHTML={{
                        __html: '感謝您完成心理測驗',
                      }}
                    />
                  </Box>
                  <Box>
                    <Text
                      as="p"
                      {...paragraphProps}
                      dangerouslySetInnerHTML={{
                        __html: RESULT[result[0]?.el]?.content,
                      }}
                    />
                  </Box>
                </Stack>
              </Box>
              <Box>
                <Box flex={1}>
                  {submitted ? (
                    <ContentContainer theme={theme}>
                      <Box>內容</Box>
                    </ContentContainer>
                  ) : (
                    <ContentContainer theme={theme}>
                      <ContentResult />
                    </ContentContainer>
                  )}
                </Box>
              </Box>
            </GridItem>
            <GridItem w="100%">
              {isLargerThan768 ? (
                <Box
                  zIndex={9}
                  position={{ md: 'sticky' }}
                  top={{ base: 'auto', md: 20 }}
                  right={{ base: 0 }}
                >
                  <FormContainer>
                    <Box>{submitted ? <DonateForm /> : <SignupForm />}</Box>
                  </FormContainer>
                </Box>
              ) : (
                <Box zIndex={9} bottom={0} position={'fixed'}>
                  <motion.div
                    className="motion-div"
                    animate={controls}
                    initial={{
                      y: '430px',
                    }}
                    onClick={() => handleMobileFormOnClick()}
                  >
                    <FormContainer>
                      {isOpen && (
                        <Flex justify="flex-end">
                          <Box
                            pos={'absolute'}
                            w={'30px'}
                            h={'30px'}
                            borderRadius={'50%'}
                            top={'-10px'}
                            right={'5px'}
                            zIndex={8}
                            bgColor={'#FFF'}
                            onClick={() => handleMobileFormClose()}
                          >
                            <Center h={'100%'}>X</Center>
                          </Box>
                        </Flex>
                      )}
                      <Box>{submitted ? <DonateForm /> : <SignupForm />}</Box>
                    </FormContainer>
                  </motion.div>
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
            bgColor={'gray.100'}
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
