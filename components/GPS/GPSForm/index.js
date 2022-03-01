import React from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import { Container, Box } from '@chakra-ui/react';
const DonateForm = dynamic(() => import('@components/GP/DonateForm'));
const SignupForm = dynamic(() => import('@components/GP/WebinarForm'));

const Index = ({ status }) => {
  const RenderForm = (status) =>
    status?.submitted ? <DonateForm /> : <SignupForm />;
  return (
    <Container maxW={'100%'}>
      <Box
        mx="auto"
        bgColor="white"
        borderRadius={8}
        boxShadow="lg"
        overflow="hidden"
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
