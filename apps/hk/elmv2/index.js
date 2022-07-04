import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PetitionFooter from '@containers/petitionFooter';
import { useDispatch } from 'react-redux';
import {
  Spinner,
  Center,
} from '@chakra-ui/react';
import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';

import SignupPage from './pages/signup'
import ThankyouPage from './pages/thankyou'
import DonationPage from './pages/donation'

const RenderContent = ({ page }) => {
  if (!page) {
    return (
      <Center minH={{ base: '380px', md: '500px' }}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  switch (page) {
    case 'default':
      return <SignupPage />;

    case 'thankyou':
      return <ThankyouPage />;

    case 'donation':
      return <DonationPage />;

    default:
      return <SignupPage />;
  }
};

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [page, setPage] = useState('');

  useEffect(() => {
    dispatch({ type: formActions.SET_FORM, data: formContent });

    if (router.isReady) {
      const { page } = router.query;
      setPage(page ?? 'default');
    }
  }, [router]);

  return (
    <>
      <SEO />

      <RenderContent page={page} />

      <PetitionFooter locale={'HKChinese'} />
    </>
  );
};

export default Index;
