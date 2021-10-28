import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import _ from 'lodash';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';

export function* submitForm(actions) {
  try {
    const response = yield call(() =>
      fetch(`${actions.endPoint}`, {
        method: 'POST',
        body: Object.keys(actions.data).reduce((postData, key) => {
          postData.append(key, actions.data[key]);

          return postData;
        }, new FormData()),
      }),
    );

    if (response.statusText === 'OK') {
      yield put({
        type: signupActions.SIGN_UP_SUCCESS,
      });
      yield put({ type: statusActions.SET_FORM_SUBMITTED, data: true });
      // Tracking
      // console.log("submitted:", `${process.env.REACT_APP_PROJECT}`);
      // helper.sendPetitionTracking(`${process.env.REACT_APP_PROJECT}`);
    } else {
    }
  } catch (e) {
    console.log(`e`, e);
  }
}
