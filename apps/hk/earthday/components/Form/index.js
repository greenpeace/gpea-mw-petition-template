import React from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import { Box, Center, Text } from '@chakra-ui/react';
import * as statusActions from 'store/actions/action-types/status-actions';
const DonateForm = dynamic(() => import('./DonateForm'));
const SignupForm = dynamic(() => import('./WebinarForm'));

const Index = ({ status, setScreen }) => {
  const RenderForm = () =>
    status?.submitted ? <DonateForm /> : <SignupForm />;
  return (
    <Box
      mx="auto"
      border={{ md: '1px solid #f1f3f5' }}
      bgColor="white"
      overflow="hidden"
      borderRadius={'8px'}
      mt={{ base: '-20px', md: 0 }}
    >
      <RenderForm />
      {!status.submitted && (
        <Center onClick={() => setScreen('STEP1')} cursor={'pointer'}>
          <Text
            color="gray.700"
            textDecoration={'underline'}
            fontSize="md"
            mb="4"
          >
            修改我的承諾
          </Text>
        </Center>
      )}
    </Box>
  );
};

//Prevent refresh child component
function propsAreEqual(prevStatus, nextStatus) {
  return prevStatus.status.submitted === nextStatus.status.submitted;
}

const mapStateToProps = ({ status }) => {
  return { status };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setScreen: (data) => {
      dispatch({ type: statusActions.SET_SCROLL_TO_TARGET, data });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(Index, propsAreEqual));
