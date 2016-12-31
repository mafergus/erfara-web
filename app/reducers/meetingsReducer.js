import ActionTypes from '../constants/actionTypes';

export function meetingsReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.GetMeetingsFulfilled: {
      const newState = Object.assign({}, state, {
        meetings: action.meetings
      });
      console.log("meetingsReducer: ", newState);
      return newState;
    }
    case ActionTypes.AddMeetingFulfilled: {
      console.log("meetingsReducer AddMeetingFulfilled meeting: ", action.meeting);
      const newState = Object.assign({}, state, {
        meetings: [...state.meetings, action.meeting]
      });
      return newState;
    }
    default:
      return state;
  }
}