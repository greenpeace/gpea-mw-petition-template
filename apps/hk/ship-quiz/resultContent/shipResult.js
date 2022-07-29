import React from 'react';
import { connect } from 'react-redux';
import { Heading, Box, Text, Image, AspectRatio, Center } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import useImage from '../useImage';

const Content = ({ theme, quizResult }) => {
  const themeInterests = theme.interests;
  const { loading, error, image } = useImage(quizResult?.image);
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        完整測驗結果將在15分鐘內送至您的電子郵箱
      </Heading>

      {/* <div className="mb-[30px] rounded-lg bg-[#000] w-full overflow-hidden">
        <AspectRatio w="100%" ratio={16 / 9}>
          <iframe
            src={quizResult?.iframe_src}
            allowFullScreen
          />
        </AspectRatio>
      </div> */}

      <Center h="100%">
        <Box position="relative">
          <Image
            src={image}
            pos={'relative'}
            w="90%"
            p={4}
            maxW={{ base: '280px', md: '380px' }}
          />
        </Box>
      </Center>

      {quizResult?.description &&
        quizResult?.description.map((d, i) => (
          <Box key={i}>
            <Text as="p" {...paragraphProps}>
              {d}
            </Text>
          </Box>
        ))}
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
