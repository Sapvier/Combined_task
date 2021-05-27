import ticketsSaga from "./tickets/saga";
import {all} from 'redux-saga/effects';
import idSaga from "./auth/saga";
import filterSaga from "./filter/saga";
import sortSaga from "./sort/saga";
import usersSaga from "./users/saga";
import detailedUserSaga from "./detailedUser/saga";
import bookingSaga from "./booking/saga";


export default function* rootSaga() {
    yield all([ticketsSaga(), idSaga(), filterSaga(), sortSaga(), usersSaga(), detailedUserSaga(), bookingSaga()]);
};


