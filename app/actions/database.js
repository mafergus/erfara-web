import firebase from 'firebase';
import store from "../store/store";

const config = {
  apiKey: 'AIzaSyDcJGLjFf1tCJxOPHYU6mu_oFDDMsd1-zk',
  authDomain: 'erfara-2aa21.firebaseapp.com',
  databaseURL: 'https://erfara-2aa21.firebaseio.com/'
};

firebase.initializeApp(config);

firebase.database().ref('/events').on('value', function(snapshot) {
  // updateStarCount(postElement, snapshot.val());
  const events = snapshot.val();
  console.log("Update events: ", snapshot.val());
  store.dispatch({ type: "GET_EVENTS_SUCCESS", events });
});

firebase.database().ref('/users').on('value', function(snapshot) {
  // updateStarCount(postElement, snapshot.val());
  const users = snapshot.val();
  console.log("Update events: ", snapshot.val());
  store.dispatch({ type: "GET_USERS_SUCCESS", users });
});

export default firebase;