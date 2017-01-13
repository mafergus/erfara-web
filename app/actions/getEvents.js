import ActionTypes from "../constants/ActionTypes";
import firebase from "firebase";

export function getEvents() {
  return dispatch => {
    return firebase.database().ref('/events').once('value', snap => {
      const events = snap.val();
      dispatch({type: ActionTypes.GetEvents, events})
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
