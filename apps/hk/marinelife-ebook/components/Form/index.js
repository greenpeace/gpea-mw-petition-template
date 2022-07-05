// import React, { useEffect, useRef } from 'react';
import React from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import { Container, Box } from '@chakra-ui/react';
// import FormContainer from '@containers/formContainer';
import { useInView } from 'react-intersection-observer';

// const [ref, inView] = useInView({
//   threshold: 0,
// });
// const mobileForm = useRef(null);

const DonationModule = dynamic(() => import('@components/GP/DonationModule'));
// const DonateForm = dynamic(() => import('@components/GP/DonateForm'));
import SignupForm from '@components/GP/WebinarForm';

const Index = ({ status }) => {
  const RenderForm = () =>
    status?.submitted ? (
      <DonationModule
        market={'HK'}
        language={'zh_HK'}
        campaign={'oceans'}
        // campaignId={''}
        env={'production'}
      />
      // <DonateForm />
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
    // <FormContainer>
    //   <Box ref={ref}>
    //     <RenderForm />
    //   </Box>
    // </FormContainer>
  );
};

//Prevent refresh child component
function propsAreEqual(prevStatus, nextStatus) {
  // const [ref, inView] = useInView({
  //   threshold: 0,
  // });
  // const mobileForm = useRef(null);
  return prevStatus.status.submitted === nextStatus.status.submitted;
}

const mapStateToProps = ({ status }) => {
  return { status };
};

export default connect(mapStateToProps)(React.memo(Index, propsAreEqual));
