import {takeEvery, call, put} from 'redux-saga/effects'
import {FETCH_USERS_FETCHING} from "./types";
import {fetchUsers} from "../../api/fetch";
import {fetchUsersFailed, fetchUsersSuccess, saveUsers} from "./actions";


export function* onGetUsers() {
    try {
        const users = yield call(fetchUsers)
        yield put(saveUsers(users))
        yield put(fetchUsersSuccess())
    } catch (e) {
        yield put(fetchUsersFailed())
    }
}

export default function* usersSaga() {
    yield takeEvery(FETCH_USERS_FETCHING, onGetUsers)
}