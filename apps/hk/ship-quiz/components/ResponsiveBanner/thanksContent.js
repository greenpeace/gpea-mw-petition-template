import React, { useEffect } from 'react';
import {
  Heading,
  Box,
  Flex,
  Text,
  Image,
  Stack,
  AspectRatio,
} from '@chakra-ui/react';
import PageContainer from '@containers/pageContainer';
import SocialButton from '@components/SocialButton/socialButton';

const iconWrapProps = {
  bgColor: '#FFF',
  borderRadius: '50%',
  w: 10,
  h: 10,
  fontSize: '20px',
};

export default function Index({
  content,
  imageSrcset,
  removeMask,
  defaultImage,
  objectPosition = 'center top',
  minH = { base: 'lg', md: 'xl' },
  quizResult,
}) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, []);
  return (
    <>
      <Box py={4} px={4}>
        <Flex height="100%" direction="column" justifyContent="space-between">
          <Stack spacing={4}>
            <Box>
              <Heading
                as="h1"
                fontSize={{
                  base: 'var(--text-md)',
                  md: 'var(--text-lg)',
                }}
                color="#0075BA"
                textShadow="0 0 1px rgba(0,0,0, .2)"
                dangerouslySetInnerHTML={{ __html: content.title }}
              />
            </Box>
            {content?.description && (
              <Box>
                <Stack spacing="4">
                  {content?.description.map((d, i) => (
                    <Text
                      key={i}
                      fontSize="var(--text-base)"
                      color="#0075BA"
                      dangerouslySetInnerHTML={{ __html: d }}
                    ></Text>
                  ))}
                </Stack>
              </Box>
            )}
            <Box>
              <AspectRatio w="100%" ratio={16 / 9} mb="4">
                <iframe src={quizResult?.iframe_src} allowFullScreen />
              </AspectRatio>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
