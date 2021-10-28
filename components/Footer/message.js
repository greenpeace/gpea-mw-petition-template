import React from 'react';
import { Box, Heading, Container, Stack, Text } from '@chakra-ui/react';
import { FooterBGLightBlue } from './footer.style';

export default function Index({ content }) {
  return (
    <FooterBGLightBlue>
      <Container maxW={'1200px'} py={8} px={4}>
        <Stack direction={{ base: 'column' }}>
          <Box>
            <Heading fontSize={{ base: 'xl', sm: '2xl' }} mb={2}>
              {content.messageTitle}
            </Heading>
          </Box>
          {content.messageContact.map((d, i) => (
            <Box key={i}>
              <Text as="p" dangerouslySetInnerHTML={{ __html: d }} />
            </Box>
          ))}
        </Stack>
      </Container>
    </FooterBGLightBlue>
  );
}
