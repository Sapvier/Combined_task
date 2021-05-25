import ticketsSaga from "./tickets/saga";
import {all} from 'redux-saga/effects';
import idSaga from "./auth/saga";
import filterSaga from "./filter/saga";
import sortSaga from "./sort/saga";

export default function* rootSaga() {
    yield all([ticketsSaga(), idSaga(), filterSaga(), sortSaga()]);
};


