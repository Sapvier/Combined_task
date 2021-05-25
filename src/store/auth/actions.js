import {FETCH_ID_FAIL, FETCH_ID_FETCHING, FETCH_ID_SUCCESS, SET_IS_AUTH, SET_IS_OAUTH} from "./types";

export const setAuth = () => ({
    type: SET_IS_AUTH
})
export const setOAuth = (payload) => ({
    type: SET_IS_OAUTH, payload
})
export const fetchIdLoading = () => ({
    type: FETCH_ID_FETCHING
})
export const fetchIdFailed = () => ({
    type: FETCH_ID_FAIL
})
export const fetchIdSuccess = () => ({
    type: FETCH_ID_SUCCESS
})
