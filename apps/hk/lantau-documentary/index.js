import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import PetitionFooter from '@containers/petitionFooter';
import Header from './components/Header';
import SEO from './SEO';

import DonationPage from './components/DonationPage';
import StreamingPage from './components/StreamingPage';
import MainPage from './components/MainPage';

function Index() {
  const router = useRouter();
  const heroSection = useRef(null);
  const visionSection = useRef(null);
  const swiperSection = useRef(null);
  const supportSection = useRef(null);
  const signupSection = useRef(null);
  const [current, setCurrent] = useState('main');

  useEffect(() => {
    const { p } = router.query;
    if (p) {
      setCurrent(p);
    }
  }, [router]);

  const MENU = [
    {
      label: '紀錄片介紹',
      page: 'main',
      refName: 'heroSection',
      ref: heroSection,
    },
    {
      label: '我們的理念',
      page: 'main',
      refName: 'visionSection',
      ref: visionSection,
    },
    {
      label: '大嶼有我',
      page: 'main',
      refName: 'swiperSection',
      ref: swiperSection,
    },
    {
      label: '細看大嶼',
      page: 'main',
      refName: 'supportSection',
      ref: supportSection,
    },
    {
      label: '立即聯署',
      page: 'main',
      refName: 'signupSection',
      ref: signupSection,
    }
  ];

  return (
    <>
      <SEO />
      <Header MENU={MENU} />
      {current === 'main' && (
        <MainPage
          heroSection={heroSection}
          visionSection={visionSection}
          swiperSection={swiperSection}
          supportSection={supportSection}
          signupSection={signupSection}
        />
      )}
      {current === 'donation' && (
        <DonationPage/>
      )}
      {/* <StreamingPage/> */}
      <PetitionFooter />
    </>
  );
}

export default Index;
