import {
    FETCH_MOVIE_FAIL,
    FETCH_MOVIE_FETCHING,
    FETCH_MOVIE_SUCCESS,
    SAVE_MOVIE,
    SET_CURRENT_DAY,
    SET_DATES,
    SET_IS_AVAILABLE,
    SET_IS_CURRENT
} from "./types";

export const saveMovie = (payload) => ({
    type: SAVE_MOVIE, payload: payload[Math.floor(Math.random() * 10)]
})
export const setDates = (payload) => ({
    type: SET_DATES, payload
})
export const setIsAvailable = (payload) => ({
    type: SET_IS_AVAILABLE, payload
})
export const setIsCurrent = (payload) => ({
    type: SET_IS_CURRENT, payload
})
export const setCurrentDay = () => ({
    type: SET_CURRENT_DAY
})
export const fetchMovieStart = () => ({
    type: FETCH_MOVIE_FETCHING
})
export const fetchMovieSuccess = () => ({
    type: FETCH_MOVIE_SUCCESS
})
export const fetchMovieFail = () => ({
    type: FETCH_MOVIE_FAIL
})