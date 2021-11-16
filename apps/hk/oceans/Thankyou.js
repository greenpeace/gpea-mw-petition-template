import React from 'react';
import { connect } from 'react-redux';
import { Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const Thankyou = ({ theme, signup }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  return (
    <>
      <Heading {...headingProps}>感謝您加入守護海洋行列！</Heading>

      <Text as="p" {...paragraphProps}>
        為海洋多走一步，捐助支持保護海洋項目。
      </Text>

      <Text as="p" {...paragraphProps} color={`theme.${themeInterests}`}>
        感謝您聯署支持成立全球海洋保護區與訂立《全球海洋公約》。
      </Text>

      <Text as="p" {...paragraphProps}>
        您的聯署已經壯大了全球守護海洋力量，我們將一起實現保護、維持、復育海洋健康的理想。
      </Text>

      <Text as="p" {...paragraphProps}>
        綠色和平團隊一直以行動、科學研究、政策倡議等方式守護海洋，您願意多走一步，捐助支持我們將守護工作做得更廣泛有效嗎？
      </Text>

      <Text as="p" {...paragraphProps}>
        海洋現正承受不同威脅，包括過度捕魚、深海採礦、塑膠及油污污染等等，以致不少生物面臨滅絕危機，甚或令生物多樣性邁向崩潰。
      </Text>

      <Text as="p" {...paragraphProps}>
        但如若我們有您的捐助支持，便能有更多資源與力量執行保護海洋工作，幫助海洋逐步回復美麗健康，守護海洋生態。
      </Text>

      <Text as="p" {...paragraphProps}>
        <b>向美麗大海伸出援手，支持綠色和平海洋工作。</b>
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
