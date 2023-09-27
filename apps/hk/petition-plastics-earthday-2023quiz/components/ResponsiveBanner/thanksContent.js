import React, { useEffect } from 'react';
import {
  Heading,
  Box,
  Flex,
  Text,
  Image,
  Stack,
  Center
} from '@chakra-ui/react';
import useImage from '../../useImage';

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
  const { loading, error, image } = useImage(quizResult?.image);
  return (
    <>
      <Box py={4} px={4}>
        <Flex height="100%" direction="column" justifyContent="space-between">
          <Stack spacing={4}>
            <Box>
              {content.title && (
                <Heading
                  as="h1"
                  fontSize={{
                    base: 'var(--text-md)',
                    md: 'var(--text-lg)',
                  }}
                  color="#AFAA91"
                  textShadow="0 0 1px rgba(0,0,0, .2)"
                  mb={4}
                  dangerouslySetInnerHTML={{ __html: content.title }}
                />
              )}
            </Box>
            {content?.description && (
              <Box>
                <Stack spacing="4">
                  {content?.description.map((d, i) => (
                    <Text
                      key={i}
                      fontSize="var(--text-base)"
                      color="#AFAA91"
                      dangerouslySetInnerHTML={{ __html: d }}
                    ></Text>
                  ))}
                </Stack>
              </Box>
            )}
            <Center h="100%" mt="0">
              <Box position="relative">
                <Image
                  src={image}
                  pos={'relative'}
                  p="4"
                  maxW={{ base: '240px', md: '320px' }}
                  loading="eager"
                />
              </Box>
            </Center>
            <Flex alignItems="center">
              <Box>
                <Text
                  as="p"
                  fontSize={{
                    base: 'var(--text-base)',
                    md: 'var(--text-md)',
                  }}
                  color="#AFAA91"
                  fontWeight="bold"
                  dangerouslySetInnerHTML={{ __html: quizResult?.title }}
                />
              </Box>
            </Flex>
            <Text
              as="p"
              fontSize={{
                base: 'var(--text-sm)',
                md: 'var(--text-base)',
              }}
              color={'black'}
              dangerouslySetInnerHTML={{ __html: quizResult?.content }}
            />
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
