import React from 'react';
import { connect } from 'react-redux';
import { Heading, Button, Box, Text, Image, AspectRatio } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import image00 from '../images/GIY工作坊_R1.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        完整測驗結果將在15分鐘內送至您的電子郵箱
      </Heading>

      <div className="mb-[30px] rounded-lg bg-[#000] w-full overflow-hidden">
        <AspectRatio w="100%" ratio={16 / 9}>
          <iframe
            src="https://www.youtube.com/embed/n1Tk6VHVfK0"
            allowFullScreen
          />
        </AspectRatio>
      </div>

      <Box {...paragraphProps}>
        <Image src={image00} />
      </Box>

      <Text as="p" {...paragraphProps}>
        您好
      </Text>

      <Text as="p" {...paragraphProps}>
        我是現實中
      </Text>

      <Text as="p" {...paragraphProps}>
        默默為海洋而戰的水手
      </Text>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助我們的實地科研任務、揭露各國企業與政府破壞北極的行為、以及國際間的倡議工作，直接幫助達成制止破壞行為，守護北極生態的目標。
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
