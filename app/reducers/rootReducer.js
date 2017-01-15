import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { meetingsReducer } from './meetingsReducer';
import { authedUserReducer } from "./authedUserReducer";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
  authedUser: authedUserReducer,
  events: eventsReducer,
  meetings: meetingsReducer,
  users: usersReducer,
});

export default rootReducer;