import React from 'react';
import { Heading, Box, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const Thankyou = () => {
  return (
    <>
      <Text as="p" {...paragraphProps}>
        感謝您聯署支持制止企業政府破壞行為，守護北極生態。
      </Text>

      <Text as="p" {...paragraphProps}>
        您的聯署意義重大，我們將一起保護、維持、復育北極奇妙不凡生態的理想。
        綠色和平一直以行動、科學研究、政策倡議等方式守護北極，您願意多走一步，捐助守護北極的工作嗎？
        您的捐款將直接資助我們的實地科研任務、揭露各國企業與政府破壞北極的行為、以及國際間的倡議工作，直接幫助達成制止破壞行為，守護北極生態的目標。
      </Text>

      <Heading {...headingProps}>
        北極正向我們發出求救信號，您可以施以援手！
      </Heading>

      <Text as="p" {...paragraphProps}>
        北極現正面臨多方面的威脅，包括海冰消融、鑽油、工業捕撈漏油危機等，北極熊面臨滅絕危機，生態系統瀕臨崩潰邊緣。
      </Text>

      <Text as="p" {...paragraphProps}>
        有您的捐助支持，綠色和平便能有更多資源與力量執行保護北極工作，幫助北極逐步回復奇妙不凡的生態。
      </Text>

      <Text as="p" {...paragraphProps}>
        向美麗北極伸出援手，捐助綠色和平北極工作。
      </Text>
    </>
  );
};

export default Thankyou;
