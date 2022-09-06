import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import DonateFAQ from '@components/DonateFAQ';

import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        您願意進一步拯救脆弱的地球生態嗎？
      </Heading>
      <Text as="p" {...paragraphProps}>
        避免極端天氣引致更多人命傷亡，經濟損失，我們急需全球領袖制定、實踐減碳排放目標，竭力將升溫控制於攝氏1.5度內。
      </Text>
      <Text as="p" {...paragraphProps}>
        今年，綠色和平將推動更多地區實行氣候友善的政策和立法、制止企業開採化石能源的計劃！
      </Text>
      <Text as="p" {...paragraphProps}>
        過去50年，綠色和平堅持不接受政商界捐助，以公正獨立的身份減緩氣候危機。因為您，綠色和平守護環境的使命得以延續，實現綠色低碳未來，守護地球！
      </Text>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        您的加入，是帶來改變的關鍵！
      </Heading>
      <Text as="p" {...paragraphProps}>
        減緩氣候危機下一步，綠色和平將推動更多國家、企業加入減碳行列，及早落實具體行動計劃，減緩氣候危機！
      </Text>
      <Text as="p" {...paragraphProps}>
        請即伸出援手，捐助綠色和平環境工作。
      </Text>
      <Heading
        textAlign="center"
        py="6"
        {...headingProps}
        color={`theme.${themeInterests}`}
      >
        常見問題
      </Heading>
      <DonateFAQ locale="HKChinese" />
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
