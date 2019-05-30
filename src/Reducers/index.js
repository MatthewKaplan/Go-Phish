import { combineReducers } from 'redux'
import { memberReducer } from './memberReducer';
import { currentMemberReducer } from './currentMemberReducer';

export const rootReducer = combineReducers({
  members: memberReducer,
  member: currentMemberReducer
})

export default rootReducer;
