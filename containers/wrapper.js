import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Nav from '@components/Header';

function Layout({ children, showHeader }) {
  console.log('Layout', children?.props?.themeData?.Market);
  return (
    <Box>
      {showHeader && <Nav zhLogo={children?.props?.themeData?.Market !== 'kr'} />}
      {children}
    </Box>
  );
}

const mapStateToProps = ({theme}) => {
  return {
    showHeader: theme.showGlobalHeader
  };
};

export default connect(mapStateToProps)(Layout);
