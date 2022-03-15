import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect, dispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Nav from 'components/Navbar';
import PetitionFooter from 'containers/petitionFooter';
import * as themeActions from 'store/actions/action-types/theme-actions';
import { imageLoader } from 'common/utils';
import Image from 'next/image';
import { useRouter } from 'next/router';

const envProjectName = process.env.projectName;
const envProjectMarket = process.env.projectMarket;
const themeEndpointURL = process.env.themeEndpoint;

function Layout({ children, themeData, setTheme }) {
  const router = useRouter();
  const [showChat, setShowChat] = useState(false);
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

  useEffect(async () => {
    const regex = /registration/;
    if (router.route?.match(regex) !== null) {
      setShowChat(false);
      return;
    }
    setShowChat(true);
  }, [router]);

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
      <Box pos={'fixed'} bottom={'20px'} right={'20px'} d={{ md: 'none' }}>
        <a
          href="https://wa.me/15551234567/?text=走塑GPS 全港走塑店鋪定位地圖"
          target="_blank"
        >
          <Image
            loader={imageLoader}
            src={`/images/whatsapp.svg`}
            width="48px"
            height="48px"
          />
        </a>
      </Box>
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
