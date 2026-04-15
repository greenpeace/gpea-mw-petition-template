import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Nav from '@components/Header';

function Layout({ children, showHeader }) {
  console.log('Layout', children?.props?.themeData?.Market);

  const marketMap = {
    hk: 'hongkong',
    tw: 'taiwan',
    kr: 'korea'
  };
  const marketPath = marketMap[process.env.projectMarket];
  const projectName = process.env.projectName;
  const logoHref = (marketPath && projectName) 
    ? `https://www.greenpeace.org/${marketPath}/?ref=${projectName}` 
    : '';

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
