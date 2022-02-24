import React from 'react';
import dynamic from 'next/dynamic';
import FormContainer from '@containers/formContainer';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
const DonateForm = dynamic(() => import('@components/GP/DonateForm'));
const SignupForm = dynamic(() => import('@components/GP/WebinarForm'));

const Index = ({ status }) => {
  const RenderForm = () =>
    status?.submitted ? <DonateForm /> : <SignupForm />;
  return (
    <FormContainer>
      <Box>
        <RenderForm />
      </Box>
    </FormContainer>
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
