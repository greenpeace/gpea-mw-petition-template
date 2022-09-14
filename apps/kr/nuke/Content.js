import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import Image01 from './images/GP0STU61Y_PressMedia.jpg';
import Image02 from './images/GP01B4T_PressMedia.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        후쿠시마 오염수 해양 방류 최종 결정
      </Heading>

      <Text as="p" {...paragraphProps}>
        지난 2022년 7월 22일, 일본 정부가 끝내 후쿠시마 오염수를 바다에
        방류하기로 최종 결정을 내렸습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        최신 연구 결과에 따르면, 빠르면 7개월 안에 후쿠시마 오염수가 한국의
        바다로 유입되기 시작합니다. 해양 생태계뿐만 아니라 바다 인근의 주민들,
        해산물을 먹는 모든 사람의 안전이 위험에 처했습니다.
      </Text>

      <iframe
        width="436"
        height="245"
        src="https://www.youtube.com/embed/DJjSyJCFcRQ"
        title="후쿠시마 원전의 방사성 오염수 방출 계획"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* <Heading {...headingProps} color={`theme.${themeInterests}`}>
        您願意聯署加入守護海洋行列嗎？
      </Heading>

      <Box {...paragraphProps}>
        <Image src={Image01} layout="fill" alt="Greenpeace" />
      </Box> */}

      <Heading
        {...headingProps}
        color={`theme.${themeInterests}`}
        marginTop="30"
      >
        지금, 우리가 함께 막아야 합니다.
      </Heading>

      <Text as="p" {...paragraphProps}>
        그린피스는 여러분의 서명을 모아 한국 정부의 적극적인 대처를 요구하고,
        일본 정부를 압박하고자 합니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        최인접국인 대한민국의 정부는 미온적인 대응으로 우리의 바다, 우리의
        건강을 지킬 수 없습니다.
      </Text>

      {/* <Box {...paragraphProps}>
        <Image src={Image02} layout="fill" alt="Greenpeace" />
      </Box> */}

      <Text as="p" {...paragraphProps}>
        그린피스는 국제해양법을 위반하고 있는 일본 정부를 압박하고, 국제사회의
        관심과 대응을 요구하기 위해 여러 국가 및 국제기구와 소통하고 있습니다.
      </Text>

      <Text as="p" {...paragraphProps}>
        오염수 방류를 막기 위해 여러분의 서명과 지지가 어느 때보다 필요합니다.
        지금 함께해주세요.
      </Text>

      {/* <Heading {...headingProps} color={`theme.${themeInterests}`}>
        請即聯署，向正受破壞的美麗大海伸出援手，支持訂立《全球海洋公約》！
      </Heading> */}
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
