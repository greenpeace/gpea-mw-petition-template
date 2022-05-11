import React, { useEffect, useState, useRef } from 'react';
import PetitionFooter from '@containers/petitionFooter';
import Header from './components/Header';
import SEO from './SEO';

import DonationPage from './components/DonationPage';
import StreamingPage from './components/StreamingPage';
import MainPage from './components/MainPage';

function Index() {
  const heroSection = useRef(null);
  const visionSection = useRef(null);
  const swiperSection = useRef(null);
  const supportSection = useRef(null);
  const informationSection = useRef(null);

  const MENU = [
    { label: '紀錄片介紹', section: 'main', refName: 'heroSection', ref: heroSection },
    { label: '我們的理念', section: 'main', refName: 'visionSection', ref: visionSection },
    { label: '大嶼有我', section: 'main', refName: 'swiperSection', ref: swiperSection },
    { label: '細看大嶼', section: 'main', refName: 'supportSection', ref: supportSection },
    { label: '立即聯署', section: 'main', refName: 'informationSection', ref: informationSection }
  ];

  const [showDonation, setShowDonation] = useState(false);

  const handleShowDonate = (bol) => {
    setShowDonation(bol);
  };

  useEffect(() => {
    if (showDonation && window) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [showDonation]);

  return (
    <>
      <SEO />
      <Header
        MENU={MENU}
        handleShowDonate={handleShowDonate}
      />
      <MainPage
        heroSection={heroSection}
        visionSection={visionSection}
        swiperSection={swiperSection}
        supportSection={supportSection}
        informationSection={informationSection}
      />

      <PetitionFooter />
    </>
  );
}

export default Index;
