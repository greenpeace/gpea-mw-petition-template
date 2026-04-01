import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Nav from '@components/Header';

function Layout({ children, showHeader }) {
  console.log('Layout', children?.props?.themeData?.Market);
  const logoHref = children?.props?.themeData?.ProjectName === 'donation-climate-climate' ? 'https://www.greenpeace.org/taiwan/?ref=donation-climate-climate' : '';
  return (
    <Box>
      {showHeader && <Nav href={logoHref} zhLogo={children?.props?.themeData?.Market !== 'kr'} />}
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
