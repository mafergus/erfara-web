import ActionTypes from '../constants/actionTypes';

export function meetingsReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.GetMeetingsFulfilled: {
      // const newState = Object.assign({}, state, {
      //   meetings: action.meetings
      // });
      return [...action.meetings];
    }
    case ActionTypes.AddMeetingFulfilled: {
      const newState = Object.assign({}, state, {
        meetings: [...state.meetings, action.meeting]
      });
      return newState;
    }
    default:
      return state;
  }
}