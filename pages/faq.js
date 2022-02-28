import React, { useEffect } from 'react';
import Wrapper from '@containers/gpsWrapper';
import dynamic from 'next/dynamic';
import axios from 'axios';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import Navbar from 'components/Navbar';
import {
  Container,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

/* Determine the returned project index by env variable */
const envProjectName = process.env.projectName;
const envProjectMarket = process.env.projectMarket;
const themeEndpointURL = process.env.themeEndpoint;
const signupNumbersHKURL = process.env.signupNumbersHK;
const signupNumbersTWURL = process.env.signupNumbersTW;

function Faq({ setTheme, themeData, setSignupNumbers, setWebStatus }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          var dataLayer = (window.dataLayer = window.dataLayer || []);
          dataLayer.push({
            gCampaign: '',
            gBasket: '',
          });
        `,
          }}
        />
        <title>走塑GPS 全港走塑店鋪定位地圖 1,100間走塑店鋪輕鬆定位！</title>
        <meta
          property="og:title"
          content="走塑GPS 全港走塑店鋪定位地圖 1,100間走塑店鋪輕鬆定位！"
        />
        <meta name="description" content="走塑GPS小助手 幫你日常走塑零失手" />
        <meta
          property="og:description"
          content="走塑GPS小助手 幫你日常走塑零失手"
        />
        <meta
          property="og:image"
          content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/08/a5120475-gp02i8e_high_res.jpg"
        />
      </Head>
      <Container maxWidth="100%" py={6}>
        <Box>
          <Heading>FAQ</Heading>
        </Box>
      </Container>
    </div>
  );
}

Faq.getLayout = (page) => <Wrapper>{page}</Wrapper>;

export default Faq;
