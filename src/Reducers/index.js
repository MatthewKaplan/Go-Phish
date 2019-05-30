import { combineReducers } from 'redux'
import { memberReducer } from './memberReducer';

export const rootReducer = combineReducers({
  members: memberReducer 
})

export default rootReducer;
