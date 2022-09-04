import React from 'react';
import { Heading, Box, Stack, Text, Image } from '@chakra-ui/react';
import PageContainer from '@containers/pageContainer';

const Index = ({
  content,
  bgImage,
  bgPos = 'top center',
  removeMask = false,
  children,
}) => {
  return (
    <>
      <Box
        minH={{ base: 'lg', md: 'xl' }}
        pos={'relative'}
        zIndex={2}
        paddingBottom={'4rem'}
      >
        <Box pos={'relative'} zIndex={3}>
          <PageContainer>
            <Box py={8} px={4} maxW={{ base: '100%', md: '50%' }}>
              <Stack spacing="4">
                {content.title && (
                  <Heading
                    as="h1"
                    fontSize={{
                      base: 'var(--text-xl)',
                      md: 'var(--text-2xl)',
                    }}
                    color="white"
                    textShadow="0 0 1px rgba(0,0,0, .2)"
                    mb={4}
                    dangerouslySetInnerHTML={{ __html: content.title }}
                  />
                )}
                {content.description && (
                  <Box>
                    <Stack spacing="4">
                      {content.description.map((d, i) => (
                        <Text
                          key={i}
                          fontSize="var(--text-base)"
                          color="white"
                          dangerouslySetInnerHTML={{ __html: d }}
                        />
                      ))}
                    </Stack>
                  </Box>
                )}
                {children && <Box>{children}</Box>}
              </Stack>
            </Box>
          </PageContainer>
        </Box>

        <Box pos={'absolute'} top={0} right={0} left={0} bottom={0}>
          <Image
            src={bgImage}
            height="100%"
            width="100%"
            objectFit="cover"
            objectPosition={bgPos}
          />
        </Box>

        {!removeMask && (
          <Box
            pos={'absolute'}
            top={0}
            right={0}
            left={0}
            bottom={0}
            bgColor={'rgba(0,0,0,0.35)'}
          />
        )}
      </Box>
    </>
  );
};

export default Index;
