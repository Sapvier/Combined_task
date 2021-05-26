import {addDays, getDate} from "date-fns";

export const addingDays = () => {
    let i = 0
    let dat = []
    while (i < 7) {
        dat.push({
            date: getDate(addDays(new Date(), i)),
            slots: [...Array(11).keys()].map(x => x + 10).filter(item => item % 2 === 0).map(item => ({
                timeslot: item,
                isAvailable: true
            })),
            isCurrent: getDate(addDays(new Date(), i)) === getDate(new Date())
        })
        i++
    }
    return dat
}

export const getCurrentDay = () => {
    return {
        date: getDate(new Date()),
        slots: [...Array(11).keys()].map(x => x + 10).filter(item => item % 2 === 0).map(item => ({
            timeslot: item,
            isAvailable: true
        })),
        isCurrent: true
    }
}
