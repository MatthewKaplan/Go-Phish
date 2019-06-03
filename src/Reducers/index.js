import { combineReducers } from "redux";
import { memberReducer } from "./memberReducer";
import { currentMemberReducer } from "./currentMemberReducer";
import { yearsReducer } from "./yearsReducer";
import { toursReducer } from "./toursReducer";
import songsReducer from "./songsReducer";
import { venuesReducer } from "./venuesReducer";
import { showsReducer } from "./showsReducer";
import { setListReducer } from "./setListReducer";
import { loadingReducer } from "./loadingReducer";
import { randomShowReducer } from "./randomShowReducer";
import { upcomingShowsReducer } from "./upcomingShowsReducer";
import { userShowListReducer } from "./userShowListReducer";

export const rootReducer = combineReducers({
  members: memberReducer,
  member: currentMemberReducer,
  years: yearsReducer,
  tours: toursReducer,
  songs: songsReducer,
  venues: venuesReducer,
  shows: showsReducer,
  setList: setListReducer,
  loadingData: loadingReducer,
  show: randomShowReducer,
  upcoming: upcomingShowsReducer,
  userShows: userShowListReducer
});


export default rootReducer;
