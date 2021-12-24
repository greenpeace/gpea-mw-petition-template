import { Box, Flex, Image, Container, Link } from '@chakra-ui/react';
import React from 'react';
import { connect } from 'react-redux';

import logoChinese from '@common/images/logo/GP-logo-2019-TC-white-[web]-01.png';

const WithSubnavigation = ({ href }) => {
  return (
    <Box bgColor={'brand.500'}>
      <Flex py={{ base: 2 }} align={'center'}>
        <Container maxW={'1200px'}>
          <Link href={href ? href : null} isExternal="true">
            <Image
              src={logoChinese}
              maxW="220px"
              padding="2px"
              alt={'Greenpeace 綠色和平'}
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
