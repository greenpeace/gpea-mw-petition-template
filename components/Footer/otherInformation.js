import React from 'react';
import { Box, Container, Text, Grid } from '@chakra-ui/react';
import { FooterBGBlue } from './footer.style';

export default function Index({ content }) {
  return (
    <FooterBGBlue>
      <Container maxW={'1200px'} py={8} px={4}>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={{ base: 6 }}
          color={'#FFF'}
        >
          {content.footerContent.map((d, i) => (
            <Box key={i}>
              <Text
                as="p"
                fontSize="sm"
                dangerouslySetInnerHTML={{ __html: d }}
              />
            </Box>
          ))}
        </Grid>
      </Container>
    </FooterBGBlue>
  );
}
