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
      <Text as="p" {...paragraphProps}>
        人民的支持、消費者的響應，絕對是推動企業、政府積極減塑最大的動力。
        <br />
        而我們並不希望再有任何大型塑膠污染事件發生，才喚醒大眾對於塑膠污染議題的重視。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        每一次消費
        <br />
        都是在為您和孩子的未來做選擇
      </Heading>

      <Text as="p" {...paragraphProps}>
        2016 年，綠色和平曾與眾多支持者成功將塑膠柔珠禁用時程提前至 2018 年。
        <br />
        時至今日，我們也募集了超過 200,000
        位支持者一起響應減塑，而我們也看見企業和政府進一步嘗試減塑：
      </Text>

      <Box {...paragraphProps}>
        <UnorderedList>
          <ListItem>
            <strong>2020 年</strong>
            <UnorderedList>
              <ListItem>
                統一超商於臺南 3 間門市試辦為期三個月的容器租借服務
              </ListItem>
              <ListItem>
                全家便利商店台北 101
                門市開始販售循環容器盛裝的鮮食便當，落實循環使用，已逐步淘汰一次性塑膠
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            <strong>2021 年</strong>
            <UnorderedList>
              <ListItem>
                綠色和平發起「絕塑好店計畫」，選定臺中草悟道商圈作為循環杯示範商圈，並在
                3 個月內於商圈內減少了超過 1600 個一次性飲料杯
              </ListItem>
              <ListItem>
                實地走訪玉山、嘉明湖，調查臺灣水鹿受微塑膠污染情形。結果顯示，嘉明湖水源的微塑膠檢出率為
                100%，玉山塔塔加區域所採集的水鹿排遺樣本，則有超過 30%
                檢測出微塑膠。
              </ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        此刻正有大量塑膠流入環境
        <br />
        減塑分秒必爭
      </Heading>

      <Text as="p" {...paragraphProps}>
        2030 年塑膠量是現在的兩倍，2050 年是塑膠量是現在的三倍，2050
        年海裡的塑膠量將比魚還要多！我們必須爭取時間加速減塑，避免海洋塑膠悲劇持續擴大。
      </Text>

      <Box {...paragraphProps}>
        <UnorderedList>
          2022
          年，綠色和平減塑專案小組將著重以下環境工作，為地球留下更美好的環境：
          <ListItem>擴大研究臺灣保育類動物獸微塑膠影響情形</ListItem>
          <ListItem>要求政府擴大管制一次性塑膠使用範圍</ListItem>
          <ListItem>頹動重複使用的循環模式，加速淘汰一次性塑膠</ListItem>
        </UnorderedList>
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        為環境行善是一種選擇
        <br />
        改變，就趁現在！
      </Heading>
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
