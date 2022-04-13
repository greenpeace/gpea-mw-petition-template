import React, { useEffect, useState, useContext, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import {
  Box,
  Text,
  Stack,
  Skeleton,
  Button,
  Image,
  useDisclosure,
  Icon,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useMediaQuery,
  Slide,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { FaPencilAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import HeroSection from './components/HeroSection';
import MainSection from './components/MainContent';
import Form from './components/Form';
import TypePicker from './components/TypePicker';
import FixedCTA from './components/FixedCTA';
import formContent from './form';
import SEO from './SEO';
import R313 from './images/202204_EarthDayPush_R3-13.png';

import * as formActions from 'store/actions/action-types/form-actions';
import * as statusActions from 'store/actions/action-types/status-actions';
import PetitionFooter from '@containers/petitionFooter';

import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const WebContext = React.createContext();
const API_ENDPOINT = `https://gsheet-toolkit.small-service.gpeastasia.org/v1/db/climate-commitment?q={"Status":"Approved"}`;

function Index({ setFormContent, setForm, status, setScreen }) {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  const mobileForm = useRef(null);
  const [webData, setWebData] = useState(null);
  const [showCTAButton, setShowCTAButton] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const [ref2, inView2] = useInView();
  const modalRef = useRef(null);
  const screen = status.scrollToTarget;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const executeScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isLargerThanLG) {
      setTimeout(() => {
        setShowCTAButton(false);
        return;
      }, 500);
    }
    if (!inView2 && !inView && !isLargerThanLG) {
      setShowCTAButton(true);
    } else {
      setShowCTAButton(false);
    }
  }, [inView, inView2, isLargerThanLG]);

  useEffect(() => {
    setFormContent(formContent);

    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setWebData(data.records))
      .catch((error) => console.error(error));

    setForm([]); //Reset Data Type
    setScreen('STEP1'); //Reset Data Type & Data
  }, []);

  return (
    <>
      <SEO />
      <WebContext.Provider value={webData}>
        {/* <Box bgColor={'#88D6F8'}>
          <HeaderMarquee />
        </Box> */}
        <Box ref={ref2}>
          <HeroSection
            handleClick={() => executeScroll(mobileForm)}
            screen={screen}
          />
        </Box>

        <Box bgColor={'#88D6F8'}>
          <MainSection>
            {/** DESKTOP ONLY */}
            <Box ref={mobileForm}>
              {screen === 'STEP1' && (
                <Box>
                  <ConnectedStep />
                </Box>
              )}
              {screen === 'STEP2' && <Form />}
              <Box ref={ref}></Box>
            </Box>
            {/** */}
          </MainSection>
        </Box>

        <Box bgColor={'#88D6F8'}>
          <Container maxW="1200px" py="6">
            <BottomMarquee />
          </Container>
        </Box>

        <Box pt={6} bgColor={'#88D6F8'}>
          <Image src={R313} w={'full'} />
        </Box>

        <PetitionFooter locale={'HKChinese'} />

        <Modal
          isOpen={isOpen}
          onClose={() => {
            onClose();
            setForm([]);
          }}
          height="100%"
          size={'full'}
          motionPreset="slideInBottom"
          autoFocus={false}
        >
          {/* <ModalOverlay /> */}
          <ModalContent>
            <Box
              bgColor={'white'}
              borderRadius={'full'}
              pos={'fixed'}
              top={'12px'}
              right={'16px'}
              color="gray.700"
              zIndex={99}
              onClick={() => {
                onClose();
                setForm([]);
              }}
            >
              <Center p="2">
                <Icon as={CloseIcon} size="md" />
              </Center>
            </Box>
            <ModalBody>
              <Box py="6">
                {screen === 'STEP1' && <ConnectedStep />}
                {screen === 'STEP2' && <Form />}
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </WebContext.Provider>
      <Slide
        direction="bottom"
        in={showCTAButton}
        style={{ zIndex: 10 }}
        d={showCTAButton ? 'block' : 'none'}
      >
        <FixedCTA onClick={() => executeScroll(mobileForm)}>
          {formContent.mobile_cta ? formContent.mobile_cta : '立即捐款'}
        </FixedCTA>
      </Slide>
    </>
  );
}

const StepOne = ({ formData, setScreen }) => {
  return (
    <Box position={'relative'}>
      {/** Step 1 content */}
      <Stack spacing="4">
        <Heading as="h2" fontSize={'xl'} color={'theme.climate'}>
          選擇你的承諾（可多選）
        </Heading>
        <TypePicker />
        {formData.length !== 0 && (
          <Box mx={'auto'} textAlign={'center'}>
            <Button
              variant={'roundedCTA'}
              rightIcon={<FaPencilAlt />}
              disabled={formData.length === 0}
              onClick={() => {
                setScreen('STEP2');
              }}
            >
              下一步
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

const HeaderMarquee = () => {
  const value = useContext(WebContext);

  if (!value) {
    return (
      <Stack>
        <Skeleton height="26px" />
      </Stack>
    );
  }

  return (
    <Box>
      <Marquee gradient={false}>
        {value.map((d, i) => (
          <Box key={i}>
            <Box p={4} mx={2}>
              <Text
                maxW="400px"
                fontSize={{ base: 'sm', md: 'md' }}
                isTruncated
              >
                {/* <Text as="span" fontWeight={900}>
                  {d.FirstName}：
                </Text> */}
                <Text as="span">{d.Thoughts}</Text>
              </Text>
            </Box>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
};

const BottomMarquee = () => {
  const PAGE_SIZE = 30;
  const listInnerRef = useRef();
  const [thoughts, setThoughts] = useState([]);
  const [pageSize, setPageSize] = useState(20);

  useEffect(async () => {
    let fetchURLs = [];
    let commitment = [];

    const getPhotoTotal = await axios
      .get(`${API_ENDPOINT}&limit=1`)
      .then((response) => {
        return response.data.totalCount;
      })
      .catch(function (error) {
        console.log(error);
      });

    for (let i = 0; i < getPhotoTotal; i += 100) {
      fetchURLs = [...fetchURLs, `${API_ENDPOINT}&offset=${i}`];
    }

    const commitments = await axios
      .all(fetchURLs.map((d) => axios.get(d)))
      .then(
        axios.spread(async (...res) => {
          await res.map((d) => commitment.push(d.data.records));
          return commitment.flat(1);
        }),
      )
      .then((data) => {
        const resData = {
          records: data.map((d) => d).sort((a, b) => b.Timestamp - a.Timestamp),
        };
        return resData;
      })

      .catch(function (error) {
        console.log(error);
      });

    setThoughts(commitments?.records);
  }, []);

  const handleLoadMore = () => {
    const number = thoughts.length - pageSize;
    if (number > 0) {
      if (number > PAGE_SIZE) {
        setPageSize(pageSize + PAGE_SIZE);
      } else if (number <= PAGE_SIZE) {
        setPageSize(thoughts.length);
      }
    }
  };

  if (thoughts.length === 0) {
    return (
      <Center py="4">
        <Spinner color="gray.100" />
      </Center>
    );
  }

  return (
    <Box bgColor={'white'} pos={'relative'} borderRadius={'8px'} px="4" py="6">
      <Box>
        <Heading as="h2" {...headingProps} color={'theme.climate'} mb="6">
          我做得到！
        </Heading>
      </Box>
      <Box
        maxH={{ base: '480px', md: '680px' }}
        overflowY={'auto'}
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#D2D2D2',
            borderRadius: '24px',
          },
        }}
      >
        <SimpleGrid columns={{ base: '1', md: '2' }}>
          {(thoughts.slice(0, pageSize) || []).map((d, i) => (
            <Box
              key={i}
              flex={1}
              boderRadius="xl"
              borderWidth="1px"
              borderLeft="4px"
              borderLeftColor={'theme.climate'}
              bgColor={'yellow.50'}
              p={4}
              overflow="hidden"
              mb="4"
              mx="2"
              fontFamily={'sans-serif'}
            >
              <Text
                fontSize={'md'}
                fontWeight={'bold'}
                color={'gray.800'}
                mb="1"
              >
                {d.FirstName}:
              </Text>
              <Text fontSize={'sm'} color={'gray.700'} lineHeight="2">
                {d?.Thoughts}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {thoughts.length - pageSize > 0 && (
          <Center my={4}>
            <Button variant="outline" onClick={handleLoadMore}>
              {'讀取更多'}
            </Button>
          </Center>
        )}
      </Box>
    </Box>
  );
};

const mapStateToProps = ({ status, theme, signup, form }) => {
  return {
    status,
    theme: theme.data,
    signup: signup.data,
    formData: form.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
    setForm: (data) => {
      dispatch({ type: formActions.SET_FORM_DATA, data });
    },
    setScreen: (data) => {
      dispatch({ type: statusActions.SET_SCROLL_TO_TARGET, data });
    },
  };
};

const ConnectedStep = connect(mapStateToProps, mapDispatchToProps)(StepOne);

export default connect(mapStateToProps, mapDispatchToProps)(Index);
