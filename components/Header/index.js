import { Box, Flex, Image, Container, Link } from '@chakra-ui/react';
import React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import logoChinese from '../../common/images/logo_zh.png';

const WithSubnavigation = ({ href }) => {
  const router = useRouter();
  return (
    <Box bgColor={'brand.500'}>
      <Flex minH={'56px'} py={{ base: 2 }} align={'center'}>
        <Container maxW={'1200px'}>
          <Link href={href ? href : '/'}>
            <Image
              src={logoChinese}
              maxW={'220px'}
              alt={'Greenpeace 綠色和平'}
              loading="eager"
              // onClick={() => {
              //   router.push(`/`);
              // }}
            />
          </Link>
        </Container>
      </Flex>
    </Box>
  );
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(WithSubnavigation);
