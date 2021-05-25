import * as dateFns from "date-fns";
import {differenceInHours} from "date-fns";


export const minutesConvert = (dep, dur) => {
    const depDate = new Date(dep.replace('Z', "+03:00"))
    const durDate = dateFns.addMinutes(new Date(dep.replace('Z', "+03:00")), dur);
    return differenceInHours(durDate, depDate) + "ч " + dateFns.format(new Date(dur*60*1000), 'mmм')
}