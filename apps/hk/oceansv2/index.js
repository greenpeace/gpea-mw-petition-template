import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import PetitionFooter from '@containers/petitionFooter';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { Box, Container, Image, Spinner, Center } from '@chakra-ui/react';
import HeroSection from './components/HeroSection';
import MainSection from './components/MainSection';
import Form from './components/Form';
import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';
import heroBannerImage from './images/GP1SUB1C_PressMedia_ed.jpg';

const RenderContent = ({ page }) => {
  if (!page) {
    return (
      <Center minH={{ base: '380px', md: '500px' }}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  switch (page) {
    case 'default':
      return <DefaultPage />;

    case 'donation':
      return <DonationPage />;

    default:
      return <DefaultPage />;
  }
};

const DefaultPage = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const mobileForm = useRef(null);
  return (
    <>
      <Box pos={'relative'} minH={{ base: '380px', md: '500px' }}>
        <Container maxW="1200px">
          <HeroSection />
        </Container>
        <Box
          zIndex="-1"
          height="100%"
          width="100%"
          pos={'absolute'}
          top={0}
          left={0}
        >
          <Image
            src={heroBannerImage}
            height="100%"
            width="100%"
            objectFit="cover"
            objectPosition="65% 25%"
          />
          <Box
            bgColor="rgba(0, 0, 0, 0.2)"
            pos={'absolute'}
            top={0}
            left={0}
            bottom={0}
            right={0}
            zIndex={9}
          />
        </Box>
      </Box>

      <Container maxW="1200px">
        <Box ref={mobileForm}>
          <Box d={{ base: 'block', lg: 'none' }} mt={-4} ref={ref}>
            <Form />
          </Box>
        </Box>

        <Box w={{ base: '100%', lg: '50%' }} py={10} pr={{ xl: 10 }} pb={16}>
          <MainSection />
        </Box>
      </Container>
      <ScrollToTargetButton target={mobileForm} targetInView={inView} />
    </>
  );
};

const DonationPage = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const mobileForm = useRef(null);
  return (
    <>
      <Box pos={'relative'} minH={{ base: '380px', md: '500px' }}>
        <Container maxW="1200px">
          <HeroSection />
        </Container>
        <Box
          zIndex="-1"
          height="100%"
          width="100%"
          pos={'absolute'}
          top={0}
          left={0}
        >
          <Image
            src={heroBannerImage}
            height="100%"
            width="100%"
            objectFit="cover"
            objectPosition="65% 25%"
          />
          <Box
            bgColor="rgba(0, 0, 0, 0.2)"
            pos={'absolute'}
            top={0}
            left={0}
            bottom={0}
            right={0}
            zIndex={9}
          />
        </Box>
      </Box>

      <Container maxW="1200px">
        <Box ref={mobileForm}>
          <Box d={{ base: 'block', lg: 'none' }} mt={-4} ref={ref}>
            <Form />
          </Box>
        </Box>

        <Box w={{ base: '100%', lg: '50%' }} py={10} pr={{ xl: 10 }} pb={16}>
          <MainSection />
        </Box>
      </Container>
      <ScrollToTargetButton target={mobileForm} targetInView={inView} />
    </>
  );
};

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [page, setPage] = useState('');

  useEffect(() => {
    dispatch({ type: formActions.SET_FORM, data: formContent });

    if (router.isReady) {
      const { page } = router.query;
      setPage(page);
    }
  }, [router]);

  return (
    <>
      <SEO />

      <RenderContent page={page} />

      <PetitionFooter locale={'HKChinese'} />
    </>
  );
};

export default Index;
