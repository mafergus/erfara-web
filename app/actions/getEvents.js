import ActionTypes from "../constants/ActionTypes";
import database from "./database";

export function getEvents() {
  return dispatch => {
    return database.ref('/events').once('value', snap => {
      const events = snap.val();
      dispatch({type: ActionTypes.GetEvents, events})
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
