import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { meetingsReducer } from './meetingsReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  meetings: meetingsReducer,
});

export default rootReducer;