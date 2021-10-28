import { Box, Flex, Image, Container } from '@chakra-ui/react';
import React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

function WithSubnavigation() {
  const router = useRouter();
  return (
    <Box bgColor={'brand.500'} className={'header'}>
      <Flex minH={'56px'} py={{ base: 2 }} align={'center'}>
        <Container maxW={'1200px'}>
          <Image
            src={
              'https://www.greenpeace.org/hongkong/wp-content/themes/planet4-child-theme-hongkong/static/images/logo_zh.png'
            }
            maxW={'220px'}
            alt={'Greenpeace 綠色和平'}
            cursor={'pointer'}
            loading="eager"
            onClick={() => {
              router.push(`/`);
            }}
          />
        </Container>
      </Flex>
    </Box>
  );
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(WithSubnavigation);
