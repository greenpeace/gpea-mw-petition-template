import React, { useContext } from 'react';
import { AppContext } from "./context/appContext";
import AppProvider from "./context/appContext";
import PetitionFooter from '@containers/petitionFooter';
import Header from './components/Header';
import StreamingPageHeader from './components/Header/StreamingPageHeader';
import SEO from './SEO';

import DonationPage from './components/DonationPage';
import StreamingPage from './components/StreamingPage';
import MainPage from './components/MainPage';

function Index() {
  return (
    <>
      <SEO />
      <AppProvider>
        <SwitchHeader/>
        <SwitchPage/>
        <PetitionFooter />
      </AppProvider>
    </>
  );
}

const SwitchHeader = () => {
  const data = useContext(AppContext)
  return data.page !== 'streaming' ? (<Header />) : (<StreamingPageHeader/>)
}

const SwitchPage = () => {
  const data = useContext(AppContext)
  switch (data.page) {
    case 'main':
      return (<MainPage/>)
    
      case 'donation':
      return (<DonationPage/>)

      case 'streaming':
      return (<StreamingPage/>)
  
    default:
      return (<MainPage/>)
  }
}

export default Index;
