import React from 'react';
import { Avatar, Box, Flex, Stack, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import useImage from '../useImage';

export default function Index({ quizResult }) {
  const { loading, error, image } = useImage(quizResult?.icon);
  return (
    <>
      <Box py={4} mb="6">
        <Stack spacing="1" direction="row">
          <Box mr="2">
            <Avatar size="xl" name={quizResult?.value} src={image} />
          </Box>
          <Flex align="center" borderRadius={'8px'} bg="#F7FAFC" p={4}>
            <Text {...paragraphProps} color={'#0075BA'} mb="0">
              您好，很高興認識您，
              <br />
              我是與您匹配、現實中的
              {quizResult?.value} {quizResult?.character}，有些話想對您說⋯⋯
            </Text>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
