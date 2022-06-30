import React from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import { Container, Box } from '@chakra-ui/react';

const DonationModule = dynamic(() => import('@components/GP/DonationModule'));
const DonateForm = dynamic(() => import('@components/GP/DonateForm'));
import SignupForm from '../WebinarForm';

const Index = ({ status }) => {
  const RenderForm = () =>
    status?.submitted ? (
      <DonationModule
        market={'HK'}
        language={'zh_HK'}
        campaign={'elm'}
        // campaignId={''}
        env={'production'}
      />
    ) : (
      <SignupForm />
    );
  return (
    <Container maxW={'100%'}>
      <Box
        mx="auto"
        bgColor="white"
        borderRadius={8}
        boxShadow="lg"
        overflow="hidden"
        pos="relative"
        zIndex={10}
      >
        <RenderForm />
      </Box>
    </Container>
  );
};

//Prevent refresh child component
function propsAreEqual(prevStatus, nextStatus) {
  return prevStatus.status.submitted === nextStatus.status.submitted;
}

const mapStateToProps = ({ status }) => {
  return { status };
};

export default connect(mapStateToProps)(React.memo(Index, propsAreEqual));
