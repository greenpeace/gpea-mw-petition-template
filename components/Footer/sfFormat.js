import React, { useState, useEffect, useSelector } from 'react';
import axios from 'axios';
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

import { HKChinese, TWChinese, HKEnglish, Korean } from './footerContent';

import logo from '@common/images/logo/GP-logo-2019-white-[web].png';

const SFFormat = ({ locale }) => {
  const isProd = process.env.NODE_ENV === 'production';
  let market = process.env.projectMarket.toLocaleLowerCase();
  // console.log("-----market", market);
  if(market === 'kr'){
    market = 'sk';
    
  }
  const defaultContents = {
    'HKChinese': HKChinese,
    'TWChinese': TWChinese,
    'HKEnglish': HKEnglish,
    'Korean': Korean,
  };
  // const contentUrl = isProd ? `https://cloud.green${market}.greenpeace.org/footer-content` : `https://cors-anywhere.small-service.gpeastasia.org/https://cloud.green${market}.greenpeace.org/footer-content`;

  const [content, setContent] = useState(defaultContents[locale]);
  const [footerLayout, setFooterLayout] = useState('');
  useEffect(() => {
    // const footerContent = axios.get(contentUrl).then((response) => {
    //   // console.log(contentUrl,response.data[locale]);
    //   setContent(response.data[locale]);
      
    //   return response.data;
    // }).catch((error) => { console.log(error); });

    if(market === 'sk') {
      setFooterLayout({
        flex: { base: '1 1 100%', md: '0 0 65%'},
      });
    }

    if (locale) {
      console.log('set default footer content.')
      switch (locale) {
        case 'HKChinese':
          setContent(HKChinese);
          break;
        case 'HKEnglish':
          setContent(HKEnglish);
          break;
        case 'TWChinese':
          setContent(TWChinese);
          break;
          case 'Korean':
            setContent(Korean);
            setFooterLayout({
              flex: { base: '1 1 100%', md: '0 0 65%'},
            });
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
          <Image src={logo} maxW={'220px'} alt={'Greenpeace 綠色和平'} />
        </Box>
        <Stack
          spacing={8}
          direction={{ base: 'column-reverse', md: 'row' }}
          color={'white'}
        >
          <Stack direction="column" spacing={4} mb={8} {...footerLayout} >
            <Box>
              {content.leftContent.map((d, i) => (
                <Box key={i}>
                  <Text as="p" mb="4" dangerouslySetInnerHTML={{ __html: d }} />
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
