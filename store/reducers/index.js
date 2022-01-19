// Imports: Dependencies
import { combineReducers } from 'redux';

import signup from 'store/reducers/signupReducer';
import status from 'store/reducers/statusReducer';
import theme from 'store/reducers/themeReducer';
import form from 'store/reducers/formReducer';
import hiddenForm from 'store/reducers/hiddenFormReducer';
import survey from 'store/reducers/surveyReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  initialState: {},
  signup,
  status,
  hiddenForm,
  theme,
  form,
  survey,
});

// Exports
export default rootReducer;
