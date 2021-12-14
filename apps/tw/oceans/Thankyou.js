import React from 'react';
import { connect } from 'react-redux';
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
} from '@chakra-ui/react';

import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const Thankyou = ({ theme, signup }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        感謝您加入連署，推動全球海洋保護區
      </Heading>

      <Text as="p" {...paragraphProps}>
        每一個偉大的成就，背後都有無數人前仆後繼的努力。
      </Text>

      <Text as="p" {...paragraphProps}>
        現在，恭喜您成為無數人之一，
        <br />
        我們都是守護脆弱海洋的重要力量！
      </Text>

      <Text as="p" {...paragraphProps}>
        因為有您的連署支持，綠色和平才能出席國際會議，以全球支持者為後盾，要求各國政治領袖必須制定《全球海洋公約》，有了國際法作為依歸，全球海洋保護區才能真正發揮影響力、確實執行，讓工業捕撈、商業活動撤出保護區範圍，讓海洋得以復甦，讓海底動物能稍稍喘息。
      </Text>

      <Text as="p" {...paragraphProps}>
        能更進一步支持我們的海洋行動嗎？請捐款資助我們做更有力的行動！
      </Text>

      <Text as="p" {...paragraphProps}>
        捐款將幫助綠色和平做調查研究、阻止破壞行動、進行倡議，更重要的是，在
        2030 年前，爭取成立《全球海洋公約》，推動至少 30% 海洋保護區。
      </Text>

      <Box {...paragraphProps}>
        《全球海洋公約》所帶來的幫助：
        <OrderedList>
          <ListItem>守護海洋生態，維護生物多樣性</ListItem>
          <ListItem>限制公海的人為活動</ListItem>
          <ListItem>妥善監管、制定審議及處分機制</ListItem>
          <ListItem>制定具有約束力的規範</ListItem>
          <ListItem>填補現行公約漏洞，提升規範效益</ListItem>
        </OrderedList>
      </Box>

      <Text as="p" {...paragraphProps}>
        您的捐款，將有助於推動這一切，一同守護蔚藍大海！
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
