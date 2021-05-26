import {FETCH_USER_FAIL, FETCH_USER_FETCHING, FETCH_USER_SUCCESS, SAVE_USER} from "./types";


export const saveUser = (payload) => {
    return {type: SAVE_USER, payload}
}
export const fetchUserFetching = (payload) => ({
    type: FETCH_USER_FETCHING, payload
})
export const fetchUserFailed = () => ({
    type: FETCH_USER_FAIL
})
export const fetchUserSuccess = () => ({
    type: FETCH_USER_SUCCESS
})