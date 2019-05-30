import { combineReducers } from "redux";
import { memberReducer } from "./memberReducer";
import { currentMemberReducer } from "./currentMemberReducer";
import { yearsReducer } from "./yearsReducer";
import { toursReducer } from "./toursReducer";

export const rootReducer = combineReducers({
  members: memberReducer,
  member: currentMemberReducer,
  years: yearsReducer,
  tours: toursReducer
});

export default rootReducer;
