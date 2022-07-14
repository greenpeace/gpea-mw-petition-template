import React from 'react';
import { connect } from 'react-redux';
import { Heading, Text } from '@chakra-ui/react';
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
      您願意進一步守護珍貴海洋嗎？立即捐款，攜手守護珍貴海洋。
      </Heading>

      <Text as="p" {...paragraphProps}>
      您的捐款將直接資助我們與全球頂尖科學家，進行海上科研任務、揭露企業破壞海洋的行為、以及國際間的倡議工作，直接幫助達成 2030年 30% 全球海洋保護區的目標。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
      海洋正向我們發出求救信號，您可以施以援手！
      </Heading>

      <Text as="p" {...paragraphProps}>
      海洋現正面臨多方面的威脅，包括過度捕魚、深海採礦、塑膠及鑽油污染等，不少生物面臨滅絕危機，生物多樣性瀕臨崩潰邊緣。
      </Text>

      <Text as="p" {...paragraphProps}>
      有您的捐助支持，綠色和平便能有更多資源與力量執行保護海洋工作，幫助海洋逐步回復美麗健康，守護海洋生態。
      </Text>

      <Heading {...headingProps}>向美麗大海伸出援手，捐助綠色和平海洋工作。</Heading>

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
