import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import Thankyou from './Thankyou';

const MainSection = ({ status }) => {
  return status.submitted ? <Thankyou /> : <Content />;
};

const mapStateToProps = ({ status }) => {
  return { status };
};

export default connect(mapStateToProps)(MainSection);
