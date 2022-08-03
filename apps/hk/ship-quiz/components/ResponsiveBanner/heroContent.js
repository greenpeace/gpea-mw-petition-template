import React from 'react';
import {
  Heading,
  Box,
  Stack,
  Text,
  Image,
  Center,
  Flex,
} from '@chakra-ui/react';
import PageContainer from '@containers/pageContainer';
import useImage from '../../useImage';

export default function Index({
  content,
  imageSrcset,
  removeMask,
  children,
  defaultImage,
  objectPosition = 'center top',
  minH = { base: 'lg', md: 'xl' },
  quizResult,
}) {
  const { loading, error, image } = useImage(quizResult?.image);
  return (
    <>
      <Box py={4} px={4}>
        <Stack spacing="4">
          {content.title && (
            <Heading
              as="h1"
              fontSize={{
                base: 'var(--text-md)',
                md: 'var(--text-lg)',
              }}
              color="#0075BA"
              textShadow="0 0 1px rgba(0,0,0, .2)"
              mb={4}
              dangerouslySetInnerHTML={{ __html: content.title }}
            />
          )}
          {/* {content.description && (
            <Box>
              <Stack spacing="4">
                {content.description.map((d, i) => (
                  <Text
                    key={i}
                    fontSize="var(--text-base)"
                    color="#0075BA"
                    dangerouslySetInnerHTML={{ __html: d }}
                  />
                ))}
              </Stack>
            </Box>
          )} */}
          {children && <Box>{children}</Box>}
          <Center h="100%" mt="0">
            <Box position="relative">
              <Image
                src={image}
                pos={'relative'}
                p="4"
                maxW={{ base: '240px', md: '320px' }}
              />
            </Box>
          </Center>
          <Flex alignItems="center">
            <Box>
              <Text fontSize="lg" color="#0075BA" fontWeight="bold">
                原來您是
              </Text>
            </Box>
            <Box mx="2" py="1" px="4" borderBottom="2px solid #0075BA">
              <Text fontSize="2xl" color="#0075BA" fontWeight="bold">
                {quizResult?.value}
              </Text>
            </Box>
          </Flex>
          <Text as="p" color="#0075BA" fontWeight="bold">
            {quizResult?.title}
          </Text>
          <Text as="p" color={'#0075BA'}>
            {quizResult?.content}
          </Text>
        </Stack>
      </Box>

      {/* <Box pos={'absolute'} top={0} right={0} left={0} bottom={0}>
          <picture>
            {imageSrcset?.map((item, index) => {
              return (
                <source media={item.media} srcSet={item.srcset} key={index} />
              );
            })}

            <Image
              src={defaultImage}
              height="100%"
              width="100%"
              objectFit="cover"
              objectPosition={objectPosition}
            />
          </picture>
        </Box> */}
    </>
  );
}
