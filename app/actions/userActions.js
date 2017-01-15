import React from "react";
import ActionTypes from '../constants/ActionTypes';

export function addUser(user) {
  return { type: ActionTypes.GetUserSuccess, user };
}

export function addAuthedUser(user) {
  return { type: ActionTypes.addAuthedUserSuccess, user };
}