import { combineReducers } from "redux";
import { eventsReducer } from './eventsReducer';
import { messagesReducer } from "./messagesReducer";
import { authedUserReducer } from "./authedUserReducer";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
  authedUser: authedUserReducer,
  events: eventsReducer,
  messages: messagesReducer,
  users: usersReducer,
});

export default rootReducer;