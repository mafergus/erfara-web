import ActionTypes from '../constants/ActionTypes';

export function eventsReducer(state = null, action) {
  console.log("eventsReducer() state: ", state, " action: ", action);
  switch (action.type) {
    case (ActionTypes.GetEvents): {
      // console.log("ActionTypes.GetEvents action: ", action);
      // let events = state || [];
      // console.log("event: ", events);
      // events = events.concat(action.events);
      // const newState = Object.assign({}, state, {
      //   events
      // });
      // console.log("state: ", state, " newState: ", newState);
      return [...action.events];
    }
    default:
      return state;
  }
}