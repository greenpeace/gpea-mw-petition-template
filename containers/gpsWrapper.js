import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Nav from 'components/Navbar';

function Layout({ children }) {
  return (
    <Box>
      <Nav />
      {children}
    </Box>
  );
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
