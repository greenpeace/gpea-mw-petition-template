import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Box, Container, Image, Stack, Heading, Text } from '@chakra-ui/react';
import ThankyouForm from '../components/Form/ThankyouForm';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';
import heroBannerImage from '../images/DJI_0457_r_c.jpg';
import image01 from '../images/elm_flag.jpg';

import { useSelector } from 'react-redux';
import { useWindowSize } from '@common/utils/index';
import { headingProps } from '@common/styles/components/contentStyle';
import { paragraphProps } from '@common/styles/components/contentStyle';

const formWidth = 500;

const SignupPage = () => {
  const theme = useSelector((state) => state?.theme);
  const themeInterests = theme?.interests;

  const signup = useSelector((state) => state?.signup?.data);
  const { FirstName = '綠色和平支持者' } = signup;

  const [delayDisplay, setDelayDisplay] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });
  const mobileForm = useRef(null);

  const getSize = useWindowSize();
  const formProps = inView
    ? {
        position: 'absolute',
        left: '100%',
        top: 0,
        width: `${formWidth}px`,
      }
    : {
        position: 'fixed',
        left: `${getSize?.width / 2}px`,
        top: '0px',
        width: `${formWidth}px`,
      };

  useEffect(() => {
    setTimeout(() => setDelayDisplay(true), 200);
  }, []);

  return (
    <>
      <Box pos={'relative'} minH={{ base: '380px', md: '500px' }}>
        <Container maxW="1200px">
          <Stack spacing="4" py={'40px'} w={{ md: 'md', xl: 'xl' }}>
            <Box ref={ref}>
              <Heading
                as="h1"
                {...headingProps}
                color={'white'}
                fontSize={{
                  base: 'var(--text-xl)',
                  md: 'var(--text-2xl)',
                }}
                textShadow="0 0 1px rgba(0,0,0, .2)"
                mb={4}
                dangerouslySetInnerHTML={{
                  __html: `${
                    FirstName ?? '綠色和平支持者'
                  }，<br/>感謝您加入守護海洋行列！`,
                }}
              />
            </Box>
            <Box pos={'relative'}>
              {delayDisplay && (
                <Box {...formProps} d={{ base: 'none', lg: 'block' }}>
                  <ThankyouForm />
                </Box>
              )}
            </Box>
          </Stack>
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
          <Box d={{ base: 'block', lg: 'none' }} mt={-4}>
            <ThankyouForm />
          </Box>
        </Box>

        <Box w={{ base: '100%', lg: '50%' }} py={10} pr={{ xl: 10 }} pb={16}>
          <>
            <Heading {...headingProps}>
              感謝您聯署支持守護大嶼，優先發展棕地。
            </Heading>

            <Text as="p" {...paragraphProps}>
              您的聯署意義重大，我們將一起實現守護香港自然環境的目標。
            </Text>

            <Text as="p" {...paragraphProps}>
              面對您和超過17萬人提出的守護大嶼訴求，政府必須妥善規管與善用經濟、環境成本較低的棕地，保留您我、香港人珍惜的郊野和海洋。
            </Text>

            <Text as="p" {...paragraphProps}>
              由證明棕地發展可能性、揭露垃圾山等棕地亂象...
              綠色和平以事實證明政府只要規管和善用棕地，香港已有足夠的土地資源應付所需。
            </Text>

            <Text as="p" {...paragraphProps}>
              您為守護大嶼工作提供了強大力量。我們邀請您繼續關注守護香港自然環境議題，以及透過綠色和平的網站認識更多守護大嶼的幕後工作與同路人故事。
            </Text>

            <Heading {...headingProps}>
              為香港自然環境多走一步，請捐助守護大嶼項目。
            </Heading>

            <Text as="p" {...paragraphProps}>
              綠色和平一直以行動、研究調查、政策倡議等方式守護大嶼，您願意多走一步，捐助守護大嶼的工作嗎？
            </Text>

            <Text as="p" {...paragraphProps}>
              您的捐款將直接資助綠色和平繼續以紮實研究，揭露真相，推動政府善用棕地，守護您我珍惜的自然環境！
            </Text>

            <Heading {...headingProps}>
              填海嚴重將危害海洋生態，您可以施以援手！
            </Heading>

            <Text as="p" {...paragraphProps}>
              東大嶼水域具有白腹海鵰、鮑氏雙足蜥、海筆等珍稀物種，距離填海範圍最近僅約十多公里，正是全港唯一綠海龜的產卵地—南丫島深灣，在如此敏感的生態區域大興土木，必然破壞珍貴的海洋生態，野生動物亦恐從此絕跡。
            </Text>

            <Text as="p" {...paragraphProps}>
              有您的捐助支持，綠色和平便能有更多資源與力量執行守護大嶼工作，推動政府優先發展棕地，守護香港自然環境。
            </Text>

            <Text as="p" {...paragraphProps}>
              向香港自然環境伸出援手，捐助綠色和平守護大嶼工作。
            </Text>

            <Heading {...headingProps}>堅持發聲 行動帶來改變</Heading>

            <Text as="p" {...paragraphProps}>
              現以每月$200捐款支持堅守大嶼工作，即可獲得一面「堅守大嶼」旗幟及2次「環保手作工作坊」的機會。
            </Text>

            <Box as="p" {...paragraphProps}>
              <Image src={image01} />
            </Box>
          </>
        </Box>
      </Container>
      <ScrollToTargetButton target={mobileForm} targetInView={inView} />
    </>
  );
};

export default SignupPage;
