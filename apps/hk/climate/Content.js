import React from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Heading,
  Text,
  Image,
  ListItem,
  OrderedList,
  Flex,
  Button,
  Stack,
} from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import { OrangeCTA } from '@common/styles/components/formStyle';

import contentA from './images/ce/GP0STTB7D_High_res.jpg';
import contentB from './images/ce/GP0STRAJX_High_res.jpg';
import contentC from './images/ce/GP0STQF5I_High_res.jpg';
import contentD from './images/ce/GP0STT4OQ_High_res.jpg';

import iconA from './images/ce/Asset1-earth.png';
import iconB from './images/ce/Asset1-icemelt.png';
import iconC from './images/ce/Asset1-moneybag.png';

const handleOpenLink = () => {
  window.open(
    `https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK&campaign=climate&ref=climate-challenge-thankyou`,
  );
};

const Content = ({ theme, formContent }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        緩解氣候危機 刻不容緩
      </Heading>

      <Text as="p" {...paragraphProps}>
        氣候危機已經對全球構成威脅，聯合國政府間氣候變化專門委員會（IPCC）發表最新氣候報告，指出如果人類無法將全球升溫控制在1.5°C內，我們將可能面對更強、更頻繁的極端天氣事件。綠色和平作為IPCC的官方觀察員，除了出席氣候報告審核會議，更無間斷地督促各地政府堅守1.5°C臨界值目標，落實減碳目標
      </Text>

      <Text as="p" {...paragraphProps}>
        這份報告是人類生存的「紅色警報」，緩解氣候危機刻不容緩，我們必須在更多破壞發生前力挽狂瀾。立即行動，加入聯署，一同攜手拯救氣候。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentA} />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        氣候危機影響 無孔不入
      </Heading>

      <Box {...paragraphProps}>
        <Stack spacing={4} direction={'column'}>
          <Flex align={'center'}>
            <Box bgColor={`theme.${themeInterests}`} p={4} borderRadius={'8px'}>
              <Image src={iconA} maxW={'80px'} margin={'0 auto'} />
            </Box>
            <Box ml={4}>
              <Text as={'h3'} fontWeight={700} fontSize={'2xl'}>
                200萬
              </Text>
              <Text as={'p'} fontSize={'md'}>
                大氣中的二氧化碳是至少 200 萬年來的最高濃度
              </Text>
            </Box>
          </Flex>
          <Flex align={'center'}>
            <Box bgColor={`theme.${themeInterests}`} p={4} borderRadius={'8px'}>
              <Image src={iconB} maxW={'80px'} margin={'0 auto'} />
            </Box>
            <Box ml={4}>
              <Text as={'h3'} fontWeight={700} fontSize={'2xl'}>
                2050
              </Text>
              <Text as={'p'} fontSize={'md'}>
                2050年前，北極可能經歷最少一次「9月無海冰」
              </Text>
            </Box>
          </Flex>
          <Flex align={'center'}>
            <Box bgColor={`theme.${themeInterests}`} p={4} borderRadius={'8px'}>
              <Image src={iconC} maxW={'80px'} margin={'0 auto'} />
            </Box>
            <Box ml={4}>
              <Text as={'h3'} fontWeight={700} fontSize={'2xl'}>
                7,240億
              </Text>
              <Text as={'p'} fontSize={'md'}>
                海平面上升威脅下，亞洲7個城市未來或有1,500萬人與7,240億美元GDP受影響
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Box>

      <Box {...paragraphProps}>
        <Image src={contentB} />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        拯救氣候 迎難而上
      </Heading>

      <Text as="p" {...paragraphProps}>
        綠色和平一直敦促全球各地政府、企業減排節能，推動成立綠色政策。過去，我們成功在不少氣候行動中取得成果，例如：
        <OrderedList mt={4}>
          <ListItem>
            推動韓國成為東亞區內首個支持「綠色新政」的地方，並於2021年通過電氣法修法，加速企業能源轉型；
          </ListItem>
          <ListItem>
            勝出法國世紀氣候訴訟，此勝利為法國司法部門首次承認該國應對氣候危機負有責任；
          </ListItem>
          <ListItem>
            歷史性勝出訴訟化石能源企業Shell，法庭判決Shell須為氣候危機負責，其2030年的碳排放量，要從2019年的水平大幅減少45％。
          </ListItem>
        </OrderedList>
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentC} />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        立即聯署 推動香港2050年達致碳中和
      </Heading>

      <Text as="p" {...paragraphProps}>
        綠色和平致力推動全球於2050年達致淨零碳排放，並就氣候政策向香港政府提出多項建議，其中包括：
        <OrderedList mt={4}>
          <ListItem>
            要求政府將「氣候行動藍圖」列為首要落實的環保政策，盡快訂立清晰的碳中和路線圖；
          </ListItem>
          <ListItem>
            2022年或之前，制定具有法律約束力並以科學為基礎的氣候目標，展示聯同國際社會將全球暖化限制在1.5°C的決心；
          </ListItem>
          <ListItem>2030年或之前實現使用至少10%可再生能源的目標。</ListItem>
        </OrderedList>
        <br />
        <Text fontWeight={700}>
          推動綠色政策需要您我力量達成！立即聯署，守護氣候。
        </Text>
      </Text>

      <Flex direction={{ base: 'column' }}>
        <Box mb={4}>
          <Image src={contentD} />
        </Box>
        <Box>
          <Heading {...headingProps} color={`theme.${themeInterests}`}>
            立即聯署 推動香港2050年達致碳中和
          </Heading>
          <Text as={'p'} {...paragraphProps}>
            氣候危機逼在眉睫，冰川融化、海平面上升、導致更多極端天氣等都是其帶來的惡果。甚至影響我們賴以為生的食物，直接影響您我的生活，我們必須關注並以實質行動應對氣候問題。
          </Text>
          <Text as="p" {...paragraphProps}>
            綠色和平一直積極採取應對氣候危機的行動，今年請攜手推動各國企業、政府實現能源轉型，加速發展可再生能源，設法讓全球暖化控制在攝氏1.5度，減緩影響一代又一代人類、物種存亡的氣候危機。
          </Text>
        </Box>
        <Box mb={4}>
          <Button {...OrangeCTA} onClick={() => handleOpenLink()}>
            {formContent.donate_cta}
          </Button>
        </Box>
        <Text as="p" {...paragraphProps}>
          綠色和平成立50年以來，堅持不接受政府、企業捐助，您捐助的一分一毫，能支持我們以公正獨立的身份，持續推動環境工作！
        </Text>
      </Flex>

      {/* <Text as="p" {...paragraphProps}>
        <b>
          請即聯署，向正受破壞的美麗大海伸出援手，支持訂立《全球海洋公約》！
        </b>
      </Text> */}
    </>
  );
};

const mapStateToProps = ({ status, theme, form }) => {
  return { status, theme: theme.data, formContent: form.content };
};

export default connect(mapStateToProps)(Content);
