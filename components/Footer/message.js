import React, { useState, useEffect } from 'react';
import { Box, Heading, Container, Stack, Text } from '@chakra-ui/react';
import { FooterBGLightBlue } from './footer.style';

const HKChinese = {
  messageTitle: '捐款查詢：',
  messageContact: [
    '歡迎致電會員服務熱線 <a href="tel:+85228548318"><u>(852) 2854 8318</u></a>，或電郵至 <a href="mailto:donor.services.hk@greenpeace.org"><u>donor.services.hk@greenpeace.org</u></a>，以查詢捐款相關事宜。',
  ],
};

const HKEnglish = {
  messageTitle: 'Do you have any questions, please call or mail us!',
  messageContact: [
    'Phone number: <a href="tel:+85228548318"><u>(+99) 012 345 678 900</u></a> | Email address: <a href="mailto:donor.services.hk@greenpeace.org"><u>info@greenpeace.org</u></a>',
  ],
};

const TWChinese = {
  messageTitle: '捐款查詢：',
  messageContact: [
    '歡迎致電會員服務熱線 <a href="tel:+886 (2) 2361 20258"><u>+886 (2) 2361 2025</u></a>，或電郵至 <a href="mailto:donor.services.tw@greenpeace.org"><u>donor.services.tw@greenpeace.org</u></a>，以查詢捐款相關事宜。',
  ],
};

const Message = ({ locale }) => {
  const [content, setContent] = useState(HKChinese);

  useEffect(() => {
    if (locale) {
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
        default:
          break;
      }
    }
  }, []);

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
};

export default Message;
