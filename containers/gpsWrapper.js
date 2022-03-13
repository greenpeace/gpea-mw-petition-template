import React, { useEffect } from 'react';
import axios from 'axios';
import { connect, dispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Nav from 'components/Navbar';
import PetitionFooter from '@containers/petitionFooter';
import * as themeActions from 'store/actions/action-types/theme-actions';

const envProjectName = process.env.projectName;
const envProjectMarket = process.env.projectMarket;
const themeEndpointURL = process.env.themeEndpoint;

function Layout({ children, themeData, setTheme }) {
  useEffect(async () => {
    const singleResult = await axios
      .get(themeEndpointURL)
      .then((response) => {
        return response.data.records.find(
          (d) =>
            d.ProjectName === envProjectName && d.Market === envProjectMarket,
        );
      })
      .catch((error) => console.log(error));

    console.log('Building from ' + envProjectMarket + ':' + envProjectName);

    !singleResult && console.warn('PROJECT NAME NOT FOUND');

    setTheme(singleResult);
  }, []);

  return (
    <Box>
      <Nav />
      {children}
      <PetitionFooter locale={'HKChinese'} />
    </Box>
  );
}

const mapStateToProps = ({ theme }) => {
  return {
    themeData: theme.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (data) => {
      dispatch({ type: themeActions.SET_THEME, data });
    },
  };
};

export async function getStaticProps() {
  const singleResult = await axios
    .get(themeEndpointURL)
    .then((response) => {
      return response.data.records.find(
        (d) =>
          d.ProjectName === envProjectName && d.Market === envProjectMarket,
      );
    })
    .catch((error) => console.log(error));

  console.log('Building from ' + envProjectMarket + ':' + envProjectName);

  !singleResult && console.warn('PROJECT NAME NOT FOUND');

  return {
    props: {
      themeData: singleResult || {},
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
