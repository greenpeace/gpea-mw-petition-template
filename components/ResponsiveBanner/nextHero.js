import React from 'react';
import { Heading, Box, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import PageContainer from '@containers/pageContainer';

export const NextHero = ({
  content,
  imageSrcset,
  removeMask,
  children,
  defaultImage,
  objectPosition = 'center top',
  minH = { base: 'lg', md: 'xl' },
}) => {
  return (
    <>
      <Box minH={minH} pos={'relative'} zIndex={2} paddingBottom={'4rem'}>
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
          <picture>
            {imageSrcset?.map((item, index) => {
              return (
                <source media={item.media} srcSet={item.srcset} key={index} />
              );
            })}

            <Image
              src={defaultImage}
              layout="fill"
              objectFit="cover"
              objectPosition={objectPosition}
            />
          </picture>
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
};
