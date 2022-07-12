import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Box, Container, Image, Stack, Heading, Text } from '@chakra-ui/react';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';
import heroBannerImage from '../images/GP1SUB1C_PressMedia_ed.jpg';
import DonationModule from '@components/GP/DonationModule';
import { useSelector } from 'react-redux';
import { useWindowSize } from '@common/utils/index';
import { headingProps } from '@common/styles/components/contentStyle';

import { paragraphProps } from '@common/styles/components/contentStyle';

import Image01 from '../images/GP0STU61Y_PressMedia.jpg';
import Image02 from '../images/GP01B4T_PressMedia.jpg';

const formWidth = 500;

const DonationPage = () => {
  const theme = useSelector((state) => state?.theme);
  const themeInterests = theme?.interests;
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
                  __html: '請即聯署<br/>將全球 30% 海洋<br/>納入保護區',
                }}
              />
            </Box>
            <Box pos={'relative'}>
              {delayDisplay && (
                <Box {...formProps} d={{ base: 'none', lg: 'block' }}>
                  <DonationModule
                     market={'HK'}
                      language={'zh_HK'}
                      campaign={'oceans'}
                      env={'full'}
                  />
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
            <DonationModule
              market={'HK'}
              language={'zh_HK'}
              campaign={'oceans'}
              env={'production'}
            />
          </Box>
        </Box>

        <Box w={{ base: '100%', lg: '50%' }} py={10} pr={{ xl: 10 }} pb={16}>
          <>
            <Heading {...headingProps} color={`theme.${themeInterests}`}>
              聯署守護海洋
            </Heading>

            <Text as="p" {...paragraphProps}>
              您的聯署將幫助推動《全球海洋公約》，於2030年前將全球至少30%海洋納入保護區！
            </Text>

            <Text as="p" {...paragraphProps}>
              綠色和平正推動各國政府支持《全球海洋公約》，為海洋建立完善保護機制，以長久保護、維持、復育海洋健康，並在2030年前成立至少30%的海洋保護區。
            </Text>

            <Heading {...headingProps} color={`theme.${themeInterests}`}>
              您願意聯署加入守護海洋行列嗎？
            </Heading>

            <Box {...paragraphProps}>
              <Image src={Image01} layout="fill" alt="Greenpeace 綠色和平" />
            </Box>

            <Heading {...headingProps} color={`theme.${themeInterests}`}>
              海洋正向我們發出求救信號，我們需要施予援手！
            </Heading>

            <Text as="p" {...paragraphProps}>
              海洋孕育無數生物，亦提供地球50%的氧氣，更具調節全球氣候的功能，是我們的無上瑰寶。可惜，現時海洋受過度捕撈、深海採礦、塑膠污染等人類行為嚴重威脅，加上氣候危機影響下，海洋酸化、珊瑚白化問題愈趨嚴峻，海洋生態岌岌可危。
            </Text>

            <Text as="p" {...paragraphProps}>
              如我們未能及時挽救這場危機，海洋生態系統、生物多樣性將受到嚴重破壞，珊瑚及與其共生的魚類可能就此滅絕。如若海洋陷入困境，地球環境亦將難逃厄運。
            </Text>

            <Box {...paragraphProps}>
              <Image src={Image02} layout="fill" alt="Greenpeace 綠色和平" />
            </Box>

            <Text as="p" {...paragraphProps}>
              綠色和平正號召全球支持者加入海洋聯署，亦誠意邀請您參與聯署，壯大守護海洋力量。您的力量，是推動2030年前成立至少30%海洋保護區的關鍵。
            </Text>

            <Heading {...headingProps} color={`theme.${themeInterests}`}>
              請即聯署，向正受破壞的美麗大海伸出援手，支持訂立《全球海洋公約》！
            </Heading>
          </>
        </Box>
      </Container>
      <ScrollToTargetButton target={mobileForm} targetInView={inView} />
    </>
  );
};

export default DonationPage;
