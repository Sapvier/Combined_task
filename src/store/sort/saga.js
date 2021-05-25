import {takeEvery, put, select} from 'redux-saga/effects'
import {SET_SORTED} from "./types";
import {sortArray} from "../../components/Tabs";
import {saveSortedTickets} from "../tickets/actions";
import * as selectors from './selectors';
import {filterArray} from "../../components/Filter";


export function* onGetSorted(action) {
    const currentFilter = yield select(selectors.getCurrentFilter)

    try {
        const sorted = sortArray(action.payload.id, action.payload.tickets)
        if (currentFilter === 'all-stops') {
            yield put(saveSortedTickets(sorted))
        }
        else {
            const filtered = filterArray(currentFilter, sorted)
            yield put(saveSortedTickets(filtered))
        }

    } catch (e) {
        console.log(e)
    }
}

export default function* sortSaga() {
    yield takeEvery(SET_SORTED, onGetSorted)
}