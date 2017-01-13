import ActionTypes from '../constants/ActionTypes';

export function usersReducer(state = {}, action) {
  console.log("eventsReducer() state: ", state, " action: ", action);
  switch (action.type) {
    case (ActionTypes.GetUserSuccess): {
      const newState = Object.assign({}, state);
      newState[action.user.uid] = action.user;
      return newState;
    }
    default:
      return state;
  }
}