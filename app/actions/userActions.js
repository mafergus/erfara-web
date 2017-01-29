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
    const userData = {
      name: user.displayName,
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
    };
    let updates = {};
    updates["users/" + user.uid] = userData;
    return firebase.database().ref().update(updates).then(snap => {
      console.log("BOOM user", user);
      dispatch({ type: "ADD_AUTHED_USER_SUCCESS", user: userData });
    });
    // , snap => {
    //   console.log("OH SHIT PROMISE WORKED for user.uid: ", user.uid, " snap: ", snap.val());
    //   firebase.database().ref('/users' + user.uid).once('value', snap => {
    //     const user = snap.val();
    //     console.log("Got authed user: ", user);
    //     dispatch({type: "ADD_AUTHED_USER_SUCCESS", user});
    //   });
    // });
  }
}
