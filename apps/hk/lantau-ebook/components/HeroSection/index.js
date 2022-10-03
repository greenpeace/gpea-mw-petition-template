import { connect } from 'react-redux';
import Content from './Content';
import ThankYou from './Thankyou';

const HeroSectionContent = ({ status }, props) =>
	status.submitted ? <ThankYou {...props} /> : <Content {...props} />;

const mapStateToProps = ({ status }) => {
	return { status };
};

export default connect(mapStateToProps)(HeroSectionContent);
