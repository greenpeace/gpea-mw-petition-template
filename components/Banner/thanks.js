import React from 'react';
import { Heading, Box, Flex, Text, Image, Stack } from '@chakra-ui/react';
import PageContainer from '@containers/pageContainer';
import SocialButton from '@components/SocialButton/socialButton';

import { TextWrapper } from './Banner.style';

const iconWrapProps = {
  bgColor: '#FFF',
  borderRadius: '50%',
  w: 10,
  h: 10,
  fontSize: '20px',
};

export default function Index({ content, bgImage }) {
  return (
    <>
      <Box
        minH={{ base: 'lg', md: 'xl' }}
        pos={'relative'}
        zIndex={2}
        paddingBottom={'4rem'}
      >
        <Box pos={'relative'} zIndex={4}>
          <PageContainer>
            <Box py={8} px={4} height="100%" maxW={{ base: '100%', md: '50%' }}>
              <Flex
                height="100%"
                direction="column"
                justifyContent="space-between"
              >
                <TextWrapper>
                  <Heading
                    as="h1"
                    fontSize={{ base: 'var(--text-xl)', md: 'var(--text-2xl)' }}
                    lineHeight="1.2"
                    color={'white'}
                    dangerouslySetInnerHTML={{ __html: content.title }}
                  />
                  {content.description.map((d, i) => (
                    <Text
                      key={i}
                      fontSize="var(--text-base)"
                      color={'#FFF'}
                      dangerouslySetInnerHTML={{ __html: d }}
                    ></Text>
                  ))}
                </TextWrapper>
                <TextWrapper>
                  <Stack direction="column" spacing={4}>
                    {content.inviteMessage && (
                      <Text
                        color={'white'}
                        dangerouslySetInnerHTML={{
                          __html: content.inviteMessage,
                        }}
                      />
                    )}
                    <Stack direction="row" spacing={6}>
                      {content.inviteMessage &&
                        content.shareLink.map((d, i) => (
                          <Box key={i} {...iconWrapProps}>
                            <SocialButton href={d.link}>
                              {d.shareComponent}
                            </SocialButton>
                          </Box>
                        ))}
                    </Stack>
                    {/* <Box onClick={() => console.log('clicked')}>
                      <Text textDecoration={'underline'} color={'#FFF'}>
                        {content.inviteInfo}
                      </Text>
                    </Box> */}
                  </Stack>
                </TextWrapper>
              </Flex>
            </Box>
          </PageContainer>
        </Box>

        <Box pos={'absolute'} top={0} right={0} left={0} bottom={0}>
          <Image
            src={bgImage}
            h={'100%'}
            w={'100%'}
            objectFit={'cover'}
            objectPosition={'top center'}
          />
        </Box>

        <Box
          className={'heroMask'}
          pos={'absolute'}
          top={0}
          right={0}
          left={0}
          bottom={0}
          bgColor={'rgba(0,0,0,.5)'}
        />
      </Box>
    </>
  );
}
