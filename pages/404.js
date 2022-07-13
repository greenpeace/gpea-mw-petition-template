// 404.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Stack, Flex, Text, VStack } from '@chakra-ui/react';

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, []);

  return (
    <>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://www.greenpeace.org/static/planet4-hongkong-stateless/2019/07/eae017a2-gp0stpwkh_high_res.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={'6'}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <Stack maxW={'2xl'} textAlign={'center'} spacing={4}>
            <Text
              fontSize={'56px'}
              fontWeight="bold"
              color="white"
              letterSpacing="4px"
            >
              404
            </Text>
            <Text fontSize={'2xl'} fontWeight="bold" color="white">
              抱歉，此網頁可能已經不存在
              <br />
              （就像我們的冬天）...
            </Text>
          </Stack>
        </VStack>
      </Flex>
    </>
  );
}
