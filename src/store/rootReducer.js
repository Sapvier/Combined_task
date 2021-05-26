import {combineReducers} from "redux"
import {authReducer} from "./auth/reducer";
import {ticketsReducer} from "./tickets/reducer";
import {filterReducer} from "./filter/reducer";
import {sortReducer} from "./sort/reducer";
import {usersReducer} from "./users/reducer";
import {detailedUserReducer} from "./detailedUser/reducer";



export const rootReducer = combineReducers({
    authReducer, ticketsReducer, filterReducer, sortReducer, usersReducer, detailedUserReducer
})