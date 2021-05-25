import {SET_SORTED} from "./types";


const initialState = () => [
    {text: `Самый дешевый`, isActive: true, sort: "price"},
    {text: `Самый быстрый`, isActive: false, sort: "speed"},
    {text: `Оптимальный`, isActive: false, sort: "optimal"},
]


export const sortReducer = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state
        case SET_SORTED: {
            return [...action.payload.tabs]
        }
    }
}