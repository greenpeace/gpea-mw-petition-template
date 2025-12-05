import { call, put, select } from 'redux-saga/effects';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';

import * as helper from '@common/utils/helper';
import objFilter from '@common/utils/objFilter';

export function* submitForm(actions) {
  const state = yield select();
  const { ProjectName, EventLabel, Market } = state.theme.data;
  const { campaign } = state.theme.strapi;
  if(!actions.data?.pageTitle) actions.data.pageTitle = document.title;
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
    if(Market !== 'kr'){
      // ga4 event
      helper.pushDataLayer({
        'event': 'custom_event',
        'event_name' : 'add_contact_info',
        'event_category': 'petitions',
        'event_action': 'click_submit',
        'fields' : objFilter(actions.data, ['Email', 'FirstName', 'LastName','MobilePhone'])
      })
    }
    const responseBody = yield call(() => response.json());
    // console.log('response', responseBody);
    if (responseBody.success) {
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
        // helper.sendPetitionTracking(`${EventLabel ? EventLabel : ProjectName}`);
        // ga4 event
        if(Market !== 'kr'){
          helper.pushDataLayer({
            'event': 'custom_event',
            'event_name' : 'petition_signup',
            'event_category': 'petitions',
            'event_action': 'signup',
            'event_label': actions.data?.CampaignId
          })
        }else{
          console.log(actions.data)
          helper.pushDataLayer({
            'event': 'custom_event',
            'event_name' : 'petition_complete',
            'event_category': 'petitions',
            'event_action': 'signup',
            'event_label': `${campaign ? campaign : ProjectName}`,
            'custom_metric': 'petition_complete'
          })
        }

        // if(Market !== 'kr'){
        //   // web event history
        //   helper.sendWebEventHistory({
        //     ...actions.data,
        //     'ua': window.navigator.userAgent,
        //     'url': window.location.href,
        //     'event': {
        //       'event': 'custom_event',
        //       'event_name' : 'petition_signup',
        //       'event_category': 'petitions',
        //       'event_action': 'signup',
        //       'event_label': actions.data?.CampaignId
        //     }
        //   });
        // }
        
        
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
