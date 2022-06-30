import React from 'react';
import { connect } from 'react-redux';
import { Heading, Button, Box, Text, Image, ListItem, OrderedList, UnorderedList } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import contentImage from '../images/thanks.jpg';



const Content = ({ theme, signup, type }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  const HighlightText = ({children}) => (
    <Text as="span" color={'white'} bgColor={`theme.${themeInterests}`} fontWeight={'bold'}>
      {children}
    </Text>
  )
  return (
    <>
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
        每一次消費<br/>都是在為您和孩子的未來做選擇
      </Heading>

      <Text as="p" {...paragraphProps}>
        塑膠污染問題，攸關全球 78 億人口。
        <br/><br/>
        每年估計有 <HighlightText>1,270 萬公噸</HighlightText>的塑膠流入海洋，代表每分每秒都有塑膠破壞我們的環境，
        <br/>而您的支持，將成為守護環境最有力的幫助。
      </Text>

      <Text as="p" {...paragraphProps}>
      2016 年，綠色和平曾與眾多支持者成功將塑膠柔珠禁用時程提前至 2018 年。
      <br/>時至今日，我們也募集了<HighlightText>超過 200,000 位支持者一起響應減塑</HighlightText>，而我們也看見企業和政府進一步嘗試減塑：
      </Text>
      <Box {...paragraphProps}>
        <UnorderedList>
          <ListItem>
            <strong>2020 年</strong>
            <UnorderedList listStyleType={'circle'}>
              <ListItem>統一超商於臺南 3 間門市試辦為期三個月的容器租借服務</ListItem>
              <ListItem>全家便利商店台北 101 門市開始販售循環容器盛裝的鮮食便當，逐步嘗試重複使用包裝</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            <strong>2021 年至今</strong>
            <UnorderedList listStyleType={'circle'}>
              <ListItem>綠色和平發起「絕塑好店計畫」，選定臺中草悟道商圈作為循環杯示範商圈，並在 3 個月內於商圈內<HighlightText>減少了超過 1600 個一次性飲料杯</HighlightText></ListItem>
              <ListItem>實地走訪臺灣保育類動物棲地，調查臺灣黑熊、臺灣水鹿、歐亞水獺等六種野生動物受微塑膠污染情形，並向大眾及社會揭露臺灣塑膠污染現況。</ListItem>
              <ListItem>推動環保署新訂一次性飲料杯限用政策，規範大規模業者須提供循環杯，並提高自備杯價差</ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </Box>

      <Heading
        {...headingProps}
        color={`theme.${themeInterests}`}
      >
        為環境行善是一種選擇<br/>改變，就趁現在！
      </Heading>

     
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, signup: signup.data, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
