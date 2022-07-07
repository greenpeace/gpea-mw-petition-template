import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect, dispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Nav from 'components/Navbar';
import PetitionFooter from 'containers/petitionFooter';
import * as themeActions from 'store/actions/action-types/theme-actions';
import * as formActions from 'store/actions/action-types/form-actions';
import { imageLoader } from '@common/utils';
import Image from 'next/image';
import { useRouter } from 'next/router';
import CryptoJS from 'crypto-js';

const envProjectName = process.env.projectName;
const envProjectMarket = process.env.projectMarket;
const themeEndpointURL = process.env.themeEndpoint;

function Layout({ children, setTheme, preSetForm }) {
  const router = useRouter();
  const [showChat, setShowChat] = useState(false);
  const [currentPage, setCurrentPage] = useState('/');
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
    const { i, p } = router.query;

    if (p && i) {
      const DATA = decodeURI(p).replace(/ /g, '');
      const KEY = CryptoJS.enc.Utf8.parse(process.env.GPS_KEY);
      const IV = CryptoJS.enc.Utf8.parse(decodeURI(i).replace(/ /g, ''));

      const Decrypt = (data) => {
        let decrypt = CryptoJS.AES.decrypt(data, KEY, {
          iv: IV,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
        });
        let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        return decryptedStr.toString();
      };

      const DecryptedData = await Decrypt(DATA);

      preSetForm({
        UserID: DecryptedData,
      });
    }

    if (router.pathname) {
      setCurrentPage(router.pathname);
    }

    const regex = /registration/;
    if (router.route?.match(regex) !== null) {
      setShowChat(false);
      return;
    }
    setShowChat(true);
  }, [router]);

  return (
    <>
      <Nav currentPage={currentPage} />

      <Box>{children}</Box>

      <PetitionFooter locale={'HKChinese'} />

      {showChat && (
        <Box
          zIndex="10"
          pos={'fixed'}
          bottom={'20px'}
          right={'20px'}
          d={{ md: 'none' }}
        >
          <a
            href="https://wa.me/+85260459671/?text=走塑GPS 全港走塑店鋪定位地圖"
            target="_blank"
          >
            <Image
              loader={imageLoader}
              src={`/images/whatsapp.svg`}
              width="60px"
              height="60px"
            />
          </a>
        </Box>
      )}
    </>
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
    preSetForm: (data) => {
      dispatch({ type: formActions.PRE_SET_DATA, data });
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
