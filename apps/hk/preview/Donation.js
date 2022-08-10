import React from 'react';
import { connect } from 'react-redux';
import { Heading, Box, Text } from '@chakra-ui/react';
// import {
//   headingProps,
//   paragraphProps,
// } from '@common/styles/components/contentStyle';
// import DonateFAQ from '@components/DonateFAQ';
import { useSelector } from 'react-redux';

const Content = () => {
  const signup = useSelector((state) => state?.signup?.data);
  const strapi = useSelector((state) => state?.theme?.strapi);

  return (
    <>
      {strapi?.contentBlocks?.map((d) => (
        <Box key={d.id} dangerouslySetInnerHTML={{ __html: d?.richContent }} />
      ))}
      {/* <Heading {...headingProps}>您願意進一步拯救脆弱的地球生態嗎？</Heading>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助我們揭露破壞環境真相、進行嚴謹的科學研究、直接行動，積極遊說政府、企業，凝聚社區力量，倡議對環境有利的政策和解決方案。
      </Text>

      <Heading {...headingProps}>
        地球的承受能力快將超出負荷，您可以施以援手！
      </Heading>

      <Text as="p" {...paragraphProps}>
        氣候危機來勢洶洶、北極海冰急速消融、森林大火屢見不鮮、海洋資源被無限索取，全球生物多樣性危在旦夕...
      </Text>

      <Text as="p" {...paragraphProps}>
        有您的捐助支持，綠色和平便能有更多資源與力量執行守護環境的工作，讓地球欣欣向榮，生生不息，為下一代創造美好未來。
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

      <DonateFAQ locale="HKChinese" /> */}
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
