import {takeEvery, call, put} from 'redux-saga/effects'
import {FETCH_TICKETS_FETCHING} from "./types";
import {fetchTickets} from "../../api/fetch";
import {fetchTicketsFailed, fetchTicketsSuccess, saveSlicedTickets, saveTickets} from "./actions";
import {sortArray} from "../../components/Tabs";


export function* onGetTickets(action) {
    try {
        const tickets = yield call(fetchTickets, action.payload)
        yield put(fetchTicketsSuccess())
        const sorted = sortArray('price', tickets.tickets)
        yield put(saveTickets({...tickets, tickets: sorted.map(({optimalValue, ...rest})=>({...rest, optimalValue: rest.price + rest.segments[0].duration + rest.segments[1].duration}))}))
        yield put(saveSlicedTickets({...tickets, tickets: sorted.map(({optimalValue, ...rest})=>({...rest, optimalValue: rest.price + rest.segments[0].duration + rest.segments[1].duration}))}))
    } catch (e) {
        yield put(fetchTicketsFailed())
    }
}


export default function* ticketsSaga() {
    yield takeEvery(FETCH_TICKETS_FETCHING, onGetTickets)
}