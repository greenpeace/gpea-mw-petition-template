import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
import DonateForm from '@components/GP/DonateForm';
import SignupForm from '@components/GP/WebinarForm';
import DonationModule from '@components/GP/DonationModule';

const Index = ({ status }) => {
	const RenderForm = () =>
		status?.submitted ? (
			<DonateForm />
		) : (
			<SignupForm setSignupBtnRef={function () {}} />
		);
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
			<RenderForm />
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
