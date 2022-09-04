import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Nav from '@components/Header';

function Layout({ children, showHeader }) {
  return (
    <Box>
      {showHeader && <Nav />}
      {children}
    </Box>
  );
}

const mapStateToProps = ({ theme }) => {
  return {
    showHeader: theme.showGlobalHeader,
  };
};

export default connect(mapStateToProps)(Layout);
