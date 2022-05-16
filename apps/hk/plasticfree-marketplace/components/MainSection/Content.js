import React from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Heading,
  Image,
  ListItem,
  UnorderedList
} from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import * as statusActions from 'store/actions/action-types/status-actions';
import heroBannerImage from '../../images/202205-plastic-free-marketplace-banner.png';
import Seminar from '../../Seminar';
import FlowChart from '../../FlowChart';

const SeminarContent = {
  title: '',
  date: '日期：6月4日及5日',
  time: '時間：中午12時至下午8時',
  description: '地點：荃灣D・PARK 愉景新城L1(籃球場旁)',
  other: '',
};

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        立即登記參與「惜簡生活節」，體驗裸買市集！
      </Heading>

      <Box {...paragraphProps}>
        今年6月，適逢世界環境日和國際海洋日，綠色和平舉辦「惜簡生活節」，帶領更多市民在日常中實踐裸買生活。現只需網上登記，即可參與「惜簡生活節」以及報名環保好生活工作坊。
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        活動詳情
      </Heading>

      <Box {...paragraphProps} bgColor="gray.50" borderRadius={8} p={6}>
        <Seminar showTitle={false} content={SeminarContent} />
      </Box>

      <Box {...paragraphProps}>
        屆時會以多項有趣活動，讓公眾體驗日常生活中輕鬆減塑的方法。是次活動設置綠色和平與裸買店Loop Store 首次合作的裸買概念店「綠色和平士多」，以及邀請本地手作人合辦走塑及懷舊主題市集；一起實驗「無塑市集」的想像藍本，現場多款美味零食及精美的好生活用品讓你選擇；更會提供多款環保工作坊讓您體驗DIY。
      </Box>

      <Box {...paragraphProps}>
        邀請您趕在5月30日前登記，環保工作坊名額有限，欲報從速。
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        活動內容
      </Heading>

      <Box {...paragraphProps} bgColor="#F9F9F9" borderRadius={8} p={4}>
        <UnorderedList>
          <ListItem>裸買生活概念店「綠色和平士多」</ListItem>
          <ListItem>環保好生活工作坊</ListItem>
          <ListItem>懷舊市集攤檔</ListItem>
          <ListItem>懷舊時光拍照打卡點</ListItem>
          <ListItem>「塑膠與海洋的關係」展覽</ListItem>
        </UnorderedList>
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        環保好生活工作坊
      </Heading>

      <Box {...paragraphProps}>
        <Image src={heroBannerImage} />
      </Box>

      <Box {...paragraphProps} >
        <FlowChart />
      </Box>

    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setScrollToTarget: (data) => {
      dispatch({ type: statusActions.SET_SCROLL_TO_TARGET, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
