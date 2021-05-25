import {FETCH_USERS, SAVE_USERS} from "./types";

export const fetchUsers = () => ({
    type: FETCH_USERS
})
export const saveUsers = (payload) => ({
    type: SAVE_USERS, payload
})