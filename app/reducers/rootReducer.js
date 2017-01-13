import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { meetingsReducer } from './meetingsReducer';
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
  events: eventsReducer,
  meetings: meetingsReducer,
  users: usersReducer,
});

export default rootReducer;