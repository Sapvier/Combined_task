import {takeEvery, call, put} from 'redux-saga/effects'
import {fetchSearchId} from "../../api/fetch";
import {FETCH_ID_FETCHING} from "./types";
import {fetchIdFailed, fetchIdSuccess} from "./actions";
import {saveSearchId} from "../tickets/actions";


export function* onGetSearchId() {
    try {
        const id = yield call(fetchSearchId)
        yield put(fetchIdSuccess())
        yield put(saveSearchId(id))
    } catch (e) {
        yield put(fetchIdFailed())
    }
}

export default function* idSaga() {
    yield takeEvery(FETCH_ID_FETCHING, onGetSearchId)
}