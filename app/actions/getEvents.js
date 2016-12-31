import ActionTypes from "../constants/ActionTypes";
import database from "./database";

export function getEvents() {
  console.log("getEvents()");
  // return database.ref('/events').once('value', snap => {
  //   const events = snap.val();
  //   dispatch(getEventsFulfilled(events))
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

  return dispatch => {
    // dispatch(getMeetingsRequestedAction());
    console.log("a");
    return database.ref('/events').once('value', snap => {
      console.log("b");
      const meetings = snap.val();
      dispatch(getEventsFulfilled(meetings))
    })
    .catch((error) => {
      console.log(error);
      // dispatch(getMeetingsRejectedAction());
    });
  }
}

function getEventsFulfilled(events) {
  console.log("getEventsFulfilled");
  return {
    type: ActionTypes.GetEvents,
    events
  }
}