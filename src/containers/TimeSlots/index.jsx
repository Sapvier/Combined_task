import {addDays, getDate} from "date-fns";

export const addingDays = () => {
    let i = 0
    let dat = []
    while (i <= 15) {
        dat.push({
            date: addDays(new Date(), i - 8).toString(),
            number: getDate(addDays(new Date(), i)),
            slots: [...Array(11).keys()].map(x => x + 10).filter(item => item % 2 === 0).map((item, id) => ({
                timeslot: item,
                id: id,
                isAvailable: true
            })),
            isEditable: getDate(addDays(new Date(), i - 8)) >= getDate(new Date()),
            isCurrent: getDate(addDays(new Date(), i - 8)) === getDate(new Date())
        })
        i++
    }
    return dat
}

