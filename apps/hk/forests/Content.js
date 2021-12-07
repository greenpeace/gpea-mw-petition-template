import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
// import { OrangeCTA } from '@common/styles/components/formStyle';
import contentA from './images/forests/argen.jpg';

const Content = ({ theme, formContent }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        全球僅餘 15% 森林被完整保存
      </Heading>

      <Text as="p" {...paragraphProps}>
        但不法分子、無良企業非法砍伐與毁林，加上氣候危機加劇森林大火，令
        <b>
          全球每2秒就有相約1個足球場面積的森林消失、僅餘 15%森林被完整保護。
        </b>
      </Text>

      <Text as="p" {...paragraphProps}>
        綠色和平正發起全球守護森林行動，要求各國政府訂立與加強護林政策、制止企業毁林行為，為森林提供復原空間。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentA} />
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        守護動物們的關鍵棲息地
      </Heading>

      <Text as="p" {...paragraphProps}>
        聯合國報告指出：<b>全球八百多萬物種中，就有一百多萬面臨滅絕危機</b>
        ，包含美洲豹、蘇門答臘犀牛、紅毛猩猩等...
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme, form }) => {
  return { status, theme: theme.data, formContent: form.content };
};

export default connect(mapStateToProps)(Content);
