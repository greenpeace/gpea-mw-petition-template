import React from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import { connect } from 'react-redux';
const DonateForm = dynamic(() => import('@components/GP/DonateForm'));

const Index = () => {
  return (
    <Box
      mx="auto"
      bgColor="white"
      borderRadius={8}
      boxShadow="lg"
      overflow="hidden"
      pos="relative"
      zIndex={10}
    >
      <DonateForm />
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

export default connect(mapStateToProps)(React.memo(Index, propsAreEqual));
