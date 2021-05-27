import {takeEvery, put, call} from 'redux-saga/effects'
import {FETCH_MOVIE_FETCHING, SET_IS_CURRENT} from "./types";
import {fetchMovie} from "../../api/fetch";
import {fetchMovieFail, fetchMovieSuccess, saveMovie, setCurrentDay, setDates} from "./actions";
import {addingDays} from "../../containers/TimeSlots";


export function* onGetMovie() {
    const localStore = JSON.parse(localStorage.getItem('isAuth'))
    try {
        const movie = yield call(fetchMovie)
        yield put(saveMovie(movie))
        yield put(fetchMovieSuccess())

        if (localStore === null) {
            yield put(setDates(addingDays()))
        }
    } catch (e) {
        yield put(fetchMovieFail())
    }
}

export function* onSetCurrentDay() {
    try {
        yield put(setCurrentDay())
    } catch (e) {
        console.log(e)
    }
}

export default function* bookingSaga() {
    yield takeEvery(FETCH_MOVIE_FETCHING, onGetMovie)
    yield takeEvery(SET_IS_CURRENT, onSetCurrentDay)
}