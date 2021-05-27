import {SAVE_MOVIE, SET_CURRENT_DAY, SET_DATES, SET_IS_AVAILABLE, SET_IS_CURRENT} from "./types";

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