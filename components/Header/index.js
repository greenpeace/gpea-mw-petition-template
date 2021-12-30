import { Box, Flex, Image, Container, Link } from '@chakra-ui/react';
import React from 'react';
import { connect } from 'react-redux';

import logoChinese from '@common/images/logo/GP-logo-2019-TC-white-[web]-01.png';

const WithSubnavigation = ({ href }) => {
  return (
    <Box
      bgColor={'brand.500'}
      borderBottom={'1px solid var(--shades-100)'}
      boxShadow={'var(--shadow-1)'}
    >
      <Flex py={'12px'} align={'center'}>
        <Container maxW={'1200px'}>
          <Box>
            <Link href={href ? href : null} isExternal="true">
              <Image
                src={logoChinese}
                maxW="220px"
                padding="2px"
                alt={'Greenpeace 綠色和平'}
              />
            </Link>
          </Box>
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
