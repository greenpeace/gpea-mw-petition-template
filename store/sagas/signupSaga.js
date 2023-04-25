import { call, put, select } from 'redux-saga/effects';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';

import * as helper from '@common/utils/helper';

export function* submitForm(actions) {
  const state = yield select();
  const { ProjectName, EventLabel } = state.theme.data;
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
    // ga4 event
    helper.pushDataLayer({
      'event': 'custom_event',
      'event_name' : 'add_contact_info',
      'event_category': 'petitions',
      'event_action': 'click_submit',
      'fields' : Object.keys(actions.data)
    })
    //const responseBody = yield call(() => response.json());

    if (response.statusText === 'OK') {
      // if(responseBody.Status === 201){
      //   yield put({
      //     type: signupActions.SIGN_UP_SUCCESS,
      //   });
      // }else{
      //   yield put({
      //     type: signupActions.SIGN_UP_FAILED,
      //   });
      // }
      
      yield put({
        type: signupActions.SIGN_UP_SUCCESS,
      });

      yield put({ type: statusActions.SET_FORM_SUBMITTED, data: true });
      // Tracking
      if (ProjectName || EventLabel) {
        console.log('submitted:', `${EventLabel ? EventLabel : ProjectName}`);
        helper.sendPetitionTracking(`${EventLabel ? EventLabel : ProjectName}`);
        // ga4 event
        helper.pushDataLayer({
          'event': 'custom_event',
          'event_name' : 'petition_signup',
          'event_category': 'petitions',
          'event_action': 'signup',
          'event_label': actions.data?.CampaignId
        })
      } else {
        console.log('Project undefined');
      }
    } else {
      yield put({
        type: signupActions.SIGN_UP_FAILED,
      });
      yield put({ type: statusActions.SET_FORM_SUBMITTED, data: true });
    }
  } catch (e) {
    console.log(`e`, e);
  }
}
