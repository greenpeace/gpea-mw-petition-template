import React from 'react';
import { connect } from 'react-redux';
import { Heading, Button, Box, Text, Image, OrderedList, UnorderedList, ListItem } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import contentImage from '../images/thanks.png';

const Content = (props) => {
  const {status, theme, type} = props;
  const themeInterests = theme.interests;
  
  return (
    <>
    {( type === 'support') && (
      <Box pt={6}>
        <Heading
          {...headingProps}
          //color={`theme.${themeInterests}`}
          fontSize={{ base: '2xl', md: '3xl' }}
        >請全聯福利中心支援減塑！
        </Heading>

        <Box {...paragraphProps}>
          <Image src={contentImage} py={4} maxW={{ base: '100%' }} mx="auto" />
        </Box>

        <Heading
          {...headingProps}
          // color={'black'}
          fontSize={{ base: 'xl', md: '2xl' }}
        >應以重複使用 25% 為目標，達到 2025 年塑膠減量 50%
        </Heading>

        <Text as="p" {...paragraphProps}>
        全聯福利中心作為全臺市占率超過 60% 的龍頭超市，單店營業額高達 1.4 億
        <br/>卻不如其他零售企業嘗試減塑、重複使用模式，因此綠色和平邀請您一起要求全聯：
        </Text>

        <UnorderedList>
          <ListItem>發展「自備容器填裝」以及「可歸還包裝」的替代方案</ListItem>
          <ListItem>投入消費者溝通，促進消費者了解並參與減塑行動，並定期向大眾公開減量成效</ListItem>
        </UnorderedList>

        
      </Box>
    )}
    {( type === 'subscribe') && (
      <Box pt={6}>
        <Heading
          {...headingProps}
          color={'black'}
          fontSize={{ base: '2xl', md: '3xl' }}
        >減塑尚未成功，希望您也加入減塑行列！
        </Heading>

        <Box {...paragraphProps}>
          <Image src={contentImage} py={4} maxW={{ base: '100%' }} mx="auto" />
        </Box>

        <Heading
          {...headingProps}
          color={'black'}
          fontSize={{ base: 'xl', md: '2xl' }}
        >您的支持，將成為推動政府、企業落實減塑的力量
        </Heading>

        <Text as="p" {...paragraphProps}>
        若維持目前使用塑膠的習慣、缺乏積極減塑作為，2040 年流入海洋的塑膠垃圾量將是現今的 3 倍！我們必須爭取時間加速減塑，避免海洋塑膠悲劇持續擴大。
        <br/>綠色和平曾成功推進臺灣減塑：
        </Text>

        <UnorderedList>
          <ListItem>經長期向零售企業倡議，全家便利商店宣布大規模導入循環杯至 400 家門市</ListItem>
          <ListItem>發起「絕塑好店計畫」，選定臺中草悟道商圈作為循環杯示範商圈，並在 3 個月內於商圈內減少了超過 1600 個一次性飲料杯</ListItem>
          <ListItem>推動環保署新訂一次性飲料杯限用政策，規範大規模業者須提供循環杯，並提高自備杯價差</ListItem>
        </UnorderedList>
        
      </Box>
    )}
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
