import {takeEvery, put, select} from 'redux-saga/effects'
import {SET_CHECKED} from "./types";
import {filterArray} from "../../components/Filter";
import {saveSortedTickets} from "../tickets/actions";
import {sortArray} from "../../components/Tabs";
import * as selectors from './selectors';


export function* onGetChecked(action) {
    const currentSort = yield select(selectors.getCurrentSort)
    try {
        if (action.payload.id === 'all-stops') {
            const sorted =  sortArray(currentSort, action.payload.tickets)
            yield put(saveSortedTickets(sorted))
        }
        else {
            const filtered = filterArray(action.payload.id, action.payload.tickets)
            const sorted =  sortArray(currentSort, filtered)
            yield put(saveSortedTickets(sorted))
        }
    } catch (e) {
        console.log(e)
    }
}

export default function* filterSaga() {
    yield takeEvery(SET_CHECKED, onGetChecked)
}