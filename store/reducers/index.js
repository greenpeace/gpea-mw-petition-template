// Imports: Dependencies
import { combineReducers } from 'redux';

import signup from 'store/reducers/signupReducer';
import status from 'store/reducers/statusReducer';
import theme from 'store/reducers/themeReducer';
import form from 'store/reducers/formReducer';
import hiddenForm from 'store/reducers/hiddenFormReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  initialState: {},
  signup,
  status,
  hiddenForm,
  theme,
  form,
});

// Exports
export default rootReducer;
