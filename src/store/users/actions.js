import {FETCH_USERS, FETCH_USERS_FAIL, FETCH_USERS_FETCHING, FETCH_USERS_SUCCESS, SAVE_USERS} from "./types";

export const fetchUsers = () => ({
    type: FETCH_USERS
})
export const saveUsers = (payload) => ({
    type: SAVE_USERS, payload
})
export const fetchUsersFetching = () => ({
    type: FETCH_USERS_FETCHING
})
export const fetchUsersFailed = () => ({
    type: FETCH_USERS_FAIL
})
export const fetchUsersSuccess = () => ({
    type: FETCH_USERS_SUCCESS
})