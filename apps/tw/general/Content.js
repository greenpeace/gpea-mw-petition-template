import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import image1 from './images/2022-donate_general1.jpg';
import image2 from './images/2022-donate_general2.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        地球家園，需要您的力量
      </Heading>

      <Text as="p" {...paragraphProps}>
        氣候變遷已逐漸衝擊您我的生活，對自然環境更是帶來前所未有的威脅，使我們快速失去健康的森林、海洋和生物多樣性。
      </Text>

      <Text as="p" {...paragraphProps}>
        我們必須重新思考與地球的關係，改變企業與政府過度奪取自然資源、依賴化石燃料的習慣，為人類、環境爭取公平且永續的未來。
      </Text>

      <Box {...paragraphProps}>
        <Image src={image1} />
      </Box>

      <Text as="p" {...paragraphProps}>
        如果我們成功了，將是環保運動的重要里程碑，能讓至少三分之一以上的海洋生態不受人為干預，生生不息。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        現在，就是守護地球的關鍵時刻
      </Heading>

      <Text as="p" {...paragraphProps}>
        綠色和平之所以存在，是因為脆弱的自然環境需要人類改變、需要您我行動。作為國際環保倡議組織，綠色和平致力於推動地球生態永續，從源頭尋求解決方案，以面對眼前急迫的氣候變遷、生物多樣性衰退、污染等環境問題。50年來，綠色和平堅持不接受企業、政府與政黨的捐贈，保持絕對的公正與獨立。
      </Text>

      <Text as="p" {...paragraphProps}>
        我們透過實地調查、見證記錄、揭露真相、政策倡議與非暴力直接行動，為無法發聲的環境與弱勢族群挺身而出。在地團隊透過串連全球的力量，以科學實證和專業策略，成功推動一個個環境專案與成果。
      </Text>

      <Text as="p" {...paragraphProps}>
        而每一位在乎環境的您，就是改變的關鍵力量，有您與綠色和平站在一起，就能推動社會邁向更永續、豐饒的地球家園！
      </Text>

      <Box {...paragraphProps}>
        <Image src={image2} />
      </Box>

      <Heading
        {...headingProps}
        color={`theme.${themeInterests}`}
        textAlign={'center'}
      >
        一人力量或許有限，但凝聚眾人力量 我們可以為地球帶來改變！
      </Heading>
    </>
  );
};

const mapStateToProps = ({ theme }) => {
  return { theme: theme.data };
};

export default connect(mapStateToProps)(Content);
