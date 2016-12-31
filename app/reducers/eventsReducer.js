import ActionTypes from '../constants/ActionTypes';

export function eventsReducer(state = {}, action) {
  console.log("eventsReducer() state: ", state, " action: ", action);
  switch (action.type) {
    case (ActionTypes.GetEvents): {
      console.log("ActionTypes.GetEvents");
    }
    default:
      return state;
  }
}