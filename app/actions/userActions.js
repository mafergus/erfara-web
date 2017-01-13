import React from "react";
import ActionTypes from '../constants/ActionTypes';

export function addUser(user) {
  return { type: ActionTypes.GetUserSuccess, user };
} 