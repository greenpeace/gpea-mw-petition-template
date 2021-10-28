import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Text,
  Image,
  Stack,
  Link,
  Flex,
  Divider,
} from '@chakra-ui/react';
import { FooterBGBlue } from './footer.style';

const HKChinese = {
  chinese: { label: '中文', value: '#' },
  english: { label: 'English', value: '#' },
  leftContent: [
    '綠色和平是獨立的國際環保組織，通過科學研究、政策倡議及和平行動，揭露全球環境問題並提出相應解決方案。 我們從不接受任何政府、企業或政治團體的資助，只接受個人的直接捐款，以維持公正獨立。',
  ],
  link: [
    { label: '主頁', value: '#' },
    { label: '私隱政策與個人資料收集聲明', value: '#' },
    { label: '版權', value: '#' },
    { label: '聯絡我們', value: '#' },
    { label: '關於綠色和平', value: '#' },
  ],
  rightContent: [
    '此頁面採用了 SSL 保安接層加密技術，可確保敏感資料（例如信用卡資料和個人資料）在您的瀏覽器和我們伺服器之間傳送時獲得保密處理。',
    '您的個人資料將絕對保密，僅用做捐款、會員服務及通訊等用途，請按此。詳閱隱私保護政策。',
    '捐款港幣$100以上可申請扣稅。',
    '獲豁免繳稅慈善機構編號︰91/5418',
  ],
};

const HKEnglish = {
  chinese: { label: '中文', value: '#' },
  english: { label: 'English', value: '#' },
  leftContent: [
    'Greenpeace is an independent, nonprofit, global organization that stands for positive change through action. We investigate, campaign, document and lobby for a sustainable balance between humans and the environment worldwide.',
  ],
  link: [
    { label: 'Home', value: '#' },
    { label: 'Privacy Policy and Collection of Personal', value: '#' },
    { label: 'Data', value: '#' },
    { label: 'Copyright', value: '#' },
    { label: 'Contact Us', value: '#' },
    { label: 'About Us', value: '#' },
  ],
  rightContent: [
    'This is a secure webpage. Your personal details are protected at all times.',
    'Your personal information will be treated as strictly confidential and only used for communication purpose. Read our privacy statement.',
    'Donations over HK$100 are tax-deductible.',
    'Tax-Exempt Charity Ref No. : 91/5418',
  ],
};

const TWChinese = {
  chinese: { label: '中文', value: '#' },
  english: { label: 'English', value: '#' },
  leftContent: [
    '綠色和平致力於為地球發聲，我們的存在是因為脆弱的地球需要改變、需要行動。但保護地球的使命不能僅靠綠色和平來完成，「您」就是改變世界的力量！',
  ],
  link: [
    { label: '主頁', value: '#' },
    { label: '隱私保護政策', value: '#' },
    { label: '版權聲明', value: '#' },
    { label: '聯絡我們', value: '#' },
    { label: '關於綠色和平', value: '#' },
  ],
  rightContent: [
    '此頁面採用了 SSL 保安接層加密技術，可確保敏感資料（例如信用卡資料和個人資料）在您的瀏覽器和我們伺服器之間傳送時獲得保密處理。',
    '您的個人資料將絕對保密，僅用做捐款、會員服務及通訊等用途，請按此詳閱隱私保護政策。',
    '若欲更新您的個人資料，或取消訂閱綠色和平環保資訊，請不吝聯繫<a href="mailto:inquiry.tw@greenpeace.org">inquiry.tw@greenpeace.org</a>，專員將竭誠為您處理。',
    '財團法人綠色和平基金會<br/>統一編號：26324671<br/>募款字號：111.09.30<br/>衛部救字第1101363536號</br>環署綜字第1000044076號',
  ],
};

const SFFormat = ({ locale }) => {
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
    <FooterBGBlue>
      <Container maxW={'1200px'} py={8} px={4}>
        <Box pt={4} pb={6}>
          <Image
            src={`https://www.greenpeace.org/static/planet4-hongkong-stateless/2020/05/aa123dcd-gp-logo-2019-tc-white-web-01.png`}
            maxW={`240px`}
          />
        </Box>
        {/* <Stack direction={`row`} color={`#FFF`} pb={6} alignItems={`center`}>
          <Box><Link href={content.chinese.value}>{content.chinese.label}</Link></Box>
          <Divider orientation="vertical" h={4} mt={2}/>
          <Box><Link href={content.english.value}>{content.english.label}</Link></Box>
        </Stack> */}
        <Stack
          as="flex"
          spacing={8}
          direction={{ base: 'column-reverse', md: 'row' }}
          color={'white'}
        >
          <Stack direction="column" spacing={4} mb={8} flex={1}>
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
                <Box key={i}>
                  <Link
                    href={d.value}
                    target={'_blank'}
                    style={{ textDecoration: 'underline' }}
                  >
                    {d.label}
                  </Link>
                </Box>
              ))}
            </Stack>
          </Stack>
          <Stack direction="column" spacing={4} mb={8} flex={1}>
            {content.rightContent.map((d, i) => (
              <Box key={i}>
                <Text as="p" dangerouslySetInnerHTML={{ __html: d }} />
                <Divider
                  mt="6"
                  mb="4"
                  h="2px"
                  w="12px"
                  backgroundColor={'white'}
                  opacity="1"
                />
              </Box>
            ))}
          </Stack>
        </Stack>
        <Box color={`#FFF`} mb={{ base: 16, sm: 8 }}>
          <Text as="span">© GREENPEACE {new Date().getFullYear()}</Text>
        </Box>
      </Container>
    </FooterBGBlue>
  );
};

export default SFFormat;
