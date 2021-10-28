import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as signup from 'store/sagas/signupSaga';

function* rootSaga() {
  yield all([takeLatest(signupActions.SIGN_UP, signup.submitForm)]);
}

export default rootSaga;
