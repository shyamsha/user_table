import { action } from "typesafe-actions";
import { UserActionTypes, UserParams, Users } from "./types";

export const userRequest = (params:UserParams) =>
action(UserActionTypes.USER_REQUEST,params);
export const userSuccess = (res: Users) =>
action(UserActionTypes.USER_SUCCESS, res);
export const userError = (message: Error) =>
action(UserActionTypes.USER_ERROR, message);
