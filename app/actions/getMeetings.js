import ActionTypes from '../constants/actionTypes';
import database from './database';

export function getMeetings() {
    return dispatch => {
    dispatch(getMeetingsRequestedAction());
    return database.ref('/meetings').once('value', snap => {
      const meetings = snap.val();
      dispatch(getMeetingsFulfilledAction(meetings))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getMeetingsRejectedAction());
    });
  }
}

function getMeetingsRequestedAction() {
  return {
    type: ActionTypes.GetMeetingsRequested
  };
}

function getMeetingsRejectedAction() {
  return {
    type: ActionTypes.GetMeetingsRejected
  };
}

function getMeetingsFulfilledAction(meetings) {
  return {
    type: ActionTypes.GetMeetingsFulfilled,
    meetings
  };
}