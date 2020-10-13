import { UserState, UserActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: UserState = {
  loading: false,
  users:null,
  errors: {
    user:undefined
  }
};



type A<T = string, U = any> = { type: T; payload: U };

const reducer: Reducer<UserState, A> = (
  state: UserState = initialState,
  action: A
) => {
  switch (action.type) {
    case UserActionTypes.USER_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, user: undefined }
      };
    case UserActionTypes.USER_SUCCESS:
      return {...state,loading:false, users:action.payload};
    case UserActionTypes.USER_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, user: action.payload }
      };

    default:
      return state;
  }
};

export { initialState as userInitialState, reducer as userReducer };
