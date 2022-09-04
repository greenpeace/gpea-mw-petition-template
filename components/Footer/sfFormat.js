import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Text,
  Image,
  Stack,
  Link,
  Divider,
} from '@chakra-ui/react';
import { FooterBGBlue } from './footer.style';

import { Korean } from './footerContent';

import logo from '@common/images/logo/GP-logo-2019-white-[web].png';

const SFFormat = ({ locale }) => {
  const [content, setContent] = useState(Korean);

  useEffect(() => {
    if (locale) {
      switch (locale) {
        case 'Korean':
          setContent(Korean);
          break;
        default:
          break;
      }
    }
  }, []);

  return (
    <FooterBGBlue>
      <Container maxW={'1200px'} py={8} px={4}>
        <Box pt={4} pb={6}>
          <Image src={logo} maxW={'220px'} alt={'Greenpeace'} />
        </Box>
        <Stack
          spacing={8}
          direction={{ base: 'column-reverse', md: 'row' }}
          color={'white'}
        >
          <Stack direction="column" spacing={4} mb={8}>
            <Box>
              {content.leftContent.map((d, i) => (
                <Box key={i}>
                  <Text as="p" mb="4">
                    {d}
                  </Text>
                </Box>
              ))}
            </Box>
            <Stack direction="column" spacing={2}>
              {content.link.map((d, i) => (
                <Box key={i} py="4px">
                  <Link
                    href={d.value}
                    target={'_blank'}
                    color="white"
                    rel="noreferrer"
                    isExternal
                  >
                    {d.label}
                  </Link>
                </Box>
              ))}
            </Stack>
          </Stack>
          <Stack direction="column" spacing={4} mb={8}>
            {content.rightContent.map((d, i) => (
              <Box key={i}>
                <Text as="p" dangerouslySetInnerHTML={{ __html: d }} />
                <Divider
                  mt="6"
                  mb="4"
                  h="2px"
                  w="12px"
                  backgroundColor={'white'}
                />
              </Box>
            ))}
          </Stack>
        </Stack>
        <Box color={'white'} mb={{ base: '96px', sm: 8 }}>
          <Text as="span">© Greenpeace {new Date().getFullYear()}</Text>
        </Box>
      </Container>
    </FooterBGBlue>
  );
};

export default SFFormat;
