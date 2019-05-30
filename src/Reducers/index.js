import { combineReducers } from 'redux'
import { memberReducer } from './memberReducer';
import { currentMemberReducer } from './currentMemberReducer';
import { yearsReducer } from './yearsReducer';

export const rootReducer = combineReducers({
  members: memberReducer,
  member: currentMemberReducer,
  years: yearsReducer
})

export default rootReducer;
