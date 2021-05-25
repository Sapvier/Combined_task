import React from 'react';
import {v4} from 'uuid';
//styles
import {useStyles} from "./styled";
//utils
import {minutesConvert} from "../../utils/minutesConvert";
import * as dateFns from "date-fns";


const Ticket = ({ticket}) => {
        const classes = useStyles();
        const price = (ticket.price + '').replace(/\B(?=(\d{3})+(?!\d))/g, " ")

        const getArrivalTime = (departure, duration) => {
            const helperDate = dateFns.addMinutes(new Date(departure.replace('Z', "+03:00")), duration);
            return dateFns.format(helperDate, 'HH:mm');
        }

        return (
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <h2>{price} Р</h2>
                    <img src={ticket.logo} height='36' width="110" alt="carrier-logo"/>
                </div>
                {ticket.segments.map(segment => (
                    <div className={classes.segment} key={v4()}>
                        <div className={classes.segmentItem}>
                            <h5>{segment.origin} - {segment.destination}</h5>
                            <p>{segment.date.substr(11, 5)} - {getArrivalTime(segment.date, segment.duration)}</p>
                        </div>
                        <div className={classes.segmentItem}>
                            <h5>В ПУТИ</h5>
                            {/*<p>{minutesConvert(segment.duration)}</p>*/}
                            <p>{minutesConvert(segment.date, segment.duration)}</p>
                        </div>
                        <div className={classes.segmentItem}>
                            {segment.stops.length ?
                                <h5>{segment.stops.length} {segment.stops.length > 1 ? "ПЕРЕСАДКИ" : `ПЕРЕСАДКА`}</h5>
                                : <h5>БЕЗ ПЕРЕСАДОК</h5>}
                            <p>{segment.stops.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
;


export default Ticket;
