import ActionTypes from '../constants/actionTypes';
import firebase from './firebase';

export function getMeetings() {
    return dispatch => {
    dispatch(getMeetingsRequestedAction());
    return firebase.database.ref('/meetings').once('value', snap => {
      const meetings = snap.val();
      console.log("MEETINGS: ", meetings);
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