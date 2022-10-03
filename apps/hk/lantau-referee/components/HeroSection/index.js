import { connect } from 'react-redux';
import Content from './Content';
import ThankYou from './Thankyou';

const HeroSectionContent = ({ status, showForm }) => {
	return status.submitted ? (
		<ThankYou status={status} />
	) : (
		<Content showForm={showForm} />
	);
};

const mapStateToProps = ({ status }) => {
	return { status };
};

export default connect(mapStateToProps)(HeroSectionContent);
