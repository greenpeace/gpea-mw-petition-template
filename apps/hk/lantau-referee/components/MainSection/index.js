import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import Thankyou from './Thankyou';

const MainSection = ({ status, speaker1Ref }) => {
	return status.submitted ? (
		<Thankyou />
	) : (
		<Content speaker1Ref={speaker1Ref} />
	);
};

const mapStateToProps = ({ status }) => {
	return { status };
};

export default connect(mapStateToProps)(MainSection);
