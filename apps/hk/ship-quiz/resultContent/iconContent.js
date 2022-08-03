import React from 'react';
import { Avatar, Box, Flex, Stack, Text } from '@chakra-ui/react';
import PageContainer from '@containers/pageContainer';
import useImage from '../useImage';

export default function Index({ quizResult }) {
  const { loading, error, image } = useImage(quizResult?.icon);
  return (
    <>
      <Box pos={'relative'} zIndex={2}>
        <Box pos={'relative'} zIndex={3}>
          <PageContainer>
            <Box py={4} px={2}>
              <Stack spacing="1" direction="row">
                <Box>
                  <Avatar size="xl" name={quizResult?.value} src={image} />
                </Box>
                <Flex align="center" borderRadius={'8px'} bg="#F7FAFC" p={4}>
                  <Text
                    as="p"
                    color={'#0075BA'}
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    您好，很高興認識您，
                    <br />
                    我是與您匹配、現實中的
                    {quizResult?.value} {quizResult?.character}
                  </Text>
                </Flex>
              </Stack>
            </Box>
          </PageContainer>
        </Box>
      </Box>
    </>
  );
}
