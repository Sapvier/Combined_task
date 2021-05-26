import {takeEvery, call, put} from 'redux-saga/effects'
import {fetchUser} from "../../api/fetch";

import {FETCH_USER_FETCHING} from "./types";
import {fetchUserFailed, fetchUserSuccess, saveUser} from "./actions";


export function* onGetDetailedUser(action) {
    try {
        const user = yield call(fetchUser, action.payload)
        yield put(saveUser(user))
        yield put(fetchUserSuccess())
    } catch (e) {
        yield put(fetchUserFailed())
    }
}

export default function* detailedUserSaga() {
    yield takeEvery(FETCH_USER_FETCHING, onGetDetailedUser)
}