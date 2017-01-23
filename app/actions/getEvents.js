import firebase from "firebase";

export function getEvents() {
  return dispatch => {
    return firebase.database().ref('/events').once('value', snap => {
      const events = snap.val();
      dispatch({type: "GET_EVENTS_SUCCESS", events})
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

export function getEvent(id) {
  return dispatch => {
    return firebase.database().ref(`/events/${id}`).once('value', snap => {
      const event = snap.val();
      dispatch({type: "GET_EVENT_SUCCESS", event})
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
