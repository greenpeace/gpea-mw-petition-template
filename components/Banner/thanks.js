import React from 'react';
import { Heading, Box, Flex, Text } from '@chakra-ui/react';
import PageContainer from '@containers/pageContainer';

import { TextWrapper } from './Banner.style';

const iconWrapProps = {
  bgColor: '#FFF',
  borderRadius: '50%',
  w: 6,
  h: 6,
};

export default function Index({ content, bgImage }) {
  return (
    <>
      <Box
        h={{ base: 'lg', md: 'xl' }}
        pos={'relative'}
        bgImage={bgImage}
        zIndex={2}
        bgSize={`cover`}
        bgPos={`center center`}
      >
        <Box pos={'relative'} zIndex={3}>
          <PageContainer>
            <Box py={6} px={4} height="100%" maxW={{ base: '100%', md: '50%' }}>
              <Flex
                height="100%"
                direction="column"
                justifyContent="space-between"
              >
                <TextWrapper>
                  <Heading
                    as="h1"
                    fontSize={{ base: '4xl', md: '5xl' }}
                    fontWeight="bold"
                    lineHeight="1.3"
                    color={'white'}
                  >
                    {content.title}
                  </Heading>
                  {content.description.map((d, i) => (
                    <Text
                      key={i}
                      fontSize={{ base: 'sm', md: 'md' }}
                      color={'#FFF'}
                      dangerouslySetInnerHTML={{ __html: d }}
                    ></Text>
                  ))}
                </TextWrapper>
                {/* <TextWrapper>
                  <Stack direction="column" spacing={4}>
                    <Text color={'#FFF'}>{content.inviteMessage}</Text>
                    <Stack direction="row" spacing={4}>
                      {content.shareLink.map((d, i) => (
                        <Box key={i} {...iconWrapProps}>
                          <Link href={d.link} target={`_blank`}>
                            <Center h={`100%`}>{d.shareComponent}</Center>
                          </Link>
                        </Box>
                      ))}
                    </Stack>
                    <Box onClick={() => console.log('clicked')}>
                      <Text textDecoration={'underline'} color={'#FFF'}>
                        {content.inviteInfo}
                      </Text>
                    </Box>
                  </Stack>
                </TextWrapper> */}
              </Flex>
            </Box>
          </PageContainer>
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
