import React from "react";
import firebase from "firebase";

export function getUser(uuid) {
  return dispatch => {
    return firebase.database().ref('/users' + uuid).once('value', snap => {
      const user = snap.val();
      dispatch({type: "GET_USER_SUCCESS", user});
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

export function getUsers() {
  return dispatch => {
    return firebase.database().ref('/users').once('value', snap => {
      const users = snap.val();
      dispatch({type: "GET_USERS_SUCCESS", users});
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

export function addUser(user) {
  return dispatch => {
    return firebase.database().ref('users/' + user.uid).set({
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    });
  }
}
