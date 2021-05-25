import {SET_CHECKED} from "./types";


const initialState = () => [
    {id: "all-stops", text: 'Все', isActive: true},
    {id: "no-stops", text: 'Без пересадок', isActive: false},
    {id: "one-stop", text: '1 пересадка', isActive: false},
    {id: "two-stops", text: '2 пересадки', isActive: false},
    {id: "three-stops", text: '3 пересадки', isActive: false}
]


export const filterReducer = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state
        case SET_CHECKED: {
            return [...action.payload.checkboxes]
        }
    }
}