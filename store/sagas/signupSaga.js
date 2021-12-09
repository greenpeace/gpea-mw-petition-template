import { call, put, select } from 'redux-saga/effects';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';

import * as helper from '@common/utils/helper';

export function* submitForm(actions) {
  const state = yield select();
  const { ProjectName } = state.theme.data;
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
      console.log('submitted:', `${ProjectName}`);
      helper.sendPetitionTracking(`${ProjectName}`);
    }
  } catch (e) {
    console.log(`e`, e);
  }
}
