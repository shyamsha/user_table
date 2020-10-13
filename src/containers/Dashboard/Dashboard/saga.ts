import { Action } from "redux";
import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import { userError, userSuccess } from "./actions";
import * as Api from "../../../services/Api";
import { unknownError } from "../../../utils/api-helper";
import { UserActionTypes, UserParams } from "./types";

type SagaAction<T> = Action & { payload: T };

function* user({ payload: params }: SagaAction<UserParams>) {
  try {
    const res = yield call(Api.users, params);
    if (res.error) {
      yield put(userError(res.error));
    } else {
      yield put(userSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(userError(err));
    } else {
      yield put(userError(unknownError("An unknown error occurred")));
    }
  }
}

function* watchFetchRequest() {
  yield takeLatest(UserActionTypes.USER_REQUEST, user);
}

export function* userSaga() {
  yield all([fork(watchFetchRequest)]);
}
