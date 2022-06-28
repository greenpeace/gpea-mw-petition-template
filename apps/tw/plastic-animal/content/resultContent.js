import React from 'react';
import { connect } from 'react-redux';
import { Heading, Button, Box, Text, Image, ListItem, OrderedList, UnorderedList } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import RESULT from '../data/result.json';

const listStyle = {

}

const Content = ({ theme, signup, result }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  const UniContent = () => (
    <>
      <Box {...paragraphProps}>
        <Text>
          每年超市、量販業至少產生 36 億件一次性塑膠包裝，其中就包含了蔬果、肉品等食品包裝。
          <br/>其中，全臺超市市占率唯一超過 60% 的業者——全聯福利中心，在綠色和平連續三年進行的零售企業減塑評比中，今年從第一名淪至第六名，未能跟上其他通路的減塑腳步，成為臺灣減塑拖油瓶：
        </Text>
        <UnorderedList>
            <ListItem><Text as="span" color={`var(--error-900)`}>蔬果裸賣未達標</Text>：曾承諾 2021 年 50% 蔬果裸賣，至今僅部分根莖類產品裸賣</ListItem>
            <ListItem><Text as="span" color={`var(--error-900)`}>曾承諾會設定減塑短中程目標，至今無更新</Text></ListItem>
            <ListItem><Text as="span" color={`var(--error-900)`}>減塑替代方案進展少</Text>：曾承諾提供容器租用、洗潔精填充站等，至今僅於兩家分店內導入循環杯機台，大幅落後其他通路業</ListItem>
        </UnorderedList>
        <Text><br/>
          <strong>請您一起要求全聯兌現減塑承諾，透過與企業對話、研究調查，盼全聯提供給消費者更多元、友善環境的選擇！</strong>
        </Text>
      </Box>
    </>
  )
  return (
    <>
      <Box>
        <Heading
          as="h2"
          {...headingProps}
          mb="0"
          dangerouslySetInnerHTML={{ __html: RESULT[result]?.boxTitle }}
        />
      </Box>
      <Box>
        <Text
          as="p"
          {...paragraphProps}
          dangerouslySetInnerHTML={{ __html: RESULT[result]?.boxContent }}
        />
        <UniContent/>
      </Box>
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, signup: signup.data, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
