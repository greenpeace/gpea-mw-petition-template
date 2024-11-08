import React from 'react';
import { connect } from 'react-redux';
import { Heading, Button, Box, Text, Image, ListItem, OrderedList, UnorderedList } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import contentImage from '../images/thanks.jpg';
import bottomPhoto from '../images/thanks-photo.png';



const Content = ({ theme, signup, type }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  const HighlightText = ({children}) => (
    <Text as="span" color={'white'} bgColor={`theme.${themeInterests}`} fontWeight={'bold'}>
      {children}
    </Text>
  )
  return (
    <Box px={4}>
      <Heading {...headingProps}
        color={`theme.${themeInterests}`}
        fontSize={{ base: '2xl', md: '3xl' }}
      >
        <span>
          {`${FirstName ? FirstName : '綠色和平支持者'}，${ type === 'support' ? '感謝您支援減塑！' : '感謝您訂閱綠色和平電子報！'}`}
        </span>
      </Heading>

      <Box {...paragraphProps}>
        <Image src={contentImage} py={4} maxW={{ base: '100%' }} mx="auto" />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
      每一次減塑的選擇，都是溫柔的守護
      </Heading>

      <Text as="p" {...paragraphProps}>
        塑膠污染問題，攸關全球 78 億人口。
        <br/><br/>
        每年估計有 <HighlightText>1,270 萬公噸</HighlightText>的塑膠流入海洋，代表每分每秒都有塑膠破壞我們的環境，
        <br/>而您的支持，將成為守護環境最有力的幫助。
      </Text>

      <Text as="p" {...paragraphProps}>
      綠色和平在臺推動減塑已超過八年，從 2016 年推動臺灣禁用柔珠，到近幾年的循環杯推動，我們不斷地以科學研究調查作為實證，要求政府與企業做出承諾，讓減塑的目標能夠更具體落實。
      </Text>
      <Box {...paragraphProps}>
        <UnorderedList>
          <ListItem>2016至2018年：臺灣禁用柔珠時程，提前至2018年</ListItem>
          <ListItem>2018年起：臺灣海洋廢棄物治理平臺，制定 2030 年全面禁用一次性塑膠時程表</ListItem>
          <ListItem>2018年至2019年：全臺海岸快篩，了解全臺海廢熱點</ListItem>
          <ListItem>2019年至2022年：超市減塑，展現強大公民力量</ListItem>
          <ListItem>2022年：可口可樂宣布 2030 年實踐 25% 可重複使用包裝</ListItem>
          <ListItem>2022年：臺灣首份陸域保育類動物微塑膠污染研究</ListItem>
          <ListItem>2023年：戳破聯合利華的永續泡泡：每秒出售1700個塑膠小包裝</ListItem>
          <ListItem>2023年：臺灣「循環杯元年」</ListItem>
          <ListItem>
            <strong>2024 年</strong>
            <UnorderedList listStyleType={'circle'}>
              <ListItem><HighlightText>綠色和平研究團隊</HighlightText>更深入淡水河與曾文溪流域，<HighlightText>展開為期半年的<a href="" target='_blank'>淨溪與河川塑膠廢棄物調查</a></HighlightText>，我們希望能夠溯源掌握塑膠廢棄物的品牌、種類與污染分布。至少 8 場考察採樣，投入超過 300 小時的研究、百名志工與研究人員，盤點並揭露河川塑膠廢棄物污染情形以及對河溪生態的可能影響。
              </ListItem>
              <ListItem>透過見證與揭露真相，我們持續推動「塑膠減產」寫入聯合國的《全球塑膠公約》，扭轉塑膠污染現況，以守護珍貴的自然生態！</ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box {...paragraphProps}>
        <Image src={bottomPhoto} py={4} maxW={{ base: '100%' }} mx="auto" />
      </Box>

      <Heading
        {...headingProps}
        color={`theme.${themeInterests}`}
      >
        為環境行善是一種選擇<br/>改變，就趁現在！
      </Heading>

    
    </Box>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, signup: signup.data, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
