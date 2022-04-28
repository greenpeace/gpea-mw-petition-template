import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import * as statusActions from 'store/actions/action-types/status-actions';
import heroBannerImage from '../../images/202204-earthday-KV-sns-website-banner-2.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        下載《山海大嶼》特刊 認識您不知道的大嶼風光與生態
      </Heading>

      <Box {...paragraphProps}>
        綠色和平誠意推出《山海大嶼》電子書，精選大嶼山在環境、人文、風景、生態等方面的內容與珍貴面貌，部分內容由守護大嶼行動者、得獎攝影團隊用心撰寫、提供，呈現了大嶼山鮮為人知卻又彌足珍貴的資訊。透過閱讀此書，我們希望同熱愛這片土地的你，能進一步了解並守護大嶼山生態，免受「明日大嶼」填海項目破壞。電子書內容包括：
      </Box>

      <Box {...paragraphProps} bgColor="#F9F9F9" borderRadius={8} p={4}>
        <UnorderedList>
          <ListItem>3條大嶼精選行山路線</ListItem>
          <ListItem>大嶼珍貴物種圖輯/相片集</ListItem>
          <ListItem>攝影比賽與攝影行作品一覽</ListItem>
          <ListItem>綠色和平大嶼紀錄片製作班底訪談</ListItem>
        </UnorderedList>
      </Box>

      <Box {...paragraphProps}>
        <Image src={heroBannerImage} />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        您認識大嶼的生態與風景特色嗎？下載電子書了解更多
      </Heading>

      <Box {...paragraphProps}>
        雖然您我有不少前往大嶼山的經驗，但對於「大嶼山有甚麼物種」、「大嶼環境為甚麼值得守護」等問題，則未必很了解。我們熱愛香港這個家園，就更需要了解它有甚麼環境與生態價值，值得我們驕傲：大嶼山具國家一級保護野生動物白腹海鵰的鳥巢、全球獨有的鮑氏雙足蜥、中華白海豚等珍貴生物，旖旎風光亦被好好保留下來。
      </Box>

      <Box {...paragraphProps}>
        綠色和平藉由《山海大嶼》電子書，集合大嶼環境、行山、生態等眾多資訊與照片，務求令大眾更全面了解這片屬於香港的「桃源淨土」，從而加入守護行列，免它遭受更多基建工程嚴重破壞。《山海大嶼》是香港人不可錯過的大嶼山主題特刊，請即下載了解。
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        請即下載大嶼電子書，一同認識並守護大嶼。
      </Heading>
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
