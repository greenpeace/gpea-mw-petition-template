import React from 'react';
import { connect } from 'react-redux';
import { Heading, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const Thankyou = ({ theme, signup }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  return (
    <>
      {/* <Heading {...headingProps}>感謝您加入守護海洋行列！</Heading>

      <Text as="p" {...paragraphProps}>
        為海洋多走一步，捐助支持保護海洋項目。
      </Text>

      <Text as="p" {...paragraphProps} color={`theme.${themeInterests}`}>
        感謝您聯署支持成立全球海洋保護區與訂立《全球海洋公約》。
      </Text> */}

      <Heading {...headingProps}>
        感謝您聯署支持成立全球海洋保護區與訂立《全球海洋公約》。
      </Heading>

      <Text as="p" {...paragraphProps}>
        您的聯署意義重大，我們將一起實現保護、維持、復育海洋健康的理想。
      </Text>

      <Text as="p" {...paragraphProps}>
        綠色和平團隊一直以行動、科學研究、政策倡議等方式守護海洋，您願意多走一步，捐助支持我們將守護工作做得更廣泛有效嗎？
      </Text>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助我們的海上科研任務、揭露企業破壞海洋的行為、以及國際間的倡議工作，直接幫助達成
        2030年30%全球海洋保護區的目標。
      </Text>

      <Heading {...headingProps}>
        海洋正向我們發出求救信號，您可以施以援手！
      </Heading>

      <Text as="p" {...paragraphProps}>
        海洋現正面臨多方面的威脅，包括過度捕魚、深海採礦、塑膠及鑽油污染等，不少生物面臨滅絕危機，生物多樣性瀕臨崩潰邊緣。
      </Text>

      <Text as="p" {...paragraphProps}>
        有您的捐助支持，綠色和平便能有更多資源與力量執行保護海洋工作，幫助海洋逐步回復美麗健康，守護海洋生態。
      </Text>

      <Text as="p" {...paragraphProps}>
        向美麗大海伸出援手，捐助綠色和平海洋工作。
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
