import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import PetitionFooter from '@containers/petitionFooter';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Image,
  Spinner,
  Center,
  Heading,
  Text,
} from '@chakra-ui/react';
import HeroSection from './components/HeroSection';
import MainSection from './components/MainSection';
import DonationSection from './components/HeroSection/Donation';
import Form from './components/Form';
import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';
import heroBannerImage from './images/GP1SUB1C_PressMedia_ed.jpg';

import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

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
            objectPosition="center"
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
  const theme = useSelector((state) => state.theme?.data);
  return (
    <>
      <Box pos={'relative'} minH={{ base: '380px', md: '540px' }}>
        <Container maxW="1200px">
          <DonationSection />
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
            objectPosition="center"
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
          <Heading {...headingProps} color={`theme.${theme?.interests}`}>
            您願意進一步守護珍貴海洋嗎？
            <br />
            立即捐款，攜手守護珍貴海洋。
          </Heading>

          <Text as="p" {...paragraphProps}>
            您的捐款將直接資助我們與全球頂尖科學家，進行海上科研任務、揭露企業破壞海洋的行為、以及國際間的倡議工作，直接幫助達成
            2030年 30% 全球海洋保護區的目標。
          </Text>

          <Heading {...headingProps} color={`theme.${theme?.interests}`}>
            海洋正向我們發出求救信號，您可以施以援手！
          </Heading>

          <Text as="p" {...paragraphProps}>
            海洋現正面臨多方面的威脅，包括過度捕魚、深海採礦、塑膠及鑽油污染等，不少生物面臨滅絕危機，生物多樣性瀕臨崩潰邊緣。
          </Text>

          <Text as="p" {...paragraphProps}>
            有您的捐助支持，綠色和平便能有更多資源與力量執行保護海洋工作，幫助海洋逐步回復美麗健康，守護海洋生態。
          </Text>

          <Heading {...headingProps} color={`theme.${theme?.interests}`}>
            向美麗大海伸出援手，捐助綠色和平海洋工作。
          </Heading>
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
      setPage(page ?? 'default');
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
