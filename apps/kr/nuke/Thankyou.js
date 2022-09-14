import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import { useSelector } from 'react-redux';

const Thankyou = () => {
  const theme = useSelector((state) => state?.theme?.data);
  const signup = useSelector((state) => state?.signup?.data);
  const themeInterests = theme.interests;

  return (
    <>
      <Heading {...headingProps}>지속적인 관심을 부탁드립니다.</Heading>

      <Text as="p" {...paragraphProps}>
        그린피스의 제안대로 한국 정부가 국제해양재판소 잠정 조치 청구 방안을
        검토 중입니다. 꼭 실현될 수 있도록 시민들의 지속적인 참여와 관심이
        필요합니다.
      </Text>

      {/* <Text as="p" {...paragraphProps}>
        綠色和平團隊一直以行動、科學研究、政策倡議等方式守護海洋，您願意多走一步，捐助支持我們將守護工作做得更廣泛有效嗎？
      </Text>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助我們的海上科研任務、揭露企業破壞海洋的行為、以及國際間的倡議工作，直接幫助達成
        2030年30%全球海洋保護區的目標。
      </Text> */}

      <Heading {...headingProps}>그린피스는 포기하지 않겠습니다.</Heading>

      <Text as="p" {...paragraphProps}>
        일본 정부가 오염수 방류 발표를 철회할 때까지 그린피스는 시민들과 함께
        캠페인을 지속할 것입니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        그린피스는 오직 소중한 시민 개인의 후원금만으로 후쿠시마 오염수 해양
        방류를 막기 위한 캠페인을 진행하고 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        지금 그린피스에 후원하고 오염수로부터 우리의 건강, 지구, 바다를
        지켜주세요.
      </Text>
    </>
  );
};

export default Thankyou;
