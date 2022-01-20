import React from 'react';
import { Heading, Box, Flex, Text, Image, Stack } from '@chakra-ui/react';
import PageContainer from '@containers/pageContainer';
import SocialButton from '@components/SocialButton/socialButton';

const iconWrapProps = {
  bgColor: '#FFF',
  borderRadius: '50%',
  w: 10,
  h: 10,
  fontSize: '20px',
};

export default function Index({ content, bgImage, removeMask }) {
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
                <Stack spacing={4}>
                  <Box>
                    <Heading
                      as="h1"
                      fontSize={{
                        base: 'var(--text-xl)',
                        md: 'var(--text-2xl)',
                      }}
                      color="white"
                      textShadow="0 0 1px rgba(0,0,0, .2)"
                      dangerouslySetInnerHTML={{ __html: content.title }}
                    />
                  </Box>
                  <Box>
                    <Stack spacing="4">
                      {content.description.map((d, i) => (
                        <Text
                          key={i}
                          fontSize="var(--text-base)"
                          color="white"
                          dangerouslySetInnerHTML={{ __html: d }}
                        ></Text>
                      ))}
                      {content.inviteMessage && (
                        <Text
                          color="white"
                          dangerouslySetInnerHTML={{
                            __html: content.inviteMessage,
                          }}
                        />
                      )}
                    </Stack>
                  </Box>
                  <Box>
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
                  </Box>
                </Stack>
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
            objectPosition={{ base: '20% top', md: 'center top' }}
          />
        </Box>

        {!removeMask && (
          <Box
            pos={'absolute'}
            top={0}
            right={0}
            left={0}
            bottom={0}
            bgColor={'rgba(0,0,0,0.5)'}
          />
        )}
      </Box>
    </>
  );
}
