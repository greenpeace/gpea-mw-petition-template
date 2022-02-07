import React from 'react';
import { connect } from 'react-redux';
import { Box, Image, Heading, Text, Grid, GridItem } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import image01 from './images/GP04F4D_High_res.jpg';
import image02 from './images/GP04NTU_PressMedia.jpg';

const Thankyou = ({ theme, signup }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  return (
    <>
      <Text as="p" {...paragraphProps}>
        為守護脆弱北極多走一步，以每月$200捐款支持綠色和平北極項目，您將獲得兩次「環保手作工作坊」或探訪的機會！2月工作坊主題是「北極熊和諧粉彩體驗班」，讓您對北極熊的現況有更深體會。名額有限，額滿即止。
      </Text>

      <Text as="p" {...paragraphProps}>
        您的參與意義重大，我們將一起了解北極熊生存危機與極地實況，以採取行動為守護北極出一分力。
      </Text>

      <Text as="p" {...paragraphProps}>
        綠色和平一直推動與全球頂尖科學研究團隊，合力研究海冰、生物，曝露氣候與環境變化的影響，提高全球社會關注，同時以確切、理性的數據和證明，向相關企業與政府施壓。您願意多走一步，合力阻止任何破壞北極的計劃及政策，守護北極脆弱生態嗎？
      </Text>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助我們的實地科研任務、揭露各國企業與政府破壞北極的行為、以及國際間的倡議工作，直接幫助達成制止破壞行為，守護北極生態的目標。
      </Text>

      <Box {...paragraphProps}>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <Image src={image01} />
          </GridItem>
          <GridItem>
            <Image src={image02} />
          </GridItem>
        </Grid>
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        北極正向我們發出求救信號，您可以施以援手！
      </Heading>

      <Text as="p" {...paragraphProps}>
        北極原是地球上的淨土，孕育奇妙不凡的野生生態，更具調節全球氣候的功能，可惜，鑽油和工業捕撈等人類行為嚴重威脅，加上氣候危機影響下，海冰在過去數十年已損失三分之二的體積，北極熊的數量亦減少近一半，北極生態岌岌可危。
      </Text>

      <Text as="p" {...paragraphProps}>
        有您的捐助支持，綠色和平便能有更多資源與力量執行保護北極工作，幫助北極逐步回復奇妙不凡的生態。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        向美麗北極伸出援手，捐助綠色和平北極工作。
      </Heading>
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
